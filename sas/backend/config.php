<?php
$dbhost = "localhost";
$dbuser = "sasng_root";
$dbname = "sasng_farmers";
$dbpass = "Password123456";
$connection = mysqli_connect($dbhost, $dbuser, $dbpass,$dbname);
if(mysqli_connect_errno()){
	die("Database connection failed: ". mysqli_connect_error(). "(".mysqli_connect_errno().")");
}
function confirm_query($result){
	if(!$result){
	 return false;
}else{
  return true;
}
}
?>
