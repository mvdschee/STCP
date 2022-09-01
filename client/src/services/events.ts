const SERVER_URL = 'https://stcp.deno.dev';

const userWithMessages: Map<string, Record<string, string | number>[]> = new Map();
// const usersOnline: Map<string, string[]> = new Map();
export let startTime = 0;

export function eventServices({
    stateUpdate,
    stateChange,
    stateSetup,
}: {
    stateUpdate: (data: Map<string, Record<string, string | number>[]>, type: 'msg' | 'set') => void;
    stateChange?: (data: string) => void;
    stateSetup?: (data: string) => void;
}) {
    // @ts-ignore EventSource not in TypeScript
    const events = new EventSource(`${SERVER_URL}/listen`);

    events.addEventListener('open', () => {
        startTime = new Date().valueOf();
        stateSetup ? stateSetup('CONNECTED') : null;
    });

    events.addEventListener('error', () => {
        switch (events.readyState) {
            // @ts-ignore EventSource not in TypeScript
            case EventSource.OPEN:
                stateChange ? stateChange('CONNECTED') : null;
                break;
            // @ts-ignore EventSource not in TypeScript
            case EventSource.CONNECTING:
                stateChange ? stateChange('CONNECTING') : null;
                break;
            // @ts-ignore EventSource not in TypeScript
            case EventSource.CLOSED:
                stateChange ? stateChange('DISCONNECTED') : null;
                break;
        }
    });

    events.addEventListener('message', (e: any) => {
        const data = JSON.parse(e.data);
        const [type, name, message] = data.split(':');

        if (type === 'msg') {
            if (userWithMessages.get(name)) {
                userWithMessages.get(name)!.push({ time: startTime + e.timeStamp, message });
            } else {
                userWithMessages.set(name, [{ time: startTime + e.timeStamp, message }]);
            }

            stateUpdate(userWithMessages, 'msg');
        }
    });
}

export async function sendMessage({ type, message, name }: { type: string; message: string; name: string }) {
    try {
        await fetch(`${SERVER_URL}/send?msg=${type}:${name}:${message}`);
    } catch (error) {
        console.error(error);
    }
}
