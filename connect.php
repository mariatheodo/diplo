<?php
// δίνονται τα στοιχεία της βάσης
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "php";

@$conn = mysqli_connect($servername, $username, $password, $dbname);		//γίνεται η σύνδεση με τη βάση
if (!$conn) {												
    die("Connection failed");
}
mysqli_set_charset($conn, 'utf8');
mysqli_query($conn, "SET NAMES 'utf8'");

?>