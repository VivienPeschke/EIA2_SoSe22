namespace L09_2_Strandszene {

    export class Ship {
        x: number;
        y: number;
        moving: number;

        drawShip(): void {

            //Schiff
            crc2.beginPath();
            crc2.moveTo(this.x + 0, this.y + 0);
            crc2.lineTo(this.x + 30, this.y - 50);
            crc2.lineTo(this.x - 100, this.y - 50);
            crc2.lineTo(this.x - 70, this.y + 0);
            crc2.closePath();
            crc2.stroke();
    
            crc2.fillStyle = "grey";
            crc2.fill();
    
            //Schiffsfenster
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.x + 0, this.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.x - 20, this.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.x - 40, this.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.x - 60, this.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.x - 80, this.y - 40, 8, 12);
    
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.x + 0, this.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.x - 20, this.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.x - 45, this.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.x - 65, this.y - 100, 15, 50);
    
        }

        moveForward(): void {
            this.x += this.moving * 0.5;
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
    }

}
}