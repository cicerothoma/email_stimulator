//  Variable 
let submitBtn = document.getElementById('sendBtn');





// Event Listeners

eventListener()

function eventListener() {
    // App Init 
    document.addEventListener('DOMContentLoaded', appInit)
}


// Function

    // App Initialization
function appInit() {
    // Disables the Submit button Until the form is valid
    submitBtn.disabled = true;
} 
