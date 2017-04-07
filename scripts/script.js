$(document).ready(function() {
	$("textarea").select(function() {
		text = getSelectedText().trim();
		for (var i = 0; i < phpCode.length; i++) {
			if (phpCode[i].key === text) {
				$("#helper").html(phpCode[i].help);
				return;
			}
			else {
				$("#helper").html("");
			}
		}
	});
})

//επιστρέφει το επιλεγμένο κείμενο
function getSelectedText() {
	var text = "";
    	var activeElem = document.activeElement;
    	var activeElemTagName = activeElem ? activeElem.tagName.toLowerCase() : null;
   	if ((activeElemTagName == "textarea") || (activeElemTagName == "input" &&
      		/^(?:text|search|password|tel|url)$/i.test(activeElem.type)) &&
      		(typeof activeElem.selectionStart == "number")) {
        		text = activeElem.value.slice(activeElem.selectionStart, activeElem.selectionEnd);
    	} 
    	else if (window.getSelection) {
        	text = window.getSelection().toString();
  	}
    	return text;
}

var phpCode = [new HelpText("echo", "<p>Η echo εμφανίζει το string στην οθόνη, δεν χρειάζεται παρενθέσεις.</p><p><h4>Παράδειγμα</h4></p>" +
		"<p class='code'>echo 'Hello World';</p>"),
	new HelpText("for", "<p><h4>Παράδειγμα</h4></p><p class='code'>for($i = 0; $i < 10; $i++) {</p><p class='code intend1'>" +
		"echo $i;</p><p class='code'> }</p>"),
	new HelpText("print", "<p>Η print() είναι μια συνάρτηση που στέλνει τα περιεχόμενα της παραμέτρου στον browser.</p>" +
		"<p><span class='code'>print('Hello World');</span></p><p>Μπορεί επίσης να δουλέψει" +
		" χωρίς παρενθέσεις.</p><p class='code'>print 'Παράδειγμα';</p><p class='code'>" +
		"$foo = 'Καλημέρα';</p><p class='code'>print $foo;</p><p class='code'>$name = 'Maria';</p><p class='code'>" +
		"print 'My name is $name';</p>"),
	new HelpText("$GLOBALS", "<p>Η $GLOBALS περιέχει τα ονόματα και τις τιμές όλων των εσωτερικών μεταβλητών. Για να τις δείτε" +
		" γράψτε:</p><p class='code'>print_r($GLOBALS);</p>"),
	//new HelpText("$_POST", "<p>Με την $_POST μεταφέρονται δεδομένα που υποβάλει ο χρήστης μέσα από μια HTML φόρμα. Αν στη " +
		//"φόρμα έχουμε:</p><p class='code'>\<input method='post' name='onoma'\></p><p>τότε στην PHP θα τα δούμε ως:</p>")
		];

function HelpText(key, help) {
	this.key = key;
	this.help = help;
}

var editor = CodeMirror.fromTextArea(document.getElementsByTagName("textarea")[0], {
	lineNumbers: true,
	mode: "application/x-httpd-php",
	lineWrapping: true
});

editor.setValue("<?php\n");