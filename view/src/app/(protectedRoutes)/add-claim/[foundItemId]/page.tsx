import { Suspense } from "react";
import AddClaimForm from "./components/AddClaimForm";

const AddClaimRequestPage = ({
  params,
}: {
  params: { foundItemId: string };
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddClaimForm foundItemId={params?.foundItemId} />
    </Suspense>
  );
};

export default AddClaimRequestPage;
