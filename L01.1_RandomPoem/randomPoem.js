"use strict";
/*
Aufgabe: L01.1 Zufallsgedicht
Name: Peschke, Vivien
Matrikel: 270154
Datum: 24.04.2022
Quellen: GitHub Jirka
*/
var RandomPoem;
(function (RandomPoem) {
    //Arrays: Prädikate, Objekte und Subjekte 
    let subjects = ["Spider Man", "Ironman", "Hulk", "Doctor Strange", "Captain America", "Black Panther"];
    //console.log(subjects);
    let predicates = ["mag", "frisst", "zerstört", "liebt", "zaubert", "zerkratzt"];
    //console.log(predicates);
    let objects = ["Netze", "Anzug", "Monster", "Magie", "Schilde", "Katzen"];
    //console.log(objects);
    //For Schleife um die Arrays von hinten nach vorne zu durchlaufen
    for (let index = 5; index >= 1; index--) {
        //Vorbereitung für die Konsolenausgabe
        let randomPoem = getVerse(subjects, predicates, objects);
        console.log(randomPoem);
    }
    //Funktion um die Zufallszahlen zu erzeugen und mit den Arrays zu verrechnen
    // tslint:disable-next-line: typedef
    function getVerse(_subjects, _predicates, _objects) {
        //console.log("Funktion wird aufgerufen");
        let subject = Math.floor(Math.random() * _subjects.length);
        // console.log(subjects);
        //console.log("Funktion gibt SUBJEKT aus");
        let predicate = Math.floor(Math.random() * _predicates.length);
        //console.log(predicates);
        //console.log("Funktion gibt PRÄDIKAT aus");
        let object = Math.floor(Math.random() * _objects.length);
        //console.log(objects);
        //console.log("Funktion gibt OBJEKT aus");
        let sentence = subjects[subject] + " " + predicates[predicate] + " " + objects[object];
        //console.log("Funktion gibt Sätze aus");
        //console.log(sentences);
        _subjects.splice(subject, 1);
        _predicates.splice(predicate, 1);
        _objects.splice(object, 1);
        return sentence;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=randomPoem.js.map