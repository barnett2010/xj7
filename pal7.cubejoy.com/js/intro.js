$(function(){
    $(".VImgTitle_link a").eq(0).click(function(){
        $("body,html").animate({scrollTop: 0},500);
    })
    
    if ((screen.width>750)) {        
        $(".VImgTitle_link a").eq(1).click(function(){
            $("body,html").animate({scrollTop: 14246},500);
        })
        $(".VImgTitle_link a").eq(2).click(function(){
            $("body,html").animate({scrollTop: 21595},500);
        })  
        
    }else {
        // window.onresize=function(){
        //     var rh1 = $(".Haoban").height();
        //     var rh2 = $(".BiaoZhun").height();
        //     var rh3 = $(".artArea").height();
        //     console.log(rh1);
        //     console.log(rh2);
        //     console.log(rh3);
        // }
            $(".VImgTitle_link a").eq(1).click(function(){
                var rh1 = $(".Haoban").height();
                var rh2 = $(".BiaoZhun").height();
                var rh3 = $(".artArea").height();
                $("body,html").animate({scrollTop: (rh1+20)},500);
            })
            $(".VImgTitle_link a").eq(2).click(function(){
                var rh1 = $(".Haoban").height();
                var rh2 = $(".BiaoZhun").height();
                var rh3 = $(".artArea").height();
                $("body,html").animate({scrollTop:(rh2+rh1+20)},500);
            })  
        
        
          
        
    }
    $(".VImgTitle_link a").click(function(){
        $(this).addClass("VImgtActive").siblings().removeClass("VImgtActive");
    })
    
})