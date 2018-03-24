var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

//index page
app.get('/', (request, response) => {
    response.render('signin.ejs');
});

app.get('/admin', (request, response) => {
    response.render('admin.ejs');
});

app.get('/addPlacement', (request, response) => {
    response.render('addplace.ejs');
});
  
var server_port = process.env.PORT || 8085;
app.listen(server_port, function () {
console.log("Listening on " + server_port);
});