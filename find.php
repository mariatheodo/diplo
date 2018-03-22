<?php
include_once 'connect.php';

$phpword = $_POST['word'];

$sql = "SELECT * FROM list WHERE word='$phpword'";
$result = mysqli_query($conn, $sql);
$words = array();

//εύρεση λέξης στη βάση δεδομένων
while ($row = mysqli_fetch_assoc($result)) {
    $words[] = $row["explanation"];
}

foreach ($words as $word) {
    echo $word;
}
mysqli_close($conn);

?>