Restaurants = new Mongo.Collection('restaurants');

/*Restaurants.allow({
  // only allow posting if you are logged in
  insert: function(userId, doc) { return !! userId;}
});*/

Restaurants.allow({
  update: function(userId, restaurant) { return ownsDocument(userId, restaurant); }, 
  remove: function(userId, restaurant) { return ownsDocument(userId, restaurant); },
});

Meteor.methods({
  restaurantInsert: function(restaurantAttributes) {
    check(Meteor.userId(), String);
    check(restaurantAttributes, {
      title: String,
      phone: String,
      address: String, 
      city: String,
      state: String,
      zipcode: String, 
      cost: String,
      foodType: String 
    });

    var user = Meteor.user();
    var restaurant = _.extend(restaurantAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    var restaurantId = Restaurants.insert(restaurant);

    return {
      _id: restaurantId
    }; 
  }
});


/*
//Creates a user permission to make  edit/delete changes to the server.
Restaurants.allow({
  update: function(userId, restaurant) { return ownsDocument(userId, restaurant); },
  remove: function(userId, restaurant) { return ownsDocument(userId, restaurant); },
});

//Restricts user to only be able to update url and title fields.
Restaurants.deny({
  update: function(userId, restaurant, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

//Validates the Post server-side to prevent non-UI submitted entry errors.
Restaurants.deny({
  update: function(userId, restaurant, fieldNames, modifier) {
    var errors = validateRestaurant(modifier.$set);
    return errors.title || errors.url;
  }
});

validateRestaurant = function (restaurant) {
  var errors = {};

  if (!restaurant.title)
    errors.title = "Please fill in a headline.";
  
  if (!restaurant.url)
    errors.url =  "Please fill in a URL.";

  return errors;
}

Meteor.methods({
  restaurantInsert: function(restaurantAttributes) {
    check(this.userId, String);
    check(restaurantAttributes, {
      title: String,
      url: String
    });
    
    var errors = validateRestaurant(restaurantAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-restaurant', "You must set a title and URL for your restaurant.");
    
    //Redirects user to existing links page if it has been previously entered.
    var restaurantWithSameLink = Restaurants.findOne({url: restaurantAttributes.url});
    if (restaurantWithSameLink) {
      return {
        restaurantExists: true,
        _id: restaurantWithSameLink._id
      }
    }
    
    //Adds private user information to server database.
    var user = Meteor.user();
    var post = _.extend(restaurantAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
    });
    
    var restaurantId = Restaurants.insert(restaurant);
    
    return {
      _id: restaurantId
    };
  }
});*/