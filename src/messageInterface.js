import { formValidation } from "./formLogic";
import { initialValidationRun } from "./index";






// eslint-disable-next-line import/prefer-default-export
export const messageController = function () {

    // reference to error spans
    const emailError = document.querySelector('.email-error');
    const countryError = document.querySelector('.country-error');
    const zipcodeError = document.querySelector('.zipcode-error');
    const password1Error = document.querySelector('.password1-error');
    const password2Error = document.querySelector('.password2-error');


    function checkUserEmail (userEmail) {
        console.log(`I have blurred ${userEmail}`);

        if (userEmail.validity.typeMismatch) {
            console.log('this is wrong')
            emailError.textContent = 'no'
        } else if (!userEmail.validity.typeMismatch) {
            emailError.textContent = 'yes';
        }

    }


    function checkUserCountry () {

    }


    function checkUserZip () {

    }


    function checkPassword1 () {

    }


    function checkMatchingPasswords () {

    }

    return  {checkUserEmail,
        checkUserCountry,
        checkUserZip,
        checkPassword1,
        checkMatchingPasswords}

}