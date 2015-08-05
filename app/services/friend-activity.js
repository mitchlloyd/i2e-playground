/* globals SockJS */
import Ember from 'ember';
var { run } = Ember;

export default Ember.Service.extend(Ember.Evented, {
  init() {
    this._super(...arguments);

    let socket = new SockJS('http://localhost:8080/friend-activity');
    socket.onmessage = run.bind(this, function(e) {
      this.trigger('messageWasReceived', e.data);
    });
  }
});
