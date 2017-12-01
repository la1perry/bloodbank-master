exports.search=function(req,res){
    req.getConnection(function(err,connection){
        var id=req.body.id;
       var query= connection.query('select donors.id as donorid,donations.id as donationid,name,sex,age,address,phone,code,bloodbank,type,cost,amount from donors inner join donations on donors.id=donations.donor_id where donor_id=?',[id], function (err,rows){
            if(err) console.log('error', err);
            res.render('donorsearch',{page_title:"Search by Donor", data:rows});
        });
    });
};