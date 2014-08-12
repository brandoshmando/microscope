Template.postsSubmit.events({
  'submit form': function(ev){
    ev.preventDefault();

    var post = {
      url: $(ev.target).find('[name=url]').val(),
      title: $(ev.target).find('[name=title]').val(),
      message: $(ev.target).find('[name=message]').val(),
    }

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});