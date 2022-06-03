var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    var Seagull = /** @class */ (function () {
        function Seagull() {
            this.x = 0;
            this.y = 0;
            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();
        }
        Seagull.prototype.drawSeagull = function () {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.arc(this.x + 0, this.y + 0, 8, 3, 0);
            L09_2_Strandszene.crc2.arc(this.x + 16, this.y + 0, 8, 3, 0);
            L09_2_Strandszene.crc2.stroke();
        };
        Seagull.prototype.update = function () {
            this.drawSeagull();
            this.drawSeagull();
            this.moveForward();
        };
        Seagull.prototype.moveForward = function () {
            this.x += this.moving * +0.5;
            if (this.x < 0) {
                this.x = this.x + L09_2_Strandszene.crc2.canvas.width;
            }
            if (this.x > L09_2_Strandszene.crc2.canvas.width) {
                this.x = this.x - L09_2_Strandszene.crc2.canvas.width;
            }
        };
        return Seagull;
    }());
    L09_2_Strandszene.Seagull = Seagull;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Seagull.js.map