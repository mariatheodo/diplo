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

        showHelp: function() {
            if (codiad.filemanager.getExtension(codiad.active.getPath()) == "php") {
                var selectedText = codiad.editor.getSelectedText().toLowerCase().trim();
                if(selectedText == "") {
                    this.hidePanel();
                }
                this.showPanel(selectedText);
            }
        },

        showPanel: function (text) {
            textArea = $('#help');
            if(!this.isVisible) {
                this.isVisible = true;
                this.panel.show();
            }

            $.post(this.path + 'find.php', {word: text}, function (data) {
                if (data == "") {
                    textArea.html("Δεν βρέθηκε αντίστοιχο περιεχόμενο");
                }
                else {
                    textArea.html(data);
                }
            })
        },

        hidePanel: function() {
            textArea = $('#help');
            if (this.isVisible) {
                this.isVisible = false;
                textArea.html("");
                this.panel.hide();
            }
        },

        findWord: function(position) {
            if (codiad.editor.getActive() === null) {
                this.hide();
                return false;
            }
            //Get prefix
            if (typeof(position) == 'undefined') {
                position    = codiad.editor.getActive().getCursorPosition();
            }
            var token   = codiad.editor.getActive().getSession().getTokenAt(position.row,position.column);
            this.showPanel(token.value);
        }

    }

})(this, jQuery);
