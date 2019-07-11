<?php
    header('content-type:text/html;charst=utf-8');
    //连接数据库，需要主机，用户名，密码，数据库名
    define('HOST','localhost'); 
    define('REGNAME','root');
    define('PWD','');
    define('PRODUCT','product');
    $conn=@new mysqli(HOST,REGNAME,PWD,PRODUCT);
    if($conn->connect_error){
        die('数据库连接失败:'.$conn->connect_error);
    };
    $conn->query('SET NAMES UTF8');
    $id=$_GET['id'];
 $sql="select * from jd where id=$id";

 $res=$conn->query($sql);

 $arr=array();
 while($row = $res->fetch_assoc()){
    array_push($arr,$row);
}
 $json=json_encode($arr);
 echo $json;

 $conn->close();
?>