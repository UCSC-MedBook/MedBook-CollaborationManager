Package.describe({summary: "MedBook Collaboration   package"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base', 'aldeed:simple-schema', 'telescope-theme-hubble'], ['client', 'server']);

  api.use([
    'jquery',
    'http',
    'cfs:http-methods',
    'aldeed:http',
    'aldeed:template-extension',
    'underscore',
    'iron:router',
    'templating',
    'aldeed:autoform-select2',
    'vsivsi:file-collection',
    'telescope-i18n',
    'pfafman:font-awesome-4',
  ], 'client');

  /*
  // NEW i18n support
  api.use([
    'tap:i18n'
  ], ['client', 'server']);
  */

  api.add_files(['lib/collaboration.js'], ['client', 'server']);


  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/collaboration.css',
    'lib/client/views/collaboration.html',
    'lib/client/views/collaboration.js',
    'lib/client/views/collaboration_item.css',
    'lib/client/views/collaboration_item.html',
    'lib/client/views/collaboration_item.js',
    'lib/client/views/collaboration_menu.html',
    'lib/client/views/collaboration_menu.js',
    'lib/client/views/post_collaboration.html',
    'lib/client/views/post_collaboration.css',
    'lib/client/views/post_collaboration.js',

    'lib/client/views/select2.js',
    'lib/client/views/select2.css',

     // files which replace functionality in core
    'client/helpers/handlebars.js',
    'client/views/nav/nav.js',
    'client/views/nav/nav.html',
    'client/views/posts/posts_list.js',
    'client/views/posts/posts_list.html',
    'client/views/posts/posts_list.css',
    'client/views/posts/post_submit.html',
    'client/views/posts/post_submit.js',

    'client/views/files/file-upload.coffee',
    'client/views/files/file-upload.css',
    'client/views/files/file-upload.html',
    'client/views/files/folder.html',
    'client/views/files/folder.js',


  ], ['client']);

  api.add_files(['lib/server/publications.js', 'lib/server/methods.js'], ['server']);
 
  api.export(['addCollaborator', 'Collaboration', 'show', 'hide', 'createCollaboration', 'collaborationSchema', 'Schemas']);
});
