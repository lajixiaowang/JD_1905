<?php
//连接数据库

include('./commen.php');
//接受前端的内容

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$email = $_REQUEST['email'];
$sex = $_REQUEST['sex'];
$age = $_REQUEST['age'];

//和数据库的内容
$sql = "select * from user where user_name='$username'";
$result = $mysqli->query($sql);
if($result->num_rows>0){
    echo '<script>location.href="index.html"</script>';
   die;
}
$insertSql = "insert into user(user_name,user_password,user_email,user_sex,user_age)values('$username','$password','$email',$sex,$age)";
$res = $mysqli->query($insertSql);
if($res){
    echo '<script>alert("注册成功,点击跳转");location.href="../html/log.html";</script>';
}
$mysqli->close(); 

?>
