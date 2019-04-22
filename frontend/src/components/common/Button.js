import React from 'react';
const defaultStyle = "inline-block text-sm px-1 py-2 leading-none rounded text-white hover:border-primary hover:bg-white mt-2 lg:mt-0";

const Button = props => {
    const { children, tooltip = {}, onClick = () => { }, style } = props;
    return (
        <div className={`${defaultStyle} ${style}`} onClick={onClick} data-balloon={tooltip.message} data-balloon-pos={tooltip.pos}>
            {children}
        </div>
    );

};

export { Button };