Meteor.publish('restaurants', function() {
  return Restaurants.find();
});

Meteor.publish('plates', function() {
  return Plates.find();
});

Meteor.publish('reviews', function() {
  return Reviews.find();
});

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});

/*Meteor.publish('comments', function(plateId) {
  check(plateId, String);
  return Comments.find({plateId: plateId});
});*/