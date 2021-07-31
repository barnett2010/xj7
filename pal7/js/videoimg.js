
//二级页面影音切换

/*仙剑七官网 海报壁纸点击看大图*/
$(function(){
    var imgs=[];   //图片的src地址
	var imgindex=0;
	var VideoImg = $(".VImgLmPic");  //包含图片的div
	var Picture = $(".VImgLmPicture");   //当前图片
	$.each(Picture, function(key,val) {
		imgs.push($(val).attr("v-src"));
	});	
	//console.log(imgs);
	$(VideoImg).click(function(){   //点击事件-图片
		var url=$(this).children(Picture).attr("v-src");  //当前点击的url地址
        //console.log(url);
		$("#zoom").fadeIn("fast");
		$("#zoomIcons").fadeIn("fast");
		$("#showImg").attr("src",url);
		$("#showmsg").attr("href",url);
		imgindex=$.inArray(url,imgs);    //返回数组中指定元素的索引值 并存入 imgindex中		
	})
	$("#shownext").click(function(){   //大图点击下一张
		if(imgindex<$(VideoImg).length-1){
			parseInt(imgindex);
			imgindex++;
		}else{
			imgindex=0;
		}
		var imgurl=imgs[imgindex];
		//console.log(imgurl);
		$("#showImg").attr("src",imgurl);
		$("#showmsg").attr("href",imgurl);
	})
	$("#showprev").click(function(){   //大图点击上一张
		if(imgindex>0){
			parseInt(imgindex);
			imgindex--;
		}else{
			imgindex=$(VideoImg).length-1;
		}
		var imgurl=imgs[imgindex];
		$("#showImg").attr("src",imgurl);
		$("#showmsg").attr("href",imgurl);
	})
    $(".close").click(function(){
		$("#zoom").fadeOut("fast");
		$("#zoomIcons").fadeOut("fast");
	})
})
    





























