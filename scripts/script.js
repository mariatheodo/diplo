$(document).ready(function() {
	$("textarea").select(function() {
		text = getSelectedText().trim();
		for (var i = 0; i < phpCode.length; i++) {
			if (phpCode[i].key == text) {
				$("#helper").html(phpCode[i].help);
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

var phpCode = [new HelpText("echo", "void echo string, εμφανίζει το string στην οθόνη, δεν χρειάζεται παρενθέσεις"),
				new HelpText("for", 'Παράδειγμα: for($i = 0; $i < 10; $i++) { echo $i;}')];

function HelpText(key, help) {
	this.key = key;
	this.help = help;
}