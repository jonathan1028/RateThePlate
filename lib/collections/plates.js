Plates = new Mongo.Collection('plates');

Plates.allow({
  update: function(userId, plate) { return ownsDocument(userId, plate); }, 
  remove: function(userId, plate) { return ownsDocument(userId, plate); }
});

Meteor.methods({
  plateInsert: function(plateAttributes) {
    check(Meteor.userId(), String);
    check(plateAttributes, {
      restaurantId: String,
      name: String,
      url: String
    });

    var user = Meteor.user();
    var plate = _.extend(plateAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    var plateId = Plates.insert(plate);

    return {
      _id: plateId
    }; 
  }
});



/*Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    return Comments.insert(comment);
  }
});*/