;
(function($) {
    $.fn.extend({
        banner: function(options) {
            let init_para = {
                autoplay: false, //是否轮播
                activeclass: 'btn_act', //下面切换用的小圆圈的样式
                evtype: 'mouseenter', //默认进入小圆圈切换图片的样式
            }
            $.extend(true, init_para, options);
            let that = this;
            class JD_slider {
                constructor() {
                    this.ulBox = that.find('.ul1-wraper');
                    this.picList = that.find('.ul1-wraper ul');
                    this.yuan = that.find('.slider_icon i');
                    this.arr = that.find('.arrow');
                    this.next = that.find('.net');
                    this.pre = that.find('.pre');
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
                    this.box.hover(function() {
                        that.arr.show();
                        clearInterval(that.timer);
                    }, function() {
                        that.arr.hide();

                    })

                    this.next.on('click', function() {
                        let flag = 1;
                        that.movepic(flag);
                    })
                    this.pre.on('click', function() {
                        let flag = 0;
                        that.movepic(flag);

                    });

                }

                movepic(flag) {
                    let that = this;
                    if (flag) {
                        let width = "-=" + this.wid;
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
})(jQuery)