import React from 'react';
import { Icon } from './Icon';

const style = "inline-block text-sm px-1 py-2 leading-none rounded text-white hover:border-primary hover:bg-white mt-2 lg:mt-0";

const Button = props => {
    const { wrapper = 'a', label = null, icon = false, tooltip = {}, onClick = () => { } } = props;
    let { children = null } = props;
    if (label) {
        children = label;
    }

    if (icon) {
        children = <Icon name={icon} {...props} />;
    }

    if (wrapper === 'button') {
        return (
            <button className={`btn ${style}`} onClick={onClick} data-balloon={tooltip.message} data-balloon-pos={tooltip.pos}>
                {children}
            </button>
        );
    }

    return (
        <a className={style} onClick={onClick} data-balloon={tooltip.message} data-balloon-pos={tooltip.pos}>
            {children}
        </a>
    );

};

export { Button };