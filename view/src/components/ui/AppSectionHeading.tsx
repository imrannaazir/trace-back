import Divider from "./Divider";

const AppSectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="text-xl text-center font-semibold flex flex-col items-center gap-1">
      <span>{title}</span>
      <Divider className="max-w-[200px]" />
    </div>
  );
};

export default AppSectionHeading;
