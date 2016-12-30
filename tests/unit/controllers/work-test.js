import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:work', 'Unit | Controller | work', {
  // Specify the other units that are required for this test.
  needs: ['route:work']
});

// Replace this with your real tests.
test('next function increments project counter', function(assert) {
  let controller = this.subject();

  controller.actions.nextProject();

  assert.equal(controller.get('currentProject'), 1);

});
