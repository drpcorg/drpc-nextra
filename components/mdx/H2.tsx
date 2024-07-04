import { useRouter } from "next/router";
import { textToHrefId } from "../../utils/text/textToHrefId";
import { PropsWithChildren } from "react";
import classes from "./H1.module.css";
import { isApiDocsPagePath } from "../../utils/text/isApiDocsPagePath";

export function H2({ children }: PropsWithChildren) {
  let router = useRouter();
  const id = textToHrefId(children.toString());

  if (isApiDocsPagePath(router.asPath)) {
    return (
      <h2 className={classes.invisible}>
        <span>{children}</span>
      </h2>
    );
  }

  return (
    <h2 className={classes.h2}>
      <span>{children}</span>
      <a href={`#${id}`} id={id} aria-label="Permalink for this section" />
    </h2>
  );
}
