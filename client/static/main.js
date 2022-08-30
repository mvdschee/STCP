function main() {
    const events = new EventSource('https://stcp.deno.dev/listen');

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
}

main();
