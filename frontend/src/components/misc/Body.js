import React from 'react';

const Body = () => (
    <div className="px-4 pt-4 flex-1 overflow-y-scroll">
        <div className="container mx-auto" style={{ height: '1000px' }}>
            <h1>What's so great about Tailwind</h1>
            <p>Keep filling the content, you will see a scrollbar.</p>
            <p>Added height of 1000px for demo</p>
        </div>
    </div>
);

export { Body };