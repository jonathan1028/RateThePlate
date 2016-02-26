Template.restaurantPage.helpers({
  plates: function() {
    return Plates.find({restaurantId: this._id});
  }
});

Template.restaurantPage.helpers({
  comments: function() {
    return Comments.find({restaurantId: this._id});
  }
});


/*Template.restaurantPage.helpers({
  comments: function() {
    return Comments.find({restaurantId: this._id});
  }
});*/