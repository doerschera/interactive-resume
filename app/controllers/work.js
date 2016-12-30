import Ember from 'ember';
import content from '../data/content';

const $ = Ember.$;

export default Ember.Controller.extend({
  currentProject: 1,

  actions: {
    nextProject() {
      let counter = this.get('currentProject');
      let activeProject = $('.activeProj');
      let nextProject = $(activeProject).next('.ember-view');

      if(this.currentProject===6) {
        let  nextProject = $('#project0');
        $('.activeProj .project').hide();
        $('.activeProj').removeClass('activeProj');
        $(nextProject).css('display', 'flex');
        $(nextProject).parent().addClass('activeProj');
        this.set('currentProject', 1);
        return false;
      }

      $('.activeProj .project').hide();
      $('.activeProj').removeClass('activeProj');
      $(nextProject).children('.project').css('display', 'flex');
      $(nextProject).addClass('activeProj');

      this.set('currentProject', counter+=1);
      console.log(this.currentProject);

    },

    prevProject() {
      let counter = this.get('currentProject');
      let activeProject = $('.activeProj');
      let nextProject = $(activeProject).prev('.ember-view');

      if(this.currentProject===1) {
        let  nextProject = $('#project5');
        $('.activeProj .project').hide();
        $('.activeProj').removeClass('activeProj');
        $(nextProject).css('display', 'flex');
        $(nextProject).parent().addClass('activeProj');
        this.set('currentProject', 6);
        return false;
      }

      $('.activeProj .project').hide();
      $('.activeProj').removeClass('activeProj');
      $(nextProject).children('.project').css('display', 'flex');
      $(nextProject).addClass('activeProj');

      this.set('currentProject', counter-=1);
      console.log(this.currentProject);
    }
  },
});
