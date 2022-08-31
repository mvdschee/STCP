dev:
	deno run --allow-read --allow-hrtime --allow-write --allow-net --allow-run --allow-env client/build.ts --dev & deno run --allow-net --allow-hrtime --allow-env --allow-read --watch client/main.ts
build:
	deno run --allow-read --allow-hrtime --allow-write --allow-net --allow-run --allow-env client/build.ts 
lint:
	deno lint client/main.ts
test:
	deno test client/main.ts