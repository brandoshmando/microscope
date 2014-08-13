Posts = new Meteor.Collection('posts')

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
      duplicateLink = Posts.findOne({url: postAttributes.url});

    if (!user)
      throw new Meteor.Error(401, "You need to log in before creating a new story");
    if (!postAttributes.title)
      throw new Meteor.Error(422, "Please add a title...c'mon");
    if (postAttributes.url && duplicateLink) {
      throw new Meteor.Error(302, "Link with this url has already been posted buster...", duplicateLink._id);
    }

    var post = _.extend(_.pick(postAttributes, 'title', 'url', 'message'), {
      userId: user._id,
      author: user._author,
      submitted: new Date().getTime()
    });

    var postId = Posts.insert(post);
    return postId
  }
});