import lume from "https:/deno.land/x/lume@v1.6.0/mod.ts";
import base_path from "https:/deno.land/x/lume@v1.6.0/plugins/base_path.ts";
import code_highlight from "https:/deno.land/x/lume@v1.6.0/plugins/code_highlight.ts";
import date from "https:/deno.land/x/lume@v1.6.0/plugins/date.ts";
import inline from "https:/deno.land/x/lume@v1.6.0/plugins/inline.ts";
import jsx from "https:/deno.land/x/lume@v1.6.0/plugins/jsx.ts";
import modify_urls from "https:/deno.land/x/lume@v1.6.0/plugins/modify_urls.ts";

// todo: fix version
import { copy } from 'https://deno.land/std@0.126.0/fs/copy.ts';


await copy("./index.md", "../README.md", { overwrite: true });



const site = lume({

}
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


site.copy("_static", ".");

export default site;
