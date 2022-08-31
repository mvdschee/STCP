const SERVER_URL = 'https://stcp.deno.dev';

export const messages = new Map();
export const sessions = new Map();

export function eventServices() {
    // @ts-ignore EventSource not in TypeScript
    const events = new EventSource(`${SERVER_URL}/listen`);

    events.addEventListener('open', () => console.log('CONNECTED'));

    events.addEventListener('error', () => {
        switch (events.readyState) {
            // @ts-ignore EventSource not in TypeScript
            case EventSource.OPEN:
                console.log('CONNECTED');
                break;
            // @ts-ignore EventSource not in TypeScript
            case EventSource.CONNECTING:
                console.log('CONNECTING');
                break;
            // @ts-ignore EventSource not in TypeScript
            case EventSource.CLOSED:
                console.log('DISCONNECTED');
                break;
        }
    });

    events.addEventListener('message', (e: any) => {
        const data = JSON.parse(e.data);
        const [type, name, message] = data.split(':');

        if (type === 'msg') {
            messages.set(name, [...messages.get(name), message]);
        }
    });
}

export async function sendMessage({ type, message, name }) {
    try {
        await fetch(`${SERVER_URL}/send?msg=${type}:${name}:${message}`);
    } catch (error) {
        console.error(error);
    }
}
