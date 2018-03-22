<?php
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

$hashed_password = $pass_array[0];

if (password_verify($password, $hashed_password)) {
    $_SESSION['connect'] = true;
    echo 'Το password είναι σωστό.<button class="btn-right"'.
        'onclick="codiad.LearningTool.test()">Συνέχεια</button>';
}
else {
    echo 'Το password δεν είναι σωστό.<button class="btn-right"'.
        'onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>';
}

mysqli_close($conn);

?>