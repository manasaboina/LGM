// Get HTML elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Add task to the list
const addTask = () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;
    taskItem.appendChild(taskTextElement);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
};

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});
