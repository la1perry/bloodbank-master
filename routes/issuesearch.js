exports.search=function(req,res){
    req.getConnection(function(err,connection){
        var id=req.body.id;
       var query= connection.query(' select issues.id as iid, bloodbanks.id as bid,name,order_num,hospital,issues.type as itype,issues.amount as iamount,cost,date from bloodbanks inner join issues on bloodbanks.id=issues.bloodbank where bloodbanks.id=?',[id], function (err,rows){
            if(err) console.log('error', err);
            res.render('issuesearch',{page_title:"Search Issues by Blood Bank", data:rows});
        });
    });
};