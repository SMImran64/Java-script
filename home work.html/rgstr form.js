
function formShow() {
    
    let uName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let course = document.getElementById('course').value;

    let gender = document.querySelector('input[name = "gender"]:checked');
    let hobby = document.querySelectorAll('input[name = "hobby"]:checked');

    let address = document.getElementById('address').value;


    let hobbyValue = [];
    for (let i = 0; i <hobby.length; i++) {

        hobbyValue.push(hobby[i].value);



    }

    let output = "Name: " + uName + "\n"
        + "Email: " + email + "\n"
        + "Password: " + password + "\n"
        + "Dob: " + dob + "\n"
        + "Course: " + course + "\n"
        + "Gender: " + gender.value + "\n"
        + "Hobby: " + hobbyValue + "\n"
        + "Address: " + address;

    let newWindow = window.open('', '-blank');

    newWindow.document.write("<pre>"+output+"</pre>");
}

let myform = document.getElementById('myform');
myform.addEventListener('submit',formShow);
