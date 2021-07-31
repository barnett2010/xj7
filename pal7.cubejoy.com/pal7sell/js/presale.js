$(function () {
    // 登录 注册
    function loginout() {
        $.cookie('idphonemail', null, {
            path: "/",
            domain: "cubejoy.com"
        });
        location.reload();
    }
    if ($.cookie('idphonemail') != null) {
        $("#login")[0].href = "https://account.cubejoy.com/";
        $("#login")[0].innerText = $.cookie('idphonemail').split('&')[3].replace("usernickname=", "");
        $('#login').next()[0].innerText = "退出";
        $('#login').next()[0].href = "javascript:;"
        $('#login').next()[0].onclick = loginout;
    } else {
        $("#login")[0].href = "https://account.cubejoy.com/Html/Login.html?returnurl=" + window.location.href;
    }
    // 底部logo
    var a = '<a style="margin-top:7px;" class="fl" href="javascript:;"><img src="" alt="游戏"></a>';
    $(".commonFooterLeft > :nth-child(1)").find("img").attr("src", "images/footerLogo.png");
    $(".commonFooterLeft > :nth-child(1)").after(a);
    $(".commonFooterLeft > :nth-child(2)").find("img").attr("src", "images/ZSYlogo.png")
    //  点击弹出视频播放层
    $(".video_mask .play_btn").on("click", function () {
        $(".mask").show();
        var vsrc = $(this).attr("route");
        $(".videoBox").show();
        $(".flashVideo").html('<video width="800" height="100%" controls="controls" muted="muted" autoplay="autoplay"><source src="' + vsrc + '" type="video/mp4">Your browser does not support HTML5 video.</video>');
    })
    //  关闭视频播放层
    $(".closeBtn").on("click", function () {
        $(".mask").hide();
        $(".videoBox").hide();
    })
    // 复制链接显示对应礼盒版本
    function hash() {
        if (!window.location.hash) {
            swiperInit(0);
            bigImg(0);
            order(0);
            return;
        };
        var number = window.location.hash.replace(/[^0-9]/ig, "");
        var index = number - 1;
        if (number) {
            $('.goods_type .goods_type_list li').eq(index).addClass('active').siblings().removeClass('active');
            $('.goods_type .goods_type_list li').find('.tab_line').removeClass('active');
            $('.goods_type .goods_type_list li').eq(index).find('.tab_line').addClass('active');
            $('.goods_det .goods_con .goods').eq(index).addClass('active').siblings().removeClass('active');
            swiperInit(index);
            bigImg(index);
            see_det(index);
            exc_spec(index);
            order(index);
        }
    }
    hash()
    // tab切换
    $('.goods_type .goods_type_list li').click(function () {
        scrollTop();
        var index = $(this).index();
        $('.goods_type .goods_type_list li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.goods_det').find('.goods_con .goods').removeClass('active');
        $('.goods_det .goods_con .goods').eq(index).addClass('active');
        $('.goods_type .goods_type_list li').find('.tab_line').removeClass('active');
        $(this).find('.tab_line').addClass('active');
        swiperInit(index);
        bigImg(index);
        see_det(index);
        exc_spec(index);
        // 立即预约
        order(index);

    })

    function exc_spec(index) {
        switch (index) {
            case 0:
                $('.spec_tit span').html('豪华版特典');
                $('.spec_tit .tit_des').html('预购豪华版的玩家将获赠《仙剑奇侠传四》主题“回梦游仙主角武器外观”一套、重楼精美徽章一枚');
                $('.spec_tit').show();
                $('.spec_box .spec1').show();
                $('.spec_box .spec2').show();
                break;
            case 1:
                $('.spec_tit span').html('标准版特典');
                $('.spec_tit .tit_des').html('预购标准版的玩家将获赠《仙剑奇侠传四》主题“回梦游仙”主角武器外观一套');
                $('.spec_tit').show();
                $('.spec_box .spec1').show();
                $('.spec_box .spec2').hide();
                break;
            case 2:
                $('.spec_tit').hide();
                $('.spec_box .spec1').hide();
                $('.spec_box .spec2').hide();
                break;
            case 3:
                $('.spec_tit').hide();
                $('.spec_box .spec1').hide();
                $('.spec_box .spec2').hide();
                break;
        }
    }
    // 抽奖福利
    // 点击显示预售抽奖详情
    function ring_layer_show() {
        $('.mask').fadeIn();
        $('.ring_layer').fadeIn();
        $('.bgcolor').css('overflow', 'hidden');
        close_layer();
    }

    function welfare() {
        var ring_conArr = $('.ring').parents('.ring_con');
        var ringArr;
        for (var i = 0; i < ring_conArr.length; i++) {
            ringArr = ring_conArr[i].children;
            for (var j = 0; j < ringArr.length; j++) {
                $(ringArr[j]).click(function () {
                    $('.ring_con .ring').find('.ring_hv').removeClass('active');
                    $(this).find('.ring_hv').addClass('active');
                    var imgArr = {
                        img_group1: {
                            img1: ['images/detailPic/prizePic/prz_det_01.jpg', 'images/detailPic/prizePic/prz_det_02.jpg', 'images/detailPic/prizePic/prz_det_03.jpg', 'images/detailPic/prizePic/prz_det_04.jpg'],
                            img2: ['images/detailPic/prizePic/prz2_det_01.jpg', 'images/detailPic/prizePic/prz2_det_02.jpg', 'images/detailPic/prizePic/prz2_det_03.jpg', 'images/detailPic/prizePic/prz2_det_04.jpg', 'images/detailPic/prizePic/prz2_det_05.jpg', 'images/detailPic/prizePic/prz2_det_06.jpg', 'images/detailPic/prizePic/prz2_det_07.jpg', 'images/detailPic/prizePic/prz2_det_08.jpg', 'images/detailPic/prizePic/prz2_det_09.jpg', 'images/detailPic/prizePic/prz2_det_10.jpg', 'images/detailPic/prizePic/prz2_det_11.jpg', 'images/detailPic/prizePic/prz2_det_12.jpg', 'images/detailPic/prizePic/prz2_det_13.jpg', 'images/detailPic/prizePic/prz2_det_14.jpg', 'images/detailPic/prizePic/prz2_det_15.jpg', 'images/detailPic/prizePic/prz2_det_16.jpg', 'images/detailPic/prizePic/prz2_det_17.jpg', 'images/detailPic/prizePic/prz2_det_18.jpg'],
                            img3: ['images/detailPic/prizePic/prz3_det_01.jpg', 'images/detailPic/prizePic/prz3_det_02.jpg', 'images/detailPic/prizePic/prz3_det_03.jpg', 'images/detailPic/prizePic/prz3_det_04.jpg']
                        },
                        img_group2: {
                            img1: ['images/detailPic/prizePic/prz4_det_01.jpg', 'images/detailPic/prizePic/prz4_det_02.jpg', 'images/detailPic/prizePic/prz4_det_03.jpg', 'images/detailPic/prizePic/prz4_det_04.jpg'],
                            img2: ['images/detailPic/prizePic/prz5_det_01.jpg', 'images/detailPic/prizePic/prz5_det_02.jpg', 'images/detailPic/prizePic/prz5_det_03.jpg', 'images/detailPic/prizePic/prz5_det_04.jpg'],
                            img3: ['images/detailPic/prizePic/prz6_det_01.jpg', 'images/detailPic/prizePic/prz6_det_02.jpg', 'images/detailPic/prizePic/prz6_det_03.jpg', 'images/detailPic/prizePic/prz6_det_04.jpg'],
                        },
                        img_group3: {
                            img1: ['images/detailPic/prizePic/prz7_det_01.jpg', 'images/detailPic/prizePic/prz7_det_02.jpg'],
                            img2: ['images/detailPic/prizePic/prz8_det_01.jpg', 'images/detailPic/prizePic/prz8_det_02.jpg', 'images/detailPic/prizePic/prz8_det_03.jpg'],
                        },
                    }
                    var index = $(this).parents('.ring_wrap').index();
                    var ring_index = $(this).index();
                    var html = ' ';
                    // 第一组图
                    if (index === 4) {
                        if (ring_index === 0) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group1.img1[0] + '>' +
                                '<img src=' + imgArr.img_group1.img1[1] + '>' +
                                '<img src=' + imgArr.img_group1.img1[2] + '>' +
                                '<img src=' + imgArr.img_group1.img1[3] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        if (ring_index === 1) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group1.img2[0] + '>' +
                                '<img src=' + imgArr.img_group1.img2[1] + '>' +
                                '<img src=' + imgArr.img_group1.img2[2] + '>' +
                                '<img src=' + imgArr.img_group1.img2[3] + '>' +
                                '<img src=' + imgArr.img_group1.img2[4] + '>' +
                                '<img src=' + imgArr.img_group1.img2[5] + '>' +
                                '<img src=' + imgArr.img_group1.img2[6] + '>' +
                                '<img src=' + imgArr.img_group1.img2[7] + '>' +
                                '<img src=' + imgArr.img_group1.img2[8] + '>' +
                                '<img src=' + imgArr.img_group1.img2[9] + '>' +
                                '<img src=' + imgArr.img_group1.img2[10] + '>' +
                                '<img src=' + imgArr.img_group1.img2[11] + '>' +
                                '<img src=' + imgArr.img_group1.img2[12] + '>' +
                                '<img src=' + imgArr.img_group1.img2[13] + '>' +
                                '<img src=' + imgArr.img_group1.img2[14] + '>' +
                                '<img src=' + imgArr.img_group1.img2[15] + '>' +
                                '<img src=' + imgArr.img_group1.img2[16] + '>' +
                                '<img src=' + imgArr.img_group1.img2[17] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        if (ring_index === 2) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group1.img3[0] + '>' +
                                '<img src=' + imgArr.img_group1.img3[1] + '>' +
                                '<img src=' + imgArr.img_group1.img3[2] + '>' +
                                '<img src=' + imgArr.img_group1.img3[3] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        ring_layer_show();
                    }
                    // 第二组图
                    if (index === 5) {
                        if (ring_index === 0) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group2.img1[0] + '>' +
                                '<img src=' + imgArr.img_group2.img1[1] + '>' +
                                '<img src=' + imgArr.img_group2.img1[2] + '>' +
                                '<img src=' + imgArr.img_group2.img1[3] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        if (ring_index === 1) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group2.img2[0] + '>' +
                                '<img src=' + imgArr.img_group2.img2[1] + '>' +
                                '<img src=' + imgArr.img_group2.img2[2] + '>' +
                                '<img src=' + imgArr.img_group2.img2[3] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        if (ring_index === 2) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group2.img3[0] + '>' +
                                '<img src=' + imgArr.img_group2.img3[1] + '>' +
                                '<img src=' + imgArr.img_group2.img3[2] + '>' +
                                '<img src=' + imgArr.img_group2.img3[3] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        ring_layer_show();
                    }
                    // 第三组图
                    if (index === 6) {
                        if (ring_index === 0) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group3.img1[0] + '>' +
                                '<img src=' + imgArr.img_group3.img1[1] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        if (ring_index === 1) {
                            $('.ring_layer .layer_pic').html('');
                            html = '<img src=' + imgArr.img_group3.img2[0] + '>' +
                                '<img src=' + imgArr.img_group3.img2[1] + '>' +
                                '<img src=' + imgArr.img_group3.img2[2] + '>';
                            $('.ring_layer .layer_pic').append(html);
                        }
                        ring_layer_show();
                    }
                })
            }
        }
    }
    welfare();

    // -------------------------特典start
    var html = ' ';
    var luxArr = {
        luxGroup1: ['images/detailPic/specPic/spec2_det_01.jpg', 'images/detailPic/specPic/spec2_det_02.jpg', 'images/detailPic/specPic/spec2_det_03.jpg', 'images/detailPic/specPic/spec2_det_04.jpg', 'images/detailPic/specPic/spec2_det_05.jpg'],
        luxGroup2: ['images/detailPic/specPic/spec_det_01.jpg', 'images/detailPic/specPic/spec_det_02.jpg', 'images/detailPic/specPic/spec_det_03.jpg'],
    }

    function lux() {
        // 专属特典
        $('.spec_box .spec').click(function () {
            var spec_index = $(this).index();
            switch (spec_index) {
                case 0:
                    specFn1();
                    break;
                case 1:
                    specFn2();
                    break;
            }
            spec_layer();
        })
    }
    lux()
    // 特典一
    function specFn1() {
        $('.layer_tit .name').html('');
        $('.luxury .layer_pic').html('');
        html = '<img src=' + luxArr.luxGroup1[0] + '>' +
            '<img src=' + luxArr.luxGroup1[1] + '>' +
            '<img src=' + luxArr.luxGroup1[2] + '>' +
            '<img src=' + luxArr.luxGroup1[3] + '>' +
            '<img src=' + luxArr.luxGroup1[4] + '>';
        $('.luxury .layer_pic').append(html);
        $('.layer_tit .name').html('特典一');
    }
    // 特典二
    function specFn2() {
        $('.layer_tit .name').html('');
        $('.luxury .layer_pic').html('');
        html = '<img src=' + luxArr.luxGroup2[0] + '>' +
            '<img src=' + luxArr.luxGroup2[1] + '>' +
            '<img src=' + luxArr.luxGroup2[2] + '>';
        $('.luxury .layer_pic').append(html);
        $('.layer_tit .name').html('特典二');
    }
    // 特典框的显示隐藏
    function spec_layer() {
        $('.mask').fadeIn();
        $('.luxury').fadeIn();
        $('.bgcolor').css('overflow', 'hidden');
        close_layer();
    }
    // -------------------------特典end
    // 轮播图
    function swiperInit(index) {
        var galleryThumbs = new Swiper('.goods' + (index + 1) + ' .gallery-thumbs', {
            spaceBetween: 5,
            slidesPerView: 5,
            // loop: true,
            freeMode: true,
            loopedSlides: 5,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            observer: true,
            observerParents: true,
            observerChildren: true,
            // autoplay: true,
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                snapOnRelease: true,
            },
        });
        // 大图
        var galleryTop = new Swiper('.goods' + (index + 1) + ' .gallery-top', {
            spaceBetween: 5,
            // loop: true,
            loopedSlides: 5,
            thumbs: {
                swiper: galleryThumbs,
            },
            observer: true,
            observerParents: true,
            observerChildren: true,
            // autoplay: true
        });
    }
    //游戏截图点击查看大图
    function bigImg(index) {
        var imgs = []; //图片的src地址
        var imgindex = 0;
        var gameImg = $(".goods" + (index + 1) + " .swiper-container.gallery-top .swiper-slide img");
        $.each($(gameImg), function (key, val) {
            imgs.push($(val).attr("src"));
        });
        $(gameImg).click(function () { //点击事件-图片
            $(gameImg).removeClass("imgLiActive");
            $(this).addClass("imgLiActive");
            var url = $(this).attr("src"); //当前点击的url地址
            $("#zoom").fadeIn("fast");
            $("#zoomIcons").fadeIn("fast");
            $("#showImg").attr("src", url);
            $("#showmsg").attr("href", url);
            imgindex = $.inArray(url, imgs); //返回数组中指定元素的索引值 并存入 imgindex中		
        })
        $("#shownext").click(function () { //大图点击下一张
            if (imgindex < $(gameImg).length - 1) {
                parseInt(imgindex);
                imgindex++;
            } else {
                imgindex = 0;
            }
            var imgurl = imgs[imgindex];
            $("#showImg").attr("src", imgurl);
            $("#showmsg").attr("href", imgurl);
        })
        $("#showprev").click(function () { //大图点击上一张
            if (imgindex > 0) {
                parseInt(imgindex);
                imgindex--;
            } else {
                imgindex = $(gameImg).length - 1;
            }
            var imgurl = imgs[imgindex];
            $("#showImg").attr("src", imgurl);
            $("#showmsg").attr("href", imgurl);
        })

        $(".close").click(function () {
            $("#zoom").fadeOut("fast");
            $("#zoomIcons").fadeOut("fast");
        })
    }
    // 立即预约
    var myTips;

    function order(index) {
        $('.goods' + (index + 1)).find('.buy_btn').click(function () {
            if (index === 3) {
                // $('.tips_main').hide();
                // $('.channel').show();
                $('.mask').hide();
                $('.buy_layer').hide();
            } else {
                $('.mask').fadeIn();
                $('.buy_layer').fadeIn();
                // 预约轮播
                myTips = new Swiper('.buy_tips', {
                    initialSlide: 0,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
            }

        })
    }


    // 知道了，继续预购
    // $('.bgcolor').on('click', '.goon', function () {
    // $('.buy_tit').html('购买渠道');
    // $('.tips_main').hide();
    // $('.channel').show();
    // })

    // 关闭预约弹层
    $('.tips_close').click(function () {
        $('.mask').fadeOut();
        $('.buy_layer').fadeOut('normal', function () {
            $('.tips_main').show();
            $('.channel').hide();
            myTips.destroy()
        });
        setTimeout(function () {
            $('.buy_tit').html('预购提示');
        }, 1000);
    })
    // 查看详情
    see_det(0)

    function see_det(index) {
        var detArr = {
            detGroup1: ['images/detailPic/det_pic_01.jpg', 'images/detailPic/det_pic_02.jpg', 'images/detailPic/det_pic_03.jpg', 'images/detailPic/det_pic_04.jpg', 'images/detailPic/det_pic_05.jpg', 'images/detailPic/det_pic_06.jpg', 'images/detailPic/det_pic_07.jpg', 'images/detailPic/det_pic_08.jpg', 'images/detailPic/det_pic_09.jpg', 'images/detailPic/det_pic_10.jpg', 'images/detailPic/det_pic_11.jpg', 'images/detailPic/det_pic_12.jpg', 'images/detailPic/det_pic_13.jpg', 'images/detailPic/det_pic_14.jpg', 'images/detailPic/det_pic_15.jpg', 'images/detailPic/det_pic_16.jpg'],
            detGroup2: ['images/detailPic/det2_pic_01.jpg', 'images/detailPic/det2_pic_02.jpg', 'images/detailPic/det2_pic_03.jpg', 'images/detailPic/det2_pic_04.jpg', 'images/detailPic/det2_pic_05.jpg', 'images/detailPic/det2_pic_06.jpg', 'images/detailPic/det2_pic_07.jpg', 'images/detailPic/det2_pic_08.jpg'],
            detGroup4: ['images/detailPic/det4_pic_01.jpg', 'images/detailPic/det4_pic_02.jpg', 'images/detailPic/det4_pic_03.jpg', 'images/detailPic/det4_pic_04.jpg', 'images/detailPic/det4_pic_05.jpg', 'images/detailPic/det4_pic_06.jpg', 'images/detailPic/det4_pic_07.jpg', 'images/detailPic/det4_pic_08.jpg', 'images/detailPic/det4_pic_09.jpg']
        };
        var html = '';
        if (index === 0) {
            $('.det_layer').find('.layer_pic').html('');
            $('.layer_tit .name').html('');
            $('.goods' + (index + 1)).find('.see_det a').click(function () {
                html = '<img src=' + detArr.detGroup1[0] + ' /> ' +
                    '<img src=' + detArr.detGroup1[1] + ' /> ' +
                    '<img src=' + detArr.detGroup1[2] + ' /> ' +
                    '<img src=' + detArr.detGroup1[3] + ' /> ' +
                    '<img src=' + detArr.detGroup1[4] + ' /> ' +
                    '<img src=' + detArr.detGroup1[5] + ' /> ' +
                    '<img src=' + detArr.detGroup1[6] + ' /> ' +
                    '<img src=' + detArr.detGroup1[7] + ' /> ' +
                    '<img src=' + detArr.detGroup1[8] + ' /> ' +
                    '<img src=' + detArr.detGroup1[9] + ' /> ' +
                    '<img src=' + detArr.detGroup1[10] + ' /> ' +
                    '<img src=' + detArr.detGroup1[11] + ' /> ' +
                    '<img src=' + detArr.detGroup1[12] + ' /> ' +
                    '<img src=' + detArr.detGroup1[13] + ' /> ' +
                    '<img src=' + detArr.detGroup1[14] + ' /> ' +
                    '<img src=' + detArr.detGroup1[15] + ' /> ';
                fadeIn_det();
                $('.det_layer').find('.layer_pic').html(html);
                $('.layer_tit .name').html('《仙剑奇侠七》豪华版');
            })
        }
        if (index === 1) {
            $('.det_layer').find('.layer_pic').html('');
            $('.layer_tit .name').html('');
            $('.goods' + (index + 1)).find('.see_det a').click(function () {
                html = '<img src=' + detArr.detGroup2[0] + ' /> ' +
                    '<img src=' + detArr.detGroup2[1] + ' /> ' +
                    '<img src=' + detArr.detGroup2[2] + ' /> ' +
                    '<img src=' + detArr.detGroup2[3] + ' /> ' +
                    '<img src=' + detArr.detGroup2[4] + ' /> ' +
                    '<img src=' + detArr.detGroup2[5] + ' /> ' +
                    '<img src=' + detArr.detGroup2[6] + ' /> ' +
                    '<img src=' + detArr.detGroup2[7] + ' /> ';
                fadeIn_det();
                $('.det_layer').find('.layer_pic').html(html);
                $('.layer_tit .name').html('《仙剑奇侠七》标准版');
            })
        }
        if (index === 2) {
            $('.goods' + (index + 1)).find('.see_det a').click(function () {})
        }
        if (index === 3) {
            $('.det_layer').find('.layer_pic').html('');
            $('.layer_tit .name').html('');
            $('.goods' + (index + 1)).find('.see_det a').click(function () {
                html = '<img src=' + detArr.detGroup4[0] + ' /> ' +
                    '<img src=' + detArr.detGroup4[1] + ' /> ' +
                    '<img src=' + detArr.detGroup4[2] + ' /> ' +
                    '<img src=' + detArr.detGroup4[3] + ' /> ' +
                    '<img src=' + detArr.detGroup4[4] + ' /> ' +
                    '<img src=' + detArr.detGroup4[5] + ' /> ' +
                    '<img src=' + detArr.detGroup4[6] + ' /> ' +
                    '<img src=' + detArr.detGroup4[7] + ' /> ' +
                    '<img src=' + detArr.detGroup4[8] + ' /> ';
                fadeIn_det();
                $('.det_layer').find('.layer_pic').html(html);
                $('.layer_tit .name').html('《仙剑奇侠七》美术集');
            })
        }
    }
    // 隐藏详情弹层
    function fadeIn_det() {
        $('.mask').fadeIn();
        $('.det_layer').fadeIn();
        $('.bgcolor').css('overflow', 'hidden');
        close_layer();
    }
    // 关闭弹层
    function close_layer() {
        $('.layer .close_btn').click(function () {
            $('.mask').fadeOut();
            $('.layer').fadeOut();
            $('.bgcolor').css('overflow', '');
        })
    }
    // 滑到顶部tab固定
    $(window).scroll(function () {
        var top = $('.tab_box').offset().top;
        var scroll_top = $(document).scrollTop();
        if (scroll_top > top) {
            $('.tab_con .goods_type').css({
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'z-index': 88,
                'width': '100%',
                'background': 'linear-gradient(0deg, #232442, #31335F)',
            })

        } else {
            $('.tab_con .goods_type').css({
                'position': '',
            })

        }
    })

    function scrollTop() {
        var top = $('.tab_box').offset().top;
        $("body,html").animate({
            scrollTop: top
        }, 800);
    }


})
//购买
var buyurl = "https://trade.cubejoy.com/page/buyfast.html?bid=";

function gobuy(type) {
    var link = buyurl;
    switch (type) {
        case "hhb":
            link += '12792';
            break;
        case "bzb":
            link += '12793';
            break;
        case "szb":
            link += '12794';
            break;
        case "hcj":
            link += "12796"
            break;
        default:
            break;
    }
    $('#fkbuy')[0].href = link;
}