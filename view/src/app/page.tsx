import { Suspense } from "react";
import { HomPageHero } from "./components/Hero";
import { HomePageAboutUs } from "./components/HomePageAboutUs";
import RecentLostItems from "./components/RecentLostItems";

const HomePage = () => {
  return (
    <main className="mt-6">
      <HomPageHero />
      <HomePageAboutUs />
      <Suspense fallback={<div>Loading...</div>}>
        <RecentLostItems />
      </Suspense>
    </main>
  );
};

export default HomePage;
