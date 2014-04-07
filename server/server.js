/**
 * User: Edwin
 */

Posts = new Meteor.Collection("posts");

getAllPosts = function () {
  return Posts.find({});
};

getTodaysPosts = function () {

  // Today!
  var today = new Date();
  var start = new Date(today.setHours(0, 0, 0, 0));

  return Posts.find({
    timestamp: { $gte: start }
  });
};

//getUserData = function () {
//  return Meteor.users.find({
//
//    },{
//      fields: {name: 1}
//    }
//  )
//};

Meteor.publish("allPosts", getAllPosts);

Meteor.publish("todaysPosts", getTodaysPosts);

//Meteor.publish("userData", getUserData);

Meteor.methods({
  post: function (content) {

    var user = Meteor.users.find({_id: this.userId}).fetch()[0];

    var count = Posts.find({
      owner: user._id,
      timestamp: { $gte: start }
    }).count();
    if (count === 0) {
      Posts.insert({
        owner: this.userId,
        username: user.username,
        name: user.profile.name,
        content: content,
        timestamp: new Date()
      });
    }
  },
  resetPasswordEmail: function () {
    Accounts.sendResetPasswordEmail(this.userId);
  }
});

// Allow permissions for the server.
Posts.allow({
  insert: function (userId, doc) {
    // Don't fuck with the console, yo
    return false;
  },
  update: function (userId, doc) {
    return userId === doc.owner;
  },
  remove: function (userId, doc) {
    return userId === doc.owner;
  }
});