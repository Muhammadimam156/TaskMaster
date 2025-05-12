const checkboxes = document.querySelectorAll('.task-checkbox');
const status = document.getElementById('status');
const taskLabels = document.querySelectorAll('.task-label');
const taskListContainer = document.querySelector('.task-list-container');

function updateStatus() {
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const totalCount = checkboxes.length;
    status.textContent = checkedCount === 0 ? 'No tasks completed' :
                                   checkedCount === 1 ? '1 task completed' :
                                   `${checkedCount} of ${totalCount} tasks completed`;

    if (checkedCount === totalCount) {
        status.classList.add('completed-all');
        taskListContainer.classList.add('completed-all-container');
    } else {
        status.classList.remove('completed-all');
        taskListContainer.classList.remove('completed-all-container');
    }
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        const label = taskLabels[index];
        label.classList.toggle('completed', this.checked);
        updateStatus();
    });
});

updateStatus();




