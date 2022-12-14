const User = require('../models/user');

// user controller 
module.exports.profile = function(req,res){

    User.findById(req.params.id,function(err,user){

        if(err){
            console.log('Error in finding user in usercontroller profile controller');
            return;
        }
        
        return res.render('user_profile',{
            title: "User Profile | Codeial",
            profile_user: user
    
        });

    })
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
        req.flash('error','Password mismatched !')
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
                req.flash('success','Account Created Successfully !');
                return res.redirect('/users/sign-in');
            })
        }

        else{
            req.flash('error','User Already Exist !');
            return res.redirect('back');
        }


    })

}

// login user
module.exports.createSession = function(req,res){
    // todo later

    req.flash('success','Logged In Successfully');
    return res.redirect('/');
}

// signout or destroy session
module.exports.destroySession = function(req,res){
    // logout using through passport
    req.logout(function(err) {
        if (err) { return; }
        res.redirect('/');
      });

    req.flash('success','Logged Out Successfully');

    return res.redirect('/');
}



// update user profile 
module.exports.update = function(req,res){
    console.log(req.params.id);
    
    if(req.user.id == req.params.id){

        User.findByIdAndUpdate(req.params.id,req.body,function(err,user){
            if(err){
                console.log('error in fetching user data in user profile udpate of user_controllers');
                return;
            }
    

            req.flash('success','Profile Updated Successfully !');
            return res.redirect('back');
    
        })
    
    }
    else{
        req.flash('error','This user is not Allowed to edit !');
        return res.status(401).send('UnAuthorized');
    }


}

