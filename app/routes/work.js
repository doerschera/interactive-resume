import Ember from 'ember';
import content from '../data/content';

const workData = {
  projects: content.projects,
  currentProject: 1
}

export default Ember.Route.extend({
  model() {
    return workData;
  }
});
