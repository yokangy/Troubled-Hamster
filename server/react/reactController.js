var Method = require('../methods/methodModel.js');

module.exports = {

  getMethod: function(req, res, next) {
    var libraryName = req.params.library;
    var methodName = req.params.method;
    console.log(libraryName + "/" + methodName);
    Method.findOne({name: methodName, library: libraryName})
    .exec().then(function(method) {
      console.log(method);
      res.send(method);
    }, function(err) {
      console.log("ERROR:");
      console.dir(err);
    });
  }, 

  getScrollMethod: function(req, res, next) {
    var libraryName = req.params.library;
    var methodName = req.params.method;
    console.log(libraryName + "/" + methodName);
    Method.findOne({scrollKey: methodName, library: libraryName})
    .exec().then(function(method) {
      console.log(method);
      res.send(method);
    }, function(err) {
      console.log("ERROR:");
      console.dir(err);
    });
  }

};