import React from 'react';

const Card = ({ image = null, title, subtitle, tail, onClick = () => { } }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 bg-white border border-primary">
            {image && <img className="w-full" src={image} alt={title} />}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                {subtitle && (
                    <p className="text-grey-darker text-base">
                        {subtitle}
                    </p>
                )}
            </div>
            {tail && (
                <div className="px-6 py-4">
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            )}
        </div>
    );
};

Card.Grid = ({ children }) => {
    return (
        <div className="flex flex-wrap -mx-2 overflow-hidden">
            {children}
        </div>
    );
}


export { Card };