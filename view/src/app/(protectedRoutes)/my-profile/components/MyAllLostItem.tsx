"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import { useGetAllMyFoundItemQuery } from "@/redux/api/foundItem.api";
import { useGetAllMyLostItemsQuery } from "@/redux/api/lostItem.api";
import { TFoundItemProps, TLostItemProps } from "@/types";

export default function MyAllLostItems() {
  // hooks
  const { data: lostItemsData, isFetching } =
    useGetAllMyLostItemsQuery(undefined);
  if (isFetching) {
    return <p>Loading...</p>;
  }

  const foundItems = lostItemsData?.data || [];

  return (
    <div className="space-y-4">
      <AppSectionHeading title="My lost Item Reports" />
      {foundItems?.length ? (
        <div className="grid grid-cols-3 gap-4">
          {foundItems?.map((item: TLostItemProps) => (
            <ItemCard
              key={item?.id}
              date={item?.lostDate}
              description={item.description}
              photo={item?.photo}
              title={item?.lostItemName}
              type="lost"
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No lost items found</p>
      )}
    </div>
  );
}
