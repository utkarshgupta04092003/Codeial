module.exports.home = function(req,res){

    console.log('Home controller!');
    return res.render('./home',{
        title: "Home | Codeial"
    });
}

