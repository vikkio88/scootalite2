import React from 'react';
import './Icon.css';

const Icon = ({ name, size = { width: 30, height: 30 }, color = '#ff6e40', thickness = 2 }) => {
    const Svg = require(`../../resources/icons/svg/${name}`).default || <span />;
    return <Svg width={size.width} height={size.height} strokeWidth={thickness} stroke={color} color={color} />
};


export { Icon };