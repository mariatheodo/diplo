<?php
require_once('../../common.php');


session_start([
    'cookie_lifetime' => 86400,
]);

if (isset($_SESSION['connect']) && $_SESSION['connect'] === true) {
    include_once 'admin_insert.php';
}
else { ?>
    <div class="settings">
        <label>Δώστε τα στοιχεία του διαχειριστή:</label>
        <hr>
    </div>
    <form id="pass_dialog" method="post">
        <label>Δώστε το όνομα του διαχειριστή:</label>
        <input type="text" name="username" autofocus="autofocus">
        <label>Δώστε το password:</label>
        <input type="password" name="password">
        <button class="btn-right" onclick="codiad.LearningTool.passwordCheck()">Υποβολή</button>
        <button class="btn-right" onclick="codiad.LearningTool.hideAdminPanel()">Κλείσιμο</button>
    
    </form>
<?php } ?>



