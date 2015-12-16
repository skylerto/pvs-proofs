var exec = require("child_process").execSync;
var raw, array;

function prove(file){
  console.log("Checking proofs...");
  return exec("proveit --importchain --clean " + file).toString();
  console.log("Finished proving, generating report...");
}

function clean(stdout){
    raw = stdout.slice(stdout.indexOf("Proof summary")).trim();
    raw =
      raw.slice(raw.indexOf("Grand Totals"));
      array = raw.slice(raw.indexOf(":") + 2);
      array = array.substr(0, array.indexOf("(")).split(",").map(line => line.split(" ")).reduce((obj, line) => {
        obj = obj || [];
        line.forEach(function(e){
          if(e == ""){
          } else {
            obj.push(e);
          }
        });
        return obj;
      }, []);

      // Build array of array
      var other = [];
      var a = [];
      for(var i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
          a.push(array[i]);
        } else {
          a.push(array[i])
          other.push(a);
          a = [];
        }
      }

      // Build json object
      other = other.reduce((object, line) => {
        object.push({
          type: line[1],
          value: line[0]
        });
        return object;
      }, []);
      return other;
}

function get(drew){
  var proofs;
  var success;
  drew.forEach(e => {
    switch(e.type){
      case "proofs":
        proofs = e.value;
        break;
      case "succeeded":
        success = e.value;
        break;
      default:
        break;
      }
    });
    return (proofs / success) * 100;
}
module.exports = {
  get: get,
  clean: clean,
  prove: prove
};
