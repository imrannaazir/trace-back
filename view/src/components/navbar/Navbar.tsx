import AppButton from "../ui/AppButton";
import Container from "../ui/Container";
import Divider from "../ui/Divider";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <main className="  py-3 relative ">
        <Divider className="absolute bottom-0" />
        <Container className="flex justify-between items-center">
          <p>TraceBack</p>

          <NavLinks />
          {/* end*/}
          <div className="flex gap-2">
            <AppButton variant={"outline"}>Signup</AppButton>
            <AppButton>Login</AppButton>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Navbar;
