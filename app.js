var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

app.use(express.static('assets'));

// Setup nunjucks templating engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('port', process.env.PORT || 3000);

// Home page
app.get('/', function(req, res) {
    res.render('index.html', {
        page: 'home',
        port: app.get('port')
    });
});

// Other example
app.get('/profile', function(req, res) {
    res.render('profile.html', {
        page: 'profile',
        port: app.get('port')
    });
});

// Kick start our server
app.listen(app.get('port'), function() {
    console.log('Server started on port', app.get('port'));
});
