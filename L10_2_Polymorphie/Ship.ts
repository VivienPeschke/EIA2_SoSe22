namespace L10_2_PolymorphieAnimation {

    export class Ship {
        position: Vector;
        velocity: Vector;
        speed: number;

        draw(): void {

            //Schiff
            crc2.beginPath();
            crc2.moveTo(this.position.x + 0, this.position.y + 0);
            crc2.lineTo(this.position.x + 30, this.position.y - 50);
            crc2.lineTo(this.position.x - 100, this.position.y - 50);
            crc2.lineTo(this.position.x - 70, this.position.y + 0);
            crc2.closePath();
            crc2.stroke();
    
            crc2.fillStyle = "grey";
            crc2.fill();
    
            //Schiffsfenster
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.position.x + 0, this.position.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.position.x - 20, this.position.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.position.x - 40, this.position.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.position.x - 60, this.position.y - 40, 8, 12);
    
            crc2.fillStyle = "lightgrey";
            crc2.fillRect(this.position.x - 80, this.position.y - 40, 8, 12);
    
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.position.x + 0, this.position.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.position.x - 20, this.position.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.position.x - 45, this.position.y - 100, 15, 50);
    
            crc2.fillStyle = ("HSL(33, 0%, 15%");
            crc2.fillRect(this.position.x - 65, this.position.y - 100, 15, 50);
    
        }

}
}