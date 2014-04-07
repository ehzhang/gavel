Template.profile.posts = function() {
  return Posts.find({owner: Meteor.user()._id});
};