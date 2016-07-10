/*
* @Author: yan7
* @Date:   2016-07-07 08:02:32
* @Last Modified by:   apple
* @Last Modified time: 2016-07-10 21:49:15
*/

$(function() {
	var navData = [
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_10.png",
		"p": "商城返利"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_12.png",
		"p": "优惠爆料"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_14.png",
		"p": "淘宝返利"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_16.png",
		"p": "购物资讯"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_22.png",
		"p": "比价网"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_24.png",
		"p": "有奖签到"
	},
	{
		"href": "'javascript:;'",
		"imgSrc":  "images/m-index_26.png",
		"p": "订单管理"
	},
	{
		"href": "'subitem/user.html'",
		"imgSrc":  "images/m-index_27.png",
		"p": "会员中心"
	}
]

var tmallContUlData = [
	{
		"imgSrc": "'images/jd.png'"
	},
	{
		"imgSrc": "'images/jd.png'"
	},
	{
		"imgSrc": "'images/amazon.png'"
	},
	{
		"imgSrc": "'images/1hao.gif'"
	},
	{
		"imgSrc": "'images/suning.png'"
	},
	{
		"imgSrc": "'images/gome.png'"
	},
	{
		"imgSrc": "'images/jd.png'"
	},
	{
		"imgSrc": "'images/wei.gif'"
	},
]

// index 手机端 触摸版 电脑版
var iVersionUlData = [
	{
		"imgSrc": "'images/178hui-app.png'",
		"p": "手机端",
		"pindex": 1
	},
	{
		"imgSrc": "'images/178hui-shouji.png'",
		"p": "触摸版",
		"pindex": 2
	},
	{
		"imgSrc": "'images/178hui-diannao.png'",
		"p": "电脑版",
		"pindex": 3
	}
]



	// 拼接字符串
	// index 导航
	for (var i = 0; i < navData.length; i++) {
		var newLi = '';
		newLi += '<li class="icon-li"><a href='+navData[i].href+'><img src='+'"'+navData[i].imgSrc+'"'+' class="db w45 h45 ma10"><p>'+navData[i].p+'</p>';
		$('.nav-ul').append(newLi);
	}
	// index 热门商城
	for (var i = 0; i < tmallContUlData.length; i++) {
		var newLi1 = '';
		newLi1 += '<li class="icon-li"><a href="javascript:;"><img src='+tmallContUlData[i].imgSrc+'><p>最高返 <span>2.8%</span></p>';
		$('.tmall-cont-ul').append(newLi1);
	}
	// index 商品列表
	for (var i = 0; i < 5; i++) {
		var newDiv = '';
		newDiv = '<div class="tipOff-con pct100 fix btf5"> <div class="tipOff-con-left l h110 w80"> <a href="javascript:;"><img src="images/product.jpg" class="w80 mt15"></a> </div> <div class="tipOff-con-right l pct100 h110"> <dl class="mt15"> <dt class="fz14 c666 pl5"><a href="javascript:;">韩国现代(HYUNDAI)BD-YS2003多功能养生壶 煎药壶2.0L</a></dt> <dd class="cf30 pt10 pl5">手机端 99元包邮</dd> </dl> <span class="l mt10 pl5 ">￥99..0 <del class="f30">￥138.00</del></span> <span class="r mt10 pr10">京东商城 7-10 12:33</span> </div> </div>';
		$('.i-tipOff').append(newDiv);
	}

	// index 手机端 触摸版 电脑版
	for (var i = 0; i < iVersionUlData.length; i++) {
		var newLi = '';
		newLi = '<li class="pct33 mt5 l tac bgwh"><a href="javascript:;" class="db pct100"><img src='+iVersionUlData[i].imgSrc+'><p class="fz14 pct100 tac pb10 c666 p'+iVersionUlData[i].pindex+'">'+iVersionUlData[i].p+'</p></a></li>'
		$('.i-version-ul').append(newLi);
	}


	// 加载更多
	$('.onload-more').on('click', function() {
		$(this).html('').css({background:"url(../images/loading-1.gif) no-repeat center",backgroundSize: "5% auto"});
		setTimeout(function() {
			for (var i = 0; i < 5; i++) {
				var newDiv = '';
				newDiv = '<div class="tipOff-con pct100 fix btf5"> <div class="tipOff-con-left l h110 w80"> <a href="javascript:;"><img src="images/product.jpg" class="w80 mt15"></a> </div> <div class="tipOff-con-right l pct100 h110"> <dl class="mt15"> <dt class="fz14 c666 pl5"><a href="javascript:;">韩国现代(HYUNDAI)BD-YS2003多功能养生壶 煎药壶2.0L</a></dt> <dd class="cf30 pt10 pl5">手机端 99元包邮</dd> </dl> <span class="l mt10 pl5 ">￥99..0 <del class="f30">￥138.00</del></span> <span class="r mt10 pr10">京东商城 7-10 12:33</span> </div> </div>';
				$('.i-tipOff').append(newDiv);
				$('.onload-more').html('加载更多').css({background:"none"});
			}
		}, 1000)
	})

})


