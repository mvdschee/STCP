import { SERVER_URL } from './deps.ts';

const main = async () => {
    const w0 = performance.now();
    await fetch(SERVER_URL, {
        method: 'OPTIONS',
    });
    const w1 = performance.now();
    console.log(`${w1 - w0}ms`);
};

main();
