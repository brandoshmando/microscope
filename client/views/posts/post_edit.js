Template.postEdit.events({
  'submit form': function(ev){
    ev.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(ev.target).find('[name=url').val(),
      title: $(ev.target).find('[name=title').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error){
      if (error){
        alert(error.reason);
      }else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(ev){
    ev.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});