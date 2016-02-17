Template[getTemplate('no_account')].helpers({
  landingPageText: function(){
    return "";
  }
});
Template[getTemplate('no_account')].events({
  'click .twitter-button': function(){
    Meteor.loginWithTwitter(function(){
		Router.go('/');
    });
  }
});
