// Fixture data
if (Restaurants.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Restaurants.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    restaurantId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'I am a comment'
  });

  Plates.insert({
    restaurantId: telescopeId,
    userId: tom._id,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'I am a plate'
  });

  Plates.insert({
    restaurantId: telescopeId,
    userId: sacha._id,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'I am a plate too'
  });

  Restaurants.insert({
    title: 'Uchi',
    userId: tom._id,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Restaurants.insert({
    title: 'Vespaio',
    userId: tom._id,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0
  });
}