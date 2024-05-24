import Divider from "@/components/ui/Divider";
import ItemCard from "@/components/ui/ItemCard";

const RecentLostItems = () => {
  return (
    <div className="space-y-4">
      <div className="text-xl text-center font-semibold flex flex-col items-center gap-1">
        <span>Recent Lost Item Reports</span>
        <Divider className="max-w-[200px]" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_item, i) => (
          <ItemCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default RecentLostItems;
