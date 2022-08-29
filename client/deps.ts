import elliptic from 'https://cdn.skypack.dev/elliptic';

const SERVER_URL = Deno.env.get('SERVER_URL') || 'https://stcp.deno.dev';

export { elliptic, SERVER_URL };
