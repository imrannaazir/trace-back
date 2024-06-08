import { Suspense } from "react";
import AddLostItemForm from "./components/AddLostItemForm";

const AddLostItemPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddLostItemForm />
    </Suspense>
  );
};

export default AddLostItemPage;
