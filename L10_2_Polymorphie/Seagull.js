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
    var Seagull = /** @class */ (function (_super) {
        __extends(Seagull, _super);
        function Seagull(_position) {
            var _this = _super.call(this, _position) || this;
            _this.position.x = 0;
            _this.position.y = 0;
            _this.draw();
            _this.draw();
            return _this;
        }
        Seagull.prototype.draw = function () {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.arc(this.position.x + 0, this.position.y + 0, 8, 3, 0);
            L10_2_PolymorphieAnimation.crc2.arc(this.position.x + 16, this.position.y + 0, 8, 3, 0);
            L10_2_PolymorphieAnimation.crc2.stroke();
        };
        return Seagull;
    }(L10_2_PolymorphieAnimation.Moveable));
    L10_2_PolymorphieAnimation.Seagull = Seagull;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Seagull.js.map