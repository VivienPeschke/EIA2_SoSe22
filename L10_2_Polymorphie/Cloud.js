var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new L10_2_PolymorphieAnimation.Vector(300, 400);
            _this.velocity = new L10_2_PolymorphieAnimation.Vector(50, 0);
            _this.velocity.random(120, 20);
            return _this;
        }
        Cloud.prototype.drawCloud = function () {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.arc(0, 0, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            L10_2_PolymorphieAnimation.crc2.arc(45, 0, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            L10_2_PolymorphieAnimation.crc2.arc(-27, 0, 15, 0, 2 * Math.PI); // ganz linker Kreis
            L10_2_PolymorphieAnimation.crc2.arc(30, -10, 15, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.arc(27, 10, 15, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "#FFFFFF";
            L10_2_PolymorphieAnimation.crc2.fill();
        };
        return Cloud;
    }(L10_2_PolymorphieAnimation.Moveable));
    L10_2_PolymorphieAnimation.Cloud = Cloud;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Cloud.js.map