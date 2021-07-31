$(function() {
    var index = 0;
    var len = $('.slider .npcli').length;
    var int;

    // 定时器自动播放
    function sliderTimer(num)  //图片切换函数
    {
        $(".slider .npcli").fadeOut(500).eq(num).fadeIn(500);
    }    
    function ziDong()  //自动切换
    {
        index = index + 1;
        if (index == len) {
            index = 0;
        }
        sliderTimer(index);
        
    }
    int = setInterval(ziDong, 3000); //切换时间3秒
    
})