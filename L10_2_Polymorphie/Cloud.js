"use strict";
var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    class Cloud extends L10_2_PolymorphieAnimation.Moveable {
        position;
        velocity;
        speed;
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_PolymorphieAnimation.Vector(300, 400);
            this.velocity = new L10_2_PolymorphieAnimation.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        drawCloud() {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.arc(0, 0, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            L10_2_PolymorphieAnimation.crc2.arc(45, 0, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            L10_2_PolymorphieAnimation.crc2.arc(-27, 0, 15, 0, 2 * Math.PI); // ganz linker Kreis
            L10_2_PolymorphieAnimation.crc2.arc(30, -10, 15, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.arc(27, 10, 15, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "#FFFFFF";
            L10_2_PolymorphieAnimation.crc2.fill();
        }
    }
    L10_2_PolymorphieAnimation.Cloud = Cloud;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Cloud.js.map