import { redirect } from "next/navigation";

export default function LocaleSignupPage() {
  redirect("/login?mode=signup");
}
