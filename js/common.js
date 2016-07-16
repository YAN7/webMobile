/*
 * @Author: apple
 * @Date:   2016-07-10 19:04:58
 * @Last Modified by:   apple
 * @Last Modified time: 2016-07-16 12:59:15
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
    function showBtn(btn, objText) {
        $(objText).on("input", function() {
            if ($(this).val() != '') {
                $(btn).css('display', 'block');
            } else {
                $(btn).css('display', 'none');
            }
        })
    }

    // 点击输入框关闭按钮清除内容
    function ClearText(btn, objText) {
        $(btn).on("click", function() {
            $(objText).val('');
            $(this).css('display', 'none');
        })
    }

    showBtn('#username1', '#username');
    ClearText('#username1', '#username');

    showBtn('#email-btn', '#email');
    ClearText('#email-btn', '#email');

    showBtn('#qq-btn', '#qq');
    ClearText('#qq-btn', '#qq');

    showBtn('#idenfity-btn', '#idenfity');
    ClearText('#idenfity-btn', '#idenfity');





    // 正则表达式
    function Rex(obj1, obj2, reg, className, txt) {
        $(obj1).on("blur", function() {
            if (!(reg.test($(obj1).val()))) {
                $(obj2).prepend(txt).animate({ "opacity": "1" }, 300);
                setTimeout(function() {
                    $(obj2).animate({ "opacity": "0" }, 300, function() {
                        $(this).html('<div class=' + className + '></div>');
                    });
                }, 2000)

            } else {
                $(obj2).prepend("输入正确").animate({ "opacity": "1" }, 300);
                setTimeout(function() {
                    $(obj2).animate({ "opacity": "0" }, 300, function() {
                        $(this).html('<div class=' + className + '></div>');
                    });
                }, 2000)
                console.log(456);
            }
        })
    }
    // 验证密码是否一致
    function passwordIsFit(obj1,obj2,obj3,className) {
        $(obj1).on('blur',function() {
            if ($(obj1).val() == $(obj2).val()) {
                $(obj3).prepend("密码一致").animate({ "opacity": "1" }, 300);
                    setTimeout(function() {
                        $(obj3).animate({ "opacity": "0" }, 300, function() {
                            $(this).html('<div class=' + className + '></div>');
                        });
                    }, 2000)
            } else {
                $(obj3).prepend("密码不一致!").animate({ "opacity": "1" }, 300);
                    setTimeout(function() {
                        $(obj3).animate({ "opacity": "0" }, 300, function() {
                            $(this).html('<div class=' + className + '></div>');
                        });
                    }, 2000)
                    console.log(456);
            }
        console.log(123);

        })
    }



    // login界面表单验证
    Rex("#username", "#l-inp-user-father", /^[a-zA-Z0-9_-]{3,18}/, "son", "请输入正确的用户名");
    // ergister界面表单验证
    Rex("#r-username", "#r-inp-user-father", /^[a-zA-Z0-9_-]{6,18}/, "son", "请输入正确的用户名");
    Rex("#r-password", "#r-inp-password-father", /^[a-zA-Z0-9_-]{6,18}/, "son", "密码由大写、小写字母和英文字母组成");
    Rex("#email", "#r-inp-email-father", /^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/, "son", "邮箱格式不对");
    Rex("#qq", "#r-inp-qq-father", /^[1-9][0-9]{4,}$/, "son", "qq由5到9位数字组成");

    // 验证密码是否一致
    passwordIsFit("#r-cfPassword","#r-password", "#r-inp-cfPassword-father",'son');

})
