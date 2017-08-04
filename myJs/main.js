
//$('#c4').animateCss('flipInX');
//����ê�㶯�����
//var innerHeight=window.innerHeight;
//$('section:not(:last)').css('height',innerHeight);
console.log('邮箱：mahaichao1030@qq.com');
//ajax从数据库获取数据
var tpl   =  $("#tpl1").html();
var skill=null;
$.ajax({
  url:'php/selectNavList.php',
  type:'get',
  success:function(data){
    data.navList=data.navList[0];
    var l=data.content;
    var s={};
    for(var i=0;i< l.length;i++ ){
      l[i].details=JSON.parse(l[i].details);
      s[l[i].name]=l[i];
    }
    data.content=s;
    skill=data.content.mySkill.details;
    var template = Handlebars.compile(tpl)(data);

    //console.log(data);
    $('body').html(template);
    //替换转义字符
    var strIntroduce=$('#myIntroduce p[class="pg-bottom-default"]').html().replace(/&lt;/g,"<").replace(/&gt;/g,">");
    $('#myIntroduce p[class="pg-bottom-default"]').html(strIntroduce);
    var strSelf=$('#mySelf p').html().replace(/&lt;/g,"<").replace(/&gt;/g,">");
    $('#mySelf p').html(strSelf);
    //fadeInDownBig
    $('#myIntroduce div[class="animated"]').addClass('fadeInDownBig');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(0)').addClass('slideInLeft');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(1)').addClass('slideInDown');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(2)').addClass('slideInUp');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(3)').addClass('slideInRight');
    //滑动动画
    $.fn.ScrollTop('#topList');
    //锚点滚动动画
    $('#movedTop').on('click',function(e){
      e.preventDefault();
      $('body').animate({
        scrollTop:0
      },500);
    });
  },
  error:function(err){
    console.log(err);
  }
});






$(window).scroll(function(){
  //页面总高度
  var totalTop=$('#offsetTop').offset().top;
  //滚动条当前位置距离页面顶部距离
  var sTop=$('body').scrollTop();
  //锚点距离顶部距离
  var myIntroduce=$('#myIntroduce').offset().top;
  var myWorks=$('#myWorks').offset().top;
  var mySkill=$('#mySkill').offset().top;
  var myWork=$('#myWork').offset().top;
  var mySelf=$('#mySelf').offset().top;
  //第一块添加动画
  if(sTop<myWorks){
    //navbar切换active
    $.fn.toggleActive($('a[href="#myIntroduce"]'));
  }
  if(sTop<=0.581*myWorks){
    $('#myIntroduce div[class="animated"]').addClass('fadeInDownBig');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(0)').addClass('slideInLeft');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(1)').addClass('slideInDown');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(2)').addClass('slideInUp');
    $('#myIntroduce div[class*="div-box text-center animated"]:eq(3)').addClass('slideInRight');
  }
  //第二块
  if(sTop>=myWorks*0.929){
    $.fn.toggleActive($('a[href="#myWorks"]'));
  }
  if(sTop>=myWorks*0.505&&sTop<=mySkill*0.45){
    $('#myWorks div[class="animated"]').addClass('fadeInUp');
  }
  if(sTop>=mySkill*0.41&&sTop<=mySkill*0.726){
    $('#myWorks div[class*="img-divRow animated"]:even').addClass('slideInLeft');
    $('#myWorks div[class*="img-divRow animated"]:odd').addClass('slideInRight');
  }
  //第三块
  if(sTop>=0.674*myWork){
    $.fn.toggleActive($('a[href="#mySkill"]'));
  }
  //1090,1500
  if(sTop>=0.513*myWork&&sTop<=0.707*myWork){
    //����
    $('#mySkill div[class="animated"]').addClass('slideInRight');
  }
  //1320,1740
  if(sTop>=0.622*myWork&&sTop<=myWork*0.82){
    //canvas绘图
    $('#c1').mySkill(skill[0].score,false);
    $('#c2').mySkill(skill[1].score,false);
    $('#c3').mySkill(skill[2].score,false);
    $('#c4').mySkill(skill[3].score,false);
    //$.fn.mySkill('c2',60,false);
    //$.fn.mySkill('c3',70,false);
    //$.fn.mySkill('c4',90,false);
    $('#mySkill canvas:even').next('div[class*="animated"]').addClass('slideInUp');
    $('#mySkill canvas:odd').addClass('flipInY');
  }
  //第四块
  //2050
  if(sTop>=mySelf*0.719){
    $.fn.toggleActive($('a[href="#myWork"]'));
  }
  //1750,2170
  if(sTop>=mySelf*0.613&&sTop<=mySelf*0.761){
     //fadeInUpBig
    $('#myWork div[class="animated"]').addClass('flipInX');
  }
  //1950,2390
  if(sTop>=mySelf*0.683&&sTop<=mySelf*0.838){
    $('#myWork div[class*="div-box"]:first').addClass('fadeInLeftBig');
    $('#myWork div[class*="div-box"]:last').addClass('fadeInRightBig ');
  }
  //第五块
  //2400
  if(sTop>=mySelf*0.841){
    $.fn.toggleActive($('a[href="#mySelf"]'));
    $('#mySelf div[class="animated"]').addClass('fadeInRight');
  }
  /***********************************************/
  //删除calss
  //第一块myIntroduce
  if(sTop>=mySelf*0.14){
    //removeClass
    var one=$('#myIntroduce div[class="animated fadeInDownBig"]').hasClass('fadeInDownBig');
    if(one){
      $('#myIntroduce div[class="animated fadeInDownBig"]').removeClass('fadeInDownBig');
      $('#myIntroduce div[class*="div-box text-center animated"]:eq(0)').removeClass('slideInLeft');
      $('#myIntroduce div[class*="div-box text-center animated"]:eq(1)').removeClass('slideInDown');
      $('#myIntroduce div[class*="div-box text-center animated"]:eq(2)').removeClass('slideInUp');
      $('#myIntroduce div[class*="div-box text-center animated"]:eq(3)').removeClass('slideInRight');
    }
  }
  //第二块myWorks
  if(sTop>=mySelf*0.491||sTop<=mySelf*0.112){
    ////removeClass
    var bool=$('#myWorks div[class="animated fadeInUp"]').hasClass('fadeInUp');
    //console.log(bool);
    if(bool){
      $('#myWorks div[class="animated fadeInUp"]').removeClass('fadeInUp');
      $('#myWorks div[class*="img-divRow animated"]:even').removeClass('slideInLeft');
      $('#myWorks div[class*="img-divRow animated"]:odd').removeClass('slideInRight');
    }
  }
  //第三块mySkill
  //890,2000
  if(sTop<=mySelf*0.312||sTop>=mySelf*0.701){
    var hasSlideInRight= $('#mySkill div[class="animated slideInRight"]').hasClass('slideInRight');
    if(hasSlideInRight){
      $('#mySkill div[class="animated slideInRight"]').removeClass('slideInRight');
      $('#mySkill canvas:even').next('div[class*="animated"]').removeClass('slideInUp');
      $('#mySkill canvas:odd').removeClass('flipInY');
    }
  }
    //第四块myWork,1490,2670
  if(sTop<=mySelf*0.522||sTop>=mySelf*0.911){
    var hasFlipInX=$('#myWork div[class="animated flipInX"]').hasClass('flipInX');
    if(hasFlipInX){
      //removeClass
      $('#myWork div[class="animated flipInX"]').removeClass('flipInX');
      $('#myWork div[class*="div-box"]:first').removeClass('fadeInLeftBig');
      $('#myWork div[class*="div-box"]:last').removeClass('fadeInRightBig ');
    }
  }
  //2420
  if(sTop<=mySelf*0.848){
    var hasFadeInRight= $('#mySelf div[class="animated fadeInRight"]').hasClass('fadeInRight');
      if(hasFadeInRight){
      $('#mySelf div[class="animated fadeInRight"]').removeClass('fadeInRight');
    }
  }
});