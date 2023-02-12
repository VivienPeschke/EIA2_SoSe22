"use strict";
var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    class Seagull extends L10_2_PolymorphieAnimation.Moveable {
        position;
        velocity;
        speed;
        constructor(_position) {
            super(_position);
            this.position.x = 0;
            this.position.y = 0;
            this.draw();
            this.draw();
        }
        draw() {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.arc(this.position.x + 0, this.position.y + 0, 8, 3, 0);
            L10_2_PolymorphieAnimation.crc2.arc(this.position.x + 16, this.position.y + 0, 8, 3, 0);
            L10_2_PolymorphieAnimation.crc2.stroke();
        }
    }
    L10_2_PolymorphieAnimation.Seagull = Seagull;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Seagull.js.map