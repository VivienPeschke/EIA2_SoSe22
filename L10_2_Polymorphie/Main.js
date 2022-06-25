var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    var canvas;
    var imgData;
    var moveableObjects = [];
    window.addEventListener("load", handleLoad);
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        L10_2_PolymorphieAnimation.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var back = new L10_2_PolymorphieAnimation.Background();
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = L10_2_PolymorphieAnimation.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createShip(1);
        //Erscheinen der Vögel
        for (var i = 0; i < 3; i++) {
            var newSeagull = new L10_2_PolymorphieAnimation.Seagull();
            newSeagull.position.x = Math.random() * L10_2_PolymorphieAnimation.crc2.canvas.width;
            newSeagull.position.y = Math.random() * 50;
            newSeagull.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            moveableObjects[i] = newSeagull;
            moveableObjects.push(newSeagull);
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
        console.log(moveableObjects);
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
    /*
        function update(): void {
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imgData, 0, 0);
    
            for (let moveable of moveableObjects) {
                moveable.moveForward();
                moveable.draw();
            }
        } */
    //Animationen für Seagull, Clouds & Ship
    function animate() {
        L10_2_PolymorphieAnimation.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < moveableObjects.length; i++) {
            moveableObjects[i].moveForward();
        }
        animateClouds(); //animierte Clouds
        window.setTimeout(animate, 10);
    }
    function animateClouds() {
        for (var i = 0; i < moveableObjects.length; i++)
            ;
    }
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Main.js.map