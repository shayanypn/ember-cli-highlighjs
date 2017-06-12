/* global hljs */
import Ember from 'ember';
import layout from '../templates/components/highlight-code';

const unique_id = function(){
    return 'xxxxxxxx-xxxx-'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16) + (new Date()).getTime();
    });
};

export default Ember.Component.extend({
    layout,

    tagName: 'pre',

    _code: '',

    attributeBindings: ['elementTheme:data-style'],
    elementTheme: Ember.computed('theme', function() {
        return Ember.get(this, 'theme') ? Ember.get(this, 'theme') : 'default';
    }),

    _type: Ember.computed('type', function() {
        return Ember.get(this, 'type') ? Ember.get(this, 'type') : '';
    }),

    
    init() {
        this._super(...arguments);

        Ember.set(this, 'elementId', unique_id() );
        Ember.set(this, '_code', Ember.get(this, 'code') ? Ember.get(this, 'code') : '');
    },

    didInsertElement() {

        let container = document.getElementById(`${this.elementId}`);
        if ( container ) {
            hljs.highlightBlock(container.lastElementChild);
        }else{
            console.error('Error on initialing pre');
        }
    }

});
