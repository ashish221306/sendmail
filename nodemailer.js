var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({    //crate transport
    service:'gmail',
    auth:{
        user:'ashishbhu221306@gmail.com',
        pass:'7068513356'
    }
});


var mailOptions={
    from:'ashishbhu221306@gmail.com',
    to:'ak371317@gmail.com',
    subject:'sending Email using node.js',
    text:'That was pretty easy !',
    html:'<h1 style="color:green">Ashish kumar</h1>'
};

transporter.sendMail(mailOptions,(error,info)=>{
if(error){
    console.log(error);
}else{
    console.log('Email Sent :'+info.response);
}
})