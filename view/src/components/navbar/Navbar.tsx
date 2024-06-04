import Container from "../ui/Container";
import Divider from "../ui/Divider";
import { NavLinks } from "./NavLinks";
import NavbarEnd from "./NavbarEnd";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <main className="  py-3 relative ">
        <Divider className="absolute bottom-0" />
        <Container className="flex justify-between items-center">
          <p>TraceBack</p>

          <NavLinks />
          {/* end*/}
          <NavbarEnd />
        </Container>
      </main>
    </div>
  );
};

export default Navbar;
