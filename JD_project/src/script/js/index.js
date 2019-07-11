// 跨域js,JD跨taobao
;
(function($) {
    let search = $('#search');
    let list = $("#list");
    let ser_btn = $('.icon-search');
    search.on('input', function() {
        $.ajax({
            type: "GET",
            url: "https://suggest.taobao.com/sug?code=utf-8&q=" + $(this).val() + "&_ksTS=1562554295033_3256&callback=cb&code=utf-8&area=c2c",
            dataType: "jsonp",
            success: function(res) {
                list.html("");
                $.each(res.result, function(i, elm) {
                    list.html(function(i, old) {
                        return "<li>" + elm[0] + "</li>" + old
                    }).find("li").css({
                        fontSize: 14,
                        lineHeight: 2,
                    })
                });
                list.find('li').on('click', function() {
                    location.href = "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&clk1=4b0debd53c957eb3d388d66c82f24a58&keyword=" + $(this)[0].innerText + "&page=0"
                });
                ser_btn.on('click', function() {
                    location.href = "https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&clk1=4b0debd53c957eb3d388d66c82f24a58&keyword=" + search.innerText + "&page=0"
                })
            }
        });
    })
})(jQuery);
//大图的banner
;
(function($) {
    class JD_slider {
        constructor() {
            this.wrapper = $('.inner_banner');
            this.ulBox = $('.pic_all')
            this.picList = $('.pic_all li');
            this.yuan = $('.slider_icon i');
            this.arr = $('.arrow');
            this.next = $('.next');
            this.pre = $('.prve');
            this.wid = this.picList.width()
            this.timer = null;
            this.box = $('slider');
            this.num = 0;
        }
        init() {
            let that = this;
            this.wrapper.hover(function() {
                clearInterval(that.timer)
            }, function() {
                that.autoplay();
            })
            this.yuan.on('mouseenter', function() {
                that.num = $(this).index();
                that.pic_switch();
            });
            this.next.on('click', function() {

                that.yuan.eq(that.num + 1).addClass('btn_act').siblings().removeClass('btn_act');
                that.num++;
                that.nextpic();
            })
            this.pre.on('click', function() {

                that.yuan.eq(that.num - 1).addClass('btn_act').siblings().removeClass('btn_act');
                that.num--;
                that.prepic();
            });
            this.autoplay();
        }
        autoplay() {
            let that = this;
            this.timer = setInterval(function() {
                that.yuan.eq(that.num + 1).addClass('btn_act').siblings().removeClass('btn_act');
                that.num++;
                that.nextpic();
            }, 3000);
        }
        nextpic() {
            if (this.num === 5) {
                this.num = 0;
            }
            this.pic_switch()
        }
        prepic() {
            if (this.num < 0) {
                this.num = 4;
            }
            this.pic_switch()
        }
        pic_switch() {
            let that = this;
            this.yuan.eq(this.num).addClass('btn_act').siblings().removeClass('btn_act');
            this.ulBox.css({
                left: -this.wid * this.num,
            })
            this.ulBox.stop(true, true).animate({
                opacity: 0
            }, 240, function() {
                that.ulBox.animate({
                    opacity: 1
                }, 240);
            })
        }
    }
    let slider = new JD_slider;
    slider.init()
})(jQuery);
//倒计时
;
(function($) {
    let spanH = $('.se-txt')[0];
    let spanM = $('.se-txt')[1];
    let spanS = $('.se-txt')[2];
    let timer = new Date('2019/7/15 00:00:00');
    timer = timer.getTime();
    timer = timer / 1000;
    let countDown = function() {
        let nowTime = new Date().getTime();
        nowTime = nowTime / 1000;
        let betTime = timer - nowTime;
        betTime = betTime % 86400;
        let hour = parseInt(betTime / 3600);
        betTime = betTime % 3600;
        let minute = parseInt(betTime / 60);
        betTime = betTime % 60;
        let second = parseInt(betTime);
        spanH.innerHTML = tow(hour);
        spanM.innerHTML = tow(minute);
        spanS.innerHTML = tow(second);
    };
    countDown();
    setInterval(countDown, 1000);

    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : n;
    }
})(jQuery);
//幻灯片
;
(function($) {
    $.fn.extend({
        banner: function(options) {
            let init_para = {
                autoplay: true, //是否轮播
                activeclass: 'btn_act', //下面切换用的小圆圈的样式
                evtype: 'mouseenter', //默认进入小圆圈切换图片的样式
                //   type: 'click',
                //switch: 'display',
            }
            $.extend(true, init_para, options);
            let that = this;
            class JD_slider {
                constructor() {
                    //console.log(that);
                    this.ulBox = that.find('.slider_list')
                    this.picList = that.find('.slider_list li');
                    this.yuan = that.find('.slider_icon i');
                    this.arr = that.find('.arrow');
                    this.next = that.find('.next');
                    this.pre = that.find('.prve');
                    this.timer = null;
                    this.box = that;
                    this.wid = this.picList.width();
                    this.num = 0;
                }
                init() {
                    let that = this;
                    let fir = this.picList.first().clone();
                    let last = this.picList.last().clone();
                    this.ulBox.css({
                        left: -this.wid
                    })
                    this.ulBox.append(fir);
                    this.ulBox.prepend(last);
                    this.yuan.on(init_para.evtype, function() {
                        that.num = $(this).index();
                        console.log(init_para.activeclass)
                        $(this).addClass(init_para.activeclass).siblings().removeClass(init_para.activeclass);
                        that.ulBox.stop(true, true).animate({
                            left: -(that.num + 1) * that.wid
                        }, 300)
                    });
                    if (init_para.autoplay === true || init_para.autoplay === 'true' || (($.type(init_para.autoplay) === 'number') && init_para.autoplay > 2000)) {
                        this.autoplay();
                    }
                }
                autoplay() {
                    let that = this;

                    if (init_para.autoplay === true || init_para.autoplay === 'true') {
                        let flag = 1;
                        this.timer = setInterval(function() {
                            that.movepic(flag);
                        }, 2000);
                    } else if (($.type(init_para.autoplay) === 'number')) {
                        let flag = 0;
                        this.timer = setInterval(function() {
                            that.movepic(flag);
                        }, init_para.autoplay);
                    }
                }
                movepic(flag) {
                    let that = this;
                    if (flag) {
                        let width = "-=" + this.wid;
                        that.yuan.eq(that.num + 1).addClass(init_para.activeclass).siblings().removeClass(init_para.activeclass);
                        this.ulBox.stop(true, true).animate({
                            left: width
                        }, 300, function() {
                            ++that.num;
                            if (that.num === that.picList.length) {
                                that.ulBox.css({
                                    left: -that.wid
                                })
                                that.num = 0;
                                that.yuan.eq(that.num).addClass(init_para.activeclass).siblings().removeClass(init_para.activeclass);
                            }
                        })
                    } else {
                        let width = "+=" + this.wid;
                        that.ulBox.stop(true, true).animate({
                            left: width
                        }, 300, function() {
                            --that.num;
                            if (that.num < 0) {
                                that.ulBox.css({
                                    left: -that.wid * that.picList.length
                                })
                                that.num = that.picList.length - 1;
                                that.yuan.eq(that.num).addClass(init_para.activeclass).siblings().removeClass(init_para.activeclass);
                            }
                        })
                    };
                }
            }
            let slider = new JD_slider;
            slider.init()
        }
    })
})(jQuery);
//无缝轮播
;
(function($) {
    $('.banner-left').banner({
        autoplay: true,
        activeclass: 'btn_act',
        evtype: 'mouseenter',
    });
})(jQuery)
//lazyload
;
(function($) {
    $('img.lazy').lazyload({
        effect: "fadeIn"
    })
})(jQuery);

//楼梯效果
;
(function($) {
    let step = $(".step");
    let liList = $(".step li");
    let louceng = $('.louceng')
    let last = $('.last');
    $(window).on('scroll', function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop >= 450) {
            step.show();
        } else {
            step.hide();
        }
        louceng.each(function(i, elm) {
            let top = louceng.eq(i).offset().top;
            if (top > scrollTop) {
                liList.not('.last').removeClass('acti')
                liList.not('.last').eq(i - 1).addClass('acti');
                return false;
            }
        })
    });
    liList.not('.last').on('click', function() {
        $(this).addClass('acti').siblings().removeClass('acti');
        let top = louceng.eq($(this).index() + 1).offset().top;
        $('html,body').animate({
            scrollTop: top
        })
    })
    last.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 200)
    })
})(jQuery);
//十张渲染图片



;
(function($) {
    console.log(2345678)
    $.ajax({
        type: "get",
        url: "../php/getData.php",
        dataType: "json",
        success: function(res) {
            let ul1 = $('.more_inner_block .fir_ul');
            let ul2 = $(".more_inner_block .sec_ul");
            let template = "";
            res.forEach(elem => {
                let pic = JSON.parse(elem.pic);
                console.log(pic[0].src)
                if (elem.id < 6) {
                    template = `
                <li>
                     <a href="./JD_details.html?${elem.id}">
                        <div class="more_img">
                          <img class="lazy" data-original="${pic[0].src}" alt="">
                        </div>
                        <div class="tu_details">${elem.details1}</div>
                        <div><span>￥${elem.price}</span><span class="jian">满减</span></div>
                     </a>
                </li>
                `;
                    ul1.append(template);
                } else if (elem.id < 16 && elem.id > 10) {
                    template = `
                <li>
                     <a href="./JD_details.html?${elem.id}">
                        <div class="more_img">
                          <img class="lazy" data-original="${pic[0].src}"   alt="">
                        </div>
                        <div class="tu_details">${elem.details1}</div>
                        <div><span>￥${elem.price}</span><span class="jian">满减</span></div>
                     </a>
                 </li>
                `;
                    ul2.append(template);
                }
                $('.fir_ul img.lazy').lazyload({
                    effect: "fadeIn"
                });
                $('.sec_ul img.lazy').lazyload({
                    effect: "fadeIn"
                });
            });
        }
    })
})(jQuery);
//地图显示
;
(function($) {
    $(function() {
        var all_local = $('.all-local');
        var inner_local = $('.inner-local');

        inner_local.hover(
            function() {
                all_local.css({
                    'display': 'block'
                })
            },
            function() {
                all_local.mouseleave(function() {
                    all_local.css({
                        'display': 'none'
                    })
                })
            }
        )
    })
})(jQuery);
//top点击消失
;
(function($) {
    let close = $(".icon-close");
    let nav_up = $(".nav-up");
    close.on('click', function() {
        console.log(1345)
        nav_up.css('display', 'none')
    })
})(jQuery);