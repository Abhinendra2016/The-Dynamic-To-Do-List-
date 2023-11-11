document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const inProgressSection = document.getElementById('inProgressSection');
    const doneSection = document.getElementById('doneSection');

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="done-btn" onclick="moveToDone(this)">Done</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Add the new task to the "In Progress" section
        inProgressSection.querySelector('ul').appendChild(li);
    }

    window.moveToDone = function (button) {
        const li = button.parentElement;
        li.querySelector('.done-btn').remove(); // Remove the "Done" button
        button.textContent = 'Delete'; // Change the text to "Delete"
        button.classList.remove('done-btn');
        button.classList.add('delete-btn');
        doneSection.querySelector('ul').appendChild(li);
    };

    window.deleteTask = function (button) {
        const li = button.parentElement;
        li.remove();
    };
});
