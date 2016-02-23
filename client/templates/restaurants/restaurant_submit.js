Template.restaurantSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var restaurant = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    restaurant._id = Restaurants.insert(restaurant);
    Router.go('restaurantPage', restaurant);
  }
});