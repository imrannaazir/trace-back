import { HomPageHero } from "./components/Hero";
import { HomePageAboutUs } from "./components/HomePageAboutUs";

export default function Home() {
  return (
    <main className="mt-6">
      <HomPageHero />
      <HomePageAboutUs />
    </main>
  );
}
