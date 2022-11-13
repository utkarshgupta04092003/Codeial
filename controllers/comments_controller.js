const Comment = require('../models/comment');
const Post = require('../models/post');


module.exports.create = async function (req, res) {

    console.log('Comment controller create function called')

    try {
        let post = await Post.findById(req.body.post);

        if (post) {
            let comment = await Comment.create({
                content: req.body.content,
                post: post._id,
                user: req.user._id
            });

            post.comments.push(comment);
            post.save();

            res.redirect('/');
        }
    }
    catch (err) {
        console.log(err);
        return;
    }
}


module.exports.destroy = async function (req, res) {

    try {
        let comment = await Comment.findById(req.params.id);

        if ((req.user.id == comment.user)) {
            // return res.send('User authorized');
            // return res.send(comment.post+);

            let postId = comment.post;
            comment.remove();

            // remove from post.comment list
            await Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } });
            return res.redirect('back');

        }
        else {
            return res.redirect('back');
        }

    } catch (err) {
        console.log(err);
        return;
    }
}

