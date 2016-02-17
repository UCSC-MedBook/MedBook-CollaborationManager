preloadSubscriptions.push('collaboration');


adminNav.push({
  route: 'collaboration',
  label: 'Collaboration'
});

Meteor.startup(function () {

  // Router.onBeforeAction(Router._filters.isAdmin, {only: ['collaboration']});

  Router.map(function() {

    // Collaboration
    this.route('collaboration', {
      path: '/collaboration/',
      waitOn: function() { return Meteor.subscribe('collaboration'); },
      onAfterAction: function() {
        Session.set('collaborationName', "");
      }
    });

    // Collaboration List
    this.route('collaborationList', {
        template: "collaborationGrid",
        waitOn: function() { return Meteor.subscribe('collaboration'); },
        onAfterAction: function() { Session.set('collaborationName', ""); }
    } );
    // Collaboration Edit
    this.route('collaborationEdit', {
        path: '/collaboration-edit/:name/',
        waitOn: function() { return Meteor.subscribe('collaboration'); },
        data: function() {
            // SECURITY Put in admin check here
            var coll = Collaboration.findOne({name: this.params.name});
            console.log("collaboration-edit route", coll);
            return coll;
        },
        /*
        onBeforeAction: function() { 
            // SECURITY Put in admin check here
            var coll = Collaboration.findOne({name: this.params.name});
            if (coll)
                Session.set("EditCollaboration", coll)
            this.next();
        },
        onAfterAction: function() { 
            Session.set('collaborationName', this.params.name);
            $(document).ready(function() {
                Meteor.setTimeout(function() { $(".collapsed").show() }, 250);
            })
        }
        */
    } );

    // Collaboration Review
    this.route('collaborationReview', {
        path: '/collaboration-review/:name/',
        waitOn: function() { return Meteor.subscribe('collaboration'); },
        data: function() {
            // SECURITY Put in admin check here
            var coll = Collaboration.findOne({name: this.params.name});
            console.log("collaboration-edit route", coll);
            return coll;
        },
        onBeforeAction: function() { 
            // SECURITY Put in admin check here
            var coll = Collaboration.findOne({name: this.params.name});
            if (coll)
                Session.set("EditCollaboration", coll)
            this.next();
        },
        onAfterAction: function() { 
            Session.set('collaborationName', this.params.name);
        }
    } );



    // Collaboration List
    this.route('collaborationListFocus', {
        path: '/collaborationList/:name/',
        template: "collaborationGrid",
        onAfterAction: function() { 
            Session.set("FocusName", this.params.name);
            console.log("FocusName", this.params.name);
        }
    } );


  });

});
