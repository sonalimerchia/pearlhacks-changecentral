module.exports = {
    forgotPassword: function (user, link) {
        console.log(user);
            return {
                to: `"${user.name}" <${user.email}>`,
                subject: "Reset Password",
                text: `Hi ${user.name}, You seem to have forgotten your password but 
                never fear, ChangeCentral is here! Reset Password or copy this link: ${link}
                This link will expire in 3 days.`,
                html: `<p size=12>Hi ${user.name}, <br /><br />
                You seem to have forgotten your password but never fear, ChangeCentral is here!<p><br />
                <a href=${link} color="#9216FE" style="background-color: 9216FE;color:  white;border:  none;border-radius: 5px;padding: 10px;text-decoration: none;">Reset Password</a><br />
                <p size=5><i>or click this link: <a href=${link}>${link}</a></i></p> This link will expire in 3 days}.`
            }
    },
    confirmAccount: (user, link) => {
        return {
            to: `"${user.name}" <${user.email}>`,
            subject: "Confirm Account",
            text: `Hi ${user.name}, Thank you for registering with ChangeCentral! 
            You're almost there. Just click to confirm! Confirm Account or click this link: ${link}`,
            html: `<p size=12>Hi ${user.name}, <br /><br />
            Thank you for registering with ChangeCentral! You're almost there. Just click to confirm!<p><br />
            <a href=${link} color="#9216FE" style="background-color: 9216FE;color:  white;border:  none;border-radius: 5px;padding: 10px;text-decoration: none;">Confirm Account</a><br />
            <p size=5><i>or click this link: <a href=${link}>${link}</a></i></p> This link will expire in 3 days.`
        };
    }
}