const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = async function(req,res){

  
    try{
        let posts = await  Post.find({}).populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
            }
        });
     
        let users = await User.find({});
     
     
         
            
         console.log('Home controller!');
         return res.render('./home',{
             title: "Home | Codeial",
             posts: posts,
             all_users : users 
         });
     
                 
    }
    catch(err){
        console.log('Error in home controller ',err);
        return;
    }
        


    
}


// module.exports.home = function(req,res){

//     Post.find({}).populate('user')
//     .populate({
//         path: 'comments',
//         populate: {
//             path: 'user',
//         }
//     })
//     .exec(function(err,posts){

//         if(err){
//              console.log('Error in fetching all post data from db',err);
//              return res.send('Error');
//         }

//         User.find({},function(err,users){
//             if(err){
//                 console.log('Error in finding All User details on home.ejs');
//                 return;
//             }
//             console.log('Home controller!');
//             return res.render('./home',{
//                 title: "Home | Codeial",
//                 posts: posts,
//                 all_users : users 
//             });

            
//         })


//     })
    
// }
