function check() {
    if (
      document.getElementById("form-user-name") === "" ||
      document.getElementById("form-user-email") === "" 
    ) {
      document.getElementById("button-add-picture").disabled = 1;
    } else {
      document.getElementById("button-add-picture").disabled = 0;
    }
  }