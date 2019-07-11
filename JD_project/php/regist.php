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
    if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])){
         $username=$_POST['username'];
         $pwd=sha1($_POST['password']);
         $email=$_POST['email'];
         $sql="insert usertable values(null,'$username','$pwd','$email',NOW())";
         $conn->query($sql);
    }else{
        exit('此为非法操作');
    }
   
?>