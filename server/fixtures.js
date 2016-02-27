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



  var rest1 = Restaurants.insert({
    title: 'Salty Sow',
    address: '1917 Manor Rd',
    city: 'Austin',
    state: 'Tx',
    zipcode: '78722',
    phone: '(512) 391-2337',
    foodType: 'American, Gastropub',
    cost: '$$',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  var rest2 = Restaurants.insert({
    title: 'Moonshine Patio Bar & Grill',
    address: '303 Red River St',
    city: 'Austin',
    state: 'Tx',
    zipcode: '78701',
    phone: '(512) 236-9599',
    foodType: 'American, Southern, Breakfast & Brunch',
    cost: '$$',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  var rest3 = Restaurants.insert({
    title: 'Franklin Barbecue',
    address: '900 E 11th St',
    city: 'Austin',
    state: 'Tx',
    zipcode: '78702',
    phone: '(512) 653-1187',
    foodType: 'Barbeque',
    cost: '$$',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });


  var plate1 = Plates.insert({
    restaurantId: rest1,
    userId: tom._id,
    name: 'Spaghetti',
    submitted: new Date(now - 5 * 3600 * 1000),
    rating: 5.7,
    description: 'Noodles with savory bolognese sauce.'
  });

var plate2 = Plates.insert({
    restaurantId: rest1,
    userId: sacha._id,
    name: 'Lasagna',
    submitted: new Date(now - 3 * 3600 * 1000),
    rating: 6.3,
    description: 'Pasta layers stuffed with italian sausage and 5 different Italian cheeses.'
  });
  

  Reviews.insert({
    plateId: plate1,
    userId: tom._id,
    author: 'Jonathan L.',
    submitted: new Date(now - 5 * 3600 * 1000),
    rating: 8.7,
    body: 'Amazing Spaghetti!'
  });

  Reviews.insert({
    plateId: plate1,
    userId: tom._id,
    author: 'Jonathan L.',
    submitted: new Date(now - 5 * 3600 * 1000),
    rating: 9.7,
    body: 'Incredible spaghetti. It changed my life!!'
  });


  

}