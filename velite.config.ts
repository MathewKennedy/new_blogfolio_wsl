import { defineConfig, defineCollection, s} from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// syntax here is setting computedFields to a generic arrow function
// the generic type used must extend an object with a slug property set to a string type

// example of extends being used:
// const y: object & { slug: string } = something; // error
// const z: object & { slug: string } = { slug: "hello" }; // okay

// it takes in a data argument of generic type T
// parenthesis around curly brackets is immediate return

// this takes in a post with a slug object, copies it, and adds slugAsParams, which is the same as slug but with /blog/ removed
const computedFields = <T extends {slug:string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/")
});

// defining the path to post markdown files and the schema for it so velite can compile them to .velite/posts.json
const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    tags: s.array(s.string()).optional(),
    body: s.mdx()
  })
  .transform(computedFields)
})

// defining the path to post markdown files and the schema for it so velite can compile them to .velite/posts.json
const projects = defineCollection({
    name: "Project",
    pattern: "projects/**/*.mdx",
    schema: s.object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      project_image: s.string(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx()
    })
    .transform(computedFields)
  })

// above, .transform is chained on the return value of s.object()
// it's a function to pass the result of s.object() to

// export the defineConfig return value as default, telling velite where to find mdx and other files
// argument object to defineConfig must contain a collections property, this contains our defined collection
export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: {
        posts,
        projects
    },
    mdx: {
        rehypePlugins: [
            rehypeSlug, 
            [
                rehypePrettyCode, 
                { 
                    theme: "github-dark"
                }
            ], 
            [
                rehypeAutolinkHeadings, 
                { 
                    behavior: "wrap", 
                    properties: { 
                    className: ["subheading-anchor"], 
                    ariaLabel: "Link to section"
                    }
                }
            ]
        ],
        remarkPlugins: []
    }
})