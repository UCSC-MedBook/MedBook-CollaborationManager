/* Imports for global scope */

Accounts = Package['accounts-base'].Accounts;
Spiderable = Package.spiderable.Spiderable;
Email = Package.email.Email;
ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
Router = Package['iron:router'].Router;
RouteController = Package['iron:router'].RouteController;
FastRender = Package['meteorhacks:fast-render'].FastRender;
SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
MongoObject = Package['aldeed:simple-schema'].MongoObject;
moment = Package['mrt:moment'].moment;
MailChimpAPI = Package['mrt:mailchimp'].MailChimpAPI;
MailChimp = Package['mrt:mailchimp'].MailChimp;
MailChimpOptions = Package['mrt:mailchimp'].MailChimpOptions;
Handlebars = Package.ui.Handlebars;
OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
juice = Package['sacha:juice'].juice;
SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
Avatar = Package['bengott:avatar'].Avatar;
Gravatar = Package['jparker:gravatar'].Gravatar;
TAPi18next = Package['tap:i18n'].TAPi18next;
TAPi18n = Package['tap:i18n'].TAPi18n;
adminNav = Package['telescope-post-files'].adminNav;
viewNav = Package['telescope-base'].viewNav;
addToPostSchema = Package['telescope-post-files'].addToPostSchema;
addToCommentsSchema = Package['telescope-base'].addToCommentsSchema;
addToSettingsSchema = Package['telescope-base'].addToSettingsSchema;
preloadSubscriptions = Package['telescope-post-files'].preloadSubscriptions;
primaryNav = Package['telescope-post-files'].primaryNav;
secondaryNav = Package['telescope-base'].secondaryNav;
viewParameters = Package['telescope-search'].viewParameters;
footerModules = Package['telescope-base'].footerModules;
heroModules = Package['telescope-base'].heroModules;
postModules = Package['telescope-post-files'].postModules;
postHeading = Package['telescope-base'].postHeading;
postMeta = Package['telescope-base'].postMeta;
modulePositions = Package['telescope-base'].modulePositions;
postSubmitRenderedCallbacks = Package['telescope-base'].postSubmitRenderedCallbacks;
postSubmitClientCallbacks = Package['telescope-base'].postSubmitClientCallbacks;
postSubmitMethodCallbacks = Package['telescope-base'].postSubmitMethodCallbacks;
postAfterSubmitMethodCallbacks = Package['telescope-base'].postAfterSubmitMethodCallbacks;
postEditRenderedCallbacks = Package['telescope-base'].postEditRenderedCallbacks;
postEditClientCallbacks = Package['telescope-base'].postEditClientCallbacks;
postEditMethodCallbacks = Package['telescope-base'].postEditMethodCallbacks;
postAfterEditMethodCallbacks = Package['telescope-base'].postAfterEditMethodCallbacks;
commentSubmitRenderedCallbacks = Package['telescope-base'].commentSubmitRenderedCallbacks;
commentSubmitClientCallbacks = Package['telescope-base'].commentSubmitClientCallbacks;
commentSubmitMethodCallbacks = Package['telescope-base'].commentSubmitMethodCallbacks;
commentAfterSubmitMethodCallbacks = Package['telescope-base'].commentAfterSubmitMethodCallbacks;
commentEditRenderedCallbacks = Package['telescope-base'].commentEditRenderedCallbacks;
commentEditClientCallbacks = Package['telescope-base'].commentEditClientCallbacks;
commentEditMethodCallbacks = Package['telescope-base'].commentEditMethodCallbacks;
commentAfterEditMethodCallbacks = Package['telescope-base'].commentAfterEditMethodCallbacks;
getTemplate = Package['telescope-base'].getTemplate;
templates = Package['telescope-base'].templates;
themeSettings = Package['telescope-base'].themeSettings;
deepExtend = Package['telescope-lib'].deepExtend;
camelToDash = Package['telescope-lib'].camelToDash;
dashToCamel = Package['telescope-lib'].dashToCamel;
camelCaseify = Package['telescope-lib'].camelCaseify;
getSetting = Package['telescope-lib'].getSetting;
getThemeSetting = Package['telescope-lib'].getThemeSetting;
getSiteUrl = Package['telescope-lib'].getSiteUrl;
trimWords = Package['telescope-lib'].trimWords;
can = Package['telescope-lib'].can;
_ = Package.underscore._;
capitalise = Package['telescope-lib'].capitalise;
i18n = Package['telescope-i18n'].i18n;
setLanguage = Package['telescope-i18n'].setLanguage;
serveAPI = Package['telescope-api'].serveAPI;
serveRSS = Package['telescope-rss'].serveRSS;
Categories = Package['telescope-post-files'].Categories;
buildEmailTemplate = Package['telescope-email'].buildEmailTemplate;
sendEmail = Package['telescope-email'].sendEmail;
buildAndSendEmail = Package['telescope-email'].buildAndSendEmail;
getEmailTemplate = Package['telescope-email'].getEmailTemplate;
PostsDailyController = Package['telescope-daily'].PostsDailyController;
Herald = Package['telescope-notifications'].Herald;
buildEmailNotification = Package['telescope-notifications'].buildEmailNotification;
getUnsubscribeLink = Package['telescope-notifications'].getUnsubscribeLink;
addCollaborator = Package['telescope-collaboration'].addCollaborator;
Collaboration = Package['telescope-collaboration'].Collaboration;
show = Package['telescope-collaboration'].show;
hide = Package['telescope-collaboration'].hide;
createCollaboration = Package['telescope-collaboration'].createCollaboration;
collaborationSchema = Package['telescope-collaboration'].collaborationSchema;
Schemas = Package['telescope-collaboration'].Schemas;
HTTP = Package.http.HTTP;
FileCollection = Package['vsivsi:file-collection'].FileCollection;
Collections = Package['telescope-post-files'].Collections;
AutoForm = Package['telescope-post-files'].AutoForm;
FS = Package['telescope-post-files'].FS;
MIME = Package['patte:mime-npm'].MIME;
Iron = Package['iron:core'].Iron;
AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
Meteor = Package.meteor.Meteor;
WebApp = Package.webapp.WebApp;
main = Package.webapp.main;
WebAppInternals = Package.webapp.WebAppInternals;
Log = Package.logging.Log;
Tracker = Package.deps.Tracker;
Deps = Package.deps.Deps;
DDP = Package.livedata.DDP;
DDPServer = Package.livedata.DDPServer;
MongoInternals = Package.mongo.MongoInternals;
Mongo = Package.mongo.Mongo;
Blaze = Package.ui.Blaze;
UI = Package.ui.UI;
Spacebars = Package.spacebars.Spacebars;
check = Package.check.check;
Match = Package.check.Match;
Random = Package.random.Random;
EJSON = Package.ejson.EJSON;
T9n = Package['softwarerero:accounts-t9n'].T9n;
HTML = Package.htmljs.HTML;

