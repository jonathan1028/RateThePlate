Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      plateId: String,
      body: String
    });

    var user = Meteor.user();
    var plate = Plates.findOne(commentAttributes.plateId);

   /* if (!plate)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');*/

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    //Plates.update(comment.plateId, {$inc: {commentsCount: 1}});

    return Comments.insert(comment);
  }
});