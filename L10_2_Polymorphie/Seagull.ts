namespace L10_2_PolymorphieAnimation {

    export class Seagull extends Moveable {
        position: Vector;
        velocity: Vector;
        speed: number;

        constructor() {
            super(_position);
            this.position.x = 0;
            this.position.y = 0;

            this.draw();
            this.draw();

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.position.x + 0, this.position.y + 0, 8, 3, 0);
            crc2.arc(this.position.x + 16, this.position.y + 0, 8, 3, 0);
            crc2.stroke();

        }

    }
}