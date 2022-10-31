// user controller 
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User Profile | Codeial",
    });
}


module.exports.post = function(req,res){
    return res.render('user_post',{
        title: "User Post | Codeial",
    });
}

module.exports.signUp = function(req,res){

    return res.render('user_sign_up',{
        title: 'Sign up | Codeial',

    })
}

module.exports.signIn = function(req,res){

    return res.render('user_sign_in',{
        title: 'Sign in | Codeial',

    })
}

