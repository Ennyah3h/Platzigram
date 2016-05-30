var page = require('page');

page('/', function (ctc, next) {
  var main = document.getElementById('main-container');
  main.innerHTML = '<a href="/signup">Signup</a>';
})
