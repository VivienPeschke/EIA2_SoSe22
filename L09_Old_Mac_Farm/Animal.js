"use strict";
var L09_Old_Mac_Farm;
(function (L09_Old_Mac_Farm) {
    class Animal {
        name;
        food;
        sound;
        foodStock;
        constructor(_name, _food, _sound, _foodStock) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
            this.foodStock = _foodStock;
            this.eatFood(_food, _foodStock);
        }
        // tslint:disable-next-line: typedef
        eatFood(_food, _foodStock) {
            return this.food;
        }
    }
    L09_Old_Mac_Farm.Animal = Animal;
})(L09_Old_Mac_Farm || (L09_Old_Mac_Farm = {}));
//# sourceMappingURL=Animal.js.map