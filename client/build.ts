import * as esbuild from 'https://deno.land/x/esbuild@v0.15.6/mod.js';

const year = new Date().getFullYear();
// const absPath = `${Deno.cwd()}/client`;

try {
    const t0 = performance.now();
    await esbuild.build({
        entryPoints: [`client/src/main.ts`],
        bundle: true,
        minify: true,
        format: 'esm',
        banner: {
            js: `// Copyright (c) ${year} - Max van der Schee; Licensed MIT`,
            css: `/* Copyright (c) ${year} - Max van der Schee; Licensed MIT */`,
        },
        outfile: 'client/static/main.js',
    });
    const t1 = performance.now();

    console.log('Build complete:', +(t1 - t0).toFixed(2), 'ms');
    Deno.exit();
} catch (e) {
    console.error(e);
}
