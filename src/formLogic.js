import { initialMessageRun  } from "./index";





// eslint-disable-next-line import/prefer-default-export
export const formValidation = function () {
    const userEmail = document.getElementById('user-email');
    const userCountry = document.getElementById('user-country');
    const userZip = document.getElementById('user-zip');
    const userPassword1 = document.getElementById('password1');
    const userPassword2 = document.getElementById('password2');

    // submit button reference
    const submitBUtton = document.querySelector('.submit-button');

    // console.log(emailError);
    // console.log(userPassword2);
    // console.log(userEmail);
    // console.log(userPassword1);


    userEmail.addEventListener('blur', () => {
        initialMessageRun.checkUserEmail(userEmail);
    });


    userCountry.addEventListener('blur', () => {
        initialMessageRun.checkUserCountry(userCountry);
    })

}