namespace L09_2_Strandszene {

    export class Background {

        constructor() {

            this.drawBackground();
            this.drawSun(100, 75);
            this.drawBeach(0, 250);
            this.drawUrlauberi(200, 120);
            this.drawUrlauberi(100, 300);
            this.drawSurfboard(100, 100);
            this.drawSurfer(-25, 180);
            this.drawSwimmer(-200, 250);
            this.drawSwimmer(-350, 200);
            this.drawPalmtrees(0, 0);
            this.drawPalmtrees(100, 250);
            this.drawVegetation(-450, 400);
            this.drawVegetation(-435, 400);
            this.drawVegetation(-465, 400);
            this.drawVegetation(130, 350);
            this.drawVegetation(120, 350);
            this.drawVegetation(140, 350);
            this.drawVegetation(175, 400);
            this.drawVegetation(-250, 380);
            this.drawVegetation(-300, 400);
        }

        drawBackground(): void {
            console.log("Background");

            //Meer
            crc2.fillStyle = ("HSL(235, 100%, 51%");
            crc2.fillRect(0, 0, 800, 400);

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


        drawSurfboard(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.ellipse(-20, 180, 20, 50, 20, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "orange";
            crc2.fill();

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
            crc2.fillRect(_x - 850, _y + 550, 15, 250);

            //Blätter (Sind das Blätter?!)
            //Blatt links unten
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 930, _y + 600);
            crc2.lineTo(_x - 840, _y + 570);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts unten
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 750, _y + 600);
            crc2.lineTo(_x - 840, _y + 570);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts mitte
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 750, _y + 550);
            crc2.lineTo(_x - 840, _y + 570);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt links mitte
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 930, _y + 550);
            crc2.lineTo(_x - 840, _y + 570);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt links oben
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 900, _y + 500);
            crc2.lineTo(_x - 840, _y + 570);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

            //Blatt rechts oben
            crc2.beginPath();
            crc2.moveTo(_x - 840, _y + 545);
            crc2.lineTo(_x - 770, _y + 500);
            crc2.lineTo(_x - 840, _y + 570);
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