exports.search=function(req,res){
    req.getConnection(function(err,connection){
        var name=req.body.id;
       var query= connection.query('select hospitals.id as hid,orders.id as oid,name,address,phone,bloodbank,hospital,type,amount,date from hospitals inner join orders on hospitals.name=orders.hospital WHERE hospitals.name=?',[name], function (err,rows){
            if(err) console.log('error', err);
            res.render('ordersearch',{page_title:"Search Orders by Hospital", data:rows});
        });
    });
};