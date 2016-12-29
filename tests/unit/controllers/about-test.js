import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:about', 'Unit | Controller | about', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('part and definition default values set to false', function(assert) {
  let controller = this.subject();

  assert.equal(controller.get('part'), false);
  assert.equal(controller.get('definition'), false);
});
