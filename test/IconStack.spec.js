import test from 'ava';
import IconStack from '../src/IconStack.svelte';

test('IconStack creation', t => {
    const target = document.createElement('div');
    const app = new IconStack({
        target,
        props: {
        },
    });

    const el = target.firstChild;
    t.is(el.tagName.toLowerCase(), 'span');
});
