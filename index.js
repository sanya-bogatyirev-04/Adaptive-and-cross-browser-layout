function check() {
    if (
      document.getElementById("form-user-name").value === "" ||
      document.getElementById("form-user-email").value === "" 
    ) {
      document.getElementById("button-add-picture").disabled = 1;
      document.getElementById("button-show-picture").disabled = 1;
    } else {
      document.getElementById("button-add-picture").disabled = 0;
      document.getElementById("button-show-picture").disabled = 0;
    }
  }

  showUserData = () => {
      const name = document.getElementById('form-user-name').value;
      const email = document.getElementById('form-user-email').value;
      const description = document.getElementById('form-picture-user-text').value;
      
      const dataContainer = document.getElementById('user-data-display');
      
      if (!name && !email && !description) {
        dataContainer.innerHTML = '<p>No data for show</p>';
        dataContainer.style.display = 'block';
        return;
      }
      
      let html = '<h3>Your data:</h3>';
      
      if (name) {
        html += `<div class="user-data-item"><span class="user-data-label">Name:</span> ${name}</div>`;
      }
      
      if (email) {
        html += `<div class="user-data-item"><span class="user-data-label">Email:</span> ${email}</div>`;
      }
      
      if (description) {
        html += `<div class="user-data-item"><span class="user-data-label">Description:</span> ${description}</div>`;
      }
      
      dataContainer.innerHTML = html;
      dataContainer.style.display = 'block';
    }