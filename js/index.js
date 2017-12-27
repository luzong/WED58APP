var swiper = new Swiper('.swiper-container', {
    	 spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
       },
    });
    //跳转关于          footer     页面
$(".footer ul li:nth-child(1)").click(function(){
	 window.location.href="index.html"
})
//$(".footer ul li:nth-child(2)").click(function(){
//	 window.location.href="tongxunlv.html"
//})
//$(".footer ul li:nth-child(3)").click(function(){
//	 window.location.href="faxian.html"
//})
//$(".footer ul li:nth-child(4)").click(function(){
//	 window.location.href="wode.html"
//})