/*
 * @Author: apple
 * @Date:   2016-07-10 19:04:58
 * @Last Modified by:   apple
 * @Last Modified time: 2016-07-12 14:03:42
 */


//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG


'use strict';

$(function() {

    // 滚动会页面顶部
    function toTop() {
        $('body').animate({ 'scrollTop': '0' }, 600);
    }

    // 点击小火箭返回顶部
    $('.rocket').on('click', function() {
        $(this).css({ backgroundImage: "url(../images/iconfont-fanhuidingbu_up.png)" })
        toTop();
    })

    // 页面滚动显示隐藏小火箭
    function scroll() {
        $(document).on('scroll', function() {
            document.body.scrollTop >= 250 ? $('.rocket').css({ display: 'block' }) : $('.rocket').css({ display: 'none', backgroundImage: "url(../images/iconfont-fanhuidingbu.png)" })
        })
    }
    scroll();

    // 点击输入密码框右边的按钮切换是否显示密码
    function showPassword() {
        var password = $(".input-password");
        if (password.prop("type") == 'password') {
            password.prop('type', 'text')
        } else {
            password.prop('type', 'password')
        }
    }
    $(".login-show-password").on('click', function() {
        $(this).toggleClass('show');
        showPassword();
    })

    // 面向对象
    // 输入框中有内容则显示右边按钮
    function showBtn (btn,objText) {
	    $(objText).on("input", function() {
	        if ($(this).val() != '') {
	            $(btn).css('display', 'block');
	        } else {
	            $(btn).css('display', 'none');
	        }
	    })
    }

    // 点击输入框关闭按钮清除内容
    function ClearText(btn,objText) {
	    $(btn).on("click", function() {
	        $(objText).val('');
	        $(this).css('display', 'none');
	    })
	    console.log(123);
    }

    showBtn('#username1','#username');
    ClearText('#username1','#username');

    showBtn('#email-btn','#email');
    ClearText('#email-btn','#email');

    showBtn('#qq-btn','#qq');
    ClearText('#qq-btn','#qq');

    showBtn('#idenfity-btn','#idenfity');
    ClearText('#idenfity-btn','#idenfity');


})
