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

  // const addPicture = document.getElementById("form-picture-user");
  // const buttonAddPicture = document.getElementById("button-add-picture");

  // addPicture.addEventListener('click', () => {
  //   location.reload();
  // })

  // buttonAddPicture.addEventListener('click', () => {
  //   location.reload();
  // })

  