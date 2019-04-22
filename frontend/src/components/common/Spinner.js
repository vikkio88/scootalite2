import React from 'react';

import './Spinner.css';

import logo from '../../resources/images/main-logo.svg';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img className="spinner animated rotate mt-20" src={logo} alt="Loading..." />
            <span className="text-3xl text-accent mt-20" >Loading...</span>
        </div>
    );
};


export { Spinner };