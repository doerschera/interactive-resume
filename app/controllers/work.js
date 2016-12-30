import Ember from 'ember';
import content from '../data/content';
//
// const $ = Ember.$;

export default Ember.Controller.extend({
  projects: content.projects,
  currentProject: 0,
  actions: {

  }
});
