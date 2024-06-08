import { Suspense } from "react";
import AddFoundItemForm from "./components/AddFoundItemForm";

const AddFoundItemPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddFoundItemForm />
    </Suspense>
  );
};

export default AddFoundItemPage;
