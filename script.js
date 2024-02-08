document.addEventListener("DOMContentLoaded", function () {
    var takButton = document.getElementById("tak");
    var nieButton = document.getElementById("nie");
    var pytDiv = document.querySelector(".pyt");
    var container = document.querySelector(".container");
    var audio = new Audio("happy.mp3"); // Dodaj ścieżkę do pliku audio

    // Funkcja obsługująca zdarzenie kliknięcia na dowolny przycisk
    function handleButtonClick() {
        // Sprawdzamy, czy gif już nie istnieje w kontenerze
        if (!document.querySelector(".gif-image")) {
            // Tworzymy element img
            var gifImage = document.createElement("img");
            gifImage.src = "miski.gif"; // Zastąp "miski.gif" ścieżką do swojego pliku gif
            gifImage.classList.add("gif-image");

            // Dodajemy styl CSS do gifa
            gifImage.style.position = "absolute";
            gifImage.style.top = "50%"; // Możesz dostosować wartość
            gifImage.style.left = "50%"; // Możesz dostosować wartość
            gifImage.style.transform = "translate(-50%, -50%)";

            // Dodajemy element img jako pierwszy dzień w kontenerze
            container.insertBefore(gifImage, container.firstChild);

            // Rozpocznij odtwarzanie muzyki
            audio.play();
        }

        // Ukrywamy przyciski i diva pyt
        takButton.style.display = "none";
        nieButton.style.display = "none";
        pytDiv.style.display = "none";
    }

    // Dodajemy zdarzenie kliknięcia do obu przycisków
    takButton.addEventListener("click", handleButtonClick);
    nieButton.addEventListener("click", handleButtonClick);

    // Dodajemy zdarzenie mouseover/mouseout do przycisku "nie"
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
