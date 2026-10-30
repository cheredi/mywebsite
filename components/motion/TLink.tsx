"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useShell } from "@/components/motion/Shell";

type Props = ComponentProps<typeof Link> & { href: string; transitionLabel?: string };

/** Internal link that plays the page-transition curtain, or smooth-scrolls to same-page anchors. */
export default function TLink({ href, transitionLabel, onClick, ...rest }: Props) {
  const { navigate } = useShell();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    navigate(href, transitionLabel);
  }

  return <Link href={href} onClick={handleClick} {...rest} />;
}
