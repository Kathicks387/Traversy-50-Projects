const labels = document.querySelectorAll('.form-control label');
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);


labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

function validateEmail() {
   const email = document.getElementById('email');
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   const small = document.querySelector('.small');

    if(email.value === ''){
        small.innerText = ('Email address may can\'t be blank', setTimeout, 3000)
    } else if(!re.test(email.value )) {
       small.innerText = 'Sorry, that is not a valid email.';
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const pre = /^(a-zA-Z0-9_\-\.]{6,15})$/;
    const small2 = document.querySelector('.small2');

    if(password.value === '') {
        small2.innerText = ('Sorry, password cannot be blank');
    } else if (!pre.test(password.value) && password.value.length < 6 ) {
		small2.innerText = ('Password must contain at least 6 characters');
		} else if (!pre.test(paswoed.value)  && password.value.length > 12 ) {
      small2.innerText = ('Password can not contain more than 12 characters');
    
	}}
   
        
        
        
    