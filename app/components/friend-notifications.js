import Ember from 'ember';
const { run, inject, computed } = Ember;

export default Ember.Component.extend({
  friendActivity: inject.service(),
  isActive: false,
  currentNotification: computed.reads('friendActivity.lastMessage'),

  currentNotificationDidChange: function() {
    this.set('isActive', true);
    run.later(this, function() {
      this.set('isActive', false);
    }, 1500);
  }.observes('friendActivity.lastMessage')
});
