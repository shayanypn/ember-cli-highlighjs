/* eslint-env node */
module.exports = {
	description: 'Ember-cli Syntax highlighting addon for the Web using HighlightJs',
	normalizeEntityName: function() {},
	afterInstall: function() {
		return this.addBowerPackagesToProject([
		  { name: 'highlightjs' }
		]);
	}
};
