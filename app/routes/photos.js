import Ember from 'ember';
import photos from 'scratch/fixtures/photos';

export default Ember.Route.extend({
  model() {
    return photos;
  }
});
