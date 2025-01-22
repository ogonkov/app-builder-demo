import {StrictMode} from 'react';

import {createRoot} from 'react-dom/client';

import {App} from '../components/App';

const container = document.getElementById('root');

class Foobar {
    static unknown: string;
    static {
        this.unknown = '';
    }
}

console.log(Foobar);

if (!container) {
    throw new Error('container element not found');
}

const root = createRoot(container);

function render(Component: typeof App) {
    root.render(
        <StrictMode>
            <Component />
        </StrictMode>,
    );
}

render(App);

if (module.hot) {
    module.hot.accept('../components/App', () => {
        render(App);
    });
}