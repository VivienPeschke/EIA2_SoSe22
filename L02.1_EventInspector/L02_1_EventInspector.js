var L02_1_EventInspector;
(function (L02_1_EventInspector) {
    window.addEventListener("load", handleLoad);
    //Funktion handleLoad um alle "Listeners" zu installieren
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        //auf die DIV's in der HTML zugreifen
        var divs = document.querySelectorAll("div");
        console.log(divs);
        //For-Schleife um 
        for (var i = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", logInfo);
            divs[i].addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var spanfix = document.querySelector("span");
        spanfix.style.top = (y + 15) + "px";
        spanfix.style.left = (x + 15) + "px";
        spanfix.textContent = " x = " + x + "; y = " + y + "; " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02_1_EventInspector || (L02_1_EventInspector = {}));
//# sourceMappingURL=L02_1_EventInspector.js.map