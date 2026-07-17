import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "./lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

const AUTH_GUARDED = ["/dashboard", "/admin"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isGuarded = AUTH_GUARDED.some((p) => pathname.startsWith(p));
  if (isGuarded) {
    return updateSession(request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
