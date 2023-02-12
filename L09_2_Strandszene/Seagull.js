"use strict";
var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    class Seagull {
        x;
        y;
        moving;
        constructor() {
            this.x = 0;
            this.y = 0;
            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();
        }
        drawSeagull() {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.arc(this.x + 0, this.y + 0, 8, 3, 0);
            L09_2_Strandszene.crc2.arc(this.x + 16, this.y + 0, 8, 3, 0);
            L09_2_Strandszene.crc2.stroke();
        }
        update() {
            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();
        }
        moveForward() {
            this.x += this.moving * +0.5;
            if (this.x < 0) {
                this.x = this.x + L09_2_Strandszene.crc2.canvas.width;
            }
            if (this.x > L09_2_Strandszene.crc2.canvas.width) {
                this.x = this.x - L09_2_Strandszene.crc2.canvas.width;
            }
        }
    }
    L09_2_Strandszene.Seagull = Seagull;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Seagull.js.map