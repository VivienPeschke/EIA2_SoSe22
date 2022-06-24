var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    var Ship = /** @class */ (function () {
        function Ship() {
        }
        Ship.prototype.draw = function () {
            //Schiff
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(this.position.x + 0, this.position.y + 0);
            L10_2_PolymorphieAnimation.crc2.lineTo(this.position.x + 30, this.position.y - 50);
            L10_2_PolymorphieAnimation.crc2.lineTo(this.position.x - 100, this.position.y - 50);
            L10_2_PolymorphieAnimation.crc2.lineTo(this.position.x - 70, this.position.y + 0);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "grey";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Schiffsfenster
            L10_2_PolymorphieAnimation.crc2.fillStyle = "lightgrey";
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x + 0, this.position.y - 40, 8, 12);
            L10_2_PolymorphieAnimation.crc2.fillStyle = "lightgrey";
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 20, this.position.y - 40, 8, 12);
            L10_2_PolymorphieAnimation.crc2.fillStyle = "lightgrey";
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 40, this.position.y - 40, 8, 12);
            L10_2_PolymorphieAnimation.crc2.fillStyle = "lightgrey";
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 60, this.position.y - 40, 8, 12);
            L10_2_PolymorphieAnimation.crc2.fillStyle = "lightgrey";
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 80, this.position.y - 40, 8, 12);
            //Schiffstürme (Nicht sicher, ob die so heißen..)
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x + 0, this.position.y - 100, 15, 50);
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 20, this.position.y - 100, 15, 50);
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 45, this.position.y - 100, 15, 50);
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(33, 0%, 15%");
            L10_2_PolymorphieAnimation.crc2.fillRect(this.position.x - 65, this.position.y - 100, 15, 50);
        };
        return Ship;
    }());
    L10_2_PolymorphieAnimation.Ship = Ship;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Ship.js.map