import test from 'ava';
import Icon from '../src/Icon.svelte';
import { faAdjust } from './_icon';

test('Icon creation', t => {
    const target = document.createElement('div');
    const app = new Icon({
        target,
        props: {
            icon: faAdjust
        },
    });

    const el = target.firstChild;
    t.is(el.tagName.toLowerCase(), 'svg');

    const path = el.firstChild;
    t.is(path.tagName.toLowerCase(), 'path');
    t.is(path.getAttribute('d'), 'M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z');
});
