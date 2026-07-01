import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";
import type { FC } from "react";

const nav = createNavigation(routing);

export const { redirect, usePathname, useRouter, getPathname } = nav;

// Permissive Link: runtime behaviour is fully correct (pathnames config works as expected).
// href is typed as `any` to support dynamic paths, query strings, and external URLs
// without requiring every call site to enumerate all possible path patterns.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = nav.Link as FC<{ href: any; [key: string]: any }>;
