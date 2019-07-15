;
(function() {
    let cookie = {
        set: function(key, name, day) {
            if (day) {
                let date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = key + '=' + name + ';expires=' + date + ';path=/';
            } else {
                document.cookie = key + '=' + name + ';path=/';
            }
        },
        get: function(key) {
            if (document.cookie) {
                let cookie = document.cookie;
                let arr = cookie.split('; ');
                let newarr = [];
                arr.forEach(elm => {
                    newarr.push(elm.split('='));
                });
                for (let i = 0; i < newarr.length; i++) {
                    if (newarr[i][0] == key) {
                        return newarr[i][1]
                    }
                };
            }
        },
        remove: function(key) {
            cookie.set(key, '', -1);
        }
    }
    window.cookie = cookie;
})();