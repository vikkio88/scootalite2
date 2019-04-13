import test from 'ava';
import { getQueryParams } from '../src/libs/utils'

const fakeReq = string => ({
    url: string
});

test('getQueryParams returns right expected payload', t => {
    t.is(getQueryParams(fakeReq('stuff.com/?banana=ciao')), { banana: 'ciao' });
});