'use strict';

/* Nuropa Core GUI module */
/* Authors:
    - Sascha Leib <ad@hominem.info>
*/

$p.gui.toolbar = {

    // pre-init:
    _init: function() {
        console.info('$p.gui.toolbar._init()');
        $p._callInit(this, true);
    },

    // init:
    init: function() {
        console.info('$p.gui.toolbar.init()');
    },

    userOptions: {
        _init: function() {
            console.info('$p.gui.toolbar.userOptions._init()');

            // find the userOptions popover:
            const popover = document.getElementById('nu__tbView-dropdown');
            if (popover) {
               popover.showPopover(); // DEBUG ONLY!

                // find the radio buttons and attach event listeners:
                const radios = popover.querySelectorAll('input[type="radio"]');
                radios.forEach( (radio) => {
                    radio.addEventListener('change', $p.gui.toolbar.userOptions._settingChangedCallback);
                });

            } else {
                console.warn('Could not find user options popover!');
            }

        },

        // init:
        init: function() {
            console.info('$p.gui.toolbar.userOptions.init()');
        },

        _settingChangedCallback: function(e) {
            console.info('$p.gui.toolbar.userOptions._settingChangedCallback()', e);

            const attr = e.target.getAttribute('name');
            const value = e.target.getAttribute('value');

            document.documentElement.setAttribute('data-' + attr, value);
            console.log('Set data-' + attr + ' to ' + value);
        }
    }


}