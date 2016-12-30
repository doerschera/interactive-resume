import Ember from 'ember';
import content from '../data/content';

const $ = Ember.$;

export default Ember.Controller.extend({
  currentProject: 0,

  actions: {
    nextProject() {
      let activeProject = '#project'+this.currentProject;
      this.currentProject ++
      let nextProject = '#project'+this.currentProject;

      $(activeProject).hide();
      $(nextProject).css('display', 'flex');
    }
  },
});
