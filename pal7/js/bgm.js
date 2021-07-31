$(function(){

    //背景音乐
    $('#musicBg').append('<audio id="bg-music" src="images/audio/bgm.mp3" loop="loop"></audio>');
    $(".bgmusic").click(function () {
        if ($(this).parents('.music_bgm').find("#bg-music")[0].paused) {
            $(this).parents('.music_bgm').find("#bg-music")[0].play();
            $(".mNote").addClass("mNoteTurn");
            $(".ml").removeClass("mline");
        } else {
            $(this).parents('.music_bgm').find("#bg-music")[0].pause();
            $(".mNote").removeClass("mNoteTurn");
            $(".ml").addClass("mline");
        }
        $(this).parents('.music_bgm').find("#bg-music").bind('ended', function () {
            $(".mNote").removeClass("mNote");
            $(".ml").addClass("mline");
        });
    });
})