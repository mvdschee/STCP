// import elliptic from 'https://cdn.skypack.dev/elliptic';
import { h, Component, render } from 'https://unpkg.com/preact@10.10.6?module';
import { Clock } from './components/Clock.tsx';

const app = document.querySelector('#app');

// Usage
const App = <Clock />;

// Renders: <div>My name is John Doe.</div>
render(App, app);

// const SERVER_URL = 'https://stcp.deno.dev';

// const messages = new Map();
// const sessions = new Map();

// function EventServices() {
//     const events = new EventSource(`${SERVER_URL}/listen`);

//     events.addEventListener('open', () => console.log('CONNECTED'));

//     events.addEventListener('error', () => {
//         switch (events.readyState) {
//             case EventSource.OPEN:
//                 console.log('CONNECTED');
//                 break;
//             case EventSource.CONNECTING:
//                 console.log('CONNECTING');
//                 break;
//             case EventSource.CLOSED:
//                 console.log('DISCONNECTED');
//                 break;
//         }
//     });

//     events.addEventListener('message', (e: any) => {
//         const data = JSON.parse(e.data);
//         const [type, name, message] = data.split(':');

//         if (type === 'msg') {
//             messages.set(name, [...messages.get(name), message]);
//         }
//     });
// }

// async function sendMessage({ type, message, name }) {
//     try {
//         await fetch(`${SERVER_URL}/send?msg=${type}:${name}:${message}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function main() {
//     EventServices();

//     setInterval(() => {
//         sendMessage({
//             type: 'msg',
//             message: 'HelloWorlds',
//             name: 'Max',
//         });
//     }, 3000);
// }

// main();
