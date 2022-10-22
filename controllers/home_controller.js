module.exports.home = function(req,res){

    console.log('Home controller!');
    return res.send('Home Controller!');
}
module.exports.all = function(req,res){
    console.log('Not found');
    return res.send('Error 404');
}