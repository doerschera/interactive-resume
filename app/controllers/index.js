import Ember from 'ember';
import data from '../data/content';

export default Ember.Controller.extend({
  skills: data.skills,
  education: data.education,
  actions: {
    slideDisplay() {
      $('.skills-screen').animate({width: 0});
    }
  }
});
