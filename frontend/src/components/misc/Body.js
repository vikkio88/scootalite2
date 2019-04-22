import React from 'react';
import { Route } from 'react-router-dom';

import { TrendingShows, About, FeedParser } from '../views';

const Body = () => (
    <div className="px-4 pt-4 flex-1 overflow-y-scroll">
        <div className="container mx-auto">
            <Route exact path="/" component={TrendingShows} />
            <Route path="/feed/" component={FeedParser} />
            <Route path="/about/" component={About} />
        </div>
    </div>
);

export { Body };