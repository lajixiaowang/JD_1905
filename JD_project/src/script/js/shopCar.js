//用户欢迎
;
(function($) {
    if (cookie.get('uername')) {
        $(".first-li b").html(cookie.get('uername') + "先生，您已登陆");
        $(".first-li a:first").attr({
            href: "#"
        });
        $(".first-li a:first").on('click', function() { alert('您已登陆，请勿重复操作'); });
        $(".first-li a:last").css({
            display: 'none'
        });
        $(".first-li .seconed").css({
            display: '',
            color: '#666'
        }).on('click', function() {
            $(".first-li b").html('访客，请您登录');
            $(this).css({
                display: 'none'
            })
            cookie.remove('uername');
            $(".first-li a:last").css({
                display: ''
            });
            cookie.remove('uername')
            location.reload();
        });
        $(".first-li a:last").attr({
            display: 'none'
        });
        //cookie.remove('uername');
    }
})(jQuery);


;
(function($) {
    let shop = cookie.get('shop');

    if (shop) {
        shop = JSON.parse(shop);
        var idList = shop.map(elm => elm.id).join();
    };
    $.ajax({
        type: "get",
        url: "../php/Car.php",
        data: {
            "idList": idList
        },
        dataType: "json",
        success: function(data) {
            let template = "";
            data.forEach(function(elm) {
                let pic = JSON.parse(elm.pic);
                let arr = shop.filter((val, i) => {
                    return val.id === elm.id;
                });
                template = `
                <div class="car">
                     <div class="inp"><input type="checkbox" class="in1"></div>
                     <div><img src="${pic[0].src}" alt="" style="width: 100px;height:100px;"></div>
                     <div class="title"><a href="">${elm.title}</a></div>
                     <div class="price">￥<i>${elm.price}</i></div> 
                      <div class="num"><span id="sp_l">-</span><input type="text" class="change" value="${arr[0].num}"><span id="sp_r">+</span></div>
                     <div class="all-num">￥<i>${(arr[0].num*elm.price).toFixed(2)}</i></div>
                     <div id="${elm.id}" class="del ${elm.id}">删除</div>
                </div>
                `;
                $('.car-wrap').append(template);
            });
            $(".del").on('click', function() {
                $(this).parent().remove();
                let that = $(this)[0];
                $.each(shop, function(i, elm) {
                    if ($(that).attr('id') == elm.id) {
                        let index = shop.indexOf(elm);
                        shop.splice(index, 1);
                        shop = JSON.stringify(shop);
                        cookie.set('shop', shop);
                    }
                })
            });
            const inps = $("input:checkbox").not('#in0');
            const inpA = $("#in0");
            const all_price = $(".all-price i");
            const cars = $(".car");
            const span = $('.car span');
            const del_all = $(".del_all");
            let sum = null;
            $('.car span').bind("selectstart", function() {
                return false;
            });
            span.on('click', function() {
                console.log(cookie.get('shop'));
                console.log(idList);
                if ($(this)[0].id === 'sp_r') {
                    let inp_val = parseInt($(this).siblings('.change').val());
                    $(this).siblings('.change').val(inp_val + 1);
                    summ = parseInt(parseInt($(this).parent().siblings('.price').find('i').html())) * parseInt($(this).siblings('.change').val())
                    $(this).parent().siblings('.all-num').find("i").html(summ.toFixed(2));
                    if ($(this).parent().siblings('.inp').find('.in1').prop('checked') === true) {
                        sum += parseInt($(this).parent().siblings('.price').find('i').html())
                        all_price.html(sum);
                    }
                } else if (($(this)[0].id === 'sp_l')) {
                    let inp_val = parseInt($(this).siblings('.change').val());
                    if (inp_val > 1) {
                        $(this).siblings('.change').val(inp_val - 1);
                        summ = parseInt(parseInt($(this).parent().siblings('.price').find('i').html())) * parseInt($(this).siblings('.change').val())
                        $(this).parent().siblings('.all-num').find("i").html(summ.toFixed(2))
                        if ($(this).parent().siblings('.inp').find('.in1').prop('checked') === true) {
                            sum -= parseInt($(this).parent().siblings('.price').find('i').html())
                            all_price.html(sum);
                        }
                    } else {
                        $(this).siblings('.change').val(1);
                        $(this).parent().siblings('.all-num').find("i").html($(this).parent().siblings('.price').find('i').html())

                    }
                }

            });
            if (inpA.prop("checked") === true) {
                del_all.on('click', function() {
                    cookie.remove("shop");
                    cars.empty();
                    location.reload();
                })
            };
            inpA.on('click', function() {
                if (inpA.prop("checked") === true) {
                    //sum = 0;
                    del_all.on('click', function() {
                        cookie.remove("shop");
                        cars.empty();
                        location.reload();
                    })
                    $.each(inps, function(i, elm) {
                        if ($(elm).prop('checked') === false) {
                            sum += parseInt($(this).parent().parent().find('.all-num i').html());
                        }
                    });
                    console.log(sum);
                    all_price.html(sum);
                    inps.prop("checked", true)
                } else {
                    sum = 0;
                    all_price.html(sum);
                    inps.prop("checked", false);
                }
            });
            inps.on("click", function() {

                let num = parseInt($(this).parent().parent().find('.all-num i').html())
                if ($(this).prop('checked') === true) {
                    sum += num;
                    all_price.html(sum)
                } else {
                    sum -= num;
                    all_price.html(sum)
                }
                if (inps.length === $("input:checked").not("#in0").length) {
                    inpA.prop("checked", true);
                } else {
                    inpA.prop("checked", false)
                }
            });
        }
    });

})(jQuery)