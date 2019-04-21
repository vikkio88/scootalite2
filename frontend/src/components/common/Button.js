import React from 'react';
import { Icon } from './Icon';

const style = "inline-block text-sm px-1 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-2 lg:mt-0 shadow";

const Button = props => {
    const { wrapper = 'button', label = null, icon = false, onClick = () => { } } = props;
    let { children = null } = props;
    if (label) {
        children = label;
    }

    if (icon) {
        children = <Icon name={icon} {...props} />;
    }

    if (wrapper === 'a') {
        return (
            <a className={style} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    );

};

export { Button };