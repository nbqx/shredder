var fs = require('fs'),
    async = require('async'),
    Screeen = require('screeen');

function cap(){
  // args: n,x,y,w,h
  var args = Array.prototype.slice.call(arguments),
      n = args.shift(),
      num = ("00"+n).slice(-3),
      rect = args,
      path = __dirname+'/public/img/_shredder_'+num+'.png';

  return function(next){
    Screeen.capture({type:'png',rect:rect,data:'binary'},function(err,data){
      if(err) return next(err);
      fs.writeFileSync(path,data,{encoding:'binary'});
      next(null,path);
    });
  };
};

function done(next){
  return function(err,res){
    next(res);
  };
};

module.exports = function(opt,next){
  var opt = opt,
      callbacks = [];

  var sh = opt.h/opt.div;
  for(var i=0; i<opt.div; i++){
    var args = [
      i,
      opt.x,
      opt.y+(i*sh),
      opt.w,
      sh
    ];
    callbacks.push(cap.apply(null,args));
  }
  
  async.parallel(callbacks, done(next));
};
