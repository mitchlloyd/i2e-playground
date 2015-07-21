/* globals SockJS */
import Ember from 'ember';
var { run, on } = Ember;

export default Ember.Service.extend(Ember.Evented, {
  setupSocket: on('init', function() {
    let socket = new SockJS('http://localhost:8080/friend-activity');
    socket.onmessage = run.bind(this, function(e) {
      this.trigger('messageWasReceived', e.data);
    });
  }),
});
