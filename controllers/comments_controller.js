const Comment = require('../models/comment');
const Post = require('../models/post');


module.exports.create = function(req,res){

    console.log('Comment controller create function called')

    Post.findById(req.body.post,function(err,post){

        if(post){
            Comment.create({
                content: req.body.content,
                post: post._id,
                user: req.user._id
            },function(err,comment){
                if(err){
                    console.log('Error in creating comments');
                    return;
                }

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            })
        }
    })



}