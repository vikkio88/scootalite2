import React, { Component } from 'react';

import { Button } from '../common'

class Player extends Component {
    render() {
        return (
            <div>
                <Button icon='Play' size={{ width: 25, height: 25 }} onClick={() => console.log('play')} />
            </div>
        );
    }
}


export { Player };