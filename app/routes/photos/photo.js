import Ember from 'ember';
import photos from 'scratch/fixtures/photos';

export default Ember.Route.extend({
  model(params) {
    return photos.findBy('id', params.photo_id);
  }
});
