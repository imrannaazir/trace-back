"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import { useGetAllMyFoundItemQuery } from "@/redux/api/foundItem.api";
import { TFoundItemProps } from "@/types";

export default function MyAllFoundItems() {
  // hooks
  const { data: foundItemsData, isFetching } =
    useGetAllMyFoundItemQuery(undefined);
  if (isFetching) {
    return <p>Loading...</p>;
  }

  const foundItems = foundItemsData?.data || [];

  return (
    <div className="space-y-4">
      <AppSectionHeading title="My found Item Reports" />
      {foundItems?.length ? (
        <div className="grid grid-cols-3 gap-4">
          {foundItems?.map((item: TFoundItemProps) => (
            <ItemCard
              key={item?.id}
              date={item?.foundDate}
              description={item.description}
              photo={item?.photo}
              title={item?.foundItemName}
              type="found"
              redirectPath="/my-profile/found-item/"
              id={item?.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No found items found</p>
      )}
    </div>
  );
}
