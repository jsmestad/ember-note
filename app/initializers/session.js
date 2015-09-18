export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  var session = Ember.Object.extend();
  application.register('session:main', session);
  application.inject('adapter', 'session', 'session:main');
  application.inject('route', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize: initialize
};
