import clsx from "clsx";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { shouldMakeInvisibleHeading } from "../../utils/text/seo";
import { textToHrefId } from "../../utils/text/textToHrefId";
import classes from "./H1.module.css";

export function H1({ children }: PropsWithChildren) {
  const router = useRouter();
  const id = textToHrefId(children.toString());

  if (shouldMakeInvisibleHeading(router.asPath)) {
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
