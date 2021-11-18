var exec = require("cordova/exec");
function DiskCheck() {
  console.log("DiskCheckPlugin is created");
}

DiskCheck.prototype.info = function (options, success, error) {
  var execPromise = exec(
    function (result) {
      if (success) {
        success(result);
      }
    },
    function (result) {
      if (error) {
        error(result);
      }
    },
    "DiskCheckPlugin",
    "info",
    [options]
  );
};
var diskCheck = new DiskCheck();
module.exports = diskCheck;
