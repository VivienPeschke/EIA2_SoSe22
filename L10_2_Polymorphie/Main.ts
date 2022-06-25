namespace L10_2_PolymorphieAnimation {

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    let moveableObjects: Moveable[] = [];

    window.addEventListener("load", handleLoad);

    // Start
    function handleLoad(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let back: Background = new Background();

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Boot erstellen
        createShip(1);

        //Erscheinen der Vögel
        for (let i: number = 0; i < 3; i++) {
            let newSeagull: Seagull = new Seagull();
            newSeagull.position.x = Math.random() * crc2.canvas.width;
            newSeagull.position.y = Math.random() * 50;
            newSeagull.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            moveableObjects[i] = newSeagull;
            moveableObjects.push(newSeagull);
        }
        //Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let newCloud: Cloud = new Cloud();
            newCloud.position.x = Math.random() * crc2.canvas.width;
            newCloud.position.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            moveableObjects.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);

        console.log(moveableObjects);

    } // close load-function

    //Funktion Boot
    function createShip(n: number): void {
        for (let index: number = 0; index < n; index++) {
            let ship1: Ship = new Ship();
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
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < moveableObjects.length; i++) {
            moveableObjects[i].moveForward();
        }

        animateClouds(); //animierte Clouds


        window.setTimeout(animate, 10);
    }

    function animateClouds(): void {
        for (let i: number = 0; i < moveableObjects.length; i++);
    }
}