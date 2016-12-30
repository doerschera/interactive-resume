import Ember from 'ember';
import content from '../data/content';

const $ = Ember.$;

export default Ember.Controller.extend({

  actions: {
    nextProject() {
      let counter = this.get('model.currentProject');
      let activeProject = $('.activeProj');
      let nextProject = $(activeProject).next('.ember-view');

      if(counter === 6) {
        let  nextProject = $('#project0');
        $('.activeProj .project').hide();
        $('.activeProj').removeClass('activeProj');
        $(nextProject).css('display', 'flex');
        $(nextProject).parent().addClass('activeProj');
        this.set('model.currentProject', 1);
        return false;
      }

      $('.activeProj .project').hide();
      $('.activeProj').removeClass('activeProj');
      $(nextProject).children('.project').css('display', 'flex');
      $(nextProject).addClass('activeProj');

      this.set('model.currentProject', counter+=1);
      console.log(this.get('model.currentProject'));

    },

    prevProject() {
      let counter = this.get('model.currentProject');
      let activeProject = $('.activeProj');
      let nextProject = $(activeProject).prev('.ember-view');

      if(counter === 1) {
        let  nextProject = $('#project5');
        $('.activeProj .project').hide();
        $('.activeProj').removeClass('activeProj');
        $(nextProject).css('display', 'flex');
        $(nextProject).parent().addClass('activeProj');
        this.set('model.currentProject', 6);
        return false;
      }

      $('.activeProj .project').hide();
      $('.activeProj').removeClass('activeProj');
      $(nextProject).children('.project').css('display', 'flex');
      $(nextProject).addClass('activeProj');

      this.set('model.currentProject', counter-=1);
      console.log(this.get('model.currentProject'));
    }
  },
});
