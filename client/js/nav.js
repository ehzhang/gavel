
Template.nav.events({
  'click .nav.icon': function () {
    $('.nav.sidebar')
      .sidebar('toggle');
  },
  'click .signout': function () {
    $('.nav.sidebar')
      .sidebar('toggle');
    Meteor.logout();
  },
  'click .resetPassword': function () {
    showDimmerMessage("You've been sent an email to reset your password!");
    Meteor.call('resetPasswordEmail');
  }
});

Template.nav.username = function () {
  return Meteor.user().username;
};

Template.nav.name = function () {
  return Meteor.user().profile.name;
};

showDimmerMessage = function (msg) {
  return true;
};