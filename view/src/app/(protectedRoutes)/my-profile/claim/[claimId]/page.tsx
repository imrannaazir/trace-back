import { Suspense } from "react";
import ClaimedItemDetails from "./components/ClaimedItemDetails";

const ClaimDetailsPage = ({ params }: { params: { claimId: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClaimedItemDetails claimId={params?.claimId} />
    </Suspense>
  );
};

export default ClaimDetailsPage;
