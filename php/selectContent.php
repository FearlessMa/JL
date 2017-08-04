<?php
    header('Content-Type:application/json;charset=UTF-8');
    require('conn.php');
    $sql="SELECT * FROM content";
    $result=mysqli_query($conn,$sql);
    if($result==false){
        echo "{'code':0,'sql语句出错'：$result}";
    }else{
        $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $n=json_encode($list);
        		echo $n;
    }

?>