"use strict";
var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    class Cloud {
        x;
        y;
        speed;
        drawCloud() {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            L09_2_Strandszene.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            L09_2_Strandszene.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            L09_2_Strandszene.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            L09_2_Strandszene.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.fillStyle = "#FFFFFF";
            L09_2_Strandszene.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + L09_2_Strandszene.crc2.canvas.width;
            }
            if (this.x > L09_2_Strandszene.crc2.canvas.width) {
                this.x = this.x - L09_2_Strandszene.crc2.canvas.width;
            }
        }
    }
    L09_2_Strandszene.Cloud = Cloud;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Cloud.js.map