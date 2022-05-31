var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    var Ship = /** @class */ (function () {
        function Ship() {
        }
        Ship.prototype.drawShip = function (_x, _y) {
            //Schiff
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x + 0, _y + 0);
            L09_2_Strandszene.crc2.lineTo(_x + 30, _y - 50);
            L09_2_Strandszene.crc2.lineTo(_x - 100, _y - 50);
            L09_2_Strandszene.crc2.lineTo(_x - 70, _y + 0);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "grey";
            L09_2_Strandszene.crc2.fill();
            //Schiffsfenster
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(_x + 0, _y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(_x - 20, _y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(_x - 40, _y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(_x - 60, _y - 40, 8, 12);
            L09_2_Strandszene.crc2.fillStyle = "lightgrey";
            L09_2_Strandszene.crc2.fillRect(_x - 80, _y - 40, 8, 12);
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(_x + 0, _y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(_x - 20, _y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(_x - 45, _y - 100, 15, 50);
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L09_2_Strandszene.crc2.fillRect(_x - 65, _y - 100, 15, 50);
        };
        Ship.prototype.moveForward = function () {
            this.x += this.moving * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + L09_2_Strandszene.crc2.canvas.width;
            }
            if (this.x > L09_2_Strandszene.crc2.canvas.width) {
                this.x = this.x - L09_2_Strandszene.crc2.canvas.width;
            }
        };
        return Ship;
    }());
    L09_2_Strandszene.Ship = Ship;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Ship.js.map