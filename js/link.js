//rand(a,b)产生a和b区间的随机数
function rand(max,min){
	if(min>max){
		var san;
		san=max;
		max=min;
		min=san;
	}
	return Math.ceil(Math.random()*(max-min+1))+(min-1)
}
//随机产生n个0~9之间的随机数
function suijishu(n){				
	var sjs = new Array(n);
	var txt = "";
	for(var i=0;i<sjs.length;i++){
		sjs[i]=rand(0,9);
		txt += sjs[i].toString()
	}
	return txt
}
$(".footer ul li:nth-child(1)").on("click",function(){
	window.location.href="index.html"
})
$(".footer ul li:nth-child(2)").on("click",function(){
	window.location.href="fuwu.html"
})
$(".footer ul li:nth-child(3)").on("click",function(){
	window.location.href="message.html"
})
$(".footer ul li:nth-child(4)").on("click",function(){
	window.location.href="wode.html"
})
$(".xx-tu").on("click",function(){
	window.location.href="message.html"
})
$(".dl-tu").on("click",function(){
	window.location.href="denglu.html"
})
$(".fa-2x ul ").on("click",function(){
	window.location.href="xiaoxi2.html"
})
$("#ljdl").on("click",function(){
	window.location.href="denglu.html"
})
$(".wode-tu").on("click",function(){
		window.location.href="wode.html"	
})
//$(".main ul li:nth-child(4) ").on("click",function(){
//	window.location.href="yanzheng.html"
//})
$(".sm-wx").on("click",function(){
	window.location.href="shouye2.html"
})
$(".sy-tu").on("click",function(){
	window.location.href="index.html"
})

var sec=60;
var time=null;
$("#h-p").on("click",function(){
	$(this).css("color","#CCCCCC")
	if(time!=null)
	{
//		$(".denglu_main .yzm_but").disabled=true;
		return false;
	}
	time=setInterval(function(){
		if(sec!=0){
			sec--;
			$("#h-p").html(sec+"&nbsp;"+"s");
			if(sec==54){
				$('#inp').val(suijishu(6))
				$('#xyb').addClass("wo")
			}
		}
		else{
			sec=60;
			$("#h-p").css("color","red")
			$("#h-p").html("重新发送");
			clearInterval(time);
			time=null;
		}
	},1000)
})
$("#xyb").on("click",function(){
	if(!$('#inp').val()==''){		
		window.location.href="wode.html"
	}
})
$(".shezhi").on("click",function(){	
		window.location.href="shezhi.html"
})
