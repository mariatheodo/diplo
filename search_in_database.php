<?php

if (isset($_POST['search'])) {
    $search = $_POST['search'];
}
include_once 'connect.php';
$sql = "SELECT id, explanation FROM list WHERE word = '$search';";
$line = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($line)) {
    $description = $row['explanation'];
    $id = $row['id'];
}
?>

<div class="settings">
    <label><div>Edit word in PHP database</div></label>
    <hr>
</div>
<form id="editDialog" method="post">
    <label><div><p>Θα επεξεργαστείτε την λέξη <?php echo $search ?> </p></div></label>

    <input type="text" name="editWord" value="<?php echo $search ?>">
    <textarea rows="15" cols="30" name="description"> <?php echo $description; ?> </textarea>

    <button class='btn-right' onclick='codiad.LearningTool.updateDataBase(<?php echo json_encode($id); ?>)'>Αλλαγή</button>
    <button class='btn-right' onclick='codiad.LearningTool.deleteFromDataBase(<?php echo json_encode($id); ?>)'>Διαγραφή</button>


</form>
<button class='btn-right' onclick='codiad.LearningTool.editDataBasePanel()'>Πίσω</button>