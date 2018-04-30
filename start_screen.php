<?php
require_once('../../common.php');

//ελέγχει αν ο διαχειριστής έχει ήδη δώσει τα στοιχεία του
if (isset($_SESSION['connect']) && $_SESSION['connect'] == 1) {
    include_once 'admin_choice.php';
}
// δημιουργεί την οθόνη εισαγωγής στοιχείων του διαχειριστή
else { ?>
    <div class="settings">
        <label><div>Δώστε τα στοιχεία του διαχειριστή:</div></label>
        <hr>
    </div>
    <form id="pass_dialog" method="post">
        <label><p>Δώστε το όνομα του διαχειριστή:</p></label>
        <input type="text" name="username" autofocus="autofocus">
        <label><p>Δώστε το password:</p></label>
        <input type="password" name="password">
        <button class="btn-right" onclick="codiad.LearningTool.passwordCheck()">Υποβολή</button>
        <button class="btn-right" onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>
    
    </form>
<?php } ?>



