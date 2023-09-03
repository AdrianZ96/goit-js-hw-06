const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const emailInput = formElements.email;
  const passwordInput = formElements.password;

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!emailValue || !passwordValue) {
    alert('Wszystkie pola powinny być wypełnione');
  } else {
    const formObject = {
      email: emailValue,
      password: passwordValue,
    };

    console.log('Dane z formularza:', formObject);
    loginForm.reset();
  }
});