import Link from "next/link";

const AppLogo = () => {
  return (
    <Link href={"/"}>
      <p>
        Trace<span className="text-blue-500">Back</span>
      </p>
    </Link>
  );
};

export default AppLogo;
