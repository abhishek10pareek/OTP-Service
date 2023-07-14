const subject_mail = "OTP: For Email Verification"

const message = (otp) => {
    return 'Dear User, \n\n'
    + `OTP for Email Verification is : \n\n`
    + `${otp}\n\n`
    + 'This is an auto-generated email. Please do not reply to this email.\n\n'
    + 'Regards\n'
    +'Abhishek Pareek\n\n'
}

module.exports = {subject_mail,message};