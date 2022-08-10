

describe('The Rover is created and moves', function () {


    it('It should be able to create a Rover', function () {
        let rover = new Rover();
        
        expect(rover).toBeDefined();
        
        const roverCommands = {
            'plateau_dimensions': {
                'width': 5,
                'height': 5
            },
            'starting-position': {
                'x': 1,
                'y': 2,
                'direction': 'N'
            },
            'moving_command': 'LMLMLMLMM'
        }

        assert.strictEqual('1 3 N', rover.execute(roverCommands));


        let rover2 = new Rover();

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

        assert.strictEqual('5 1 E', rover2.execute(roverCommands2));
    });

})
