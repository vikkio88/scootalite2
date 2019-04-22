import React, { Component } from 'react';

import { Controls } from './Controls';
import { Progress } from './Progress';

class Player extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-center text-grey">
                    <Controls.Back disabled />
                    <Controls.Play />
                    <Controls.Forward disabled />
                </div>
                <Progress />
            </div>
        );
    }
}


export { Player };