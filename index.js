function check() {
    if (
      document.getElementById("user_name") === "" ||
      document.getElementById("email") === ""
    ) {
      document.getElementById("add_picture").disabled = 1;
    } else {
      document.getElementById("add_picture").disabled = 0;
    }
  }