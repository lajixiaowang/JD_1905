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
                     <div class="price">￥${elm.price}</div>
                     <div class="num"><input type="text" value="${arr[0].num}"></div>
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
                        console.log(elm);
                        let index = shop.indexOf(elm);
                        shop.splice(index, 1);
                        shop = JSON.stringify(shop);
                        cookie.set('shop', shop);
                        location.reload();
                    }
                })
            });
            const inps = $("input:checkbox").not('#in0');
            const inpA = $("#in0");
            const all_price = $(".all-price i");
            const cars = $(".car");
            let sum = null;
            inpA.on('click', function() {
                if (inpA.prop("checked") === true) {
                    $.each(inps, function(i, elm) {
                        if ($(elm).prop('checked') === false) {
                            sum += parseInt($(this).parent().parent().find('i').html())
                        }
                    });
                    all_price.html(sum);
                    inps.prop("checked", true)
                } else {
                    sum = 0
                    all_price.html(sum)
                    inps.prop("checked", false);
                }
            });
            inps.on("click", function() {
                let num = parseInt($(this).parent().parent().find('i').html())
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