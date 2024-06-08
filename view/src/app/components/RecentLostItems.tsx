"use client";
import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import { useGetAllLostItemQuery } from "@/redux/api/lostItem.api";
import { TLostItemProps } from "@/types";

const RecentLostItems = () => {
  const { data: lostItemData, isFetching } =
    useGetAllLostItemQuery("limit=6&page=1");

  const lostItems: TLostItemProps[] = lostItemData?.data || [];

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <AppSectionHeading title="Recent Lost Item Reports" />
      <div className="grid grid-cols-3 gap-4">
        {lostItems?.map((item: TLostItemProps) => (
          <ItemCard
            id={item?.id}
            redirectPath="/found-item"
            key={item?.id}
            date={item?.lostDate}
            description={item.description}
            photo={item?.photo}
            title={item?.lostItemName}
            type="lost"
          />
        ))}
      </div>
    </div>
  );
};

export default RecentLostItems;
