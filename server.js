var express = require("express");
var bodyParser = require("body-parser");


// server.js does not knowthe controller  if we do not import it
var controller = require('./app_server/controller/loginController');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

/* var gett = function (req,res){
    
}

var postt = function(req,res){
   
}
 */
/* app.get('/',gett);

app.post('/login',postt); */

app.get('/',controller.index);

app.post('/login',controller.indexPost);

app.listen(3000,function(){
    console.log("Started on port 3000");
})