"use strict";
var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    class Moveable {
        position;
        velocity;
        speed;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new L10_2_PolymorphieAnimation.Vector(0, 0);
                this.velocity = new L10_2_PolymorphieAnimation.Vector(0, 0);
            }
        }
        moveForward() {
            this.position.x += this.position.y * +0.5;
            if (this.position.x < 0) {
                this.position.x = this.position.x + L10_2_PolymorphieAnimation.crc2.canvas.width;
            }
            if (this.position.x > L10_2_PolymorphieAnimation.crc2.canvas.width) {
                this.position.x = this.position.x - L10_2_PolymorphieAnimation.crc2.canvas.width;
            }
        }
        // tslint:disable-next-line: no-empty
        draw() { }
    }
    L10_2_PolymorphieAnimation.Moveable = Moveable;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=SuperMoveable.js.map