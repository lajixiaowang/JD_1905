;
(function($) {
    let id = location.search.split('')[1];
    let incr = $(".incr");
    let decr = $(".decr");
    let money = $(".money");
    let inp = $(".details-right input");
    let addshop = $(".details-right a");
    $.ajax({
        type: "get",
        url: "../php/getDetails.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            const img_small = $('.small img');
            const img_big = $(".big img");
            const details = $('.details-right h2');
            $.each(res, function(i, elm) {
                let small_pic = JSON.parse(elm.pic)[1].src;
                let big_pic = JSON.parse(elm.pic)[2].src;
                img_small.attr('src', small_pic);
                img_big.attr('src', big_pic);
                details.html(elm.details1);
                money.html(elm.price);
            })
        }
    });

    $('.details-right i').bind("selectstart", function() {
        return false;
    });
    incr.on('click', function() {
        let inp_val = parseInt($(".details-right input").val());
        inp.val(inp_val + 1)
    });
    decr.on('click', function() {
        let inp_val = parseInt($(".details-right input").val());
        if (inp_val > 1) {
            inp.val(inp_val - 1);
        } else {
            inp.val(1);
        }
    });
    addshop.on("click", function() {
        console.log(id, inp.val(), money.html());
        addshopCar(id, money.html(), inp.val());
    })

    function addshopCar(id, price, num) {
        let shop = cookie.get('shop');
        let product = {
            "id": id,
            "price": price,
            "num": num
        };
        if (shop) {
            shop = JSON.parse(shop);
            if (shop.some(elm => elm.id == id)) {
                $.each(shop, function(i, elm) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
        product = JSON.stringify(product);
    }
})(jQuery);