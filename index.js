var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

var approveEvents = require('./approve_event');
approveEvents.approveEvents(app);

//index page
app.get('/', (request, response) => {
    response.render('signin.ejs');
});

// app.get('/admin', (request, response) => {
//     response.render('admin.ejs');
// });

app.get('/addPlacement', (request, response) => {
    response.render('addplace.ejs');
});
  
app.post('/signin', (req,res) => {
    // if(req.body.username == 'admin' && req.body.pass == 'admin')
    //     res.render('admin.ejs');
    if(req.body.username == 'council' && req.body.pass == 'council')
        res.render('council.ejs');
})

var server_port = process.env.PORT || 8085;
app.listen(server_port, function () {
console.log("Listening on " + server_port);
});