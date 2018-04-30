<?php

if (isset($_POST['did'])) {
    $id = $_POST['did'];
}
include_once 'connect.php';

$sql = "DELETE from list WHERE id='$id'";

mysqli_query($conn, $sql);

if (mysqli_affected_rows($conn) > 0) {
    echo("<div><h3>Η λέξη διαγράφηκε</h3></div>");
} else {
    echo("<div><h3>Η διαγραφή απέτυχε</h3></div>");
}
mysqli_close($conn);
?>
<button class='btn-right' onclick='codiad.LearningTool.editDataBasePanel()'>Πίσω</button>
