
/*仙剑七官网 海报壁纸点击看大图*/
$(function(){
    var imgs=[];   //图片的src地址
	var imgindex=0;
    var PosterImg = $(".Posterswiper-container .swiper-wrapper .swiper-slide img");
	//web版本点击图片
	var PosterClick = $(".PosterBFilter");
	//移动端点击壁纸图片
	var appPoster = $(".AppPoster-container .swiper-wrapper .swiper-slide img")
	$.each(PosterImg, function(key,val) {
		imgs.push($(val).attr("p-src"));
	});	
	//移动端点击壁纸图片
	$(appPoster).click(function(){   //点击事件-图片
		var url=$(this).attr("p-src");  //当前点击的url地址
        //console.log(url);
		$("#zoom").fadeIn("fast");
		$("#zoomIcons").fadeIn("fast");
		$("#showImg").attr("src",url);
		$("#showmsg").attr("href",url);
		imgindex=$.inArray(url,imgs);    //返回数组中指定元素的索引值 并存入 imgindex中		
	})
	//web版本点击图片
	$(PosterClick).click(function(){   //点击事件-图片
		var url=$(this).siblings('img').attr("p-src");  //当前点击的url地址
        //console.log(url);
		$("#zoom").fadeIn("fast");
		$("#zoomIcons").fadeIn("fast");
		$("#showImg").attr("src",url);
		$("#showmsg").attr("href",url);
		imgindex=$.inArray(url,imgs);    //返回数组中指定元素的索引值 并存入 imgindex中		
	})
	$("#shownext").click(function(){   //大图点击下一张
		if(imgindex<$(PosterImg).length-1){
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
			imgindex=$(PosterImg).length-1;
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
//点击跳转新页面查看原图
function getHref(obj){
	var newWeb=window.open('_blank');
	newWeb.location=obj.href;
	//console.log(obj.href);
}
    