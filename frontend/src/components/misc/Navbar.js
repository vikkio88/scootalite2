import React from 'react';
import { Icon } from '../common';

import logo from '../../resources/images/main-logo.svg';

const Navbar = () => (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-2 shadow-md">
        <div className="flex items-center flex-no-shrink mr-6">
            <img src={logo} style={{ height: '50px' }} alt="scootalite logo" />
        </div>
        <div>
            <a href="#stuff"
                className="inline-block text-sm px-1 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-2 lg:mt-0 shadow"
            >
                <Icon name="Rss" />
            </a>
        </div>
    </nav>
);

export { Navbar };