var selectedRow = null;

//show alert
function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div, main);

    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000)
}

//delete row
document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    console.log(target.parentElement.parentElement.parentElement);
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.parentElement.remove();
        showAlert('Student Data Deleted', 'danger');
    }
})

//clear all data
function clearData() {
    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('class').value = '';
}

// add data
document.querySelector('#student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const rollNo = document.querySelector('#rollNo').value;
    const className = document.querySelector('#class').value;

    if (name == '' || rollNo == '' || className == '') {
        showAlert('Please fill in all fields', 'danger');
    } else {
        if (selectedRow == null) {
            const list = document.querySelector('#student-list');
            const row = document.createComment('tr');

            row.innerHTML = `
                <td>${name}</td>
                <td>${rollNo}</td>
                <td>${className}</td>
                <td>
                    <a href="#" class="edit"
                        style="border: 1px solid green; padding: 5px; border-radius: 5px;">
                            <i class="fa fa-pencil" aria-hidden="true" style="color: green;"></i>
                    </a>
                </td>
                <td>
                    <a href="#" class="delete"
                        style="border: 1px solid red; padding: 5px; border-radius: 5px;">
                            <i class="fa fa-trash delete" aria-hidden="true" style="color: red;"></i>
                    </a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert('Student Added', 'success');
        } else {
            // selectedRow.children[0].textContent = name;
            // selectedRow.children[1].textContent = rollNo;
            // selectedRow.children[2].textContent = className;
            // selectedRow = null;
            // showAlert('Student Info Edited', 'info');
        }
        clearData();
    }
})