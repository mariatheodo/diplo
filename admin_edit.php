<?php
//include_once('../../common.php');
echo "<label><h3>Λίστα λέξεων</h3></label><hr>";

include_once 'connect.php';
$a="COUNT(*)";

$count = "SELECT $a FROM list;";

$result = mysqli_query($conn, $count);
$row = mysqli_fetch_assoc($result);
$num = $row[$a];
$rows = 9;
$columns = ceil($num / $rows);

$sql2 = "SELECT word FROM list ORDER BY word;";
$lines = mysqli_query($conn, $sql2);


?>

<table>
    <tbody>
    <?php
    $y = 0;
    while ($y < $rows) {
        echo "<tr>";
        $x = 0;
        while ($x < $columns && $row = mysqli_fetch_assoc($lines)) {
            $send_word = $row['word']; ?>
            <td><div class='cell' onclick='codiad.LearningTool.editDataBase(<?php echo json_encode($send_word); ?>) '>
                    <?php echo $row['word']; ?>
                </div>
            </td>
            <?php $x++;
        }

        $y++;
        echo "</tr>";
    }
    ?>
    </tbody>
</table>

<?php
mysqli_close($conn);
?>

<button class='btn-right' onclick='codiad.LearningTool.start()'>Πίσω</button>
