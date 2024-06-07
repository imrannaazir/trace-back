import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemCard from "@/components/ui/ItemCard";
import { TLostItemProps } from "@/types";

const getLostItems = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/lost-items?limit=6&page=1`, {
    next: {
      revalidate: 30,
    },
  });
  return response.json();
};

const RecentLostItems = async () => {
  const lostItemsData = await getLostItems();
  const lostItems = lostItemsData?.data || [];
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
