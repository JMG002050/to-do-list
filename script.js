// storing user's input and accessing these elements

// input
let taskInput = document.getElementById('taskInput');

// button
let addBtn = document.getElementById('addBtn');

// function to make them add the input task to the to-do list
addBtn.addEventListener('click', function() {
  let newTask = taskInput.value; 

  if (newTask.trim() === '') {
    alert('Please enter a task before adding.')
    return;
  }

  let listItem = document.createElement('li');
  listItem.classList.add('task-item');

  let checkBtn = document.createElement('button');
  checkBtn.textContent = '⬜️';
  checkBtn.classList.add('check-btn');
  
  let taskText = document.createTextNode(newTask);

  let trashBtn = document.createElement('button');
  trashBtn.textContent = '🗑️';
  trashBtn.classList.add('delete-btn');

  listItem.appendChild(checkBtn);
  listItem.appendChild(taskText);
  listItem.appendChild(trashBtn);

  let taskList = document.getElementById('list');
  taskList.appendChild(listItem);

  taskInput.value= ''; 

  checkBtn.addEventListener('click', function () {
    listItem.classList.toggle('completed');
    checkBtn.textContent = checkBtn.textContent === '⬜️' ? '✅' : '⬜️';
  });

  trashBtn.addEventListener('click', function() {
    listItem.classList.toggle('hide');
  });
});

