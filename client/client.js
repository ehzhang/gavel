/**
 * User: Edwin
 */

Posts = new Meteor.Collection("posts");

Session.setDefault("page", "home");

Deps.autorun(function () {
  if (Meteor.user()) {
    // If the user is logged in, load all of the requests.
    Meteor.subscribe("todaysPosts", new Date());
//    Meteor.subscribe("userData");
  } else {
    // If not logged in, don't load anything
  };
});