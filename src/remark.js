import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkSandbox from "remark-codesandbox";
import remarkToc from "remark-toc";
// import remarkPrism from "remark-prism";

export default (data) => {
  return unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkSandbox, {
      mode: "meta",
    })
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(data.toString());
};
