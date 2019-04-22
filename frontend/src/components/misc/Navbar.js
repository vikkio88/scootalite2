import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, Button } from '../common';

import logo from '../../resources/images/main-logo.svg';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary p-2 shadow-md">
            <div className="flex items-center flex-no-shrink mr-6">
                <Link to="/">
                    <img src={logo} style={{ height: '50px' }} alt="scootalite logo" />
                </Link>
            </div>
            <div>
                <Button tooltip={{ message: 'Feed Parser', pos: 'down' }}>
                    <Icon name="Rss" />
                </Button>
                <Link to="/about/" >
                    <Button tooltip={{ message: 'About', pos: 'down' }}>
                        <Icon name="Help" />
                    </Button>
                </Link>
                <Button tooltip={{ message: 'Account', pos: 'left' }} >
                    <Icon name="Person" />
                </Button>
            </div>
        </nav>
    );
};

export { Navbar };