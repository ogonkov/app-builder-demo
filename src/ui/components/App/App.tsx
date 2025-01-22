import {FC} from 'react';
import { editor } from 'monaco-editor';

editor.defineTheme('light', {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {}
});

export const App: FC = () => {
    return <h1>Hello world</h1>;
};