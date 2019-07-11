<?php
    header('content-type:text/html;charst=utf-8');
    //连接数据库，需要主机，用户名，密码，数据库名
    define('HOST','localhost'); 
    define('REGNAME','root');
    define('PWD','');
    define('WZM','wzm');
    $conn=@new mysqli(HOST,REGNAME,PWD,WZM);
    if($conn->connect_error){
        die('数据库连接失败:'.$conn->connect_error);
    };
    $conn->query('SET NAMES UTF8');
     $username=$_POST['username'];
     $pwd=sha1($_POST['password']);
     $sql = "select * from usertable where username='$username' and password='$pwd'";
     $result=$conn->query($sql);
     if($result->num_rows>0){  
        echo '{"has":true}';
     }else{
        echo '{"has":false}';
     };
        
     mysqli_close($conn);
   
?>