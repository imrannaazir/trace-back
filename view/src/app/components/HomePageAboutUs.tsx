"use client";
import AppSectionHeading from "@/components/ui/AppSectionHeading";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import GridBackgroundSection from "@/components/ui/GridBackgroundSection";

export function HomePageAboutUs() {
  return (
    <GridBackgroundSection>
      <div>
        <AppSectionHeading title="About us" />
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={purposeAndMission} />
        </div>
      </div>
    </GridBackgroundSection>
  );
}
export const purposeAndMission = [
  {
    title: "Purpose",
    description:
      "Our website exists to help individuals and organizations report, search for, and recover lost items quickly and efficiently.",
    link: "/about-us",
  },
  {
    title: "Mission 1",
    description:
      "To Reunite: Our mission is to ensure that every lost item has the best chance of being returned to its rightful owner, minimizing the emotional and financial impact of lost belongings.",
    link: "/about-us",
  },
  {
    title: "Mission 2",
    description:
      "To Empower: We empower individuals and organizations to take action when they find or lose something, providing the tools and resources needed to report, search for, and recover lost items effectively.",
    link: "/about-us",
  },
  {
    title: "Mission 3",
    description:
      "To Innovate: We continually strive to improve our platform with the latest technology and user-friendly features, making the lost and found process as efficient and intuitive as possible.",
    link: "/about-us",
  },
  {
    title: "Mission 4",
    description:
      "To Build Trust: Trust and reliability are at the core of our service. We are committed to maintaining a secure and transparent platform where users can confidently share and search for lost and found items.",
    link: "/about-us",
  },
  {
    title: "Mission 5",
    description:
      "To Promote Honesty: By encouraging and facilitating honest reporting of found items, we aim to cultivate a culture of integrity and goodwill within our community.",
    link: "/about-us",
  },
];
