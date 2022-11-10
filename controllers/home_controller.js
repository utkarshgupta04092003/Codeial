const Post = require('../models/post');

module.exports.home = function(req,res){

    console.log(req.cookies);
    res.cookie('user_id',25);

  

    Post.find({}).populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user',
        }
    })
    .exec(function(err,posts){

        if(err){
             console.log('Error in fetching all post data from db',err);
             return res.send('Error');
        }

        console.log('Home controller!');
        return res.render('./home',{
            title: "Home | Codeial",
            posts: posts 
        });

    })
    
}
