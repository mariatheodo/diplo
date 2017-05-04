/*
 *  Place copyright or other info here...
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.learningTool.init();
    });

    codiad.learningTool = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        init: function() {
            $(document).ready(function() {
                $(".ace_line").select(function () {
                    text = this.getSelectedText().trim();
                    $(".ace_content").append("<div id='helper'></div>");
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
            });
        },

        getSelectedText: function() {
        var text = "";
        var activeElem = document.activeElement;
        var activeElemClassName = activeElem.className ? activeElem.className.toLowerCase() : null;
        if ((activeElemClassName == "ace_line") || (activeElemClassName == "ace_layer" &&
            /^(?:text|search|password|tel|url)$/i.test(activeElem.type)) &&
            (typeof activeElem.selectionStart == "number")) {
            text = activeElem.value.slice(activeElem.selectionStart, activeElem.selectionEnd);
        }
        else if (window.getSelection) {
            text = window.getSelection().toString();
        }
        return text;
        },

        SOME_METHOD: function() {
            alert('Hello World');
        },

        helpText: function (key, help) {
            this.key = key;
            this.help = help;
        },

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
        ]
    };

})(this, jQuery);
}

