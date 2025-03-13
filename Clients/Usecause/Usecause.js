const nodemailer = require("nodemailer");

module.exports.sendClientMessage = async (name, email, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your app password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, 
            to: "krishnakumarodappanal@gmail.com",
            subject: `New Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Email could not be sent." };
    }
};

