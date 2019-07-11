;
(function($) {
    class Magnify {
        constructor() {
            this.scale = $('.scale');
            this.small = $(".small");
            this.movebox = $('.movebox');
            this.big = $('.big');
            this.bigpic = $('.bigpic');
        }
        init() {
            let that = this;
            this.small.on('mouseover', function() {
                that.over();
                that.small.on('mousemove', function(ev) {
                    ev = ev || event;
                    that.move(ev);
                });
                that.small.on('mouseout', function() {
                    that.movebox.removeClass('show').addClass('hide');
                    that.big.removeClass('show').addClass('hide');
                });
            });
        }
        over() {
            let that = this;
            this.movebox.removeClass('hide').addClass('show');
            this.big.removeClass('hide').addClass('show');
            this.movebox.css({
                'width': this.small.width() * this.big.width() / this.bigpic.width() + 'px',
                'height': this.small.height() * this.big.height() / this.bigpic.height() + 'px'
            })
        }
        move(ev) {
            let that = this;
            let left = ev.pageX - this.scale.offset().left - this.movebox.width() / 2;
            let top = ev.pageY - this.scale.offset().top - this.movebox.height() / 2;
            if (left < 0) {
                left = 0
            } else if (left > this.small.width() - this.movebox.width()) {
                left = this.small.width() - this.movebox.width()
            };
            if (top < 0) {
                top = 0
            } else if (top > this.small.height() - this.movebox.height()) {
                top = this.small.height() - this.movebox.height()
            };
            this.movebox.css({
                'top': top + 'px',
                'left': left + 'px'
            });
            let prop1 = this.bigpic.width() / this.small.width();
            let prop2 = this.bigpic.height() / this.small.height();
            this.bigpic.css({
                'top': -top * prop2 + 'px',
                'left': -left * prop1 + 'px'
            })
        }
    }
    let magnify = new Magnify();
    magnify.init();
})(jQuery);