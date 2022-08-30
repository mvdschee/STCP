import elliptic from 'https://cdn.skypack.dev/elliptic';
import './style.css';

const SERVER_URL = 'https://stcp.deno.dev';

function main() {
    const events = new EventSource(`${SERVER_URL}/listen`);

    console.log('CONNECTING');

    events.addEventListener('open', () => console.log('CONNECTED'));

    events.addEventListener('error', () => {
        switch (events.readyState) {
            case EventSource.OPEN:
                console.log('CONNECTED');
                break;
            case EventSource.CONNECTING:
                console.log('CONNECTING');
                break;
            case EventSource.CLOSED:
                console.log('DISCONNECTED');
                break;
        }
    });

    events.addEventListener('message', (e) => {
        console.log(JSON.parse(e.data));
    });

    setInterval(() => {}, 3000);
}

main();
