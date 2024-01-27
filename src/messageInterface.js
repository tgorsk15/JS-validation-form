import { formValidation } from "./formLogic";
import { initialValidationRun } from "./index";



const errorMessages = {
    notEmail: `Please enter a valid email address`,

    noCountry: 'Please select your country of residence',

    incorrectZip: 'Zipcode must be in the format of XXXXXX'

}



// eslint-disable-next-line import/prefer-default-export
export const messageController = function () {

    // reference to error spans
    const emailError = document.querySelector('.email-error');
    const countryError = document.querySelector('.country-error');
    const zipcodeError = document.querySelector('.zipcode-error');
    const password1Error = document.querySelector('.password1-error');
    const password2Error = document.querySelector('.password2-error');


    function checkUserEmail (userEmail) {
        // console.log(`I have blurred ${userEmail}`);

        if (userEmail.validity.typeMismatch) {
            console.log('this is wrong');
            emailError.textContent = errorMessages.notEmail;
        } else if (!userEmail.validity.typeMismatch) {
            emailError.textContent = '';
        }

    }


    function checkUserCountry (userCountry) {
        const selectedOption = userCountry.value;
        
        console.log('get out of ma country')
        if (selectedOption === "blank") {
            countryError.textContent = errorMessages.noCountry;
        } else {
            countryError.textContent = ''
        }

    }


    function checkUserZip (userZip) {
        const zipRegEx = /^[0-9]{5}$/;
        const zipString = userZip.value.toString();
        console.log(typeof userZip.value);
        console.log(zipRegEx.test(userZip.value));
        
        if (zipRegEx.test(userZip.value)) {
            console.log('correct bro')
            zipcodeError.textContent = '';
        } else {
            zipcodeError.textContent = errorMessages.incorrectZip;
        }
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