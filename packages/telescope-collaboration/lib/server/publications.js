Meteor.publish('collaboration', function() {
      if (this.userId == null)
          return Collaboration.find( {isUnlisted: false} );

      var user = Meteor.users.findOne({_id: this.userId});
      // console.log("publish collabration", user);
      var collaborations = user.profile.collaborations;
      var emails = getEmailsForId(this.userId);



      if (collaborations == null)
          return Collaboration.find( {isUnlisted: false} );
      else
          return Collaboration.find(
              {$or: [
                  {isUnlisted: false}, // allows people to join
                  {$and:
                      [
                          {isUnlisted: true}, // here to show the true branch
                          {$or: [
                              {collaborators: {$in: user.profile.collaborations}},
                              {collaborators: {$in: emails}},
                              {administrators: {$in: user.profile.collaborations}},
                              {administrators: {$in: emails}}
                          ]}
                      ]
                  },
              ]});
});



