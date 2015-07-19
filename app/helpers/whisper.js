import Ember from 'ember';

export default Ember.Helper.helper(function([value = '']) { // jshint ignore:line
  return value.toLowerCase();
});

// export default Ember.Helper.helper(function([value = '']) {
//   return `<em>${value.toLowerCase()}</em>`;
// });
