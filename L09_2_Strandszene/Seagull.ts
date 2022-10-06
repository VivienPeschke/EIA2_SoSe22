namespace L09_2_Strandszene {

    export class Seagull {
        x: number;
        y: number;
        moving: number;

        constructor() {
            this.x = 0;
            this.y = 0;

            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();

        }

        drawSeagull(): void {

            crc2.beginPath();
            crc2.arc(this.x + 0, this.y + 0, 8, 3, 0);
            crc2.arc(this.x + 16, this.y + 0, 8, 3, 0);
            crc2.stroke();

        }

        update(): void {
            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();
        }

        moveForward(): void {
            this.x += this.moving * +0.5;
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
        }

    }
}