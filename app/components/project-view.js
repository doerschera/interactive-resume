import Ember from 'ember';

export default Ember.Component.extend({
  currentProject: 0,

  didRender() {
    this._super(...arguments);
    console.log('will render');
    let currentProjectIndex = this.get('currentProject');
    console.log(currentProjectIndex);
    this.$('#project'+currentProjectIndex).css('display', 'flex');
  }
});
