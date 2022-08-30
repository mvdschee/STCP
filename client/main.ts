import { serve } from 'https://deno.land/std@0.153.0/http/server.ts';

async function handleRequest(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith('/main.css')) {
        const file = await Deno.readTextFile(`./static/main.css`);

        return new Response(file, {
            headers: {
                'content-type': 'text/css',
            },
        });
    }
    if (pathname.startsWith('/main.js')) {
        const file = await Deno.readTextFile(`./static/main.js`);
        return new Response(file, {
            headers: {
                'content-type': 'application/javascript',
            },
        });
    }

    const file = await Deno.readTextFile(`./src/index.html`);
    return new Response(file, {
        headers: {
            'content-type': 'text/html; charset=utf-8',
        },
    });
}

serve(handleRequest);
