import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Component.extend({
  actions: {
    toggle() {
      this.toggleProperty('isExpanded');
    }
  },

  status: computed('isExpanded', function() {
    return this.get('isExpanded') ? "So Expanded!" : "Something's hidden";
  })

  // willRender() {
  //   let status = this.get('isExpanded') ? "So Expanded!" : "Something's hidden";
  //   this.set('status', status);
  // }
});
