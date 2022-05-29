var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    var Cloud = /** @class */ (function () {
        function Cloud() {
        }
        Cloud.prototype.drawCloud = function () {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        };
        Cloud.prototype.moveForward = function () {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
        };
        return Cloud;
    }());
    L09_2_Strandszene.Cloud = Cloud;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Cloud.js.map