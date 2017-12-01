exports.searchbybulk=function(req,res){
    req.getConnection(function(err,connection){
        var type=req.body.type;
       var query= connection.query('select * from bloodbanks where type=?',[type], function (err,rows){
            if(err) console.log('error', err);
            res.render('bulksearch',{page_title:"Search Blood Type by Blood Bank", data:rows});
        });
    });
};