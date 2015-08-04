import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    let p = new RSVP.Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('Hello!');
      }, 3000);
    }, 'my-test-promise');

    return { slowRequest: p };
  }
});
