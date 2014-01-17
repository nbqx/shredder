var mkdirp = require('mkdirp'),
    fs = require('fs'),
    open = require('open'),
    util = require('./util'),
    grab = require('./grab'),
    web = require('./web');

function init(){
  var dir = __dirname+'/public/img';
  // if(!fs.existsSync(dir)) mkdirp(dir);
  
  // var imgs = util.getFiles(dir);
  // if(imgs.length!==0){
  //   imgs.map(function(i){ return dir+'/'+i}).forEach(function(i){ fs.unlinkSync(i) });
  // }

  mkdirp(dir,function(err){
    if(err) return console.log(err);
    var imgs = util.getFiles(dir);
    if(imgs.length!==0){
      imgs.map(function(i){ return dir+'/'+i}).forEach(function(i){ fs.unlinkSync(i) });
    }
  });
};

function run(opt,browser){
  var b = browser || false;
  grab(opt,function(paths){
    web.run(function(){
      if(b) open('http://localhost:3000/');
    });
  });
};

init();
run({x:0,y:0,w:1200,h:600,div:60},true);
// run({x:0,y:0,w:1200,h:600,div:10},true);


