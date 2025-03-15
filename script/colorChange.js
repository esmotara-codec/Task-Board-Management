const colors = ['#FFFFB9', '#FFB399', '#FFBFFF', '#FFFF99', '#00B3E6', 
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC'];


const colorButton = document.getElementById("color-change");
let currentIndex = 0;

colorButton.addEventListener("click", function(){
    const nextColor = colors[currentIndex];

    document.body.style.backgroundColor = nextColor;

    currentIndex = (currentIndex +1) % colors.length;
})