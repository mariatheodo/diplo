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
        codiad.LearningTool.init();
    });

    codiad.LearningTool = {
        
        // Allows relative `this.path` linkage
        path: curpath,
        isVisible: false,
        panel: $('<div id="panel">'),

        init: function() {

            // Start your plugin here...
            var _this = this;
            this.panel.append('<div id="close-handle" class="icon-cancel" onclick="codiad.LearningTool.hidePanel();">' +
                '</div><div id="help"></div>');
            $('#workspace').append(this.panel);
            this.panel.hide();
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
                var manager = codiad.editor.getActive().commands;
                manager.addCommand({
                    name: 'Show PHP Learning Tool',
                    bindKey: {
                        "win": "Ctrl-Alt-L"
                    },
                    exec: function () {
                        _this.showHelp();
                    }
                });
                manager.addCommand({
                    name: 'Hide PHP Learning Tool',
                    bindKey: {
                        "win": "Ctrl-Alt-K"
                    },
                    exec: function () {
                        _this.hidePanel();
                    }
                });
            }
        },

        showHelp: function() {
            if (codiad.filemanager.getExtension(codiad.active.getPath()) == "php") {
                var selectedText = codiad.editor.getSelectedText().toLowerCase().trim();
                if(selectedText == "") {
                    this.hidePanel();
                }
                if(this.phpCode.hasOwnProperty(selectedText)) {
                    this.showPanel(this.phpCode[selectedText]);
                }
                else {
                    this.showPanel("Δεν βρέθηκε αντίστοιχο περιεχόμενο");
                }
            }
        },

        phpCode: {
            "echo": "<p>Η echo εμφανίζει το string στην οθόνη, δεν χρειάζεται παρενθέσεις.</p>" +
                "<p class='code'>echo 'Hello World';</p><p class='link'><a href='http://php.net/manual/en/function.echo.php' target='_blank'>http://php.net/manual/en/function.echo.php" +
                "</a></p>",
            "for": "<p>Δομή επανάληψης for:</p><p class='code'>for(έκφρ1; συνθήκη; έκφρ2) {</p><p class='code intend1'>κώδικας }</p>" +
                "<p>Στην αρχή εκτελείται η έκφραση1. Στην αρχή κάθε κύκλου ελέγχεται η συνθήκη, αν είναι TRUE τότε εκτελείται " +
                "ο κώδικας, διαφορετικά ο βρόγχος σταματάει. Στο τέλος κάθε κύκλου εκτελείται η έκφραση2.</p><p class='code'>for($i = 0; $i < 10; $i++) {</p><p class='code intend1'>" +
                "echo $i;</p><p class='code'> }</p><p class='link'><a href='http://php.net/manual/en/control-structures.for.php' target='_blank'>http://php.net/manual/en/control-structures.for.php" +
                "</a></p>",
            "print": "<p>Η print() είναι μια συνάρτηση που στέλνει τα περιεχόμενα της παραμέτρου στον browser.</p>" +
                "<p><span class='code'>print('Hello World');</span></p><p>Μπορεί να δουλέψει και" +
                " χωρίς παρενθέσεις.</p><p class='code'>print 'Παράδειγμα';</p><p class='code'>" +
                "$foo = 'Καλημέρα';</p><p class='code'>print $foo;</p><p class='code'>$name = 'Maria';</p><p class='code'>" +
                "print 'My name is $name';</p><p class='link'><a href='http://php.net/manual/en/function.print.php' target='_blank'>http://php.net/manual/en/function.print.php" +
                "</a></p>",
            "$globals": "<p>Η $GLOBALS περιέχει τα ονόματα και τις τιμές όλων των εσωτερικών μεταβλητών. Για να τις δείτε" +
                " γράψτε:</p><p class='code'>print_r($GLOBALS);</p><p class='link'><a href='http://php.net/manual/en/reserved.variables.globals.php' target='_blank'>" +
                "http://php.net/manual/en/reserved.variables.globals.php</a> </p>",
            "define": "<p>Η define() χρησιμοποιείται για ορισμό σταθερών</p><p class='code'>define('PI', 3.14);</p><p class='link'>" +
                "<a href='http://php.net/manual/en/function.define.php'>http://php.net/manual/en/function.define.php</a></p>",
            "defined": "<p>Η defined() επιστρέφει true αν η σταθερά είναι δηλωμένη.</p><p class='code'>if (defined('FIRSTNAME')) {</p>" +
                "<p class='code intend1'>echo 'Welcome '.FIRSTNAME;</p><p class='code'>}</p><p class='link'><a href='http://php.net/manual/en/function.defined.php' target='_blank'>" +
                "http://php.net/manual/en/function.defined.php</a> </p>",
            "if": "<p>Χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><p class='code'>if ($a > 0) {</p><p class='code intend1'>" +
                "//κώδικας1</p><p class='code'>}</p><p class='code'>elseif ($a < 0) {</p><p class='code intend1'>//κώδικας2</p>" +
                "<p class='code'>}</p><p class='code'>else {</p><p class='code intend1'>//κώδικας3</p><p class='code'>}</p><p>Τα σκέλη elseif " +
                "και else δεν είναι απαραίτητα.</p><p class='link'><a href='http://php.net/manual/en/control-structures.if.php' target='_blank'>" +
                "http://php.net/manual/en/control-structures.if.php</a></p>",
            "elseif": "<p>Χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><p class='code'>if ($a > 0) {</p><p class='code intend1'>" +
                "//κώδικας1</p><p class='code'>}</p><p class='code'>elseif ($a < 0) {</p><p class='code intend1'>//κώδικας2</p>" +
                "<p class='code'>}</p><p class='code'>else {</p><p class='code intend1'>//κώδικας3</p><p class='code'>}</p><p>Τα σκέλη elseif " +
                "και else δεν είναι απαραίτητα.</p><p class='link'><a href='http://php.net/manual/en/control-structures.if.php' target='_blank'>" +
                "http://php.net/manual/en/control-structures.if.php</a></p>",
            "else": "<p>Χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><p class='code'>if ($a > 0) {</p><p class='code intend1'>" +
                "//κώδικας1</p><p class='code'>}</p><p class='code'>elseif ($a < 0) {</p><p class='code intend1'>//κώδικας2</p>" +
                "<p class='code'>}</p><p class='code'>else {</p><p class='code intend1'>//κώδικας3</p><p class='code'>}</p><p>Τα σκέλη elseif " +
                "και else δεν είναι απαραίτητα.</p><p class='link'><a href='http://php.net/manual/en/control-structures.if.php' target='_blank'>" +
                "http://php.net/manual/en/control-structures.if.php</a></p>",
            "phpinfo": "<p>Η phpinfo() επιστρέφει πληροφορίες για την έκδοση της php και για το σύστημα στο οποίο τρέχει.</p><p class='link'><a href=" +
                "'http://php.net/manual/en/function.phpinfo.php' target='_blank'>http://php.net/manual/en/function.phpinfo.php</a></p>",
            "switch": "<p>Η switch είναι παρόμοια με την if. Χρησιμοποιείται όταν θέλουμε να συγκρίνουμε μια μεταβλητή με πολλές διαφορετικές " +
                "τιμές και να εκτελέσουμε διαφορετικό κώδικα ανάλογα με την περίπτωση.</p><p class='code'>switch($name) {</p>" +
                "<p class='code intend1'>case 'Mark':</p><p class='code intend2'>echo 'Welcome Mark';</p><p class='code intend2'>break;</p><p class='code intend1'>" +
                "case 'Chris':</p><p class='code intend2'>echo 'Nice to meet you!';</p><p class='code intend2'>break;</p>" +
                "<p class='code intend1'>default:</p><p class='code intend2'>echo 'I don't know you!';</p><p class='code intend2'>" +
                "break;</p><p class='link'><a href='http://php.net/manual/en/control-structures.switch.php' target='_blank'>" +
                "http://php.net/manual/en/control-structures.switch.php</a></p>",
            "while": "<p>Η δομή επανάληψης while εκτελεί τον κώδικα όσο η συνθήκη είναι αληθής.</p><p class='code'>$a = 5;</p>" +
                "<p class='code'>while ($a > 0) {</p><p class='code intend1'>echo $a--;</p>" +
                "<p class='code'>}</p><p class='link'><a href='http://php.net/manual/en/control-structures.while.php' target='_blank'>" +
                "http://php.net/manual/en/control-structures.while.php</a></p>"


            //new HelpText("$_post", "<p>Με την $_POST μεταφέρονται δεδομένα που υποβάλει ο χρήστης μέσα από μια HTML φόρμα. Αν στη " +
            //"φόρμα έχουμε:</p><p class='code'>\<input method='post' name='onoma'\></p><p>τότε στην PHP θα τα δούμε ως:</p>")
        },

        addToPhpCode: function(property, definition) {
            this.phpCode[property] = definition;
        },

        showPanel: function (text) {
            if(!this.isVisible) {
                this.isVisible = true;
                this.panel.show();
            }
            $('#help').html(text);
        },

        hidePanel: function() {
            if (this.isVisible) {
                this.isVisible = false;
                $('#help').html("");
                this.panel.hide();
            }
        }

    }

})(this, jQuery);
