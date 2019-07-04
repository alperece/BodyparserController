//NOTES:
//CONTROLLER: IS TO RESPOND TO THE REQUEST
// controller : processes that handle input
// the router : is to direct the request

// we should define the path here
var path = require('path');

// the most importnat part is to eport the modules
// otherwise files can not read them
// just define your object and export it
module.exports.index = function(req,res){
    res.sendfile(path.join(__dirname,'../../index.html'));
}

module.exports.indexPost = function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("From Client Post request: User name="+user_name+" and password is"+password);
    res.end("yes");
}