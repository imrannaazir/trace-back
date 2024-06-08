import { Suspense } from "react";
import RecentLostItems from "./components/RecentLostItems";
import RecentFoundItems from "./components/RecentFoundItems";

const RecentPostsPage = () => {
  return (
    <div className="space-y-4 my-4">
      <Suspense fallback={<div>Loading...</div>}>
        <RecentLostItems />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RecentFoundItems />
      </Suspense>
    </div>
  );
};

export default RecentPostsPage;
