var L09_Old_Mac_Farm;
(function (L09_Old_Mac_Farm) {
    window.addEventListener("load", hndLoad);
    var cow;
    var horse;
    var chicken;
    var sheep;
    var dog;
    function hndLoad(_event) {
        cow = new L09_Old_Mac_Farm.Animal("Berta", "Grass", "moo", 50);
        horse = new L09_Old_Mac_Farm.Animal("Jochen", "Apples", "weeha", 50);
        chicken = new L09_Old_Mac_Farm.Animal("Günther", "Grains", "boak", 50);
        sheep = new L09_Old_Mac_Farm.Animal("Rudi", "Hay", "meeh", 50);
        dog = new L09_Old_Mac_Farm.Animal("Sunny", "Steak", "woof", 50);
        console.log(L09_Old_Mac_Farm.Animal);
    }
})(L09_Old_Mac_Farm || (L09_Old_Mac_Farm = {}));
//# sourceMappingURL=farm.js.map