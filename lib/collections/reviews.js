Reviews = new Mongo.Collection('reviews');

Meteor.methods({
  reviewInsert: function(reviewAttributes) {
    check(this.userId, String);
    check(reviewAttributes, {
      plateId: String,
      body: String, 
      rating: String
    });

    var user = Meteor.user();
    var plate = Plates.findOne(reviewAttributes.plateId);

   /* if (!plate)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');*/

    review = _.extend(reviewAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    //Plates.update(comment.plateId, {$inc: {commentsCount: 1}});

    return Reviews.insert(review);
  }
});