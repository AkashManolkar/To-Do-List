const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      li.remove();
    };
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
      const newText = prompt('Edit task:', taskText);
      if (newText !== null && newText.trim() !== '') {
        taskText = newText.trim();
        li.textContent = taskText;
      }
    };
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = '';
  }
}
