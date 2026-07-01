import { NextIntlClientProvider } from "next-intl";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/AuthContext";
import PathAwareShell from "@/components/PathAwareShell";
import enMessages from "@/messages/en.json";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <AuthProvider>
        <AppProvider>
          <PathAwareShell>
            {children}
          </PathAwareShell>
        </AppProvider>
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
