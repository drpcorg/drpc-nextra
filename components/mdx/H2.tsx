import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { shouldMakeInvisibleHeading } from "../../utils/text/seo";
import { textToHrefId } from "../../utils/text/textToHrefId";
import classes from "./H2.module.css";

export function H2({ children }: PropsWithChildren) {
  let router = useRouter();
  const id = textToHrefId(children.toString());

  if (shouldMakeInvisibleHeading(router.asPath)) {
    return (
      <h2 className={classes.invisible}>
        <span>{children}</span>
      </h2>
    );
  }

  return (
    <h2 className={classes.h2}>
      <span>{children}</span>
      <a href={`#${id}`} id={id} aria-label="Permalink for this section">
        #
      </a>
    </h2>
  );
}
