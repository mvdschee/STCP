import * as esbuild from 'https://deno.land/x/esbuild@v0.15.6/mod.js';

const year = new Date().getFullYear();
const development = Deno.args.includes('--dev');

try {
    const t0 = performance.now();
    await esbuild.build({
        entryPoints: [`client/src/main.tsx`],
        bundle: true,
        minify: true,
        format: 'esm',
        watch: development
            ? {
                  onRebuild(error) {
                      if (error) console.error('watch build failed:', error);
                      else console.log('watch build succeeded');
                  },
              }
            : false,
        banner: {
            js: `// Copyright (c) ${year} - Max van der Schee; Licensed MIT`,
            css: `/* Copyright (c) ${year} - Max van der Schee; Licensed MIT */`,
        },
        outdir: 'client/static',
    });
    const t1 = performance.now();

    console.log('Build complete:', +(t1 - t0).toFixed(2), 'ms');
    if (!development) Deno.exit();
} catch (e) {
    console.error(e);
}
