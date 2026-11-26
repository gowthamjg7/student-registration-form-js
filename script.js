// Select the student form
const studentForm = document.getElementById("student_form");
// Select the table body
const studentTableBody = document.getElementById("studentTableBody");

console.log(studentForm);
console.log(studentTableBody);

    studentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email_id").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const gender = selectedGender ? selectedGender.value : ""; 

    // creating an array with all the 8 elements
    const studentDetails = [ 
    firstName,
    lastName,
    email,
    gender,
    address,
    pincode,
    state,
    country
    ];

    const newRow = document.createElement("tr");     //using dom to create a new element which is a table row
    studentDetails.forEach((detail) => {             // detail gets the assigned values of all 8 input fields with for each loop
    const cell = document.createElement("td");       //create new table cell for each details
    cell.textContent = detail;                       //detail assigns its value to cell
    newRow.appendChild(cell);
    
    })

    studentTableBody.appendChild(newRow);            //the new row with all 8 input field details is appended to the table
    studentForm.reset();                             //resets the entered values once submit is clicked.
    });

