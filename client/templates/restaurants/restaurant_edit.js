Template.restaurantEdit.events({ 'submit form': function(e) {
    e.preventDefault();

  var currentRestaurantId = this._id;

  var restaurantProperties = {
    url: $(e.target).find('[name=url]').val(), 
    title: $(e.target).find('[name=title]').val()
  }

  Restaurants.update(currentRestaurantId, {$set: restaurantProperties}, function(error) { 
    if (error) {
        // display the error to the user
        alert(error.reason); 
      } else {
        Router.go('restaurantPage', {_id: currentRestaurantId});
      }
  }); 
},

'click .delete': function(e) { e.preventDefault();

    if (confirm("Delete this restaurant?")) { 
      var currentRestaurantId = this._id; 
      Restaurants.remove(currentRestaurantId); 
      Router.go('restaurantsList');
    } 
  }
});