$(function () {   
    

    var timer = null;
    var a = '<a style="margin-top:7px;" class="fl" href="javascript:;"><img src="" alt="游戏"></a>';
    $(".commonFooterLeft > :nth-child(1)").find("img").attr("src", "//pal7.cubejoy.com/images/footerLogo.png");
    $(".commonFooterLeft > :nth-child(1)").after(a);
    $(".commonFooterLeft > :nth-child(2)").find("img").attr("src", "//pal7.cubejoy.com/images/ZSYlogo.png")
    $(".hoverPoster").mouseover(function(){
        clearTimeout(timer);
        $(".pal7text").show();
    })
    $(".hoverPoster").mouseout(function(){
        timer = setTimeout(function(){$(".pal7text").hide()},500);
    })
    
    
    /*视频播放*/
    $(".indexVideo").click(function(){
        var vsrc = $(this).attr("v");
        $(".Pal7tanPopup").show();
        $(".falshcontent").html('<video width="800" height="100%" controls="controls" autoplay="autoplay"><source src="'+ vsrc +'" type="video/mp4">Your browser does not support HTML5 video.</video>');
        
    })
    $(".vidoplay").click(function(){
        $('.music_bgm').find("#bg-music")[0].pause();
    })
    $(".indexVideo").click(function(){
        $(".bjLayer").show();
    })
    $(".hidevido").click(function(){
        $(".falshcontent").html('');
        $(".Pal7tanPopup").hide();
        $(".bjLayer").hide();        
        $(".mNote").removeClass("mNoteTurn");
        $(".ml").addClass("mline");
    })
    $(".indexhidevido").click(function(){
        $('.music_bgm').find("#bg-music")[0].pause();
    })
    

    /*切换*/
    $(".news_info").hide();
    $(".news_info").eq(0).show();
    $(".CharactersM").hide();
    $(".CharactersM").eq(0).show();
    //二级页面影音视频
    $(".VImgLmain .tabsAll").hide();
    $(".VImgLmain .tabsAll").eq(0).show();
    //移动端-视频影音切换   
    $(".AppVideoImg-main .AppVideoImg-mc").hide();
    $(".AppVideoImg-main .AppVideoImg-mc").eq(0).show();
    jQuery.jqtab = function(tabList,tabContent,tabSelect){
        $(tabList).click(function(){
            $(this).addClass(tabSelect)
                .siblings().removeClass(tabSelect);
            var index = $(tabList).index(this);
            $(tabContent)
                .eq(index).show()
                .siblings().hide();
        });
    }
    //新闻公告切换
    $.jqtab(".pal7News_title .newsTittab",".pal7News_main>div","newsActive");
    //二级页面影音视频
    $.jqtab(".VImgTitle_link a",".VImgLmain>div","VImgtActive");
    //移动端-视频影音切换
    $.jqtab(".App-VImgTitle_link a",".AppVideoImg-main>div","App-VImgtActive");
    //移动端配置信息切换
    $.jqtab(".AppcomInfo_tab .Apptabinfo",".AppcomInfo-wrap>div","ApptabiActive");



    //角色介绍-仙剑奇侠传七
    //$.jqtab(".charactersTabs .Characters",".CharactersMain>div","charaActive");
    $(".charactersTabs .Characters").hover(function(){  
        var index = $(this).index();
        $(this).addClass("charaActive").siblings().removeClass("charaActive");
        $(".CharactersMain>div")
            .eq(index).show()
            .siblings().hide();
        var e = $(".CharactersMain .CharactersM").eq(index); 
        $(".CharactersMain .CharactersM").find(".npcPicture").removeClass("fadeInLeft");
         e.find(".npcPicture").addClass("fadeInLeft").parent().siblings().children(".npcPicture").removeClass("fadeInLeft");
        // 切换人物的时候关闭音乐
        $(".mp3Btn").each(function (index, ele) {
            //console.log(index);
            //console.log(ele);
            ele.pause();
        });
        $(".audioAll").removeClass("no_play play").addClass("static_play");

    },function(){
        //console.log("划出")
    })
    // 仙剑7声音切换    
    //$(".btn-audio").off('click');
    $(".CharactersM .audioAll").click(function () {
        //console.log("aaa");
        //console.log($(this));
        var target = $(this).parents('.CharactersM');
        if ($(this).find(".mp3Btn")[0].paused) {
            $(this).find(".mp3Btn")[0].play();
            // 判断当前音乐是否有class类名，有则播放，没有则不播放
            if (target.hasClass('yqs')) {
                $(".audioAll").addClass("play").removeClass("no_play");
            }
            if (target.hasClass('xw')) {
                $(".audioAll").addClass("play").removeClass("no_play");
            }
            if (target.hasClass('bmq')) {
                $(".audioAll").addClass("play").removeClass("no_play");
            }
            if (target.hasClass('sy')) {
                $(".audioAll").addClass("play").removeClass("no_play");
            }
        } 
        else {
            $(this).find(".mp3Btn")[0].pause()
            if (target.hasClass('yqs')) {
                $(".audioAll").addClass("no_play").removeClass("static_play");
            }
            if (target.hasClass('xw')) {
                $(".audioAll").addClass("no_play").removeClass("static_play");
            }
            if (target.hasClass('bmq')) {
                $(".audioAll").addClass("no_play").removeClass("static_play");
            }
            if (target.hasClass('sy')) {
                $(".audioAll").addClass("no_play").removeClass("static_play");
            }
        }
        $(this).find('audio').bind('ended', function () {
            $(".audioAll").removeClass("no_play play").addClass("static_play");
        });
    });

    
    //媒体联系
    $(".weiCodeImg").hide();
    $(".ShareLink").hover(function(){
    	$(this).children(".weiCodeImg").fadeIn(100);
    },function(){
    	$(this).children(".weiCodeImg").fadeOut(100);
    })

    //影音视频划过显示大图
    $(".VImgLmPic").hover(function(){
        $(this).children(".VImghide").fadeIn(500);
    },function(){
        $(this).children(".VImghide").fadeOut(100);
    })
    $(".VImgvideo-wrap").hover(function(){
        $(this).children(".VImgvideoHides").fadeIn(500);
    },function(){
        $(this).children(".VImgvideoHides").fadeOut(100);
    })
    //首页海报壁纸划过显示放大
    var PosterF = '<div class="PosterBFilter" onclick="webPoster($(this))"><div class="PosterBIcon"></div></div>';
    $(".Posterswiper-container .swiper-wrapper .swiper-slide").append(PosterF);
    $(".Posterswiper-container .swiper-wrapper .swiper-slide").hover(function(){
        $(this).children(".PosterBFilter").fadeIn();
    },function(){
        $(this).children(".PosterBFilter").fadeOut();
    })

    
    //右侧固定内容滚动事件    
    /*右侧悬挂快捷导航*/
    var f = 110;
   	var d = null;
    $(window).scroll(function() {
        d && clearTimeout(d),
        d = setTimeout(function() {
            var a = $(window).scrollTop();  
            a > f ? $(".VImgMainRight").addClass("top20") : $(".VImgMainRight").removeClass("top20");  
        },
        100)
    });
    
    
    
    
    
    
})