// sendEmail.js

const nodemailer = require('nodemailer');

function sendEmail()
{
    let transporter = nodemailer.createTransport
    ({
        service: 'gmail',
        auth: 
        {
            user: 'yourEmail@gmail.com',
            pass: 'yourAppPassword' // app password is different than normal password
        }
    });

    let mailOptions = 
    {
        from: 'yourEmail@gmail.com',
        to: 'whoverYouWant@gmail.com',
        subject: 'Hi. This is a test',
        text: 'Howdy. This is a test email'
    };

    transporter.sendMail(mailOptions, function(error, info)
    {
        if (error) 
        {
            console.log('Error:', error);
        } 
        else 
        {
            console.log('Email sent:', info.response);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

