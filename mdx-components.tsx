import type { MDXComponents } from "mdx/types";
import { B, H1, H2, H3, H4, H5, H6, I, Txt } from "./app/components/Text";

/** https://nextjs.org/docs/app/building-your-application/configuring/mdx#custom-elements */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (p) => <H1 {...p} />,
    h2: (p) => <H2 {...p} />,
    h3: (p) => <H3 {...p} />,
    h4: (p) => <H4 {...p} />,
    h5: (p) => <H5 {...p} />,
    h6: (p) => <H6 {...p} />,
    strong: (p) => <B {...p} />,
    em: (p) => <I {...p} />,
    ...components,
  };
}
