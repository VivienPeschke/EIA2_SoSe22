namespace L10_2_PolymorphieAnimation {

    export class Cloud extends Moveable {
        position: Vector;
        velocity: Vector;
        speed: number;

        constructor(_position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(300, 400);

            this.velocity = new Vector(50, 0);
            this.velocity.random(120, 20);

        }

        drawCloud(): void {
            crc2.beginPath();
            crc2.arc(0, 0, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            crc2.arc(45, 0, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            crc2.arc(- 27, 0, 15, 0, 2 * Math.PI); // ganz linker Kreis
            crc2.arc(30, - 10, 15, 0, 2 * Math.PI);
            crc2.arc(27, 10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
    }
}