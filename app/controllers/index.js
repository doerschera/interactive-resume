import Ember from 'ember';

const $ = Ember.$;

export default Ember.Controller.extend({
  actions: {
    slideSkills() {
      $('.skills-cover h2').css({color: 'white'});
      $('.skills-cover').animate({width: 0}, function() {
        $('.skills-cover h2').hide();
      });
    },

    slideEdu() {
      $('.education-cover').slideUp();
    }
  }
});
