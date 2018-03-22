<?php
require_once('../../common.php');
?>

<!-- δημιουργία βασικής οθόνης για εισαγωγή λέξεων -->
<div class="settings">
    <label>Insert into PHP database</label>
    <hr>
</div>
<form id="dialog" method="post">
    <label><p>Ποια λέξη θα προστεθεί;</p></label>
    <input type="text" name="phpword" autofocus="autofocus">
    <label><p>Προσθέστε περιγραφή</p></label>
    <textarea rows="7" cols="30" name="description"></textarea>
    <label><p>Προσθέστε παράδειγμα</p></label>
    <textarea rows="5" cols="30" name="example"></textarea>
    <label><p>Προσθέστε λινκ</p></label>
    <input type="text" name="link">
    <button class="btn-right" onclick="codiad.LearningTool.addToDataBase()">Προσθήκη</button>
    <button class="btn-right" onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>

</form>