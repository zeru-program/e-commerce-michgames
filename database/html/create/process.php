<?php

// declare your database, default server http -> localhost:3306
$SERVER_DB = 'localhost:3306';
$USER_DB = 'root';
$PASS_DB = '';
$NAME_DB = 'exampleDb';

$koneksi = mysqli_connect($SERVER_DB, $USER_DB, $PASS_DB, $NAME_DB);

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users(name, username, email, password) VALUES ('$name', '$username', '$email', '$password')";

mysqli_query($koneksi, $sql);
?>
