/*
Aufgabe: L01.1 Zufallsgedicht
Name: Peschke, Vivien
Matrikel: 270154
Datum: 24.04.2022
Quellen: GitHub Jirka
*/
"use strict";
// tslint:disable-next-line: variable-name
var RandomPoem;
// tslint:disable-next-line: typedef
(function (_RandomPoem) {
    /* Arrays: Prädikate, Objekte und Subjekte */
    var subjects = ["Spider Man, Ironman, Hulk, Doctor Strange, Captain America, Black Panther"];
    console.log(subjects);
    var predicates = ["mag, frisst, zerstört, liebt, zaubert, zerkratzt"];
    console.log(predicates);
    var objects = ["Netze, Anzug, Monster, Magie, Schilde, Katzen"];
    console.log(objects);
    for (var index = 5; index >= 0; index--) {
        var randomPoem = getVerse(predicates, subjects, objects);
        console.log(index);
    }
    // tslint:disable-next-line: typedef
    function getVerse(_predicates, _subjects, _objects) {
        console.log("Funktion wird aufgerufen");
        var subjects = Math.floor(Math.random() * _subjects.length);
        console.log(subjects);
        console.log("Funktion gibt SUBJEKT aus");
        var predicates = Math.floor(Math.random() * _predicates.length);
        console.log(predicates);
        console.log("Funktion gibt PRÄDIKAT aus");
        var objects = Math.floor(Math.random() * _objects.length);
        console.log(objects);
        console.log("Funktion gibt OBJEKT aus");
        var sentences = subjects[subjects] + " " + predicates[predicates] + " " + objects[objects];
        console.log("Funktion gibt Sätze aus");
        console.log(sentences);
        _predicates.splice(predicates, 1);
        _subjects.splice(subjects, 1);
        _objects.splice(objects, 1);
        return sentences;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=randomPoem.js.map