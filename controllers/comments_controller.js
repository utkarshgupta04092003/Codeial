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


module.exports.destroy = function(req,res){

    Comment.findById(req.params.id,function(err,comment){

        if(err){
            console.log('Error in finding comment before deleting');
            return res.send('Error in finding comment before deleting');
        }

        if((req.user.id == comment.user)){
            // return res.send('User authorized');
            // return res.send(comment.post+);

            let postId = comment.post;
            comment.remove();
            
            // remove from post.comment list
            Post.findByIdAndUpdate(postId,{$pull: {comments:req.params.id}},function(err,post){
                
                return res.redirect('back');
            })
        
        }
        else{
            return res.redirect('back');
        }

    })

}