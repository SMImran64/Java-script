
function resultShow() {
    let uName = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;

    let gender = document.querySelector('input[name = "gender"]:checked');
    let course = document.querySelectorAll('input[name = "course"]:checked');


    let location = document.getElementById('location').value;

    let courseValue = [];

    for (let i = 0; i < course.length; i++) {

        courseValue.push(course[i].value);

    }

    let output = "Name: " + uName + "\n"
        + "Contact: " + contact + "\n"
        + "Remarks: " + remarks + "\n"
        + "ender: " + gender.value + "\n"
        + "Course: " + courseValue + "\n"
        + "Location: " + location;

    let masud = window.open('', '_blank');

    masud.document.write("<pre>" + output + "</pre>");
}