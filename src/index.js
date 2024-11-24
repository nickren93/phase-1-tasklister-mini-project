document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", addTask)
});

function addTask(e){
  e.preventDefault();
  let li = document.createElement("li")
  li.textContent = `${document.querySelector("#new-task-description").value}   `
  //create delete button:
  let deleteButton = document.createElement("input");
  deleteButton.type = "button"
  deleteButton.value = "x"
  deleteButton.addEventListener("click", deleteTask)

  //create priority selector
  let prioritySelector = document.createElement("select");

  let defaultOption = document.createElement("option");
  defaultOption.textContent = "---select---"
  prioritySelector.append(defaultOption)

  let option1 = document.createElement("option");
  option1.textContent = "High Priority"
  prioritySelector.append(option1)

  let option2 = document.createElement("option");
  option2.textContent = "Medium Priority"
  prioritySelector.append(option2)

  let option3 = document.createElement("option");
  option3.textContent = "Low Priority"
  prioritySelector.append(option3)

  //add priority text color event listener:
  prioritySelector.addEventListener("change", function(){
    if(this.selectedIndex === 1){
      li.style.color = "red"
    }else if(this.selectedIndex === 2){
      li.style.color = "orange"
    }else if(this.selectedIndex === 3){
      li.style.color = "green"
    }
  })
 
  //add priority selector to new task
  li.append(prioritySelector)

  //add delete button to new task
  li.append(deleteButton)
  //add new task to DOM:
  document.querySelector("#tasks").append(li)
  e.target.reset()

  
  
}

function deleteTask(e){
  e.target.parentNode.remove()
}

