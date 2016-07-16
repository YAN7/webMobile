<?php

	header("Content-type:text/html;charset=utf-8");
	$user = $_GET["username"];
	$pwd = $_GET["pwd"];

	$dataUser = "yan7";
	$dataPwd = "123456";

	if ($user != $dataUser) {
		echo 1;
	} else if ($pwd != $dataPwd) {
		echo 2;
	} else {
		echo 3;
	}
?>





