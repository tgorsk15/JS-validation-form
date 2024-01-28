import { initialMessageRun  } from "./index";





// eslint-disable-next-line import/prefer-default-export
export const formValidation = function () {
    const userEmail = document.getElementById('user-email');
    const userCountry = document.getElementById('user-country');
    const userZip = document.getElementById('user-zip');
    const userPassword1 = document.getElementById('password1');
    const userPassword2 = document.getElementById('password2');

    // submit button reference
    const submitButton = document.querySelector('.submit-button');


    function resetForm() {
        console.log('form has been reset');
    }


    userEmail.addEventListener('blur', () => {
        initialMessageRun.checkUserEmail(userEmail);
    });


    userCountry.addEventListener('blur', () => {
        initialMessageRun.checkUserCountry(userCountry);
    });


    userZip.addEventListener('blur', () => {
        initialMessageRun.checkUserZip(userZip);
    });


    userPassword1.addEventListener('blur', () => {
        initialMessageRun.checkPassword1(userPassword1, userPassword2);
    });

    userPassword2.addEventListener('blur', () => {
        initialMessageRun.checkMatchingPasswords(userPassword1, userPassword2);
    });


    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        initialMessageRun.submitCheck(submitButton);
        console.log('subbb');


    })

    return { resetForm }
}