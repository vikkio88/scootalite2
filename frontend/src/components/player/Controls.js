import React from 'react';
import { Icon } from '../common';

const defaultStyle = 'bg-primary border hover:border-accent py-2 px-2 rounded inline-flex items-center shadow';
const defaultSize = { width: 20, height: 20 };

const DefaultWrapper = ({ name, size, className, disabled = false, onClick }) => {
    return (
        <a className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : null}`} onClick={disabled ? null : onClick} >
            <Icon size={size} name={name} />
        </a>
    );
};

const Play = ({ onClick, disabled = false }) => {
    return (
        <DefaultWrapper
            name="Play"
            className={defaultStyle}
            size={defaultSize}
            onClick={onClick}
            disabled={disabled}
        />
    );
};

const Pause = ({ onClick, disabled = false }) => {
    return (
        <DefaultWrapper
            name="Pause"
            className={defaultStyle}
            size={defaultSize}
            onClick={onClick}
            disabled={disabled}
        />
    );
};

const Stop = ({ onClick, disabled = false }) => {
    return (
        <DefaultWrapper
            name="Rectangle"
            className={defaultStyle}
            size={defaultSize}
            onClick={onClick}
            disabled={disabled}
        />
    );
};

const Back = ({ onClick, disabled = false }) => {
    return (
        <DefaultWrapper
            name="BackLeft"
            className={defaultStyle}
            size={defaultSize}
            onClick={onClick}
            disabled={disabled}
        />
    );
};

const Forward = ({ onClick, disabled = false }) => {
    return (
        <DefaultWrapper
            name="BackRight"
            className={defaultStyle}
            size={defaultSize}
            onClick={onClick}
            disabled={disabled}
        />
    );
};


const Controls = {
    Play,
    Pause,
    Stop,
    Back,
    Forward
}


export { Controls };