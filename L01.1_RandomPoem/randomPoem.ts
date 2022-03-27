/*
Aufgabe: L01.1 Zufallsgedicht
Name: Peschke, Vivien
Matrikel: 270154
Datum: 24.04.2022
Quellen: GitHub Jirka
*/

"use strict";
// tslint:disable-next-line: variable-name
var RandomPoem: {};
// tslint:disable-next-line: typedef
(function (_RandomPoem) {
    /* Arrays: Prädikate, Objekte und Subjekte */
    let subjects: string[] = ["Spider Man, Ironman, Hulk, Doctor Strange, Captain America, Black Panther"];
    console.log(subjects);
    
    let predicates: string[] = ["mag, frisst, zerstört, liebt, zaubert, zerkratzt"];
    console.log(predicates);
    
    let objects: string[] = ["Netze, Anzug, Monster, Magie, Schilde, Katzen"];
    console.log(objects);
    
    for (let index: number = 5; index >= 0; index--) {
        let randomPoem: string = getVerse(predicates, subjects, objects);
        console.log(index);
    }
    // tslint:disable-next-line: typedef
    function getVerse(_predicates: String[], _subjects: String[], _objects: String[]) {
        console.log("Funktion wird aufgerufen");
        
        let subjects: number = Math.floor(Math.random() * _subjects.length);
        console.log(subjects);
        console.log("Funktion gibt SUBJEKT aus");
        

        let predicates: number = Math.floor(Math.random() * _predicates.length);
        console.log(predicates);
        console.log("Funktion gibt PRÄDIKAT aus");
        
        
        let objects: number = Math.floor(Math.random() * _objects.length);
        console.log(objects);
        console.log("Funktion gibt OBJEKT aus");
        

        let sentences: string = subjects[subjects] + " " + predicates[predicates] + " " + objects[objects];
        console.log("Funktion gibt Sätze aus");
        console.log(sentences);

        _predicates.splice(predicates, 1);
        _subjects.splice(subjects, 1);
        _objects.splice(objects, 1);

        return sentences;
    }

})(RandomPoem || (RandomPoem = {}));