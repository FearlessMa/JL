<?php
    header('Content-Type:application/json;charset=UTF-8');
    require('conn.php');
    $sql="SELECT * FROM navList";
    $sql1="SELECT * FROM content";
    $result=mysqli_query($conn,$sql);
    $result1=mysqli_query($conn,$sql1);
    if($result==false&&$result1==false){
        echo "{'code':0,'sql语句出错'：$result}";
    }else{
        $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $list1=mysqli_fetch_all($result1,MYSQLI_ASSOC);
        $array  = array(
            "navList"  =>  $list ,
            "content"  =>  $list1 ,
        );
        echo JSON_encode($array);

    }

?>