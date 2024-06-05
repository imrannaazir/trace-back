import { SlEnvolope } from "react-icons/sl";
import Container from "../ui/Container";
import DotBackgroundSection from "../ui/DotBackgroundSection";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import AppLogo from "../ui/AppLogo";

const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      label: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      label: "Terms on Use",
      path: "/terms-of-use",
    },
    {
      id: 3,
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {},
    {
      id: 4,
      label: "Found Items",
      path: "/found-items",
    },
    {
      id: 5,
      label: "Lost Items",
      path: "/lost-items",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: FaFacebook,
      path: "https://facebook.com",
    },
    {
      id: 2,
      icon: FaTwitter,
      path: "https://twitter.com",
    },
    {
      id: 3,
      icon: FaInstagram,
      path: "https://instagram.com",
    },
    {
      id: 4,
      icon: FaLinkedin,
      path: "https://linkedin.com",
    },
  ];
  return (
    <DotBackgroundSection>
      <Container className="py-10 space-y-6">
        <div className="w-full flex justify-between ">
          {/* logo */}
          <div>
            <div className="text-4xl">
              <AppLogo />
            </div>
            <p className="flex items-center gap-2 text-sm">
              <SlEnvolope /> contact@traceback.com
            </p>
          </div>
          {/* quick links */}
          <div className="flex items-center gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.id} href={`${link?.path}`}>
                {link.label}
              </Link>
            ))}
          </div>
          {/* social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.path}>
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center dark:text-gray-500">
          {" "}
          &copy; 2024 TraceBack All rights reserved
        </p>
      </Container>
    </DotBackgroundSection>
  );
};

export default Footer;
