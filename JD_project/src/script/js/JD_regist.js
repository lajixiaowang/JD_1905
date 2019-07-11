;
(function($) {
    let inp1 = $("#username");
    let inp2 = $('#password');
    let inp3 = $('#email');
    let btn = $('.btn');
    let inps = btn.siblings().find('input');
    let span1 = $('<span></span>');
    let p = $('<p></p>');
    let fir_li = $('ul>li:first-of-type');
    let sec_li = $('ul>li:nth-of-type(2)');
    let thr_li = $('ul>li:nth-of-type(3)');
    let regpwd = /^\w{6,10}$/;
    let regemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{3})+$/;

    btn.on('click', function() {
        inps.each(function(i, elm) {
            if (!$(elm).val()) {
                btn.attr('disabled', 'disabled');
                p.appendTo(btn).html('内容不能为空').css({
                    marginTop: 20,
                    color: 'red'
                });
            } else {
                alert('注册成功，点击登陆');
                window.open("JD_log.html");
            }
        });
    });
    inps.on('focus', function() {
        btn.removeAttr('disabled');
        p.empty();
    })
    inp2.on('input', function() {
        span1.html('');
        if (regpwd.test(inp2.val())) {
            span1.appendTo(sec_li).html("密码格式正确").css('color', 'green')
        } else {
            span1.appendTo(sec_li).html("请输入任意六到十密码").css('color', 'red')
        }
    });
    inp3.on('input', function() {
        span1.html('');
        if (regemail.test(inp3.val())) {
            span1.appendTo(thr_li).html("邮箱格式正确").css('color', 'green')
        } else {
            span1.appendTo(thr_li).html("请正确输入邮箱").css('color', 'red')
        }
    });
    inp1.on("input", function() {
        span1.html("");
        $.ajax({
            type: "get",
            url: "../php/regist1.php",
            data: {
                username: inp1.val(),
            },
            dataType: "json",
            success: function(res) {
                if (res.has) {
                    span1.appendTo(fir_li).html(res.mes).css('color', 'red')
                } else {
                    if (!inp1.val()) {
                        span1.appendTo(fir_li).html('用户名不能为空').css('color', 'red')
                    } else {
                        span1.appendTo(fir_li).html(res.mes).css('color', 'green')
                    }
                }
            }
        });
    });

})(jQuery);