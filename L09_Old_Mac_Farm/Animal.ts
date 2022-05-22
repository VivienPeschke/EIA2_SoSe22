namespace L09_Old_Mac_Farm {

    export class Animal {
        name: string;
        food: string;
        sound: string;
        foodStock: number;

        constructor(_name: string, _food: string, _sound: string, _foodStock: number) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
            this.foodStock = _foodStock;

            this.eatFood();
        }

        public eatFood(_food: string, _foodStock: number) {
            return this.food;
        }

    }


}