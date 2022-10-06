namespace L09_2_Strandszene {

    //Code-Kopie von Lisa Fodor
    
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    // Cloud-Arrays für Animation
    let clouds: Cloud[] = [];
    let ship: Ship[] = [];
    let seagull: Seagull[] = [];

    // Start
    function handleLoad(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let back: Background = new Background();
        console.log(back);

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Boot erstellen
        createShip(1);

        //Erscheinen der Vögel
        for (let i: number = 0; i < 3; i++) {
            let newBird: Seagull = new Seagull();
            newBird.x = Math.random() * crc2.canvas.width;
            newBird.y = Math.random() * 50;
            newBird.moving = (Math.random() < 0.5 ? -1 : 1) * 2;
            seagull[i] = newBird;
        }
        //Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let newCloud: Cloud = new Cloud();
            newCloud.x = Math.random() * crc2.canvas.width;
            newCloud.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            clouds.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);
    } // close load-function

    //Funktion Boot
    function createShip(n: number): void {
        for (let index: number = 0; index < n; index++) {
            let Ship1: Ship = new Ship();
            Ship1.x = 100;
            Ship1.y = 270;
            Ship1.moving = (Math.random() + 1) * 0.5;
            ship.push(Ship1);
        }
    }
    // ANIMATIONEN:

    // Funktion um Vögel und Wolken zu animieren
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < clouds.length; i++) {
            clouds[i].moveForward();
        }

        drawClouds();

        for (let i: number = 0; i < seagull.length; i++) {
            let b: Seagull = seagull[i];
            b.update();
        }

        for (let i: number = 0; i < ship.length; i++) {
            let Ship: Ship = ship[i];
            Ship.moveForward();
            Ship.drawShip();
        }

        window.setTimeout(animate, 10);
    } //animate zu

    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds(): void {
        for (let i: number = 0; i < clouds.length; i++)
            clouds[i].drawCloud();
    }
}

