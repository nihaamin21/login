function submit()
{
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#emailid').value;

    //password

    if((password.length < 5) || (password.length > 20)){
        document.querySelector('#password-err').innerHTML = " ** please fill the password between 5 and 20";
        return false;
    }
    email

    if(email.indexOf('@') <= 0){
        document.querySelector('#emailid-err').innerHTML = " ** please fill the email id i proper format @ ";
        return false;
    } 

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){

        document.querySelector('#emailid-err').innerHTML = " ** please fill the email id in proper format . ";
        return false;
    }

        // window.location.href = "../games/index-2.html";


}  