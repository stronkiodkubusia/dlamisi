document.addEventListener("DOMContentLoaded", function () {
    var takBtn = document.getElementById("tak");
    var nieBtn = document.getElementById("nie");
    var pytDiv = document.querySelector(".pyt");
    var container = document.querySelector(".container");
    var audio = new Audio("happy.mp3");

    function gifPoBtn() {

        if (!document.querySelector(".gifMis")) {

            var gifMis = document.createElement("img");
            gifMis.src = "miski.gif";
            gifMis.classList.add("gifMis");

            gifMis.style.position = "absolute";
            gifMis.style.top = "50%";
            gifMis.style.left = "50%";
            gifMis.style.transform = "translate(-50%, -50%)";

            container.insertBefore(gifMis, container.firstChild);

            audio.play();
        }

        takBtn.style.display = "none";
        nieBtn.style.display = "none";
        pytDiv.style.display = "none";
    }

    takBtn.addEventListener("click", gifPoBtn);
    nieBtn.addEventListener("click", gifPoBtn);

    nieBtn.addEventListener("mouseover", function () {
        nieBtn.classList.remove("btn2");
        nieBtn.classList.add("btn");
        nieBtn.innerHTML = "tak";
    });

    nieBtn.addEventListener("mouseout", function () {
        nieBtn.classList.remove("btn");
        nieBtn.classList.add("btn2");
        nieBtn.innerHTML = "nie";
    });
});
