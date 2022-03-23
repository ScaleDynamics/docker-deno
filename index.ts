import { serve } from "https://deno.land/std@0.130.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  const name = url.pathname.slice(1) || "World";
  const version = Deno.version.deno;
  const body = `Hello ${name} from Deno v${version}`;
  return new Response(body, { status: 200 });
};

console.log(`HTTP server listening on port ${port}`);

await serve(handler, { port });
