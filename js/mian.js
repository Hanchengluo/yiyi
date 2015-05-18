/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-04-30 17:09:13
 * @version $Id$
 */

 $(function(){
    $("#slidershow").carousel({
        interval:4000
    });
    $("#slidershow a.left").click(function(){
        $(".carousel").carousel("prev");
    });
    $("#slidershow a.right").click(function(){
        $(".carousel").carousel("next");
    });
});
 $(function(){
    $("#ad_show").carousel({
        interval:4000
    });
    $("#ad_show a.left").click(function(){
        $(".ad_carousel1").carousel("prev");
    });
    $("#ad_show a.right").click(function(){
        $(".ad_carousel1").carousel("next");
    });
});

$(function(){

    $(".fix_top").fixedPointShow({
        //zIndex:1000,   //Z轴
       // st:600         //滚动多少距离的时候出现导航
    });
})
;(function($){
    /*
    * 配置参数有两个
    * zIndex:1000,        //Z轴
    * st:600               //滚动多少距离的时候出现导航
    */
    var tools={
        /*
         窗体改变(scroll resize)延时执行事件
         示例：
         $lr().TimeOutRun($(window),"scroll",runFun,2000);  //TimeOutRun(事件,要运行的函数名,间隔时间)
         function runFun(){ alert("哈哈") }
         */
        TimeOutRun:function (obj, Event, callBack, time) {
            var timeOutId = "",
                    reStart = true;
            obj.on(Event, function () {
                clearTimeout(timeOutId);
                if (reStart) {
                    timeOutRun(time)
                }
            });
            function timeOutRun(time) {
                reStart = false;
                var timeOutId = setTimeout(function () {
                    reStart = true;
                    callBack()
                }, time);
            }
        },
        log:function(log){
            if(window.console){
                return console.log(log)
            }
        }

    };
    function FixedPointShow($el,config){
        var def = {
            zIndex:1000,        //Z轴
            st:200               //滚动多少距离的时候出现导航
        };
        this.opts = $.extend(true,def,config);
        this.el = $el;
    }
    FixedPointShow.prototype = {
        scrollNav:function(){
            var isOpen = false,This = this,
                fixTopH = This['el'].outerHeight();

            This['el'].css({"z-index":this.opts.zIndex});

            tools.TimeOutRun($(window),"scroll",function(){
                var st = $(this).scrollTop();
                if(st > This.opts.st){
                    !isOpen && This.el.animate({"top":0},400,function(){
                        isOpen = true;
                    });
                }else{
                    This.el.animate({"top":-fixTopH},400,function(){
                        isOpen = false;
                    });
                }
                tools.log(st)
            },200)
        }
    };
    FixedPointShow.prototype.constructor = FixedPointShow;

    $.extend($.fn,{
        fixedPointShow:function(config){
            //IE6 返回
            if(!("maxHeight" in document.createElement("div").style)){
                $(this).remove();
                return
            }
            var fixedPointNav = new FixedPointShow($(this));
            fixedPointNav.scrollNav();
            return this;
        }
    });
}(jQuery));

$(function(){
    $('#breakingnews3').BreakingNews({
        title: '通知公告',
        titlebgcolor: '#4998f4',
        linkhovercolor: '#4998f4',
        border: 'none',
        timer: 5000,
        effect: 'slide'
    });
});
$(document).ready(function() {
    $('.one-time').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      touchMove: false,
      slidesToScroll: 1
    });
})



