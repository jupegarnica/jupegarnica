import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import google_fonts from "lume/plugins/google_fonts.ts";
import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
const site = lume();

site.use(jsx());
site.use(
  google_fonts({
    fonts:
      "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap",
  })
);
site.use(mdx());
site.use(
  tailwindcss({
    extensions: [".html", ".jsx", ".tsx", ".mdx", ".js", ".ts"],
  })
);
site.use(postcss());
site.copy("script.js");


export default site;
