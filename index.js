function check() {
    if (
      document.getElementById("form-user-name").value === "" ||
      document.getElementById("form-user-email").value === "" 
    ) {
      document.getElementById("button-add-picture").disabled = 1;
    } else {
      document.getElementById("button-add-picture").disabled = 0;
    }
  }