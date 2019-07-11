<?php
header ("content-type:text/html;charset=utf-8");

$mysql_conf = array(
    'host'=>'localhost:3306',
    'db_user'=>'root',
    'db_pwd'=>'',
    'db'=>'wzm'

 );
 //$mysqli = @new mysqli('localhost:3306','root','');//@用来屏蔽报错
 //var_dump($mysqli);
 //连接外面的进入界面，进入数据库
 $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']);
    //检测代码是否连接错误
    
    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno);

    }
    $mysqli->query("set names 'utf8';");//设置编码
    //选择数据库，选择里面的具体哪个数据库,这个下面还可以继续寻找某个具体的数据库表格
    $select_db=$mysqli->select_db($mysql_conf['db']);
    //检查数据库是否成功选择
    if(!$select_db){
        die('选择数据库'.$mysqli->error);
    }  
    ?>