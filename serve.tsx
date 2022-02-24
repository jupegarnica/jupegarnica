/** @jsx h */
import {
  h,
  json,
  jsx,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.4.3/mod.ts";
import { join } from "https://deno.land/std@0.126.0/path/mod.ts";
import { Ip } from "./ip/myIp.jsx";
import { resolveDns } from "./dns/resolveDns.js";

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

serve({
  "/": (req) => Response.redirect(new URL("/v2022", req.url), 302),
  "/v2020/:filename+": serveStatic("v2020/dist/build", {
    baseUrl: import.meta.url,
  }),
  "/v2022/:filename+": serveStatic("v2022/_site", { baseUrl: import.meta.url }),
  "/screen/:filename+": serveStatic("screen", { baseUrl: import.meta.url }),
  "/v2018/:filename+": serveStatic("v2018", { baseUrl: import.meta.url }),
  "/tixy/:filename+": serveStatic("tixy", { baseUrl: import.meta.url }),
  "/dns/:slug": async (req, params) => json(await resolveDns(params?.slug)),
  "/ip": (request) => jsx(<Ip ip={request.headers.get("x-forwarded-for")} />),
  404: (req) => {
    if (req.url.endsWith("index.html")) {
      return new Response("Not found", { status: 404 });
    }
    const nextUrl = new URL(join(req.url, "./index.html"));
    return Response.redirect(nextUrl, 302);
  },
});
