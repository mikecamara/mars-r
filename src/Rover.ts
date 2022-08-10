
 enum Directions {
    North = "N",
    South = "S",
    East = "E",
    West = "W",
}

export class Rover {
    private direction: string;
    private roverCommands: unknown;
    private x: number;
    private y: number;

    constructor(x: number, y: number, direction: string, movingCommand: string) {
        this.direction = Directions.North;
        this.roverCommands = {
            "starting_position": {
                "x": x,
                "y": y,
                "direction": direction
            },
            "moving_command": movingCommand,
        };
        this.x = 0;
        this.y = 0;
    }

    executeRover(commands: unknown) {
        this.x = this.roverCommands.starting_position.x;
        this.y = this.roverCommands.starting_position.y;
        this.direction = this.roverCommands.starting_position.direction;

        for (const move of this.roverCommands.moving_command) {
            this.move(move);
        }
        return `${this.x} ${this.y} ${this.direction}`;
    }

    moveForward() {
        switch (this.direction) {
            case Directions.North:
                this.y = this.y + 1;
                break;
            case Directions.South:
                this.y = this.y - 1;
                break;
            case Directions.East:
                this.x = this.x + 1;
                break;
            case Directions.West:
                this.x = this.x - 1;
                break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.West;
                break;
            case Directions.South:
                this.direction = Directions.East;
                break;
            case Directions.East:
                this.direction = Directions.North;
                break;
            case Directions.West:
                this.direction = Directions.South;
                break;
        }
    }

    turnRight() {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.East;
                break;
            case Directions.South:
                this.direction = Directions.West;
                break;
            case Directions.East:
                this.direction = Directions.South;
                break
            case Directions.West:
                this.direction = Directions.North;
                break;
        }
    }

    move(movement: string) {
        switch (movement) {
            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'M':
                this.moveForward();
                break;
        }
    }
}
