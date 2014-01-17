var fs = require('fs');

exports.getFiles = function getFiles(path){
  var files = fs.readdirSync(path);
  return files.filter(function(i){ return /_shredder_.*\.png$/.test(i) })
};

