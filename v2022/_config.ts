import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";
import modify_urls from "lume/plugins/modify_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";

// import { copy } from 'https://deno.land/std@0.126.0/fs/copy.ts';
// await copy("./index.md", "../README.md", { overwrite: true });



const site = lume(
  // {
  // cwd: Deno.cwd(),
  // src: ".",
  // dest: "_site",
  // location: new URL("http://localhost:3000"),
  // dev: false
  // prettyUrls: true,
  // server: {
  //   port: 3000,
  //   page404: "/404.html",
  //   open: false,
  // },
  // watcher: {
  //   debounce: 100,
  //   ignore: []
  // },
  // components: {
  //   directory: "/_components",
  //   variable: "comp",
  //   cssFile: "/components.css",
  //   jsFile: "/components.js",
  // },
  //   }
);

site.use(base_path());
site.use(code_highlight());
site.use(date());
site.use(inline());
site.use(jsx());
site.use(modify_urls());
site.use(sitemap());


site.copy("_static", ".");

export default site;
