document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskContainer = document.getElementById("taskContainer");
  
    // Handle form submission
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("taskTitle").value;
      const listName = document.getElementById("taskList").value;
      const dueDate = document.getElementById("taskDueDate").value;
  
      addTask(title, listName, dueDate);
      taskForm.reset();
    });
  
    // Add task to the DOM
    function addTask(title, listName, dueDate) {
      const task = document.createElement("div");
      task.classList.add("task");
  
      const taskDetails = document.createElement("div");
      taskDetails.classList.add("task-details");
      taskDetails.innerHTML = `
        <strong>${title}</strong> (${listName}) - <small>Due: ${dueDate}</small>
      `;
      task.appendChild(taskDetails);
  
      const taskActions = document.createElement("div");
      taskActions.classList.add("task-actions");
  
      const completeBtn = document.createElement("button");
      completeBtn.classList.add("complete-btn");
      completeBtn.innerText = "Complete";
      completeBtn.onclick = () => toggleComplete(task);
  
      const editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerText = "Edit";
      editBtn.onclick = () => editTask(task, title, listName, dueDate);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerText = "Delete";
      deleteBtn.onclick = () => task.remove();
  
      taskActions.append(completeBtn, editBtn, deleteBtn);
      task.appendChild(taskActions);
  
      taskContainer.appendChild(task);
    }
  
    // Toggle task completion
    function toggleComplete(task) {
      task.classList.toggle("completed");
    }
  
    // Edit task details
    function editTask(task, oldTitle, oldListName, oldDueDate) {
      const newTitle = prompt("Edit Task Title:", oldTitle);
      const newListName = prompt("Edit List Name:", oldListName);
      const newDueDate = prompt("Edit Due Date:", oldDueDate);
  
      if (newTitle && newListName && newDueDate) {
        task.querySelector(".task-details").innerHTML = `
          <strong>${newTitle}</strong> (${newListName}) - <small>Due: ${newDueDate}</small>
        `;
      }
    }
  });
  