// Session variables
Session.set('initialLoad', true);
Session.set('today', new Date());
Session.set('view', 'top');
Session.set('sessionId', Meteor.default_connection._lastSessionId);
