const Post = require('../models/post');
const Comment = require('../models/comment');

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


// delete a post
module.exports.destroy = function(req,res){


    Post.findById(req.params.id,function(err,post){
          // id means converting the object id into string
        if(err){
            console.log('Error in deleting post');
            return res.redirect('back');
        }
        console.log(post);
        console.log(req.user.id);
        console.log('post ofuse ',post.user)
        if(post.user == req.user.id){

            console.log('Deleted successfulllu')
            
            Comment.deleteMany({post: post.id},function(err){
                if(err)
                console.log('Error in deleting comments of post')
                // return res('back');
            });
            post.remove();
            
            return res.redirect('back');
        }
        else{
            console.log('post not found');
            return res.redirect('back');
        }
    })
}
