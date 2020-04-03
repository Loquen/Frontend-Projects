function validateForm () {
  let first = document.forms['signup']['first'].value;
  let last = document.forms['signup']['last'].value;
  let email = document.forms['signup']['email'].value;
  let pass = document.forms['signup']['password'].value;

  let messageEl = document.getElementById('message');

  if(first && last && email && pass){
    messageEl.textContent = 'Success!';
    messageEl.classList.remove('failure');
    messageEl.classList.add('success');
  } else {
    messageEl.textContent = 'Invalid! Try Again';
    messageEl.classList.remove('success');
    messageEl.classList.add('failure');
  };
}

function validEmail (email) {

}