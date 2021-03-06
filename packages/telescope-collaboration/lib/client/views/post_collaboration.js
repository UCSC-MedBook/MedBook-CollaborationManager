
createCollaboration = function (pack, success) {
  var slug = slugify(pack.name);
  pack.slug = slug;
  var yy = ["collaborators", "administrators", "invitations", "applications"];
  for (var i in  yy) {
    var x = yy[i];
    if (typeof(pack[x]) == "string")
      pack[x] = pack[x].split(",").map(function (s) {
        return s.trim()
      }).filter(function(n){ return n.length > 0});
  }
  var ad = getEmails()[0];
  if (pack && pack.administrators && pack.administrators.indexOf(ad) <= 0) pack.administrators.push(ad);
  if (pack && pack.collaborators  && pack.collaborators.indexOf(ad) <= 0) pack.collaborators.push(ad);


  Meteor.call('createCollaborationMethod',
      pack,
      function (error, collaborationName) {
        if (error) {
          console.log(error);
          throwError(error.reason);
          clearSeenErrors();
        } else {
          success();
        }
      });
}



Meteor.startup(function () {
  Template[getTemplate('collaborationTagList')].helpers({

    collaboration: function(foo) {
      if ('collaboration' in this)
        return this.collaboration;
      var cs = Session.get("collaborationName");
      if (cs && cs.length > 0)
        return [cs];
      return [];
    },

    collaborationLink: function(){
      var col = Collaboration.findOne({name: String(this)});
      if (col == null) return "";
      return "/collaboration/"+col.name;
    },
    collaborationName: function(){
      return this;
    }

  });
  function collabNames() {
    var users = Meteor.users.find({},{fields: {username:1}}).fetch();
    var cols = Collaboration.find({},{fields: {name:1}}).fetch();
    var names = users.map(function(f){return f.username}).concat(cols.map(function(f){return f.name}));
    names = names.filter(function(f){return f && f.length > 0});
    names.push("public");
    var data = names.map(function(f) { return {id:f, text:f}});
    return data;
  }
  window.collabNames = collabNames;


  Template.addCollaboratorsPoppup.helpers({
    something: function(t) { 
       console.log("something", this);
    }
   });

  window.doneEditOrAddCollaborators = function() {
      $('#addCollaboratorsPoppup').remove();
      setTimeout(function() { $('.cover').remove();}, 100);
  }

  Template[getTemplate('collaborationTagList')].events({
    'click .addCollaborators': function(e, t) {
        var _id = this._id;
        var data = this.collaboration.map(function(f) { return {id:f, text:f}});
        var ppp =  Blaze.toHTMLWithData(Template.addCollaboratorsPoppup, this);
        $(event.target).append(ppp);
        $(document).ready(function() {
            var $sc = $(event.target).find('.selectCollaborators');
            console.log("click addCol data", data, _id, $sc);
            $sc.select2({tags: collabNames(), width:"600px"});
            /*

            for some reason, this messages things up.
            so hold off for now
            */
            setTimeout(function() { 
                $sc.select2( "data", data); 
            }, 200);
            $('body').append('<div onclick="doneEditOrAddCollaborators()" class="cover"></div>');
        });
    },

    'submit #addCollaboratorsForm' : function(e, t) {
        e.preventDefault();
        return;
    },


    'click  #addCollaboratorsDone':function(event, template) {
        event.preventDefault();
        var $sc = $(event.target).parent().find('input[class="selectCollaborators"]');
        var newCollabs = $sc.select2("data").map(function(f){ return f.id});
        var _id = $(event.target).data("_id");
        console.log("YYY", newCollabs, _id);
        doneEditOrAddCollaborators();
     }
  });
});
