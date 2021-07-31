$(function(){
	var len = $("#Indexflash_num>li").length;
    var index = 0;            
    var oleft = $(".jleft");
    var oright =  $(".jright");
    var int;
    oleft.hide();
    oright.hide();


    var oUlWidth = $(".Indexflash_num").width();
    var oUlWidthpl = $(".Indexflash_num").css("padding-left");
    var oUlWidthpr = $(".Indexflash_num").css("padding-right");

//  $(".Indexflash_num").css({
//      "left":"50%",
//      "margin-left": "-" + (oUlWidth + parseInt(oUlWidthpl) + parseInt(oUlWidthpr))/2 + "px"
//  })
    $(".Indexflash_num").css({
        "right":"10px"
    })
    $("#flash_pic>a").hide();
    $("#flash_pic>a").eq(0).show();
    function showSys(num)  //图片切换函数
    {
        $("#Indexflash_num>li").removeClass().addClass("click_out").eq(num).toggleClass("click_out").addClass("click_over");
        $("#flash_pic>a").fadeOut().eq(num).fadeIn();
    }
    function ziDong()  //自动切换
    {
        index = index + 1;
        if (index == len) {
            index = 0;
        }
        showSys(index);
        
    }
    int = setInterval(ziDong, 5000); //切换时间3秒
    $("#Indexflash_num>li").click(function () //点击切换
    {
        var index_num = $("#Indexflash_num>li").index(this);
        showSys(index_num);
        index = index_num;  //改变全局变量的值，以便鼠标移开的时候能够衔接上
    });
	$(".Indexfigure").mouseover(function ()  //移动到上面时停止自动切换
    {
        clearInterval(int);
        oleft.show();
    	oright.show();
    });
    $(".Indexfigure").mouseout(function ()  //移开时继续自动切换
    {
        int = setInterval(ziDong, 5000); //切换时间3秒
        oleft.hide();
    	oright.hide();
    });
    $(oright).click(function(){                
        if(index == len-1){
        	index = 0;
        }
        else
        {
        	index = index + 1;
        }
        showSys(index);
    })
    $(oleft).click(function(){                
        if(index == 0){
        	index = len-1;
        }
        else
        {
        	index = index - 1;
        }                
        showSys(index);                
    })
    
    //newindex盒子首页右侧切换
    $(".indexline li").each(function(index) {
        $(this).click(function(e) {
            $(this).addClass("liacitve").siblings().removeClass("liacitve");
            $(".indexactive").eq(index).show().siblings(".indexactive").hide();
        })
    });

})

/*newindex活动幻灯片插件调用*/
$(document).ready(function(e) {
    // $('#playBox').unslider({
	// 	dots: true
	// });
});
