var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'Ennyah3h',
        avatar: 'avatar.jpeg'
      },
      url: 'office.jpg',
      likes: 10,
      liked: false
    },
    {
      user: {
        username: 'Ennyah3h',
        avatar: 'avatar.jpeg'
      },
      url: 'office.jpg',
      likes: 2,
      liked: false
    }
  ];

  empty(main).appendChild(template(pictures));
})
