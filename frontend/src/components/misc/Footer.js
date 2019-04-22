import React from 'react';
import { Player } from '../player';

const Footer = () => (
    <div className="border-t border-smoke px-8 py-4">
        <div className="flex justify-center text-grey">
            <Player />
        </div>
    </div>
);

export { Footer };