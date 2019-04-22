import React, { Fragment } from 'react';
import { Card } from '../common';

import mock from './mock.json';

const Body = () => (
    <div className="px-4 pt-4 flex-1 overflow-y-scroll">
        <div className="container mx-auto">
            <Card.Grid>
                <Fragment>
                    {mock.payload.map(s => <Card key={s.id} title={s.name} subtitle={s.description} image={s.logo_url} />)}
                </Fragment>
            </Card.Grid>
        </div>
    </div>
);

export { Body };