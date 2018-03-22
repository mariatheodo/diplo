<?php
require_once('../../common.php');
?>
<div class="settings">
    <label>Insert into PHP database</label>
    <hr>
</div>
<form id="dialog" method="post">
    <label>Ποια λέξη θα προστεθεί;</label>
    <input type="text" name="phpword" autofocus="autofocus">
    <label>Προσθέστε περιγραφή</label>
    <textarea rows="7" cols="30" name="description"></textarea>
    <label>Προσθέστε παράδειγμα</label>
    <textarea rows="5" cols="30" name="example"></textarea>
    <label>Προσθέστε λινκ</label>
    <input type="text" name="link">
    <button class="btn-right" onclick="codiad.LearningTool.addToDataBase()">Προσθήκη</button>
    <button class="btn-right" onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>

</form>