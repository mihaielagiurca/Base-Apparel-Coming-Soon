const form = document.getElementById('form');
const email = document.getElementById('email');
const errorEl = document.getElementById('error-el');
const labelEl = document.getElementById('label-el');


form.addEventListener('submit', function(e){
   e.preventDefault()
    const  emailValue = email.value;
    const err = errorEl
    if(validateEmail(emailValue)){
        e.target.reset();
        errorEl.style.display = "none";
        labelEl.style.display = "none";
    }
    else{
        errorEl.style.display = "block";
        labelEl.style.display = "block";
    }
});


function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }