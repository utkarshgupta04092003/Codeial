const Post = require('../models/post');

module.exports.create = function(req,res){

    
    Post.create({
        content: req.body.content,
        user: req.user._id,
    },function(err,post){
        if(err){
            console.log('Error in creating a post');
            return;
        }

        console.log('post controller  create works');

        return res.redirect('back');
    })
}
