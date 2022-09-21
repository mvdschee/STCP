const SERVER_URL = 'https://stcp.deno.dev';

const userWithMessages: Record<string, Record<string, string | number>[]> = {};
const usersOnline: Record<string, boolean> = {};
export let startTime = 0;

export function eventServices({
    stateUpdate,
    stateChange,
    stateSetup,
}: {
    stateUpdate: (data: Record<string, Record<string, string | number>[]>, type: 'msg' | 'set') => void;
    stateChange?: (data: string) => void;
    stateSetup?: (data: string) => void;
}) {
    // @ts-ignore EventSource not in TypeScript
    const events = new EventSource(`${SERVER_URL}/listen`);

    /**
     * Start of a new message session connected to the server
     * Here is where you would send a online state to the server
     */
    events.addEventListener('open', () => {
        startTime = new Date().valueOf();
        stateSetup ? stateSetup('CONNECTED') : null;
    });

    /**
     * this part is to keep track of your connection state
     * after you have connected to the server
     */
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
            if (userWithMessages[name]) {
                userWithMessages[name].push({ time: startTime + e.timeStamp, message });
            } else {
                userWithMessages[name] = [{ time: startTime + e.timeStamp, message }];
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
