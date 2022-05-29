var Strand;
(function (Strand) {
    window.addEventListener("load", handleLoad);
    var canvas;
    var imgData;
    // Cloud-Arrays für Animation
    var clouds = [];
    var ship = [];
    var seagull = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Strand.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var back = new Background();
        console.log(back);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = Strand.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createShip(1);
        //Erscheinen der Vögel
        for (var i = 0; i < 7; i++) {
            var newBird = new Seagull();
            newBird.x = Math.random() * Strand.crc2.canvas.width;
            newBird.y = Math.random() * 100;
            newBird.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            seagull[i] = newBird;
        }
        //Wolken platzieren
        for (var i = 0; i < 10; i++) {
            var newCloud = new Cloud();
            newCloud.x = Math.random() * Strand.crc2.canvas.width;
            newCloud.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            clouds.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createShip(_n) {
        for (var index = 0; index < _n; index++) {
            var Ship1 = new Ship();
            Ship1.x = 0;
            Ship1.y = 50;
            Ship1.speed = (Math.random() + 1) * 0.5;
            ship.push(Ship1);
        }
    }
    // ANIMATIONEN:
    // Funktion um Vögel und Wolken zu animieren
    function animate() {
        Strand.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < clouds.length; i++) {
            clouds[i].moveForward();
        }
        drawClouds();
        for (var i = 0; i < seagull.length; i++) {
            var b = seagull[i];
            b.update();
        }
        for (var i = 0; i < ship.length; i++) {
            var Ship = ship[i];
            Ship.moveForward();
            Ship.drawShip();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (var i = 0; i < clouds.length; i++)
            clouds[i].drawCloud();
    }
})(Strand || (Strand = {}));
//# sourceMappingURL=Main.js.map