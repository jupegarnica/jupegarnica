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
      "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
  })
);
site.use(mdx());
site.use(
  tailwindcss({
    // Extract the classes from HTML and JSX files
    extensions: [".html", ".jsx", ".tsx", ".mdx", ".js", ".ts"],

    // Your Tailwind options, like the theme colors and fonts
    options: {
      theme: {
        extend: {
          colors: {
            blue: "#2563eb",
          },
        },
        fontFamily: {
          sans: ["Montserrat", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
  })
);
site.use(postcss());


export default site;
