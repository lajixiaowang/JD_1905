"use strict";!function(e){e("#sub").on("click",function(){e.ajax({type:"post",url:"../php/login.php",data:{username:e("#user").val(),password:e("#pwd").val()},dataType:"json",success:function(a){a.has?(cookie.set("uername",e("#user").val()),alert("登陆成功，点击跳转"),location.href="./index.html"):(alert("账号或密码不匹配，重新输入"),location.reload())}})})}(jQuery);