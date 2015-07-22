/* globals Pikaday */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',

  didInsertElement: function() {
    var component = this;

    new Pikaday({
      field: this.get('element'),
      onSelect: function() {
        component.set('date', this.getDate());
      }
    });
  }
});

