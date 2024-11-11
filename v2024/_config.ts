import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx());
site.use(google_fonts({ fonts: "https://fonts.google.com/share?selection.family=Roboto" }));
site.use(mdx());
site.use(tailwindcss());
site.use(postcss());

export default site;
