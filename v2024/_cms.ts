import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();
cms.collection({
  name: "projects",
  store: "src:_data/projects/*.md",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "markdown",
    },
    {
      name: "url",
      type: "url",
    },
    {
      name: "published",
      type: "number",
      view: "editor",
    },
    {
      name: "draft",
      type: "checkbox",
      view: "editor",
    },
  ],
});

export default cms;
