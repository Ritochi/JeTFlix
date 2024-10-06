const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const gender = document.getElementById('gender');
const month = document.getElementById('month');
var checkbox = document.getElementById('checkbox');

function validate(){
    var checkbox = document.getElementById('checkbox');
    var month = document.getElementById('month');
    var days = document.getElementById('days');
    var years = document.getElementById('Year');

    if(month.value == 'month' || days.value == 'days' || years.value == 'Year'){
        alert("Date of Birth is required");
    }

    // if(days.value == 'days'){
    //     alert("Day is required");
    // }

    // if(years.value == 'Year'){
    //     alert("Year is required");
    // }

 
    if (!checkbox.checked) {
        alert("Please agree to the terms and conditions");
    } else {
        // setSuccess(checkboxChecked );
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const genderValue = gender.value.trim();
    const monthValue = month.value.trim();
    var checkboxChecked = checkbox.checked;
    

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if(genderValue === 'select-gender') {
        setError(gender, 'Gender is required');
    } else {
        setSuccess(gender);
    }


};
