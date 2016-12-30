import Ember from 'ember';

const aboutData = {
  word: '',
  part: false,
  definition: false,
  name: '',
  hex: '',
  rgb: '',
  cmyk: ''
}

export default Ember.Route.extend({
  model() {
    return aboutData;
  }
});
