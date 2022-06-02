var L09_2_Strandszene;
(function (L09_2_Strandszene) {
    var Background = /** @class */ (function () {
        function Background() {
            this.drawBackground();
            this.drawSun(100, 75);
            this.drawBeach(0, 250);
            this.drawUrlauberi(300, 475); //linker Urlauberi
            this.drawUrlauberi(500, 500); //rechter Urlauberi
            this.drawSurfboard(0, 0);
            this.drawSurfer(400, 350);
            this.drawSwimmer(230, 350);
            this.drawSwimmer(500, 370);
            this.drawPalmtrees(200, 500);
            this.drawPalmtrees(600, 300);
            this.drawVegetation(-450, 400);
            this.drawVegetation(-435, 400);
            this.drawVegetation(-465, 400);
            this.drawVegetation(130, 350);
            this.drawVegetation(120, 350);
            this.drawVegetation(140, 350);
            this.drawVegetation(175, 400);
            this.drawVegetation(-250, 380);
            this.drawVegetation(-300, 400);
        }
        Background.prototype.drawBackground = function () {
            console.log("Background");
            //Meer
            L09_2_Strandszene.crc2.fillStyle = ("HSL(235, 100%, 51%");
            L09_2_Strandszene.crc2.fillRect(0, 0, 800, 400);
            //Himmel
            L09_2_Strandszene.crc2.fillStyle = ("HSL(194, 100%, 51%");
            L09_2_Strandszene.crc2.fillRect(0, 0, 800, 250);
        };
        Background.prototype.drawSun = function (_x, _y) {
            var r1 = 30;
            var r2 = 150;
            var gradient = L09_2_Strandszene.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.translate(_x, _y);
            L09_2_Strandszene.crc2.fillStyle = gradient;
            L09_2_Strandszene.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_2_Strandszene.crc2.fill();
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawBeach = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x, _y);
            L09_2_Strandszene.crc2.bezierCurveTo(_x + 0, _y + 200, _x + 790, _y + 150, _x + 800, _y + 40);
            L09_2_Strandszene.crc2.lineTo(_x + 800, _y + 300);
            L09_2_Strandszene.crc2.lineTo(_x, _y + 300);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.fillStyle = "HSL(50, 78%, 50%";
            L09_2_Strandszene.crc2.fill();
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.translate(_x, _y);
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawUrlauberi = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            //Kopf
            L09_2_Strandszene.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Beine
            L09_2_Strandszene.crc2.moveTo(_x - 10, _y + 0);
            L09_2_Strandszene.crc2.lineTo(_x + 5, _y - 20);
            L09_2_Strandszene.crc2.lineTo(_x + 20, _y + 0);
            //Körper
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 20);
            L09_2_Strandszene.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L09_2_Strandszene.crc2.moveTo(_x + 4, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 2, _y - 58);
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.translate(_x, _y);
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawSurfboard = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.ellipse(-20, 180, 20, 50, 20, 0, 2 * Math.PI);
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "orange";
            L09_2_Strandszene.crc2.fill();
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawSurfer = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            //Kopf
            L09_2_Strandszene.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Beine
            L09_2_Strandszene.crc2.moveTo(_x - 10, _y + 0);
            L09_2_Strandszene.crc2.lineTo(_x + 5, _y - 20);
            L09_2_Strandszene.crc2.lineTo(_x + 20, _y + 0);
            //Körper
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 20);
            L09_2_Strandszene.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L09_2_Strandszene.crc2.moveTo(_x + 4, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 2, _y - 58);
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.translate(_x, _y);
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawSwimmer = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            //Kopf
            L09_2_Strandszene.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Körper
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 20);
            L09_2_Strandszene.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L09_2_Strandszene.crc2.moveTo(_x + 5, _y - 45);
            L09_2_Strandszene.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L09_2_Strandszene.crc2.moveTo(_x + 4, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 65);
            L09_2_Strandszene.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L09_2_Strandszene.crc2.moveTo(_x + 10, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 56);
            L09_2_Strandszene.crc2.lineTo(_x + 2, _y - 58);
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.save();
            L09_2_Strandszene.crc2.translate(_x, _y);
            L09_2_Strandszene.crc2.restore();
        };
        Background.prototype.drawPalmtrees = function (_x, _y) {
            //Stamm (Baumstamm-mäßig?!)
            L09_2_Strandszene.crc2.fillStyle = ("HSL(33, 46%, 23%");
            L09_2_Strandszene.crc2.fillRect(_x - 850, _y + 550, 15, 250);
            //Blätter (Sind das Blätter?!)
            //Blatt links unten
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 930, _y + 600);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
            //Blatt rechts unten
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 750, _y + 600);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
            //Blatt rechts mitte
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 750, _y + 550);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
            //Blatt links mitte
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 930, _y + 550);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
            //Blatt links oben
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 900, _y + 500);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
            //Blatt rechts oben
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x - 840, _y + 545);
            L09_2_Strandszene.crc2.lineTo(_x - 770, _y + 500);
            L09_2_Strandszene.crc2.lineTo(_x - 840, _y + 570);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
        };
        Background.prototype.drawVegetation = function (_x, _y) {
            L09_2_Strandszene.crc2.beginPath();
            L09_2_Strandszene.crc2.moveTo(_x + 0, _y + 0);
            L09_2_Strandszene.crc2.lineTo(_x - 3, _y - 7);
            L09_2_Strandszene.crc2.lineTo(_x + 4, _y - 4);
            L09_2_Strandszene.crc2.lineTo(_x + 6, _y - 15);
            L09_2_Strandszene.crc2.lineTo(_x + 8, _y - 3);
            L09_2_Strandszene.crc2.lineTo(_x + 15, _y - 9);
            L09_2_Strandszene.crc2.lineTo(_x + 12, _y + 0);
            L09_2_Strandszene.crc2.closePath();
            L09_2_Strandszene.crc2.stroke();
            L09_2_Strandszene.crc2.fillStyle = "green";
            L09_2_Strandszene.crc2.fill();
        };
        return Background;
    }());
    L09_2_Strandszene.Background = Background;
})(L09_2_Strandszene || (L09_2_Strandszene = {}));
//# sourceMappingURL=Background.js.map