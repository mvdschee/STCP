// import elliptic from 'https://cdn.skypack.dev/elliptic';
import { h, render } from './vendor/preact.js';
import { App } from './App.tsx';
import './style/style.css';

const app = document.querySelector('#app');
const main = <App />;

render(main, app);
