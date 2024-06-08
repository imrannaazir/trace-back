import { Suspense } from "react";
import ChangePasswordForm from "./components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChangePasswordForm />
    </Suspense>
  );
};

export default ChangePasswordPage;
