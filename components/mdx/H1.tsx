import { PropsWithChildren } from "react";
import classes from "./H1.module.css";
import { useRouter } from "next/router";
import { textToHrefId } from "../../utils/text/textToHrefId";
import { isApiDocsPagePath } from "../../utils/text/isApiDocsPagePath";
import clsx from "clsx";

export function H1({ children }: PropsWithChildren) {
  const router = useRouter();
  const id = textToHrefId(children.toString());

  if (isApiDocsPagePath(router.asPath)) {
    return (
      <h1 className={clsx(classes.invisible)}>
        <span>{children}</span>
      </h1>
    );
  }

  return (
    <h1 className={classes.h1}>
      <span>{children}</span>
    </h1>
  );
}
