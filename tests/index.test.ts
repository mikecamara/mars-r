
import {Rover} from '../src/Rover';

test('Rover 1 - It should be able to create the rover and move it', () => {
    const rover = new Rover(1, 2, 'N', 'LMLMLMLMM');
    const roverCommands = {
        'plateau_dimensions': {
            'width': 5,
            'height': 5
        },
        'starting_position': {
            'x': 1,
            'y': 2,
            'direction': 'N'
        },
        'moving_command': 'LMLMLMLMM'
    }
    expect(rover.executeRover(roverCommands)).toBe('1 3 N');
})

test('Rover 2 - It should be able to create a rover and move it', () => {
    const rover2 = new Rover(3, 3, 'E', 'MMRMMRMRRM');
    const roverCommands2 = {
        'plateau_dimensions': {
            'width': 5,
            'height': 5
        },
        'starting_position': {
            'x': 3,
            'y': 3,
            'direction': 'E'
        },
        'moving_command': 'MMRMMRMRRM'
    }
    expect(rover2.executeRover(roverCommands2)).toBe('5 1 E');
})
