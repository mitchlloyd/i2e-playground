import Ember from 'ember';

const DOGS_1 = [
  {
    weight: 14,
    name: "Henry"
  }, {
    weight: 25,
    name: "Ellie"
  }, {
    weight: 44,
    name: "Nikki"
  }
];

const DOGS_2 = [
  {
    weight: 28,
    name: "Henry"
  }, {
    weight: 38,
    name: "Ellie"
  }, {
    weight: 4,
    name: "Nikki"
  }
];

export default Ember.Component.extend({
  actions: {
    toggleDogs() {
      if (this.get('dogs') === DOGS_1) {
        this.set('dogs', DOGS_2);
      } else {
        this.set('dogs', DOGS_1);
      }
    }
  }
});
