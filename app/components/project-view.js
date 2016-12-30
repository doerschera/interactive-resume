import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);

    // initialize project viewer
    this.$('#project0').css('display', 'flex');
    this.$('#project0').parent().addClass('activeProj');
  }
});
