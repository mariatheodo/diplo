<?php
include_once 'connect.php';

if (isset($_POST['word']) && $_POST['word'] !== "") {
    $pword = $_POST['word'];
}
elseif ($_POST['word'] == "") {
    echo 'Παρακαλώ δώστε την λέξη που θα προστεθεί <button class="btn-right"'.
        'onclick="codiad.LearningTool.test()">Συνέχεια</button><button class="btn-right"'.
        'onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>';
    return;
}

$insert = "INSERT INTO list (word";
$values = " VALUES ('$pword'";

if (isset($_POST['desc']) && $_POST['desc'] !== "") {
    $description = $_POST['desc'];
    $description = "<p>".$description."</p>";
    $insert .= ", explanation";
    $values .= ", "."'$description";
}

if (isset($_POST['examp']) && $_POST['examp'] !== "") {
    $example = $_POST['examp'];
    $example = "<pre><p class=''code''>".$example."</p></pre>";
    if ($_POST['desc'] == "") {
        $insert .= ", explanation";
        $values .= ", "."'$example";
    }
    else {
        $values .= $example;
    }
}

if (isset($_POST['lin']) && $_POST['lin'] !== "") {
    $link = $_POST['lin'];
    $link = "<p class=''link''><a href=''".$link."''target=''_blank''>".$link."</a></p>";
    if ($_POST['desc'] == "" && $_POST['examp'] == "") {
        $insert .= ", explanation";
        $values .= ", "."'$link";
    }
    else {
        $values .= $link;
    }
}

$insert .= ")";
$values .= "')";

$sql = $insert.$values;
mysqli_query($conn, $sql);

if (mysqli_affected_rows($conn) > 0) {

    // μήνυμα επιτυχούς εισαγωγής
    echo 'Θέλετε να προσθέσετε κάτι άλλο;<button class="btn-right"'.
        'onclick="codiad.LearningTool.test()">Προσθήκη</button><button class="btn-right"'.
        'onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>';
}
else {
    // μήνυμα αποτυχίας εισαγωγής
    echo 'Η εισαγωγή απέτυχε<button class="btn-right"'.
        'onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>';
}

mysqli_close($conn);
?>
