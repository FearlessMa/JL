<?php
    //$conn=mysqli_connect('127.0.0.1','root','','project',3306);
	//$conn = mysqli_connect('w.rdc.sae.sina.com.cn', 'onzjmnxywj', '3142kx1i4wjy3zijyj153mh4jkjzk30wy35j0k00', 'app_mhc1030', 3306);
$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS, SAE_MYSQL_DB, SAE_MYSQL_PORT);
    $sql='SET NAMES UTF8';
    mysqli_query($conn,$sql);
?>