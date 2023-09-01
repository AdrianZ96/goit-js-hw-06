const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = new FormData(loginForm); 

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    if (!formObject.email || !formObject.password) {
      alert('Wszystkie pola powinny być wypełnione');
    } else {
      console.log('Dane z formularza:', formObject);
      loginForm.reset(); 
    }
  });