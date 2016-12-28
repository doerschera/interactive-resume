import Ember from 'ember';
import ENV from 'resume/config/environment';

let $ = Ember.$;

export default Ember.Controller.extend({
  word: '',
  part: false,
  definition: false,
  name: '',
  hex: '',
  rgb: '',
  cmyk: '',

  init() {
    let colorQuery = randomColor();

    function randomColor() {
      let hex = "ABCDEF0123456789".split('');
      let color = '';

      for(var i = 0; i < 6; i++) {
        let index = Math.floor(Math.random()*16);
        color += hex[index];
      }

      return color;
    }

    // retrieve color data using random color
    $.ajax({
      url: 'http://www.thecolorapi.com/id?format=json&hex='+colorQuery,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      this.set('name', response.name.value);
      this.set('hex', response.hex.value);
      this.set('rgb', response.rgb.value);
      this.set('cmyk', response.cmyk.value);

      $('.color').css({backgroundColor: response.hex.value});
    }.bind(this));

    // retrieve random word
    $.ajax({
      url: 'https://wordsapiv1.p.mashape.com/words/?random=true&hasDetails',
      method: 'GET',
      beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', ENV.WORD_KEY)},
    }).done(function(response) {
      console.log(response);
      this.set('word', response.word);
      if(response.results) {
        this.set('part', response.results[0].partOfSpeech);
        this.set('definition', response.results[0].definition);
      }
    }.bind(this));
  }
});
