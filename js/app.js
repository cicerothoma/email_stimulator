//  Variable 
let submitBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');


// Event Listeners

eventListener()

function eventListener() {
    // App Init 
    document.addEventListener('DOMContentLoaded', appInit);
    
    // Validate the form 
    email.addEventListener('keyup', validateField);
    subject.addEventListener('keyup', validateField);
    message.addEventListener('keyup', validateField);

    // Reset the Form
    resetBtn.addEventListener('click', resetForm);

    // Send Email
    sendEmailForm.addEventListener('submit', sendEmail)

}


// Functions

    // App Initialization
function appInit() {
    // Disables the Submit button Until the form is valid
    submitBtn.disabled = true;
} 

// Validates the fields 

function validateField() {
    let errors;
    // Validates the Length of the fields

    validateLength(this)

    // Validate email field
    if (this.type === 'email') {
        validateEmail(this);
    }

    //Both will return an error if they're not valid
    errors = document.querySelectorAll('.error')
    // Check if all the field are valid
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            // Since there are nno errors the button should be enabled
            submitBtn.disabled = false;
        }
    } 

}

    // Validates the length of all the fields
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }     
}

    // Validates the Email field
function validateEmail(emailField) {
    if (emailField.value.includes('@')) {
        emailField .style.borderBottomColor = 'green';
        emailField.classList.remove('error')
    } else {
        emailField.style.borderBottomColor = 'red';
        emailField.classList.add('error');
    }    
}

    // Reset the entire Form Field
function resetForm() {
    sendEmailForm.reset();

    // Adds the error style to all form field
        email.style.borderBottomColor = 'red';
        email.classList.add('error');
        subject.style.borderBottomColor = 'red';
        subject.classList.add('error');
        message.style.borderBottomColor = 'red';
        message.classList.add('error');

}

    // Submit the form and display the two gif

function sendEmail (e) {
    e.preventDefault();

    // Show the Spinner

    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

       // Create the image element for the Email Sent Gif
       let emailSent = document.createElement('img');
       emailSent.src = '../img/mail.gif';
       emailSent.style.display = 'block';

    

    setTimeout(() => {
        // Hides the Spinner
        spinner.style.display = 'none';

        // Show the Email sent gif
        document.querySelector('#loaders').appendChild(emailSent)

        setTimeout(() => {
            // Hide the Email Sent gif after 5 seconds and reset the form  
            sendEmailForm.reset();
            emailSent.remove();
        }, 5000)

    }, 3000);

  
}