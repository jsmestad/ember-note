import { moduleForModel, test } from 'ember-qunit';

moduleForModel('note', 'Unit | Model | note', {
  // Specify the other units that are required for this test.
  needs: [
    'model:notebook'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
