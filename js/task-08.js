const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const emailInput = event.target.querySelector('input[name="email"]');
  const passwordInput = event.target.querySelector('input[name="password"]');

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