if(window.jQuery===undefined)
  throw new Error("mySkill插件依赖于jQuery");
//canvas 绘图动画--我的技能
jQuery.fn.mySkill=function(num,infinite){

  if(infinite===undefined){
    infinite=true;
  }
  if(infinite===true){
   drawing();
  }
  //console.log(this.data('isDrawing'));
  if(this.data('isDrawing')==undefined){
    if(infinite===false){
      drawing.call(this);
      this.data('isDrawing', true);
      //console.log(this.data('isDrawing'));
    }
  }
 function drawing(){
   var cid=this[0];
   var ctx=cid.getContext('2d');
   ctx.beginPath();
   ctx.arc(70,70,60,0,2*Math.PI);
   ctx.strokeStyle = '#afa';
   ctx.lineWidth = 7;
   ctx.stroke();
   var start = -Math.PI/2;
   var deg = 0; //初始值
   var timer = setInterval(function(){
     //ctx.clearRect(0,0, 140, 140);
     ctx.beginPath();  //开始绘制
     deg += 1;
     ctx.arc(70,70,60,start, start+deg*Math.PI/180);
     ctx.strokeStyle = '#FF5252';
     ctx.stroke();
     if((deg*Math.PI/180).toFixed(1)==(Math.PI*2*num/100).toFixed(1)){
       clearInterval(timer);
     }
   },5);
   ctx.textBaseline = 'top';
   ctx.font = '3em SimHei';
   ctx.fillStyle = '#f00';
   var txt=0;
   var w = ctx.measureText(txt+"%").width;
   ctx.fillText(txt+"%", 40, 50);
   var timer1=setInterval(function(){
     ctx.clearRect(40,50, w+2, 45);
     txt+=1;
     w = ctx.measureText(txt+"%").width;
     ctx.fillText(txt+"%", 40, 50);
     if(txt==num){
       clearInterval(timer1)
     }
   },20);
 }
};

//animate动画扩展函数
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
//锚点过度动画
jQuery.fn.ScrollTop=function(selector){
  $(`${selector}`).on('click','a',function(e){
    e.preventDefault();
    //$.fn.toggleActive($(this));
    var $id=$(this).attr('href');
    var top=$(`${$id}`).offset().top;
    $('body').animate({
      scrollTop:top
    },500);
  });
};
//导航active切换
jQuery.fn.toggleActive=function(elem){
  var $fatherElems=elem.parent().siblings();
  elem.parent().parent().parent().removeClass('in');
  $fatherElems.removeClass('active');
  elem.parent().addClass('active');
};