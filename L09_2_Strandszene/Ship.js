"use strict";
var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    class Ship {
        x;
        y;
        moving;
        drawShip() {
            //Schiff
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(this.x + 0, this.y + 0);
            L09_2_Strandszene.crc2.lineTo(this.x + 30, this.y - 50);
            L09_2_Strandszene.crc2.lineTo(this.x - 100, this.y - 50);
            L09_2_Strandszene.crc2.lineTo(this.x - 70, this.y + 0);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "grey";
            L09_2_Strandszene.crc2.fill();
            //Schiffsfenster
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(this.x + 0, this.y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(this.x - 20, this.y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(this.x - 40, this.y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(this.x - 60, this.y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(this.x - 80, this.y - 40, 8, 12);
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(this.x + 0, this.y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(this.x - 20, this.y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(this.x - 45, this.y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(this.x - 65, this.y - 100, 15, 50);
        }
        moveForward() {
            this.x += this.moving * 0.5;
            if (this.x < 0) {
                this.x = this.x + L09_2_Strandszene.crc2.canvas.width;
            }
            if (this.x > L09_2_Strandszene.crc2.canvas.width) {
                this.x = this.x - L09_2_Strandszene.crc2.canvas.width;
            }
        }
    }
    L09_2_Strandszene.Ship = Ship;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Ship.js.map