import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    nextProject() {
      let counter = this.get('model.currentProject');
      let activeProject = Ember.$('.activeProj');
      let nextProject = Ember.$(activeProject).next('.ember-view');

      // cycle to beginning if last project
      if(counter === 6) {
        let  nextProject = Ember.$('#project0');
        Ember.$('.activeProj .project').hide();
        Ember.$('.activeProj').removeClass('activeProj');
        Ember.$(nextProject).css('display', 'flex');
        Ember.$(nextProject).parent().addClass('activeProj');
        this.set('model.currentProject', 1);
        return false;
      }

      // project transition
      Ember.$('.activeProj .project').hide();
      Ember.$('.activeProj').removeClass('activeProj');
      Ember.$(nextProject).children('.project').css('display', 'flex');
      Ember.$(nextProject).addClass('activeProj');

      this.set('model.currentProject', counter+=1);
      console.log(this.get('model.currentProject'));

    },

    prevProject() {
      let counter = this.get('model.currentProject');
      let activeProject = Ember.$('.activeProj');
      let nextProject = Ember.$(activeProject).prev('.ember-view');

      // cycle to end if first project
      if(counter === 1) {
        let  nextProject = Ember.$('#project5');
        Ember.$('.activeProj .project').hide();
        Ember.$('.activeProj').removeClass('activeProj');
        Ember.$(nextProject).css('display', 'flex');
        Ember.$(nextProject).parent().addClass('activeProj');
        this.set('model.currentProject', 6);
        return false;
      }

      // project transition
      Ember.$('.activeProj .project').hide();
      Ember.$('.activeProj').removeClass('activeProj');
      Ember.$(nextProject).children('.project').css('display', 'flex');
      Ember.$(nextProject).addClass('activeProj');

      this.set('model.currentProject', counter-=1);
      console.log(this.get('model.currentProject'));
    }
  },
});
