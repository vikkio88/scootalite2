import React, { Component } from 'react';

import { Button } from '../common';
import { Progress } from './Progress';

class Player extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-center text-grey">
                    <Button icon='Play' size={{ width: 25, height: 25 }} onClick={() => console.log('play')} />
                </div>
                <Progress />
            </div>
        );
    }
}


export { Player };