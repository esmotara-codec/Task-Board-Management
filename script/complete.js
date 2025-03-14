
let assignedTasks = 6;
let completedTasks = 23;
const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach( button =>{

    let isDisable =false;

     button.addEventListener("click", function(){
    
  
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

    msgEntry.style.backgroundColor="#cccccc";
    msgEntry.style.margin="15px";
    msgEntry.style.padding="7px";
    msgEntry.style.borderRadius = "5px";
    console.log("New box : ", )



    completeMsgEntry.appendChild(msgEntry);

   
     
    alert("Board Updated Successfully");

 
});
});


