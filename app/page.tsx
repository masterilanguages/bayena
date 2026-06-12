import PublicLandingPage from "@/components/PublicLandingPage";
import { DEFAULT_LANDING_PAGE } from "@/lib/landing-page";

export default function HomePage() {
  return <PublicLandingPage content={DEFAULT_LANDING_PAGE} />;
}
