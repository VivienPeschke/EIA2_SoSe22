var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    var Seagull = /** @class */ (function () {
        function Seagull() {
            this.x = 0;
            this.y = 0;
            this.drawSeagull(0, 0);
            this.drawSeagull(-100, -50);
            this.moveForward();
        }
        Seagull.prototype.drawSeagull = function (_x, _y) {
            crc2.beginPath();
            crc2.arc(_x + 0, _y + 0, 8, 3, 0);
            crc2.arc(_x + 16, _y + 0, 8, 3, 0);
            crc2.stroke();
        };
        Seagull.prototype.update = function () {
            this.drawSeagull(0, 0);
            this.drawSeagull(-100, -50);
            this.moveForward();
        };
        Seagull.prototype.moveForward = function () {
            this.x += this.moving * +0.5;
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
        };
        return Seagull;
    }());
    L09_2_Strandszene.Seagull = Seagull;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Seagull.js.map