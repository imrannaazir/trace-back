"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import { useGetMyClaimListQuery } from "@/redux/api/claim.api";

export default function MyAllClaimRequest() {
  // hooks
  const { data: claimsData, isFetching } = useGetMyClaimListQuery(undefined);
  if (isFetching) {
    return <p>Loading...</p>;
  }

  const claims = claimsData?.data || [];

  return (
    <div className="space-y-4">
      <AppSectionHeading title="My all claims request" />
      {claims?.length ? (
        <div className="grid grid-cols-3 gap-4"></div>
      ) : (
        <p className="text-center">No claim item found</p>
      )}
    </div>
  );
}
