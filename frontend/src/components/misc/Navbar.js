import React from 'react';
import { Icon, Button } from '../common';

import logo from '../../resources/images/main-logo.svg';

const Navbar = () => (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-2 shadow-md">
        <div className="flex items-center flex-no-shrink mr-6">
            <img src={logo} style={{ height: '50px' }} alt="scootalite logo" />
        </div>
        <div>
            <Button wrapper='a' onClick={() => console.log('clicked')} tooltip={{ message: 'Feed Parser', pos: 'down' }}>
                <Icon name="Rss" />
            </Button>
            <Button wrapper='a' onClick={() => console.log('clicked')} tooltip={{ message: 'About', pos: 'down' }}>
                <Icon name="Help" />
            </Button>
            <Button wrapper='a' onClick={() => console.log('clicked')} tooltip={{ message: 'Account', pos: 'left' }} >
                <Icon name="Person" />
            </Button>
        </div>
    </nav>
);

export { Navbar };