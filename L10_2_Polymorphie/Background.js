var L10_2_PolymorphieAnimation;
(function (L10_2_PolymorphieAnimation) {
    var Background = /** @class */ (function () {
        function Background() {
            this.drawBackground();
            this.drawSun(100, 75);
            this.drawBeach(0, 250);
            this.drawUrlauberi(300, 475); //linker Urlauberi
            this.drawUrlauberi(500, 500); //rechter Urlauberi
            this.drawSurfboard(); //braucht keine Übergabeparameter; wird an der entsprechenden Stelle gezeichnet
            this.drawSurfer(400, 350); //Stehendes Männchen im Wasser
            this.drawSwimmer(230, 350); //Linker Swimmer
            this.drawSwimmer(500, 370); // Rechter Swimmer
            this.drawPalmtrees(130, 470); //Linke Palme
            this.drawPalmtrees(650, 450); //Rechte Palme
            this.drawVegetation(635, 450); //Rechte Palme; Linker Büschel
            this.drawVegetation(650, 450); //Rechte Palme; Mittlerer Büschel
            this.drawVegetation(665, 450); //Rechte Palme; Rechter Büschel
            this.drawVegetation(120, 475); //Linke Palme; Linker Büschel
            this.drawVegetation(130, 475); //Linke Palme; Mittlerer Büschel
            this.drawVegetation(140, 475); //Linke Palme; Rechter Büschel
            this.drawVegetation(200, 500); //Freie Vegetation; Links
            this.drawVegetation(350, 480); //Freie Vegetation; Mitte
            this.drawVegetation(575, 500); //Freie Vegetation; Rechts
        }
        Background.prototype.drawBackground = function () {
            console.log("Background");
            //Meer
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(235, 100%, 51%");
            L10_2_PolymorphieAnimation.crc2.fillRect(0, 250, 800, 200);
            //Himmel
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(194, 100%, 51%");
            L10_2_PolymorphieAnimation.crc2.fillRect(0, 0, 800, 250);
        };
        Background.prototype.drawSun = function (_x, _y) {
            var r1 = 30;
            var r2 = 150;
            var gradient = L10_2_PolymorphieAnimation.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.translate(_x, _y);
            L10_2_PolymorphieAnimation.crc2.fillStyle = gradient;
            L10_2_PolymorphieAnimation.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.fill();
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawBeach = function (_x, _y) {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x, _y);
            L10_2_PolymorphieAnimation.crc2.bezierCurveTo(_x + 0, _y + 200, _x + 790, _y + 150, _x + 800, _y + 40);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 800, _y + 300);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x, _y + 300);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "HSL(50, 78%, 50%";
            L10_2_PolymorphieAnimation.crc2.fill();
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.translate(_x, _y);
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawUrlauberi = function (_x, _y) {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            //Kopf
            L10_2_PolymorphieAnimation.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Beine
            L10_2_PolymorphieAnimation.crc2.moveTo(_x - 10, _y + 0);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 5, _y - 20);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 20, _y + 0);
            //Körper
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 20);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 4, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 2, _y - 58);
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.translate(_x, _y);
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawSurfboard = function () {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.ellipse(400, 350, 20, 50, 20, 0, 2 * Math.PI);
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "orange";
            L10_2_PolymorphieAnimation.crc2.fill();
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawSurfer = function (_x, _y) {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            //Kopf
            L10_2_PolymorphieAnimation.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Beine
            L10_2_PolymorphieAnimation.crc2.moveTo(_x - 10, _y + 0);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 5, _y - 20);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 20, _y + 0);
            //Körper
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 20);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 4, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 2, _y - 58);
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.translate(_x, _y);
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawSwimmer = function (_x, _y) {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            //Kopf
            L10_2_PolymorphieAnimation.crc2.arc(_x + 5, _y - 60, 11, 0, 2 * Math.PI);
            //Körper
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 20);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 5, _y - 50);
            //Arm links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 10, _y - 30);
            //Arm rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 5, _y - 45);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 20, _y - 30);
            //Auge links
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 4, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 61);
            //Auge rechts
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 65);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 10, _y - 61);
            //Mund
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 10, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 56);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 2, _y - 58);
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.save();
            L10_2_PolymorphieAnimation.crc2.translate(_x, _y);
            L10_2_PolymorphieAnimation.crc2.restore();
        };
        Background.prototype.drawPalmtrees = function (_x, _y) {
            //Stamm (Baumstamm-mäßig?!)
            L10_2_PolymorphieAnimation.crc2.fillStyle = ("HSL(33, 46%, 23%");
            L10_2_PolymorphieAnimation.crc2.fillRect(_x + 0, _y - 150, 15, 150);
            //Blätter (Sind das Blätter?!)
            //Blatt links unten
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 150);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 80, _y - 130);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 130);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Blatt links mitte
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 145);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 80, _y - 110);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 125);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Blatt links oben 
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 165);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 80, _y - 152);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 145);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Blatt rechts unten
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 150);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 80, _y - 130);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 130);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Blatt rechts mitte
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 145);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 80, _y - 110);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 125);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
            //Blatt rechts oben 
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 7, _y - 165);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 80, _y - 152);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 7, _y - 145);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
        };
        Background.prototype.drawVegetation = function (_x, _y) {
            L10_2_PolymorphieAnimation.crc2.beginPath();
            L10_2_PolymorphieAnimation.crc2.moveTo(_x + 0, _y + 0);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x - 3, _y - 7);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 4, _y - 4);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 6, _y - 15);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 8, _y - 3);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 15, _y - 9);
            L10_2_PolymorphieAnimation.crc2.lineTo(_x + 12, _y + 0);
            L10_2_PolymorphieAnimation.crc2.closePath();
            L10_2_PolymorphieAnimation.crc2.stroke();
            L10_2_PolymorphieAnimation.crc2.fillStyle = "green";
            L10_2_PolymorphieAnimation.crc2.fill();
        };
        return Background;
    }());
    L10_2_PolymorphieAnimation.Background = Background;
})(L10_2_PolymorphieAnimation || (L10_2_PolymorphieAnimation = {}));
//# sourceMappingURL=Background.js.map