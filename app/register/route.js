import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';

export default Ember.Route.extend(ValidationFunctions, {
  actions: {
    addNew: function () {
      var name = this.controller.get('name');
      if (this.isValidEmail(name)) {

        var user = this.store.createRecord('user', {
          name: this.controller.get('name')
        });
        // Not using fat arrow - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/apC.md
        user.save().then(function saveMessage() {
          console.log('save successful');
          this.controller.set('message', 'A new user with the name "' + this.controller.get('name') + '" was added!');
          this.controller.set('name', null);
        }.bind(this), function() {
          console.log('save failed');
        });

        // Requested in book (fat-arrow approach)
        // user.save().then(() => {
          // console.log('save successful');
          // this.controller.set('message', 'A new user with the name "' + this.controller.get('name') + '" was added!');
          // this.controller.set('name', null);
        // }, function() {
          // console.log('save failed');
        // });
      } else {
        alert('Invalid email address.');
      }
    }
  }
});
