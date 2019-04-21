import React from 'react';

import logo from '../../resources/images/main-logo.svg';

const Navbar = () => (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-2 shadow-md">
        <div className="flex items-center flex-no-shrink mr-6">
            <img src={logo} style={{ height: '50px' }} alt="scootalite logo" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-accent mr-4">Link 1</a>
            </div>
        </div>
    </nav>
);

export { Navbar };