var L09_Old_Mac_Farm;
(function (L09_Old_Mac_Farm) {
    var Animal = /** @class */ (function () {
        function Animal(_name, _food, _sound, _foodStock) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
            this.foodStock = _foodStock;
            this.eatFood();
        }
        Animal.prototype.eatFood = function (_food, _foodStock) {
            return this.food;
        };
        return Animal;
    }());
    L09_Old_Mac_Farm.Animal = Animal;
})(L09_Old_Mac_Farm || (L09_Old_Mac_Farm = {}));
//# sourceMappingURL=Animal.js.map