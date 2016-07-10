/*
* @Author: apple
* @Date:   2016-07-10 19:04:58
* @Last Modified by:   apple
* @Last Modified time: 2016-07-11 00:58:54
*/

'use strict';

$(function() {

	// 滚动会页面顶部
	function toTop() {
		$('body').animate({'scrollTop':'0'}, 600);
	}

	// 点击小火箭返回顶部
	$('.rocket').on('click',function() {
		$(this).css({backgroundImage: "url(../images/iconfont-fanhuidingbu_up.png)"})
		toTop();
	})

	// 页面滚动显示隐藏小火箭
	function scroll() {
		$(document).on('scroll',function() {
			document.body.scrollTop >= 250 ?  $('.rocket').css({display: 'block'}) :  $('.rocket').css({display: 'none',backgroundImage: "url(../images/iconfont-fanhuidingbu.png)"})
		})}
	scroll();

	// 点击输入密码框右边的按钮切换是否显示密码
	function showPassword() {
		var password = $(".input-password");
		if (password.prop("type") == 'password') {
			password.prop('type','text')
		} else {
			password.prop('type','password')
		}
		console.log(123);
	}
	$(".show-password").on('click',function() {
		$(this).toggleClass('show');
		showPassword();
	})
})