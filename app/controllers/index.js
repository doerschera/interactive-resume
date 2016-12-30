import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    slideSkills() {
      Ember.$('.skills-cover h2').css({color: 'white'});
      Ember.$('.skills-cover').animate({width: 0}, function() {
        Ember.$('.skills-cover h2').hide();
      });
    },

    slideEdu() {
      Ember.$('.education-cover').slideUp();
    }
  }
});
