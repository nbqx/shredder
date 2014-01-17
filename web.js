var fs = require('fs'),
    util = require('./util'),
    express = require('express'),
    app = express();

app.configure(function(){
  app.use(express.static(__dirname+'/public'))
});

app.get('/imgs',function(req,res){
  var imgs = util.getFiles(__dirname+'/public/img').map(function(i){ return '/img/'+i});
  res.json({imgs:imgs});
});

exports.run = function(next){
  app.listen(3000,function(){
    console.log('RUN!');
    next();
  });
};
