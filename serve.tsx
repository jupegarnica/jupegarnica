/** @jsx h */
import {
  h,
  jsx,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.6.0/mod.ts";

import { join } from "https://deno.land/std@0.126.0/path/mod.ts";
import { Ip } from "./ip/myIp.jsx";
import { Dns, resolveDns } from "./dns/resolveDns.jsx";

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

serve({
  "/": (req: Request) => Response.redirect(new URL("/v2022", req.url), 302),
  "/v2020/:filename+": serveStatic("v2020/dist/build", {
    baseUrl: import.meta.url,
  }),

  "/v2022/:filename+": serveStatic("v2022/_site", { baseUrl: import.meta.url }),
  "/screen/:filename+": serveStatic("screen", { baseUrl: import.meta.url }),
  "/v2018/:filename+": serveStatic("v2018", { baseUrl: import.meta.url }),
  "/tixy/:filename+": serveStatic("tixy", { baseUrl: import.meta.url }),
  "/game-of-life/:filename+": serveStatic("game-of-life/dist", { baseUrl: import.meta.url }),
  "/dns/:slug": async (_, connInfo, params) => {

    const domain = params?.slug ?? "garn.dev";

    return jsx(<Dns records={await resolveDns(domain)} domain={domain} />);
  },
  "/ip": (_: Request, connInfo) => {
    const addr = connInfo.remoteAddr as Deno.NetAddr;
    const ip = addr.hostname;
    return jsx(<Ip ip={ip} />);
  },

  404: (req: Request) => {
    if (req.url.endsWith("index.html")) {
      return jsx(<NotFound />, { status: 404 });
    }
    const nextUrl = new URL(join(req.url, "./index.html"));
    return Response.redirect(nextUrl, 302);
  },
}, {

});
