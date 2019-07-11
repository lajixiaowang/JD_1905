;
(function($) {
    $('#sub').on('click', function() {
        $.ajax({
            type: "post",
            url: "../php/login.php",
            data: {
                "username": $('#user').val(),
                "password": $('#pwd').val()
            },
            dataType: 'json',
            success: function(data) {
                console.log(data.has);
                if (data.has) {
                    alert("登陆成功，点击跳转")
                    location.href = "./JD.html"
                } else {
                    alert('账号或密码不匹配，重新输入')
                    location.reload();
                }
            }
        });
    })
})(jQuery)