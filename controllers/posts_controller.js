const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req,res){

    try{

        let post = await Post.create({
            content: req.body.content,
            user: req.user._id,
        })

        
        console.log('post controller  create works');

        // console.log(req);
        if(req.xhr){
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post Created!"
            })
        }

        req.flash('success','New Post Published !');
        return res.redirect('back');

    }
    catch(err){

        if(err){
            req.flash('error',err);
            console.log('Error in creating a post');
            return;
        }

    }
  
}


// delete a post
module.exports.destroy = async function(req,res){


    try{
        let post = await Post.findById(req.params.id);
        
        if(post.user == req.user.id){

            console.log('Deleted successfulllu')
            
            await Comment.deleteMany({post: post.id});
            post.remove();
            
            req.flash('success','Post And Associated comments Deleted!');
            return res.redirect('back');
        }
        else{
            console.log('post not found');
            return res.redirect('back');
        }
    }
    catch(err){
        console.log(err);
        req.flash('error',err);
        return;
    }
}

