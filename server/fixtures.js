if (Posts.find().count() === 0){
  Posts.insert ({
    title: 'Introducing Meteor',
    author: 'Sacha Grieff',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert ({
    title: 'Meteor',
    author:'Tom Coleman',
    url: 'http://meteor.com',
  });
  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });
}
