/* globals SockJS */
import Ember from 'ember';
var { run, on } = Ember;

export default Ember.Service.extend({
  lastMessage: null,

  setupSocket: on('init', function() {
    let socket = new SockJS('http://localhost:8080/friend-activity');
    socket.onmessage = run.bind(this, 'messageWasReceived');
  }),

  messageWasReceived: function(e) {
    this.set('lastMessage', e.data);
  }
});
