module.exports = {
    outputFileExtension: "css",
    compile: (inputContent) => {
        return () => {
            return inputContent;
        };
    },
};
// Get the modal, close button, and submit button elements
var CSmodal = document.getElementById('cs-modal-1605');
var CScloseButton = document.getElementById('cs-close-1605');
var CSsubmitButton = document.getElementById('cs-submit-1605');

// your local storage reset for local testing. uncomment this command so you can still access you pop up after clicking the close or submit button.
// localStorage.setItem('closed', 'false');

// Function to add 'cs-close' class, update the z-index, and update localStorage
function handleClose() {
    CSmodal.classList.add('cs-close');
    CSmodal.style.zIndex = '-100'; // Set z-index to -100 when closing
    localStorage.setItem('closed', 'true');
}

// Attach event listeners to the close and submit buttons
CScloseButton.addEventListener('click', handleClose);
// if you remove the form, remove this below or you will get an error
CSsubmitButton.addEventListener('click', handleClose);

// Function to check localStorage and apply class and style if needed, this prevents the pop up from popping up again if you already submitted your email or closed the pop up. Becuase persistant pop ups are annoying
function checkLocalStorage() {
var isClosed = localStorage.getItem('closed') === 'true';
if (isClosed) {
    CSmodal.classList.add('cs-closed');
    CSmodal.style.zIndex = '-100'; // Set z-index to -100 if closed
    } else {
        CSmodal.style.zIndex = '1000'; // Set z-index to 1000 if not closed
    }
}

// Run the check when the window loads
window.addEventListener('load', checkLocalStorage);

// Wait for .5 seconds to add the 'cs-loaded' class 
setTimeout(function() {
    CSmodal.classList.add('cs-loaded');
}, 500); // 2000 milliseconds equals 2 seconds
                            