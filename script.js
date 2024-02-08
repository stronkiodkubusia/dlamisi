document.addEventListener("DOMContentLoaded", function () {
    var takButton = document.getElementById("tak");
    var nieButton = document.getElementById("nie");
    var pytDiv = document.querySelector(".pyt");
    var container = document.querySelector(".container");
    var audio = new Audio("happy.mp3"); 


    function handleButtonClick() {
   
        if (!document.querySelector(".gif-image")) {
       
            var gifImage = document.createElement("img");
            gifImage.src = "miski.gif"; 
            gifImage.classList.add("gif-image");

     
            gifImage.style.position = "absolute";
            gifImage.style.top = "50%"; 
            gifImage.style.left = "50%"; 
            gifImage.style.transform = "translate(-50%, -50%)";

    
            container.insertBefore(gifImage, container.firstChild);

          
            audio.play();
        }

   
        takButton.style.display = "none";
        nieButton.style.display = "none";
        pytDiv.style.display = "none";
    }


    takButton.addEventListener("click", handleButtonClick);
    nieButton.addEventListener("click", handleButtonClick);


    nieButton.addEventListener("mouseover", function () {
        nieButton.classList.remove("btn2");
        nieButton.classList.add("btn");
        nieButton.innerHTML = "tak";
    });

    nieButton.addEventListener("mouseout", function () {
        nieButton.classList.remove("btn");
        nieButton.classList.add("btn2");
        nieButton.innerHTML = "nie";
    });
});
