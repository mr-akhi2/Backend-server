const express=require("express");
require("dotenv").config();
const path=require('path')
 const router=new express.Router();

 router.post("/register",(req,res)=>{
    const mail=req.body.mail;
    const otp=req.body.otp;
    const name=req.body.name;
    console.log(mail,otp,name)
    require("dotenv").config();
    const nodemailer = require("nodemailer");
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:process.env.Email_User,
            pass:process.env.Email_Password,
        },
    });
    
    let filename1="../pf1.pdf";
    const mailOptions = {
        from : process.env.Email_User,
        to : mail,
        subject :`Dear ${name}`,
        html:`<h4 sans-serif;>your one time password is <i> ${otp} </i> and is valid for 10 minits. Do not share to anywhere.this is for your account varification</h4></br>
        <span>*****************</span>
        <h5>This is an auto generate email. do no reply to this email.</h5>`,
    //    attachments: [
    //   {
    //     filename:filename1,
    //     path: path.join(__dirname, filename1), // Ensure the correct path to the PDF
    //   },
    // ],
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(`Error occured:`,error);
        }
        console.log(`Email sent successfully:`,info.response);
    });
 })
 module.exports =router


