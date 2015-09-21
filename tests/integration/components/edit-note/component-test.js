import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('edit-note', 'Integration | Component | edit note', {
  // integration: true
  needs: ['component:markdown-to-html']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{edit-note}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
    // {{#edit-note}}
      // template block text
    // {{/edit-note}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it saves', function(assert) {
  var component = this.subject();
  this.render();
  var saveTarget = {
    save: function() {
      assert.ok(true, 'saved the note');
    }
  };
  Ember.run(() => {
    component.set('note', saveTarget);
  });
  this.$().find('#save').click();
});

test('it closes', function(assert) {
  var component = this.subject();
  this.render();
  var closeTarget = {
    closeAction: function() {
      assert.ok(true, 'closed the window');
    }
  };
  component.set('close', 'closeAction');
  component.set('targetObject', closeTarget);
  this.$().find('#close').click();
});
