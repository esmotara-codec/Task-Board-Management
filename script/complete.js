let isDisable =false;
let assignedTasks = 6;
let completedTasks = 23;
document.getElementById("complete-btn").addEventListener("click", function(){
    console.log("Hello i clicked");
  
    if(isDisable){
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
   isDisable =true;
   this.disabled =true;
   
    // Change appearance
  this.style.backgroundColor = '#cccccc';
  this.style.cursor = 'not-allowed';

//   update Task Manager
assignedTasks--;
completedTasks++;
 const taskReduce =document.getElementById("task-reduce");
 taskReduce.innerText= assignedTasks;
 const completedTask =document.getElementById("complete-task");
    completedTask.innerText=completedTasks;
 
})
