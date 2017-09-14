/*
*返回顶部/匀减速/JS
*基于JQ
*兼容适配
*var scrollTop = window.pageYOffset   
                || document.documentElement.scrollTop    
                || document.body.scrollTop    
                || 0;  
*/
$(function () {
        /*飞机动画*/
        $("#js-jump-plan-container").hover(function (event) {
            if (event.type == "mouseenter") {
                $(".mod-side-operation__jump-to-top").addClass("mod-side-operation__jump-to-top-hover")
                $("#js-plane").animate({ top: "0px" }, 200);
            }
            if (event.type == "mouseleave") {
                $("#js-plane").css({ top: "56px" }, 0);
                $(".mod-side-operation__jump-to-top").removeClass("mod-side-operation__jump-to-top-hover")
            }
        })
        /*返回顶部&&动画*/
        $("#js-jump-container").bind("click", function () {
            var len = document.body.scrollTop;
            var $len = window.screen.availHeight - 256;//可见视图内飞行即可
            $("#js-plane").css({ position: "fixed", top: $len });
            setTimeout(function () { $("#js-plane").animate({ top: "0" }, function () { $("#js-plane").css({ position: "absolute", top: "56px" }); }) }, 0);
            clearInterval(timer);

            var timer = setInterval(function () {
                var len = document.body.scrollTop
                || window.pageYOffset
                || document.documentElement.scrollTop;
                len -= Math.ceil(len / 10);
                window.scrollTo(0, len);
                if (len == 0) {
                    clearInterval(timer);
                }
            }, 10)
        });
        /*返回顶部，隐藏与出显*/
        $(window).scroll(function () { var $curTop = document.body.scrollTop
		|| window.pageYOffset
		|| document.documentElement.scrollTop;
		if ($curTop > 100) { $("#js-jump-container").fadeIn(200) } else { $("#js-jump-container").stop().fadeOut(200) } })
    })
