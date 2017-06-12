import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('highlight-code', 'Integration | Component | highlight code', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{highlight-code}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#highlight-code}}
      template block text
    {{/highlight-code}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
