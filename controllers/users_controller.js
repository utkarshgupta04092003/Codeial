// user controller 
module.exports.profile = function(req,res){
    res.render('user_profile',{
        title: "User Profile | Codeial",
    });
}

module.exports.post = function(req,res){
    res.render('user_post',{
        title: "User Post | Codeial",
    });
}