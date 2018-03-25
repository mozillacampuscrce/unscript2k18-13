var mysql = require('mysql');


exports.approveEvents = function(app) {
  app.get('/approveEvents',function(request, response){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "event"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT start,ename FROM events where approved=0", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        response.render('pendingReq',{obj:result});
        
      });
    });
  })
}