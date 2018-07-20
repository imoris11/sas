<?php
require_once("config.php");
$json = json_decode(file_get_contents('php://input'), true);
  global $connection;
  $name = $json['name'];
  $gender = $json['gender'];
  $age = $json['age'];
  $crops = $json['crops'];
  $variety = $json['variety'];
  $community = $json['community'];
  $size= $json['size'];
  $coordinates= $json['coordinates'];
  $organization= $json['organzation'];
  $group= $json['group'];
  $lga= $json['lga'];
  $state= $json['state'];
  $phone= $json['phone'];
  $bvn= $json['bvn'];
  $query = "INSERT INTO farmers (name, gender, age, state, lga, community, phone, bvn, crops, variety, size, group, coordinates, organization) VALUES('{$name}', '{$gender}', '{$age}', '{$state}', '{$lga}', '{$community}','{$phone}', '{$bvn}', '{$crops}', '{$variety}', '{$size}', '{$group}', '{$coordinates}', '{$organization}')";
    if(confirm_query(mysqli_query($connection, $query))){
      $myArray['success'] = '1';
      echo json_encode($myArray);
    }else{
    $myArray['success'] = '0';
    echo json_encode($myArray);
  }
?>
