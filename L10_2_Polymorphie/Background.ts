namespace L10_2_PolymorphieAnimation {

    export class Background {

        constructor() {

            this.drawBackground();
            this.drawSun(100, 75);
            this.drawBeach(0, 250);
            this.drawUrlauberi(300, 475); //linker Urlauberi
            this.drawUrlauberi(500, 500); //rechter Urlauberi

            this.drawSurfboard(); //braucht keine Übergabeparameter; wird an der entsprechenden Stelle gezeichnet
            this.drawSurfer(400, 350); //Stehendes Männchen im Wasser

            this.drawSwimmer(230, 350); //Linker Swimmer
            this.drawSwimmer(500, 370); // Rechter Swimmer

            this.drawPalmtrees(130, 470); //Linke Palme
            this.drawPalmtrees(650, 450); //Rechte Palme

            this.drawVegetation(635, 450); //Rechte Palme; Linker Büschel
            this.drawVegetation(650, 450); //Rechte Palme; Mittlerer Büschel
            this.drawVegetation(665, 450); //Rechte Palme; Rechter Büschel

            this.drawVegetation(120, 475); //Linke Palme; Linker Büschel
            this.drawVegetation(130, 475); //Linke Palme; Mittlerer Büschel
            this.drawVegetation(140, 475); //Linke Palme; Rechter Büschel

            this.drawVegetation(200, 500); //Freie Vegetation; Links
            this.drawVegetation(350, 480); //Freie Vegetation; Mitte
            this.drawVegetation(575, 500); //Freie Vegetation; Rechts
        }

        drawBackground(): void {
            console.log("Background");

            //Meer
            crc2.fillStyle = ("HSL(235, 100%, 51%");
            crc2.fillRect(0, 250, 800, 200);

            //Himmel
            crc2.fillStyle = ("HSL(194, 100%, 51%");
            crc2.fillRect(0, 0, 800, 250);
        }


        drawSun(_x: number, _y: number): void {

            let r1: number = 30;
            let r2: number = 150;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();

        }

        drawBeach(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x + 0, _y + 200, _x + 790, _y + 150, _x + 800, _y + 40);
            crc2.lineTo(_x + 800, _y + 300);
            crc2.lineTo(_x, _y + 300);
            crc2.closePath();
            crc2.fillStyle = "HSL(50, 78%, 50%";
            crc2.fill();

            crc2.save();
            crc2.translate(_x, _y);
            crc2.restore();
        }

        drawUrlauberi(_x: number, _y: number): void {

            crc2.beginPath();

            //Kopf
            crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);

            //Beine
            crc2.moveTo(_x - 10, _y + 0);
            crc2.lineTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 20, _y + 0);

            //Körper
            crc2.moveTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 5, _y - 50);

            //Arm links
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x - 10, _y - 30);

            //Arm rechts
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x + 20, _y - 30);

            //Auge links
            crc2.moveTo(_x + 4, _y - 65);
            crc2.lineTo(_x + 4, _y - 61);

            //Auge rechts
            crc2.moveTo(_x + 10, _y - 65);
            crc2.lineTo(_x + 10, _y - 61);

            //Mund
            crc2.moveTo(_x + 10, _y - 56);
            crc2.lineTo(_x + 4, _y - 56);
            crc2.lineTo(_x + 2, _y - 58);

            crc2.stroke();

            crc2.save();
            crc2.translate(_x, _y);
            crc2.restore();

        }

        drawSurfboard(): void {

            crc2.beginPath();
            crc2.ellipse(400, 350, 20, 50, 20, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "orange";
            crc2.fill();

            crc2.save();
            crc2.restore();
        }

        drawSurfer(_x: number, _y: number): void {

            crc2.beginPath();

            //Kopf
            crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);

            //Beine
            crc2.moveTo(_x - 10, _y + 0);
            crc2.lineTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 20, _y + 0);

            //Körper
            crc2.moveTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 5, _y - 50);

            //Arm links
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x - 10, _y - 30);

            //Arm rechts
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x + 20, _y - 30);

            //Auge links
            crc2.moveTo(_x + 4, _y - 65);
            crc2.lineTo(_x + 4, _y - 61);

            //Auge rechts
            crc2.moveTo(_x + 10, _y - 65);
            crc2.lineTo(_x + 10, _y - 61);

            //Mund
            crc2.moveTo(_x + 10, _y - 56);
            crc2.lineTo(_x + 4, _y - 56);
            crc2.lineTo(_x + 2, _y - 58);

            crc2.stroke();

            crc2.save();
            crc2.translate(_x, _y);
            crc2.restore();
        }


        drawSwimmer(_x: number, _y: number): void {

            crc2.beginPath();

            //Kopf
            crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);

            //Körper
            crc2.moveTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 5, _y - 50);

            //Arm links
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x - 10, _y - 30);

            //Arm rechts
            crc2.moveTo(_x + 5, _y - 45);
            crc2.lineTo(_x + 20, _y - 30);

            //Auge links
            crc2.moveTo(_x + 4, _y - 65);
            crc2.lineTo(_x + 4, _y - 61);

            //Auge rechts
            crc2.moveTo(_x + 10, _y - 65);
            crc2.lineTo(_x + 10, _y - 61);

            //Mund
            crc2.moveTo(_x + 10, _y - 56);
            crc2.lineTo(_x + 4, _y - 56);
            crc2.lineTo(_x + 2, _y - 58);

            crc2.stroke();

            crc2.save();
            crc2.translate(_x, _y);
            crc2.restore();
        }


        drawPalmtrees(_x: number, _y: number): void {

            //Stamm (Baumstamm-mäßig?!)
            crc2.fillStyle = ("HSL(33, 46%, 23%");
            crc2.fillRect(_x + 0, _y - 150, 15, 150);

            //Blätter (Sind das Blätter?!)
            //Blatt links unten
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 150);
            crc2.lineTo(_x - 80, _y - 130);
            crc2.lineTo(_x + 7, _y - 130);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt links mitte
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 145);
            crc2.lineTo(_x - 80, _y - 110);
            crc2.lineTo(_x + 7, _y - 125);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt links oben 
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 165);
            crc2.lineTo(_x - 80, _y - 152);
            crc2.lineTo(_x + 7, _y - 145);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts unten
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 150);
            crc2.lineTo(_x + 80, _y - 130);
            crc2.lineTo(_x + 7, _y - 130);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts mitte
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 145);
            crc2.lineTo(_x + 80, _y - 110);
            crc2.lineTo(_x + 7, _y - 125);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts oben 
            crc2.beginPath();
            crc2.moveTo(_x + 7, _y - 165);
            crc2.lineTo(_x + 80, _y - 152);
            crc2.lineTo(_x + 7, _y - 145);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();
        }

        drawVegetation(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x - 3, _y - 7);
            crc2.lineTo(_x + 4, _y - 4);
            crc2.lineTo(_x + 6, _y - 15);
            crc2.lineTo(_x + 8, _y - 3);
            crc2.lineTo(_x + 15, _y - 9);
            crc2.lineTo(_x + 12, _y + 0);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.fill();



        }
    }
}