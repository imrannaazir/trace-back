import { HomPageHero } from "./components/Hero";
import { HomePageAboutUs } from "./components/HomePageAboutUs";
import RecentLostItems from "./components/RecentLostItems";

export default function Home() {
  return (
    <main className="mt-6">
      <HomPageHero />
      <HomePageAboutUs />
      <RecentLostItems />
    </main>
  );
}
