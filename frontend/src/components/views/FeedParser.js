import React, { Component } from 'react';
import { Icon } from '../common';

class FeedParser extends Component {
    render() {
        return (
            <div className="flex flex-col justify-center items-center shadow-md p-20">
                <div className="m-10 tex-2xl text-center">
                    <p>Paste an RSS feed url to add it to the podcast library.</p>
                    <p>They are usually available, on the podcaster platform, where this logo is present <Icon name="Rss" size={{ width: 20, height: 20 }} /></p>
                </div>
                <div className="m-10">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Feed Url</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" size={200} id="feedurl" type="text" placeholder="https://feed.url.com/file.rss" />
                </div>
                <div className="flex items-center items-center">
                    <button className="bg-accent hover:bg-blue-dark text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Parse
                    </button>
                </div>
            </div>
        );
    }
}

export { FeedParser };