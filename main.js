let taskInput = document.getElementById("taskInput");
let taskAddBtn = document.getElementById("taskAddBtn");
let noTask = document.getElementById("noTask");
let allTasks = document.getElementById("allTasks");
let invalidMessage = document.getElementById("invalidMessage")
let closeInvalid = document.getElementById("closeInvalid")




let closeInvalidFunc = ()=> {
    invalidMessage.classList.add("none")
}

closeInvalid.addEventListener('click',closeInvalidFunc);
let addTask = () => {

    taskData = taskInput.value;
    if (taskData.trim() == '' || taskInput.value.length < 3) {
         
        invalidMessage.classList.remove("none")
    } else {
        noTask.classList.add('none');

        allTasks.innerHTML += `
        <div class="alert pb-4 alert-info">
        ${taskData}
        <button class=" delete btn btn-danger float-end"> Remove </button>
        </div> `;
        taskInput.value = "";
    }
}

taskAddBtn.addEventListener('click', addTask);

document.addEventListener("click" , function(e){

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        if(allTasks.children.length== 0){
            noTask.classList.remove("none")
        }
    }

});


