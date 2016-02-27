Template.plateItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  }, 
  reviewsCount: function() {
    return Reviews.find({plateId: this._id}).count();
  }
});