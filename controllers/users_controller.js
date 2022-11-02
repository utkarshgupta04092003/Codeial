const User = require('../models/user');

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

    // if user if signed in redirect to profile page
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title: 'Sign up | Codeial',

    })
}

// user signin controller
module.exports.signIn = function(req,res){

      // if user if signed in redirect to profile page
      if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
 

    return res.render('user_sign_in',{
        title: 'Sign in | Codeial',

    })
}

// create user or signup
module.exports.create = function(req,res){
    // check confirm password is same as password or not

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error in finding user in signing up');
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('Error in signing up');
                    return; 
                }
                
                console.log('User create successfully!');
                return res.redirect('/users/sign-in');
            })
        }

        else{
            return res.redirect('back');
        }


    })

}

// login user
module.exports.createSession = function(req,res){
    // todo later

    return res.redirect('/');
}