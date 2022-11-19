{
    console.log('works');

    // method to submit form data using ajax
    let createPost = function(){

        let newPostForm = $('#new-post-form');
    
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'POST',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    $('#posts-list-container>ul').prepend(newPost);
                },
                error: function(error){
                    console.log(error);
                }
            })
        })
    }

    // method to print the post item
    let newPostDom = function(post){
        return $(`
        <br>
        <li id="post-<%=post._id %>">
        
            <p>
              
                    <small><a href="/posts/destroy/${post.id}" class="delete-post-button">Delete Post</a></small>
        
        
        
        
                        ${ post.content }
                            <small>
                                -${post.user.name}
                            </small>
            </p>
        
        
            <div class="post-comments">
        
                    <form action="/comments/create" method="POST">
                        <input type="text" name="content" placeholder="Type here to add Comment" required>
                        <input type="hidden" name="post" value="${post._id }">
        
                        <input type="submit" value="Add Comment">
        
                    </form>
        
        
        
        
                        <div class="post-comments-list">
        
                            <ul id="post-comments-${ post._id }">
                                
                            </ul>
                        </div>
        
        
            </div>
        
        
        
        </li>
        
        
        `)
    }

    createPost();

}
