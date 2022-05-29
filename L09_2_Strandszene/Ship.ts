namespace L09_2_Strandszene {

    export class Ship {
        x: number;
        y: number;
        moving: number;

        drawShip(_x: number, _y: number): void {

            //Schiff
            crc2.beginPath();
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x + 30, _y - 50);
            crc2.lineTo(_x - 100, _y - 50);
            crc2.lineTo(_x - 70, _y + 0);
            crc2.closePath();
            crc2.stroke();
    
            crc2.fillStyle = "grey";
            crc2.fill();
    
            //Schiffsfenster
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_x + 0, _y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_x - 20, _y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_x - 40, _y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_x - 60, _y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_x - 80, _y - 40, 8, 12);
    
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(_x + 0, _y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(_x - 20, _y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(_x - 45, _y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(_x - 65, _y - 100, 15, 50);
    
        }

        moveForward(): void {
            this.x += this.moving * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
    }

}