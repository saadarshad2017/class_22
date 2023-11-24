function submitForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    // Display form data
    var formDataDisplay = document.getElementById('formData');
    formDataDisplay.innerHTML = '<h2>Form Data</h2>' +
        '<p><strong>First Name:</strong> ' + firstName + '</p>' +
        '<p><strong>Last Name:</strong> ' + lastName + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>';
}
// 2nd

function toggleDetails() {
    var fullDetails = document.getElementById('fullDetails');
    var buttonText = document.querySelector('.item-details button');

    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'block';
        buttonText.innerHTML = 'Read less';
    } else {
        fullDetails.style.display = 'none';
        buttonText.innerHTML = 'Read more';
    }
}

// 3rd
function addStudent() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    var table = document.getElementById('studentTable');
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>' +
        '<button onclick="editRow(this)">Edit</button>';
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var editForm = document.getElementById('editForm');
    var editName = document.getElementById('editName');
    var editAge = document.getElementById('editAge');

    editName.value = cells[0].innerText;
    editAge.value = cells[1].innerText;

    editForm.style.display = 'block';
}

function saveEdit() {
    var editForm = document.getElementById('editForm');
    var editName = document.getElementById('editName');
    var editAge = document.getElementById('editAge');

    var table = document.getElementById('studentTable');
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = editName.value;
    cell2.innerHTML = editAge.value;
    cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button>' +
        '<button onclick="editRow(this)">Edit</button>';

    editForm.style.display = 'none';
}

function cancelEdit() {
    var editForm = document.getElementById('editForm');
    editForm.style.display = 'none';
}