/*
 *  Place copyright or other info here...
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';
    console.log(path + " ..... " + curpath);

    // Instantiates plugin
    $(function() {    
        codiad.LearningTool.init();
    });

    codiad.LearningTool = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        init: function() {

            // Start your plugin here...
            var _this       = this;
            amplify.subscribe('active.onOpen', function(path){
                _this.addKeyBindings();
            });

        },

        /**
         * 
         * This is where the core functionality goes, any call, references,
         * script-loads, etc...
         * 
         */
        addKeyBindings: function() {
            var _this = this;
            if (codiad.editor.getActive() !== null) {
                //Add initial keyboard command
                var _commandManager = codiad.editor.getActive().commands;
                _commandManager.addCommand({
                    name: 'PHP Learning Tool',
                    bindKey: {
                        "win": "Ctrl-Alt-L"
                    },
                    exec: function () {
                        _this.showHelp();
                    }
                });
            }
        },

        showHelp: function() {
            //alert("test passed");
            var selectedText = codiad.editor.getSelectedText().toLowerCase().trim();
            if(selectedText == "") {
                return;
            }
            if(this.phpCode.hasOwnProperty(selectedText)) {
                alert(this.phpCode[selectedText]);
            }

        },

        test: function() {
            alert("what is this?");
        },

        phpCode: {
            "echo": "<p>Η echo εμφανίζει το string στην οθόνη, δεν χρειάζεται παρενθέσεις.</p><p><h4>Παράδειγμα</h4></p>" +
            "<p class='code'>echo 'Hello World';</p>",
            "for": "<p><h4>Παράδειγμα</h4></p><p class='code'>for($i = 0; $i < 10; $i++) {</p><p class='code intend1'>" +
            "echo $i;</p><p class='code'> }</p>",
            "print": "<p>Η print() είναι μια συνάρτηση που στέλνει τα περιεχόμενα της παραμέτρου στον browser.</p>" +
            "<p><span class='code'>print('Hello World');</span></p><p>Μπορεί να δουλέψει και" +
            " χωρίς παρενθέσεις.</p><p class='code'>print 'Παράδειγμα';</p><p class='code'>" +
            "$foo = 'Καλημέρα';</p><p class='code'>print $foo;</p><p class='code'>$name = 'Maria';</p><p class='code'>" +
            "print 'My name is $name';</p>",
            "$globals": "<p>Η $GLOBALS περιέχει τα ονόματα και τις τιμές όλων των εσωτερικών μεταβλητών. Για να τις δείτε" +
            " γράψτε:</p><p class='code'>print_r($GLOBALS);</p>",
            "define": "<p>Η define() χρησιμοποιείται για ορισμό σταθερών</p><p class='code'>define('PI', 3.14);</p>",
            "defined": "<p>Επιστρέφει true αν η σταθερά είναι δηλωμένη</p><p class='code'>if (defined('FIRSTNAME')) {</p>" +
            "<p class='code intend1'>echo 'Welcome'.FIRSTNAME;</p><p class='code'>}</p>",
            "if": "<p>Χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><p class='code'>if ($a > 0) {</p><p class='code intend1'>" +
            "//κώδικας</p><p class='code'>}</p><p class='code'>elseif ($a < 0) {</p><p class='code intend1'>//κώδικας</p>" +
            "<p class='code'>}</p><p class='code'>else {</p><p class='code intend1'>//κώδικας</p><p class='code'>}</p><p>Τα σκέλη if " +
            "και else if δεν είναι απαραίτητα.</p>"
            //new HelpText("$_POST", "<p>Με την $_POST μεταφέρονται δεδομένα που υποβάλει ο χρήστης μέσα από μια HTML φόρμα. Αν στη " +
            //"φόρμα έχουμε:</p><p class='code'>\<input method='post' name='onoma'\></p><p>τότε στην PHP θα τα δούμε ως:</p>")
        },

        addToPhpCode: function(property, definition) {
            this.phpCode[property] = definition;
        }

    }

})(this, jQuery);
