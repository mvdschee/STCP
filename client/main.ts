import { serve } from './deps.ts';

async function handleRequest(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith('/style.css')) {
        const file = await Deno.readTextFile(`./static/style.css`);

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

    return new Response(
        `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>test</h1>
        <script src="main.js"></script>
      </body>
    </html>`,
        {
            headers: {
                'content-type': 'text/html; charset=utf-8',
            },
        }
    );
}

serve(handleRequest);
