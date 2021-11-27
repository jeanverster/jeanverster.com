import Link from "next/link";
import { ReactHTMLElement } from "react";

export const Anchor: React.FC<
  Partial<ReactHTMLElement<HTMLAnchorElement>["props"]>
> = (props) => {
  const { href, children } = props;

  if (!href) {
    return <a {...props} />;
  }

  return (
    <Link href={href} passHref={true}>
      <a>{children}</a>
    </Link>
  );
};
