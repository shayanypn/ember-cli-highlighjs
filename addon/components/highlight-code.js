/* global hljs */
import Ember from 'ember';
import layout from '../templates/components/highlight-code';

export default Ember.Component.extend({
	layout,
	tagName: 'pre',
	attributeBindings: ['elementTheme:data-style'],
	elementTheme: Ember.computed('theme', function() {
		return Ember.get(this, 'theme') || 'default';
	}),
	_type: Ember.computed('type', function() {
		return Ember.get(this, 'type') || '';
	}),
	didRender() {
		const container = document.getElementById(`${this.elementId}`);
		if (!container) {
			console.error('Error on initialing pre');
			return;
		}

		const content = container.querySelector('[data-hightlight="content"]');
		let child = container.querySelector('code');
		if (child) {
			child.remove();
		}

		child = document.createElement('code')
		child.append(content.innerHTML);
		container.append(child);

		hljs.highlightBlock(child);
	}
});
