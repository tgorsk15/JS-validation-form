import { initialMessageRun  } from "./index";


const fieldsList = [];


// eslint-disable-next-line import/prefer-default-export
export const formValidation = function () {
    const userForm = document.getElementById('fillout-form');


    const userEmail = document.getElementById('user-email');
    fieldsList.push(userEmail);

    const userCountry = document.getElementById('user-country');
    // fieldsList.push(userCountry);

    const userZip = document.getElementById('user-zip');
    fieldsList.push(userZip);

    const userPassword1 = document.getElementById('password1');
    fieldsList.push(userPassword1);

    const userPassword2 = document.getElementById('password2');
    fieldsList.push(userPassword2);

    // submit button reference
    const submitButton = document.querySelector('.submit-button');


    function resetForm() {
        userForm.reset();
    }



    function checkBlankErrors() {
        let hasBlank = false

        fieldsList.some(field => {
            
            console.log(field.value);
            if (field.value === '' || field.value === 'blank') {
                hasBlank = true
                alert('Please fill out all blank fields');
                return true
            };

            

        });

        if (!hasBlank) {
            console.log('all fields are filled');
            resetForm();
            alert('Form was submitted successfully!!');

            return true
        }
        console.log('end of f reached');

        // console.log(fieldsList.every(checkBlanks));
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

    return { resetForm, checkBlankErrors }
}