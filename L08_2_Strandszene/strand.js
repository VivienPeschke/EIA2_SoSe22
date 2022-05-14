var Strand;
(function (Strand) {
    window.addEventListener("load", handleLoad);
    var crc2;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 150, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 400, y: 10 }, { x: 250, y: 75 });
        drawBeach({ x: -550, y: 120 });
        drawUrlauberi({ x: -50, y: 350 });
        drawUrlauberi({ x: 50, y: 400 });
        drawSurfboard({ x: 100, y: 100 });
        drawSurfer({ x: -25, y: 180 });
        drawSwimmer({ x: -200, y: 250 });
        drawSwimmer({ x: -350, y: 200 });
        drawPalmtrees({ x: 400, y: -400 });
        drawPalmtrees({ x: 975, y: -450 });
        drawShip({ x: -150, y: 125 });
        drawVegetation({ x: -450, y: 400 });
        drawVegetation({ x: -435, y: 400 });
        drawVegetation({ x: -465, y: 400 });
        drawVegetation({ x: 130, y: 350 });
        drawVegetation({ x: 120, y: 350 });
        drawVegetation({ x: 140, y: 350 });
        drawVegetation({ x: 175, y: 400 });
        drawVegetation({ x: -250, y: 380 });
        drawVegetation({ x: -300, y: 400 });
        drawSeagull({ x: 0, y: 0 });
        drawSeagull({ x: -100, y: -50 });
    }
    function drawBackground() {
        console.log("Background");
        //Meer
        crc2.fillStyle = ("HSL(235, 100%, 51%");
        crc2.fillRect(0, 0, 800, 400);
        //Himmel
        crc2.fillStyle = ("HSL(194, 100%, 51%");
        crc2.fillRect(0, 0, 800, 250);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        var r1 = 30;
        var r2 = 150;
        var gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        var nParticles = 30;
        var radiusParticle = 50;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var draw = 0; draw < nParticles; draw++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
    function drawBeach(_position) {
        console.log("Bucht", _position);
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x + 0, _position.y + 200, _position.x + 790, _position.y + 150, _position.x + 800, _position.y + 40);
        crc2.lineTo(_position.x + 800, _position.y + 300);
        crc2.lineTo(_position.x, _position.y + 300);
        crc2.closePath();
        crc2.fillStyle = "HSL(50, 78%, 50%";
        crc2.fill();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function drawUrlauberi(_position) {
        console.log("Urlauberi", _position);
        crc2.beginPath();
        //Kopf
        crc2.arc(_position.x + 5, _position.y - 60, 11, 0, 2 * Math.PI);
        //Beine
        crc2.moveTo(_position.x - 10, _position.y + 0);
        crc2.lineTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 20, _position.y + 0);
        //Körper
        crc2.moveTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 5, _position.y - 50);
        //Arm links
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x - 10, _position.y - 30);
        //Arm rechts
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + 20, _position.y - 30);
        //Auge links
        crc2.moveTo(_position.x + 4, _position.y - 65);
        crc2.lineTo(_position.x + 4, _position.y - 61);
        //Auge rechts
        crc2.moveTo(_position.x + 10, _position.y - 65);
        crc2.lineTo(_position.x + 10, _position.y - 61);
        //Mund
        crc2.moveTo(_position.x + 10, _position.y - 56);
        crc2.lineTo(_position.x + 4, _position.y - 56);
        crc2.lineTo(_position.x + 2, _position.y - 58);
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function drawSurfer(_position) {
        console.log("Surfer", _position);
        crc2.beginPath();
        //Kopf
        crc2.arc(_position.x + 5, _position.y - 60, 11, 0, 2 * Math.PI);
        //Beine
        crc2.moveTo(_position.x - 10, _position.y + 0);
        crc2.lineTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 20, _position.y + 0);
        //Körper
        crc2.moveTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 5, _position.y - 50);
        //Arm links
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x - 10, _position.y - 30);
        //Arm rechts
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + 20, _position.y - 30);
        //Auge links
        crc2.moveTo(_position.x + 4, _position.y - 65);
        crc2.lineTo(_position.x + 4, _position.y - 61);
        //Auge rechts
        crc2.moveTo(_position.x + 10, _position.y - 65);
        crc2.lineTo(_position.x + 10, _position.y - 61);
        //Mund
        crc2.moveTo(_position.x + 10, _position.y - 56);
        crc2.lineTo(_position.x + 4, _position.y - 56);
        crc2.lineTo(_position.x + 2, _position.y - 58);
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function drawSurfboard(_position) {
        console.log("Surfboard", _position);
        crc2.beginPath();
        crc2.ellipse(-20, 180, 20, 50, 20, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function drawSwimmer(_position) {
        console.log("Surfer", _position);
        crc2.beginPath();
        //Kopf
        crc2.arc(_position.x + 5, _position.y - 60, 11, 0, 2 * Math.PI);
        //Körper
        crc2.moveTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 5, _position.y - 50);
        //Arm links
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x - 10, _position.y - 30);
        //Arm rechts
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + 20, _position.y - 30);
        //Auge links
        crc2.moveTo(_position.x + 4, _position.y - 65);
        crc2.lineTo(_position.x + 4, _position.y - 61);
        //Auge rechts
        crc2.moveTo(_position.x + 10, _position.y - 65);
        crc2.lineTo(_position.x + 10, _position.y - 61);
        //Mund
        crc2.moveTo(_position.x + 10, _position.y - 56);
        crc2.lineTo(_position.x + 4, _position.y - 56);
        crc2.lineTo(_position.x + 2, _position.y - 58);
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function drawPalmtrees(_position) {
        console.log("Palmen", _position);
        //Stamm (Baumstamm-mäßig?!)
        crc2.fillStyle = ("HSL(33, 46%, 23%");
        crc2.fillRect(_position.x - 850, _position.y + 550, 15, 250);
        //Blätter (Sind das Blätter?!)
        //Blatt links unten
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 930, _position.y + 600);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
        //Blatt rechts unten
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 750, _position.y + 600);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
        //Blatt rechts mitte
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 750, _position.y + 550);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
        //Blatt links mitte
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 930, _position.y + 550);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
        //Blatt links oben
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 900, _position.y + 500);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
        //Blatt rechts oben
        crc2.beginPath();
        crc2.moveTo(_position.x - 840, _position.y + 545);
        crc2.lineTo(_position.x - 770, _position.y + 500);
        crc2.lineTo(_position.x - 840, _position.y + 570);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
    }
    function drawShip(_position) {
        console.log("Schiff", _position);
        //Schiff
        crc2.beginPath();
        crc2.moveTo(_position.x + 0, _position.y + 0);
        crc2.lineTo(_position.x + 30, _position.y - 50);
        crc2.lineTo(_position.x - 100, _position.y - 50);
        crc2.lineTo(_position.x - 70, _position.y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "grey";
        crc2.fill();
        //Schiffsfenster
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x + 0, _position.y - 40, 8, 12);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 20, _position.y - 40, 8, 12);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 40, _position.y - 40, 8, 12);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 60, _position.y - 40, 8, 12);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 80, _position.y - 40, 8, 12);
        //Schiffstürme (Nicht sicher, ob die so heißen..)
        crc2.fillStyle = ("HSL(33, 0%, 15%");
        crc2.fillRect(_position.x + 0, _position.y - 100, 15, 50);
        crc2.fillStyle = ("HSL(33, 0%, 15%");
        crc2.fillRect(_position.x - 20, _position.y - 100, 15, 50);
        crc2.fillStyle = ("HSL(33, 0%, 15%");
        crc2.fillRect(_position.x - 45, _position.y - 100, 15, 50);
        crc2.fillStyle = ("HSL(33, 0%, 15%");
        crc2.fillRect(_position.x - 65, _position.y - 100, 15, 50);
    }
    function drawVegetation(_position) {
        console.log("Vegetation Grashalme", _position);
        crc2.beginPath();
        crc2.moveTo(_position.x + 0, _position.y + 0);
        crc2.lineTo(_position.x - 3, _position.y - 7);
        crc2.lineTo(_position.x + 4, _position.y - 4);
        crc2.lineTo(_position.x + 6, _position.y - 15);
        crc2.lineTo(_position.x + 8, _position.y - 3);
        crc2.lineTo(_position.x + 15, _position.y - 9);
        crc2.lineTo(_position.x + 12, _position.y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
    }
    function drawSeagull(_position) {
        console.log("Möwe", _position);
        crc2.beginPath();
        crc2.arc(_position.x + 0, _position.y + 0, 8, 3, 0);
        crc2.arc(_position.x + 16, _position.y + 0, 8, 3, 0);
        crc2.stroke();
    }
})(Strand || (Strand = {}));
//# sourceMappingURL=strand.js.map