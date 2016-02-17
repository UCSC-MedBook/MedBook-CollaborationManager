Meteor.startup(function (){



 // Loading (for testing purposes)

  Router.route('/loading', {
    name: 'loading',
    template: getTemplate('loading')
  });

});
