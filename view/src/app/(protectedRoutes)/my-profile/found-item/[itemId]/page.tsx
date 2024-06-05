import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemDetails from "@/components/ui/ItemDetails";

const FoundItemDetailsPage = () => {
  return (
    <div className="my-4 space-y-4">
      <AppSectionHeading
        className="text-start items-start"
        title="Found Item details"
      />
      <ItemDetails />
    </div>
  );
};

export default FoundItemDetailsPage;
