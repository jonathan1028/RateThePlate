Template.restaurantEdit.events({ 'submit form': function(e) {
    e.preventDefault();

  var currentRestaurantId = this._id;

  var restaurantProperties = { 
      title: $(e.target).find('[name=title]').val(), 
      phone: $(e.target).find('[name=phone]').val(),
      address: $(e.target).find('[name=address]').val(),
      city: $(e.target).find('[name=city]').val(),
      state: $(e.target).find('[name=state]').val(),
      zipcode: $(e.target).find('[name=zipcode]').val(),
      cost: $(e.target).find('[name=cost]').val(),
      foodType: $(e.target).find('[name=foodType]').val()
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