"use strict";
var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    //Code-Kopie von Lisa Fodor
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    // Cloud-Arrays für Animation
    let clouds = [];
    let ship = [];
    let seagull = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        L09_2_Strandszene.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let back = new L09_2_Strandszene.Background();
        console.log(back);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = L09_2_Strandszene.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createShip(1);
        //Erscheinen der Vögel
        for (let i = 0; i < 3; i++) {
            let newBird = new L09_2_Strandszene.Seagull();
            newBird.x = Math.random() * L09_2_Strandszene.crc2.canvas.width;
            newBird.y = Math.random() * 50;
            newBird.moving = (Math.random() < 0.5 ? -1 : 1) * 2;
            seagull[i] = newBird;
        }
        //Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let newCloud = new L09_2_Strandszene.Cloud();
            newCloud.x = Math.random() * L09_2_Strandszene.crc2.canvas.width;
            newCloud.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            clouds.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createShip(n) {
        for (let index = 0; index < n; index++) {
            let Ship1 = new L09_2_Strandszene.Ship();
            Ship1.x = 100;
            Ship1.y = 270;
            Ship1.moving = (Math.random() + 1) * 0.5;
            ship.push(Ship1);
        }
    }
    // ANIMATIONEN:
    // Funktion um Vögel und Wolken zu animieren
    function animate() {
        L09_2_Strandszene.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].moveForward();
        }
        drawClouds();
        for (let i = 0; i < seagull.length; i++) {
            let b = seagull[i];
            b.update();
        }
        for (let i = 0; i < ship.length; i++) {
            let Ship = ship[i];
            Ship.moveForward();
            Ship.drawShip();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (let i = 0; i < clouds.length; i++)
            clouds[i].drawCloud();
    }
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Main.js.map