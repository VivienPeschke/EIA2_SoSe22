namespace L09_Old_Mac_Farm {
    window.addEventListener("load", hndLoad);
    let cow: Animal;
    let horse: Animal;
    let chicken: Animal;
    let sheep: Animal;
    let dog: Animal;

    function hndLoad(_event: Event): void {
        cow = new Animal("Berta", "Grass", "moo", 50);
        horse = new Animal("Jochen", "Apples", "weeha", 50);
        chicken = new Animal("Günther", "Grains", "boak", 50);
        sheep = new Animal("Rudi", "Hay", "meeh", 50);
        dog = new Animal("Sunny", "Steak", "woof", 50);
        console.log(Animal);
        


    }
}