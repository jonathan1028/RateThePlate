Template.plateSubmit.events({ 
  'submit form': function(e) {
    e.preventDefault();

    var restaurant = {
      url: $(e.target).find('[name=url]').val(), 
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('restaurantInsert', restaurant, function(error, result) { 
    // display the error to the user and abort
    if (error)
      return alert(error.reason);
    
    Router.go('restaurantPage', {_id: result._id});
    });
  } 
});



/*Template.restaurantSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var restaurant = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    restaurant._id = Restaurants.insert(restaurant);
    Router.go('restaurantPage', restaurant);
  }
});*/