
import { initialValidationRun } from "./index";



const errorMessages = {
    emptyField: 'This field is required',

    notEmail: `Please enter a valid email address`,

    noCountry: 'Please select your country of residence',

    incorrectZip: 'Zipcode must be in the format of XXXXXX',

    incorrectPassword: 'Password must be at least 8 characters, use at least 1 letter, 1 special character, and 1 digit',

    notMatchingPassword: 'Confirmation password does not match User Password'

}

const errorList = [];


// eslint-disable-next-line import/prefer-default-export
export const messageController = function () {

    // reference to error spans
    const emailError = document.querySelector('.email-error');
    errorList.push(emailError);

    const countryError = document.querySelector('.country-error');
    errorList.push(countryError);

    const zipcodeError = document.querySelector('.zipcode-error');
    errorList.push(zipcodeError);

    const password1Error = document.querySelector('.password1-error');
    errorList.push(password1Error);

    const password2Error = document.querySelector('.password2-error');
    errorList.push(password2Error);


    function checkUserEmail (userEmail) {

        if (userEmail.validity.typeMismatch) {
            console.log('this is wrong');
            emailError.textContent = errorMessages.notEmail;
            userEmail.style.border = '2px solid rgb(179, 105, 105)';

        } else if (userEmail.value === '') {
            userEmail.style.border = '2px solid black';
            emailError.textContent = '';
            
        } else if (!userEmail.validity.typeMismatch) {
            emailError.textContent = '';
            userEmail.style.border = '2px solid rgb(68, 171, 68)';
        }

    }


    function checkUserCountry (userCountry) {
        const selectedOption = userCountry.value;
        
        console.log('get out of ma country')
        if (selectedOption === "blank") {
            countryError.textContent = errorMessages.noCountry;
            userCountry.style.border = '2px solid rgb(179, 105, 105)';

        } else {
            countryError.textContent = '';
            userCountry.style.border = '2px solid black';
        }

    }


    function checkUserZip (userZip) {
        const zipRegEx = /^[0-9]{5}$/;
        
        console.log(zipRegEx.test(userZip.value));
        
        if (zipRegEx.test(userZip.value)) {
            console.log('correct bro')
            zipcodeError.textContent = '';
            userZip.style.border = '2px solid rgb(68, 171, 68)';

        } else if (userZip.value === '') {
            userZip.style.border = '2px solid black';
            zipcodeError.textContent = '';
            
        }else {
            zipcodeError.textContent = errorMessages.incorrectZip;
            userZip.style.border = '2px solid rgb(179, 105, 105)';
        }
    }


    function checkMatchingPasswords (userPassword1, userPassword2) {
        console.log('checking if theres a match');

        if (userPassword2.value === userPassword1.value) {
            console.log('its a match bro')
            password2Error.textContent = '';
            userPassword2.style.border = '2px solid rgb(68, 171, 68)';

        } else if (userPassword2.value === '') {
            userPassword2.style.border = '2px solid black';
            password2Error.textContent = '';

        } else {
            password2Error.textContent = errorMessages.notMatchingPassword;
            userPassword2.style.border = '2px solid rgb(179, 105, 105)';
        };
    }



    function checkPassword1 (userPassword1, userPassword2) {
        const passwordRegEx = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?*]).{8,}$/

        console.log(userPassword1.value);
        console.log(passwordRegEx.test(userPassword1.value));

        if (passwordRegEx.test(userPassword1.value)) {
            console.log('you got it bro');
            password1Error.textContent = '';
            userPassword1.style.border = '2px solid rgb(68, 171, 68)';

        } else if (userPassword1.value === '') {
            userPassword1.style.border = '2px solid black';
            password1Error.textContent = '';

        } else {
            password1Error.textContent = errorMessages.incorrectPassword;
            userPassword1.style.border = '2px solid rgb(179, 105, 105)';
        }

        checkMatchingPasswords(userPassword1, userPassword2);
    }

    function submitCheck() {
        let hasError = false;

        errorList.some(error => {
            console.log(error.textContent);
            if (error.textContent !== '') {
                hasError = true
                alert('Please resolve all marked errors on the form in order to submit')
                return true
                
            }

        });

        if (!hasError) {
            console.log('no errors !')
            initialValidationRun.checkBlankErrors();

            return true
        };

        
        
    }



    return  {checkUserEmail,
        checkUserCountry,
        checkUserZip,
        checkPassword1,
        checkMatchingPasswords,
        submitCheck}

}