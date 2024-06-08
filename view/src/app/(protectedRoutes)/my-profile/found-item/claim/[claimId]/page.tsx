import { Suspense } from "react";
import ClaimedItemDetails from "../../../claim/[claimId]/components/ClaimedItemDetails";
import ChangeStatusButton from "./components/ChangeStatusButton";

const ClaimDetailsPage = ({ params }: { params: { claimId: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClaimedItemDetails claimId={params?.claimId} />
      <ChangeStatusButton claimId={params?.claimId} />
    </Suspense>
  );
};

export default ClaimDetailsPage;
