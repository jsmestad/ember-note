import Ember from 'ember';
import ValidationFunctions from 'ember-note/mixins/validation-functions';
// Replaced by the above mixin (instead of utility)
// import isValidLength from 'ember-note/utils/is-valid-length';

export default Ember.Route.extend(ValidationFunctions, {
  model: function(params) {
    return this.store.query('note', {notebook: params.notebook_id});
  },
  actions: {
    addNote: function() {
      var title = this.controller.get('title');
      if (!this.isValidLength(title, 0, 140)) {
        alert('Title must be  longer than 0 characters and not more than 140.');
      } else {
        this.store.findRecord('notebook', this.paramsFor('notebook.notes').notebook_id).then( (notebook) => {
          var note = this.store.createRecord('note', { title: this.controller.get('title'), notebook: notebook});
          note.save().then(() => {
            console.log('save successful');
            this.controller.set('title', null);
            this.refresh();
          }, function() {
            console.log('save failed');
          });
        });
      }
    },
    deleteNote: function(note) {
      console.log('deleting note with title' + note.get('title'));
      note.deleteRecord();
      note.save();
    }
  }
});
