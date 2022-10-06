var Form;
(function (Form) {
    console.log("Hallo");
    window.addEventListener("load", hndLoad);
    var slider;
    function hndLoad(_event) {
        slider = document.getElementById("slider");
        slider.addEventListener("change", hndChange);
        console.log(slider);
    }
    function hndChange(_event) {
        //console.log(slider.value);
        var formdata = new FormData(document.forms[0]);
        for (var _i = 0, _a = formdata.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log(entry);
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=test.js.map