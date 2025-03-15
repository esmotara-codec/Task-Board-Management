function displayCurrentDate(){
    const today = new Date();
    console.log("Full date from JavaScript:", today.toLocaleString());

    //Current Day
    const days =[ "Sun" , "Mon" ,"Tue", "Wed", "Thu" ,"Fri" , "Sat"];
    const daysOfWeek = days[today.getDay()];

     //Current Day
      const date =today.getDate();

        //Current month
        const months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                   "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[today.getMonth()];


        const year =today.getFullYear();

        // const dateString = `${daysOfWeek}, ${month}, ${date}, ${year}`;


        document.getElementById("current-day").innerText = daysOfWeek;
        document.getElementById("current-month").innerText = month;
        document.getElementById("current-date").innerText = date;
        document.getElementById("current-year").innerText = year;
        
        

  


}

window.addEventListener("load", displayCurrentDate);
setInterval(displayCurrentDate, 60000); // Update every minute