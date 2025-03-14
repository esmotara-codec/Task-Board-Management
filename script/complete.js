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

  const now = new Date;
  const timeString = now.toLocaleTimeString();
  


//   update Task Manager
assignedTasks--;
completedTasks++;
 const taskReduce =document.getElementById("task-reduce");
 taskReduce.innerText= assignedTasks;
 const completedTask =document.getElementById("complete-task");
    completedTask.innerText=completedTasks;


    // Completed Massege
    const completetionMessage= `You have Complete The Task Add Dark Mode at ${timeString}`;

    const  completeMsgEntry=document.getElementById("message");

    const msgEntry=document.createElement("div");
    msgEntry.classList.add("Completion-entry");
    msgEntry.innerHTML= completetionMessage;
    completeMsgEntry.style.backgroundColor="#cccccc";
    completeMsgEntry.style.margin="10px";

    completeMsgEntry.appendChild(msgEntry);

    console.log("Compleeteeeeobject");
     


 
})
