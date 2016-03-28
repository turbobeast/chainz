import chainz from '../src/index.js';
import test from 'tape';

test('chainz injects next function', t => {
    t.plan(1);
    chainz(next => {
        t.equal(typeof next, 'function');
    });
});

test('next calls next function', t => {
    t.plan(1);
    chainz(next => { next() }, next => {
        t.equal(true, true);
    });
});

test('next injects params into next function', t => {
    t.plan(2);
    chainz(next => { next('bananas') }, (val, next) => {
        t.equal(val, 'bananas');
        t.equal(typeof next, 'function');
    });
});
