import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('handlebars');
  this.route('keys');
  this.route('crazy-conditionals');

  this.route('photos', function() {
    this.route('photo', { path: '/:photo_id' });
  });

  this.route('helpers');
  this.route('ember-object');
  this.route('components');
  this.route('services');
  this.route('pikaday');
});

export default Router;
