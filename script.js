  
  
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      buttons.forEach((button) => {
        button.classList.remove("active");
      });

      btn.classList.add("active");

    });

  });