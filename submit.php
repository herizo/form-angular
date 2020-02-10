<?php 

if ( empty($_POST) ){
	$post = json_decode(file_get_contents("php://input") , true);
}
else {
	$post = $_POST;
}

var_dump($post);