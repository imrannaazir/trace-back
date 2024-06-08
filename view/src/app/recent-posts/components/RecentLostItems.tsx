"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import {
  useGetAllLostItemQuery,
  useGetAllMyLostItemsQuery,
} from "@/redux/api/lostItem.api";
import { TLostItemProps } from "@/types";

export default function RecentLostItems() {
  // hooks
  const { data: lostItemsData, isFetching } = useGetAllLostItemQuery("");
  if (isFetching) {
    return <p>Loading...</p>;
  }

  const lostItems = lostItemsData?.data || [];

  return (
    <div className="space-y-4">
      <AppSectionHeading title="Recent Lost Item Reports" />
      {lostItems?.length ? (
        <div className="grid grid-cols-3 gap-4">
          {lostItems?.map((item: TLostItemProps) => (
            <ItemCard
              id={item.id}
              redirectPath="/lost-item"
              key={item?.id}
              date={item?.lostDate}
              description={item.description}
              photo={item?.photo}
              title={item?.lostItemName}
              type="lost"
              location={item?.location}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No lost items found</p>
      )}
    </div>
  );
}
