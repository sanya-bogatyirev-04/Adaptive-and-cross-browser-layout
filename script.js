const full = '<h3>Your data:</h3>\n\
<div class="user-data-item"><span class="user-data-label">Name:</span></div>\n\
<div class="user-data-item"><span class="user-data-label">Email:</span></div>\n\
<div class="user-data-item"><span class="user-data-label">Description:</span></div>\n\
<div class="user-data-item"><span class="user-data-label">Newsletter:</span></div>\n\
';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-container');
    const userNameInput = document.getElementById('form-user-name');
    const userEmailInput = document.getElementById('form-user-email');
    const userTextInput = document.getElementById('form-picture-user-text');
    const newsletterCheckbox = document.getElementById('newsletter');
    
    const addButton = document.getElementById('button-add-picture');
    const showButton = document.getElementById('button-show-picture');
    const resetButton = document.getElementById('button-del-user-info');
    
    const userDataDisplay = document.getElementById('user-data-display');

    function checkFormValidity() {
        const isNameValid = userNameInput.value.trim() !== '';
        const isEmailValid = userEmailInput.value.trim() !== '';
        const isFormValid = isNameValid && isEmailValid;
        
        addButton.disabled = !isFormValid;
        showButton.disabled = !isFormValid;
        
        return isFormValid;
    }

    userNameInput.addEventListener('input', checkFormValidity);
    userEmailInput.addEventListener('input', checkFormValidity);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (checkFormValidity()) {
            showUserData();
        }
    });

    showButton.addEventListener('click', function() {
        if (checkFormValidity()) {
            showUserData();
        }
    });

    resetButton.addEventListener('click', function() {
        userDataDisplay.innerHTML = full;
    });

    function showUserData() {
        const name = userNameInput.value.trim();
        const email = userEmailInput.value.trim();
        const description = userTextInput.value.trim();
        const isSubscribed = newsletterCheckbox.checked;
        
        userDataDisplay.style.display = 'block';
        
        if (!name && !email && !description && !isSubscribed) {
            userDataDisplay.innerHTML = '<p>No data to show</p>';
            return;
        }
        
        let html = '<h3>Your data:</h3>';
        
        if (name) html += `<div class="user-data-item"><span class="user-data-label">Name:</span> ${name}</div>`;
        if (email) html += `<div class="user-data-item"><span class="user-data-label">Email:</span> ${email}</div>`;
        if (description) html += `<div class="user-data-item"><span class="user-data-label">Description:</span> ${description}</div>`;
        
        html += `<div class="user-data-item"><span class="user-data-label">Newsletter:</span> ${isSubscribed ? 'Subscribed' : 'Not subscribed'}</div>`;
        
        userDataDisplay.innerHTML = html;
    }
});