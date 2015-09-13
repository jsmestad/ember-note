import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.store.findRecord('note', params.note_id);
  },
  actions: {
    close: function() {
      this.transitionTo('notebook.notes');
    }
  }
});
