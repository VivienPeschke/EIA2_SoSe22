/*
Aufgabe: L01.1 Zufallsgedicht
Name: Peschke, Vivien
Matrikel: 270154
Datum: 24.04.2022
Quellen: GitHub Jirka
*/

namespace RandomPoem {

    //Arrays: Prädikate, Objekte und Subjekte 
    let subjects: string[] = ["Spider Man", "Ironman", "Hulk", "Doctor Strange", "Captain America", "Black Panther"];
    //console.log(subjects);

    let predicates: string[] = ["mag", "frisst", "zerstört", "liebt", "zaubert", "zerkratzt"];
    //console.log(predicates);

    let objects: string[] = ["Netze", "Anzug", "Monster", "Magie", "Schilde", "Katzen"];
    //console.log(objects);

    //For Schleife um die Arrays von hinten nach vorne zu durchlaufen
    for (let index: number = 5; index >= 1; index--) {

        //Vorbereitung für die Konsolenausgabe
        let randomPoem: string = getVerse(subjects, predicates, objects);
        console.log(randomPoem);
    }

    //Funktion um die Zufallszahlen zu erzeugen und mit den Arrays zu verrechnen
    // tslint:disable-next-line: typedef
    function getVerse(_subjects: String[], _predicates: String[], _objects: String[]) {
        //console.log("Funktion wird aufgerufen");

        let subject: number = Math.floor(Math.random() * _subjects.length);
       // console.log(subjects);
        //console.log("Funktion gibt SUBJEKT aus");


        let predicate: number = Math.floor(Math.random() * _predicates.length);
        //console.log(predicates);
        //console.log("Funktion gibt PRÄDIKAT aus");


        let object: number = Math.floor(Math.random() * _objects.length);
        //console.log(objects);
        //console.log("Funktion gibt OBJEKT aus");


        let sentence: string = subjects[subject] + " " + predicates[predicate] + " " + objects[object];
        //console.log("Funktion gibt Sätze aus");
        //console.log(sentences);

        _subjects.splice(subject, 1);
        _predicates.splice(predicate, 1);
        _objects.splice(object, 1);

        return sentence;
    }

}