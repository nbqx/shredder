$(function(){
  $("div#main").hide();
  $.ajax('/imgs').done(function(res){
    var fns = _.shuffle(res.imgs).map(function(img){
      return $("div#main").append('<div><img src="'+img+'"></div>');
    });
    $.when.apply(null,fns).done(function(){
      $("div#main").show();
    });
  }).fail(function(res){
    console.log(res);
  });
});
