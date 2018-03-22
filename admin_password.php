<?php
require_once('../../common.php');

include_once 'connect.php';

if (isset($_POST['name']) && isset($_POST['password'])) {
    $username = $_POST['name'];
    $password = $_POST['password'];
}

$sql = "SELECT * FROM admin WHERE username ='$username'";
$result = mysqli_query($conn, $sql);
$pass_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    $pass_array[] = $row["password"];
}

//ο χρήστης δεν υπάρχει
if (sizeof($pass_array) < 1) {
    echo '<p>Το όνομα χρήστη είναι λανθασμένο.</p><button class="btn-right"'.
        'onclick="codiad.LearningTool.start()">Επανάληψη</button>';
    return;
}

$hashed_password = $pass_array[0];

if (password_verify($password, $hashed_password)) {
    // σωστός κωδικός
    $_SESSION['connect'] = 1;
    include_once 'admin_insert.php';
}
else {
    // λανθασμένος κωδικός
    echo '<p>Το password δεν είναι σωστό.</p><button class="btn-right"'.
        'onclick="codiad.LearningTool.start()">Επανάληψη</button>';
}

mysqli_close($conn);

?>