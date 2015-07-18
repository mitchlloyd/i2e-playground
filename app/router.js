import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('handlebars');
  this.route('keys');
  this.route('crazy-conditionals');
});

export default Router;
