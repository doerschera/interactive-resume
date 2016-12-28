import Ember from 'ember';
import data from '../data/content';

let $ = Ember.$;

export default Ember.Controller.extend({
  skills: data.skills,
  education: data.education,
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
