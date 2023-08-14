// step 1 Add click event handler with the submit button.
document.getElementById("btn-submit").addEventListener("click", function () {
  //step 2 get the email address inside the email input field
  //always remeber to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  //step 3: get password.
  //3.1: set id on the html element.
  //3.2: get the element.
  //3.3: get the value from the element.
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;
  

  //DANGER: do not verify email password on the cliend side.

  //step 4: verify email and password.
  if(email === 'mdsabbirhowlader420@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html';
  }
  else{
    alert('Please input your valid email or password.');
  }
  
});
