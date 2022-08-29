dev:
	deno run --allow-net --allow-hrtime --allow-env --allow-read --watch client/main.ts
lint:
	deno lint server/main.ts && deno lint client/main.ts
test:
	deno test server/main.ts && deno test client/main.ts