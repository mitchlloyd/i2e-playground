import Ember from 'ember';

export default Ember.Component.extend({
  isLoading: true,

  didInsertElement() {
    setTimeout(function() {
      this.setPeople();
    }.bind(this), 3000);
  },

  setPeople() {
    // we have 3 people
    this.set('people', [
      { name: 'Leah' },
      { name: 'Mitch' },
      { name: 'Stin' }
    ]);

    // or no people
    // this.set('people', []);

    this.set('isLoading', false);
  }
});
