Template.restaurantsList.helpers({
  restaurants: function() {
    return Restaurants.find();
  }
});
