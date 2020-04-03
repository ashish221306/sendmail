const express=require('express');

const app=express();
const nodemailer=require('nodemailer');
const bodyParser=require('body-parser');
var email=require('./email.js')
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//implementaion nodemailer
var transporter=nodemailer.createTransport({    //crate transport
    service:'gmail',
    auth:{
        user:email.getGmail(),
        pass:email.getGmailPass()
    }
});


function sendEmail(mail){
    var mailOptions={
        from:email.getGmail(),
        to:mail.to,
        subject:mail.subject,
        body:mail.body,
        text:mail.text,
        html:mail.html
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log('Email Sent :'+info.response);
        }
        })
    
}




//nodemailer ends


app.post('/sendemail',(req,res)=>{
    mail={
        to:req.body.address,
        subject:req.body.subject,
        body:req.body.email_body,
        text:req.body.textt,
        html:req.body.htmltext
        
    }
    sendEmail(mail);
    res.redirect('/message')
})

app.get('/message',(req,res)=>{
    res.send("email sent") 
    })



app.listen(3000,()=>{
    console.log('server is listening on port 3000......')
})



