<?php
include_once 'connect.php';

$phpword = $_POST['word'];

$sql = "SELECT * FROM list WHERE word='$phpword'";
$result = mysqli_query($conn, $sql);
$words = array();
while ($row = mysqli_fetch_assoc($result)) {
    $words[] = $row["explanation"];
}

foreach ($words as $word) {
    echo $word;
}

?>