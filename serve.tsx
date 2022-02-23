/** @jsx h */
import {
  h,
  jsx,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.4.3/mod.ts";
import { join } from "https://deno.land/std@0.126.0/path/mod.ts";
import { Ip } from "./ip/myIp.jsx";

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

serve({
  "/": (req) => Response.redirect(new URL("/home", req.url), 302),

  "/screen/:filename+": serveStatic("screen", { baseUrl: import.meta.url }),
  "/home/:filename+": serveStatic("home", { baseUrl: import.meta.url }),
  // "/home/:filename+": serveStatic("home", { baseUrl: import.meta.url }),
  "/old/:filename+": serveStatic("old", { baseUrl: import.meta.url }),
  "/tixy/:filename+": serveStatic("tixy", { baseUrl: import.meta.url }),
  // "/blog/:slug": (request, params) => {
  //   const post = `Hello, you visited ${params?.slug}!`;
  //   return new Response(post);
  // },
  "/ip": (request) => {
    const ip = request.headers.get("x-forwarded-for");
    // console.log(request.headers);

    return jsx(<Ip ip={ip} />);
  },
  404: (req) => {
    if (req.url.endsWith("index.html")) {
      return new Response("Not found", { status: 404 });
    }

    const nextUrl = new URL(join(req.url, "./index.html"));

    return Response.redirect(nextUrl, 302);
  },
});
