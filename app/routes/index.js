import Ember from 'ember';
import content from '../data/content';

const indexData = {
  skills: content.skills,
  education: content.education
}

export default Ember.Route.extend({
  model() {
    return indexData;
  }
});
