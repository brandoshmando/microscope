var postsData = [
  {
    title: 'Introducing Meteor',
    author: 'Sacha Grieff',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    author:'Tom Coleman',
    url: 'http://meteor.com',
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helper({
  posts: postsData
});