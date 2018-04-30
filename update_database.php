<?php

if (isset($_POST['updateWord']) &&  isset($_POST['updateDesc'])) {
    $update = $_POST['updateWord'];
    $update_desc = $_POST['updateDesc'];
    $id = $_POST['id'];
}

$explanation = str_replace("'", "''", $update_desc);

include_once 'connect.php';

$sql = "UPDATE list SET word = '$update', explanation = '$explanation' WHERE id = '$id';";

//mysqli_query($conn, $sql);
$result = mysqli_query ($conn, $sql)
or die(mysqli_error($conn));
if (mysqli_affected_rows($conn) > 0) {
    echo "<div><label>Καταχωρήθηκε η λέξη: ". $update . "</label></div>";
    echo "<div>Με περιγραφή: </div>";
    echo "<div>" . $explanation . "</div>";
} else {
    echo "<div><h3>Η ενημέρωση απέτυχε</h3></div>";
}
mysqli_close($conn);
?>
<button class='btn-right' onclick='codiad.LearningTool.editDataBase(<?php echo json_encode($update);?>)'>Διόρθωση</button>
<button class='btn-right' onclick='codiad.LearningTool.editDataBasePanel()'>Πίσω</button>

