var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    window.addEventListener("load", handleLoad);
    var canvas;
    var imgData;
    var moveableObjects = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        L10_2_PolymorphieAnimation.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var back = new L10_2_PolymorphieAnimation.Background();
        console.log(back);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = L10_2_PolymorphieAnimation.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createShip(1);
        //Erscheinen der Vögel
        for (var i = 0; i < 3; i++) {
            var newBird = new L10_2_PolymorphieAnimation.Seagull();
            newBird.position.x = Math.random() * L10_2_PolymorphieAnimation.crc2.canvas.width;
            newBird.position.y = Math.random() * 50;
            newBird.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            moveableObjects[i] = newBird;
        }
        //Wolken platzieren
        for (var i = 0; i < 10; i++) {
            var newCloud = new L10_2_PolymorphieAnimation.Cloud();
            newCloud.position.x = Math.random() * L10_2_PolymorphieAnimation.crc2.canvas.width;
            newCloud.position.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            moveableObjects.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createShip(n) {
        for (var index = 0; index < n; index++) {
            var ship1 = new L10_2_PolymorphieAnimation.Ship();
            ship1.position.x = 100;
            ship1.position.y = 270;
            ship1.speed = (Math.random() + 1) * 0.5;
            moveableObjects.push(ship1);
        }
    }
    //Animationen für Seagull, Clouds & Ship
    function animate() {
        L10_2_PolymorphieAnimation.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < moveableObjects.length; i++) {
            moveableObjects[i].moveForward();
        }
        drawClouds(); //animierte Clouds
        for (var i = 0; i < moveableObjects.length; i++) {
            var seagull = moveableObjects[i];
            seagull.update(); //animierte Seagulls
        }
        for (var i = 0; i < moveableObjects.length; i++) {
            var SHIP = moveableObjects[i];
            SHIP.draw(); //animiertes Ship
        }
        window.setTimeout(animate, 10);
    }
    function update() {
        L10_2_PolymorphieAnimation.crc2.fillRect(0, 0, L10_2_PolymorphieAnimation.crc2.canvas.width, L10_2_PolymorphieAnimation.crc2.canvas.height);
        L10_2_PolymorphieAnimation.crc2.putImageData(imgData, 0, 0);
        for (var _i = 0, moveableObjects_1 = moveableObjects; _i < moveableObjects_1.length; _i++) {
            var moveable = moveableObjects_1[_i];
            moveable.moveForward();
            moveable.draw();
        }
    }
    function drawClouds() {
        for (var i = 0; i < moveableObjects.length; i++)
            moveableObjects[i].draw();
    }
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Main.js.map