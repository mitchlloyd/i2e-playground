import Ember from 'ember';
const { on, run, inject } = Ember;

export default Ember.Component.extend({
  friendActivity: inject.service(),
  isActive: false,

  subscribeToMessages: on('init', function() {
    this.get('friendActivity').on('messageWasReceived', this, 'messageWasReceived');
  }),

  messageWasReceived(message) {
    this.set('currentNotification', message);
    this.set('isActive', true);
    run.later(() => {
      this.set('isActive', false);
    }, 1500);
  }
});
