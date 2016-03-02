Template.plateItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  }, 
  reviewsCount: function() {
    return Reviews.find({plateId: this._id}).count();
  },
  averageRating: function() {
        var reviewsCursor = Reviews.find({plateId: this._id});
        //Converts cursor to an array of objects
        var reviews = reviewsCursor.fetch();
        var ratings = _.pluck(reviews, 'rating');
        var sum = ratings.reduce(function(pv, cv){return pv + cv;}, 0);
        var avg = (sum / ratings.length).toPrecision(2);

        return avg;
        
    }

});