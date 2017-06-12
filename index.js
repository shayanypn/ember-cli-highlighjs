/* eslint-env node */
'use strict';


module.exports = {
    name: 'ember-cli-highlightjs',

    included: function(app , parentAddon ) {

        this._super.included.apply(this, arguments);
        app.import(app.bowerDirectory + '/highlightjs/highlight.pack.min.js');
    }
};
