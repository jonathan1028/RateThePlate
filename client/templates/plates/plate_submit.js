Template.plateSubmit.events({ 
  'submit form': function(e) {
    e.preventDefault();
    
    var currentRestaurantId = this._id;
    
    var plate = {
      //url: $(e.target).find('[name=url]').val(), 
      restaurantId: currentRestaurantId, 
      name: $(e.target).find('[name=name]').val(), 
      url: $(e.target).find('[name=url]').val(),
      
    };

    Meteor.call('plateInsert', plate, function(error, result) { 
    // display the error to the user and abort
    if (error)
      return alert(error.reason);
    
    Router.go('restaurantPage', {_id: currentRestaurantId});
    });
  } 
});


/*Template.plateSubmit.events({ 
  'submit form': function(e) {
    e.preventDefault();

    var plate = {
      name: $(e.target).find('[name=name]').val(),
      url: $(e.target).find('[name=url]').val(),
      restaurantId: template.data._id
    };

    Meteor.call('plateInsert', plate, function(error, result) { 
    // display the error to the user and abort
    if (error)
      return alert(error.reason);
    
    Router.go('restaurantPage', {_id: result._id});
    });
  } 
});*/



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