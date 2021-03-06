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
        adminPanel: $('<div id="adminPanel" draggable="true">'),

        init: function () {

            // Start your plugin here...
            var _this = this;

            // δημιουργούνται οι οθόνες του plugin
            this.panel.append('<div <div class="icon-cancel, close-handle" onclick="codiad.LearningTool.hidePanel();">' +
                '</div><label>Επεξήγηση</label><hr><div id="help"></div>');
            this.adminPanel.append('<div id="adminPanelheader"><p class="icon-cancel, close-handle" ' +
                'onclick="codiad.LearningTool.hideAdminPanel();"></p></div><div id="admin"></div>');
            $(function () {
                $("#adminPanel").draggable({handle: "label"});
                $("#panel").draggable({handle: "label"});
            });
            $('#workspace').append(this.panel)
                .append(this.adminPanel);
            this.panel.hide();
            this.adminPanel.hide();
            amplify.subscribe('active.onOpen', function (path) {
                _this.addKeyBindings();
            });

        },

        /**
         *
         * This is where the core functionality goes, any call, references,
         * script-loads, etc...
         *
         */
        addKeyBindings: function () {
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
                        _this.findWord();
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

        // εμφανίζει την οθόνη της βοήθειας
        showPanel: function (text) {
            var textArea = $('#help');
            if (!this.isVisible) {
                this.isVisible = true;
                this.panel.show();
            }

            // εντοπίζει την λέξη στην βάση δεδομένων
            $.post(this.path + 'find.php', {word: text}, function (data) {
                if (data === "") {
                    textArea.html("Δεν βρέθηκε περιεχόμενο για την λέξη " + text);
                }
                else {
                    textArea.html(data);
                }
            })
        },

        // κρύβει την οθόνη της βοήθειας
        hidePanel: function () {
            var textArea = $('#help');
            if (this.isVisible) {
                this.isVisible = false;
                textArea.html("");
                this.panel.hide();
            }
        },

        // βρίσκει την λέξη στη θέση του κέρσορα
        findWord: function (position) {
            if (codiad.filemanager.getExtension(codiad.active.getPath()) == "php") {
                if (codiad.editor.getActive() === null) {
                    this.hide();
                    return false;
                }

                if (typeof(position) == 'undefined') {
                    position = codiad.editor.getActive().getCursorPosition();
                }
                var token = codiad.editor.getActive().getSession().getTokenAt(position.row, position.column);
                var word = token.value;

                // αντικαθιστά το μονό εισαγωγικό με διπλό
                if (word.startsWith("'")) {
                    word = '"' + word.substring(1, word.length - 1) + '"';
                }

                this.showPanel(word);
            }
        },

        // εμφανίζει την αρχική οθόνη του διαχειριστή
        start: function () {
            var textArea = $('#admin');
            if (!this.isVisible) {
                this.isVisible = true;
                this.adminPanel.show();
            }
            $.post(this.path + 'start_screen.php', function (data) {
                textArea.html(data);
            })
        },

        // οδηγεί στην οθόνη εισαγωγής λέξεων
        createAdminPanel: function () {

            var textArea = $('#admin');
            if (!this.isVisible) {
                this.isVisible = true;
                this.adminPanel.show();
            }
            $.post(this.path + 'admin_insert.php', function (data) {
                textArea.html(data);
            })
        },

        // προσθέτει την λέξη - εξήγηση στην βάση δεδομένων
        addToDataBase: function () {

            var textArea = $('#admin');
            var path = this.path;
            $('#dialog').submit(function (e) {
                e.preventDefault();

                var textArray = $(this).serializeArray();
                var wordp = textArray[0].value;
                var description = textArray[1].value;
                var example = textArray[2].value;
                var link = textArray[3].value;
                $.post(path + 'admin_database.php', {word: wordp, desc: description, examp: example, lin: link},
                    function (data) {
                        textArea.html(data);
                    });
            });
        },

        // δημιουργεί την λίστα των εντολών που έχουν δοθεί
        editDataBasePanel: function () {
            var textArea = $('#admin');
            var path = this.path;
            $.post(path + 'admin_edit.php', function (data) {
                textArea.html(data);
            });

        },

        // δημιουργεί το πλαίσιο για την επεξεργασία δοσμένων εντολών
        editDataBase: function (clickedWord) {
            var path = this.path;
            var textArea = $('#admin');

            $.post(path + 'search_in_database.php', {search: clickedWord},
                function (data) {
                    textArea.html(data);
                });
        },

        // καταχωρεί στη βάση την επεξεργασμένη εντολή
        updateDataBase: function (id) {
            var textArea = $('#admin');
            var path = this.path;
            $('#editDialog').submit(function (e) {
                e.preventDefault();

                var textArray = $(this).serializeArray();
                var parsedId = parseInt(id);
                var clickedWord = textArray[0].value;
                var description = textArray[1].value;
                $.post(path + 'update_database.php', {updateWord: clickedWord, updateDesc: description, id: parsedId},
                    function (data) {
                        textArea.html(data);
                    });
            });
        },

        // διαγράφει εντολή από την βάση
        deleteFromDataBase: function (id) {

            //θέλει επεξεργασία
            var textArea = $('#admin');
            var path = this.path;
            $('#editDialog').submit(function (e) {
                e.preventDefault();
                var parsedId = parseInt(id);

                $.post(path + 'delete_from_database.php', {did: parsedId},
                    function (data) {
                        textArea.html(data);
                    });
            });
        },

        // κλείνει την οθόνη διαχείρισης
        hideAdminPanel: function () {
            var textArea = $('#admin');
            if (this.isVisible) {
                this.isVisible = false;
                textArea.html("");
                this.adminPanel.hide();
            }

        },

        // κάνει τον έλεγχο των στοιχείων του διαχειριστή
        passwordCheck: function () {
            var textArea = $('#admin');
            var path = this.path;
            $('#pass_dialog').submit(function (e) {
                e.preventDefault();

                var textArray = $(this).serializeArray();
                var userName = textArray[0].value;
                var passwd = textArray[1].value;

                $.post(path + 'admin_password.php', {name: userName, password: passwd},
                    function (data) {
                        textArea.html(data);

                    });
            });


        }
    }

})(this, jQuery);



