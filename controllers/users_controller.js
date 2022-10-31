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

// user signup controller
module.exports.signUp = function(req,res){

    return res.render('user_sign_up',{
        title: 'Sign up | Codeial',

    })
}

// user signin controller
module.exports.signIn = function(req,res){

    return res.render('user_sign_in',{
        title: 'Sign in | Codeial',

    })
}

// create user or signup
module.exports.create = function(req,res){
    // todo later
}

// login user
module.exports.createSession = function(req,res){
    // todo later
}