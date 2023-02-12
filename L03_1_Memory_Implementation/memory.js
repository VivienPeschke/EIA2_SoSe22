"use strict";
/*
Aufgabe: <L03.1 Memory Settings>
Name: <Vivien Peschke>
Matrikel: <270154>
Datum: <19.04.2022>
Quellen: Code von Anja Weber
<https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
https://developer.mozilla.org/de/docs/Web/API/setTimeout>
*/
var Memory;
(function (Memory) {
    // Deklaration der globalen Variablen
    let firstCardClicked;
    let locked = false;
    let startTimeStamp;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }
    function createGame() {
        let playingAreaDiv = document.querySelector("#playingArea");
        playingAreaDiv.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        //get Methode von FormData liefert FormDataEntryValue zurück 
        //FormDataEntryValue kann nicht direkt in Number umgewandelt werden
        //FormDataEntryValue  kann mit .toString Methode in Stringwert umgewandelt werden
        //Dieser Stringwert kann mit parseInt Funktion in Number umgewandelt werden
        let pairCount = parseInt(formData.get("pairCount").toString());
        let cardSize = formData.get("cardSize") + "px";
        let backgroundColor = formData.get("backgroundColor").toString();
        let cardBackColor = formData.get("cardBackColor").toString();
        let fontColor = formData.get("fontColor").toString();
        let fontFamily = formData.get("fontFamily").toString();
        playingAreaDiv.style.backgroundColor = backgroundColor;
        let allValues = [];
        for (let i = 0; i < pairCount; i++) {
            allValues.push(i);
            allValues.push(i);
        }
        allValues = shuffle(allValues);
        for (let i = 0; i < allValues.length; i++) {
            //Karte wird angelegt
            createCard(allValues[i], cardSize, cardBackColor, fontColor, fontFamily);
        }
        startTimeStamp = new Date();
        let configFormDiv = document.querySelector("#configForm");
        configFormDiv.classList.add("hidden");
        playingAreaDiv.classList.remove("hidden");
    }
    function createCard(_value, _cardSize, _cardBackColor, _fontColor, _fontFamily) {
        let cardDiv = document.createElement("div");
        let playingAreaDiv = document.querySelector("#playingArea");
        playingAreaDiv.appendChild(cardDiv);
        cardDiv.classList.add("card");
        cardDiv.style.backgroundColor = _cardBackColor;
        cardDiv.style.height = _cardSize;
        cardDiv.style.width = _cardSize;
        cardDiv.addEventListener("click", flipCard);
        let cardValueSpan = document.createElement("span");
        cardDiv.appendChild(cardValueSpan);
        cardValueSpan.innerHTML = _value.toString();
        cardValueSpan.classList.add("hidden");
        cardValueSpan.style.color = _fontColor;
        cardValueSpan.style.fontFamily = _fontFamily;
    }
    function flipCard(_event) {
        if (locked === true) {
            // Ausführung der Funktion wird mit return abgebrochen
            return;
        }
        else {
            let cardClicked = _event.target;
            if (cardClicked === firstCardClicked) {
                return;
            }
            else {
                let cardClickedSpan = cardClicked.querySelector("span");
                cardClickedSpan.classList.remove("hidden");
                if (firstCardClicked === undefined) {
                    firstCardClicked = cardClicked;
                    return;
                }
                else {
                    let secondCardValue = cardClickedSpan.innerHTML;
                    let firstCardClickedSpan = firstCardClicked.querySelector("span");
                    let firstCardValue = firstCardClickedSpan.innerHTML;
                    locked = true;
                    // Die Funktion setTimeout() ruft nach der gegebenen Zeitspanne (in ms) die anonyme Funktion auf.
                    // https://developer.mozilla.org/de/docs/Web/API/setTimeout
                    setTimeout(function () {
                        locked = false;
                        if (firstCardValue === secondCardValue) {
                            cardClicked.classList.add("invisible");
                            firstCardClicked.classList.add("invisible");
                            // Suche nach einem Element das die Klasse "card" aber NICHT die Klasse "invisible" hat
                            let visibleCard = document.querySelector(".card:not(.invisible)");
                            if (visibleCard === null) {
                                let endTimeStamp = new Date();
                                let durationInMs = endTimeStamp.getTime() - startTimeStamp.getTime();
                                let minutes = Math.floor(durationInMs / 60000);
                                let seconds = Math.floor((durationInMs % 60000) / 1000);
                                alert("Glückwunsch! Dauer: " + minutes + "min " + seconds + "s");
                            }
                        }
                        else {
                            cardClickedSpan.classList.add("hidden");
                            firstCardClickedSpan.classList.add("hidden");
                        }
                        firstCardClicked = undefined;
                    }, 2000);
                }
            }
        }
    }
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map