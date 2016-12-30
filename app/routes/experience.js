import Ember from 'ember';
import content from '../data/content';

export default Ember.Route.extend({
  model() {
    return content.experience;
  }
});
