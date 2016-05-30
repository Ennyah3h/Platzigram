var page = require('page');

var main = document.getElementById('main-container');

page('/', function (ctc, next) {
  main.innerHTML = 'home<a href="/signup">Signup</a>';
})

page('/signup', function (ctx, next) {
  main.innerHTML = 'signup<a href="/">home</a>';
})

page();
