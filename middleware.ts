import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "./lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // For dashboard/admin: refresh session but let client components guard auth
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
    return updateSession(request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
