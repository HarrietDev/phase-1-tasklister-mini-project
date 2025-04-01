document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event){
    event.preventDefault();  //purpose for preventing  page reload once you click submit button.
    
    const taskInput = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value + " ";
    
    //create priority dropdown
    const prioritySelect = document.createElement("select");
    prioritySelect.innerHTML =`
    <option value = "high">High</option>
    <option value = "medium">Medium</option>
    <option value = "low">Low</option>
    `;
      // Change task color based on priority selection
    prioritySelect.addEventListener("change", function(){
      setPriorityColor(newTask,prioritySelect.value);
    })
      // Apply default priority color
    setPriorityColor(newTask,prioritySelect.value);
    
     //created a delete button
     const deleteButton = document.createElement("button");
     deleteButton.textContent = "X";
     deleteButton.style.marginLeft = "10px";

     // remove task when the x button is clicked
     deleteButton.addEventListener("click",function(){
       newTask.remove();


     })

     
     newTask.appendChild(prioritySelect);
     newTask.appendChild(deleteButton);
     taskList.appendChild(newTask); //just added a task to list

     taskInput.value = "";   //clear inputs

  });

  function setPriorityColor(taskElement, priority){
    if (priority === "high"){
      taskElement.style.color ="red";
    } else if (priority === "medium"){
      taskElement.style.color = "blue";
    }else {
      taskElement.style.color = "green";
    }
  }


});

