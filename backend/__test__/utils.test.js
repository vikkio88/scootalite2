import test from 'ava';
import { getQueryParams } from '../src/libs/utils'

const fakeReq = string => ({
    url: string
});

test('getQueryParams returns right expected payload', t => {
    t.deepEqual(
        getQueryParams(fakeReq('stuff.com/?banana=ciao&stuff=1')),
        { banana: 'ciao', stuff: 1 }
    );
});