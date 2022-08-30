import { SERVER_URL } from './deps.ts';

const main = () => {
    const events = new EventSource(`${SERVER_URL}/listen`);

    events.addEventListener('open', () => console.log('open'));
    events.addEventListener('error', () => {
        switch (events.readyState) {
            case EventSource.OPEN:
                console.log('OPEN');
                break;
            case EventSource.CONNECTING:
                console.log('CONNECTING');
                break;
            case EventSource.CLOSED:
                console.log('CLOSED');
                break;
        }
    });

    events.addEventListener('message', (e) => {
        console.log(JSON.parse(e.data));
    });

    // const w0 = performance.now();
    // await fetch(, {
    //     method: 'OPTIONS',
    // });
    // const w1 = performance.now();
    // console.log(`${w1 - w0}ms`);
};

main();
