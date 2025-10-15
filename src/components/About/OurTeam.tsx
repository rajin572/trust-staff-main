import React from "react";
import OurTeamCard, { ITeam } from "../shared/Cards/OurTeamCard";
import { AllImages } from "../../../public/assets/AllImages";

export const teamMembers: ITeam[] = [
  {
    id: 1,
    name: "Devid Oliver",
    designation: "CV Review & Quality Control",
    description:
      "Devid Oliver ensures every CV meets our standards for quality and accuracy. His sharp eye for detail guarantees that only the most suitable profiles progress through our placement process.",
    image: AllImages.michaelKemp, // or use string URL: 'https://yourdomain.com/michael.jpg'
    linkedin: "https://www.linkedin.com/in/din-islam-rajin/",
    twitter: "https://x.com",
  },
  {
    id: 2,
    name: "Alice Johnson",
    designation: "Recruitment & Candidate Placement",
    description:
      "Alice Johnson oversees applicant interviews and candidate assessments to ensure each individual is perfectly matched to the right opportunity. Her expertise bridges the gap between talent and the ideal workplace.",
    image: AllImages.paulaJones,
    linkedin: "https://www.linkedin.com/in/din-islam-rajin/",
    twitter: "https://x.com",
  },
  {
    id: 3,
    name: "Robin Kim",
    designation: "Head of Technology & AI Development",
    description:
      "Robin Kim drives innovation by developing cutting-edge AI employment tools that streamline recruitment and empower smarter HR decisions. His leadership keeps our platform ahead of industry trends.",
    image: AllImages.tedMoratto,
    linkedin: "https://www.linkedin.com/in/din-islam-rajin/",
    twitter: "https://x.com",
  },
  {
    id: 4,
    name: "Leonard Wilson",
    designation: "Line Manager & HR Operations",
    description:
      "Leonard Wilson coordinates across all teams and HR Management Managers, ensuring seamless collaboration and consistent delivery of exceptional client service. His focus is on efficiency, reliability, and results.",
    image: AllImages.patrickFraser,
    linkedin: "https://www.linkedin.com/in/din-islam-rajin/",
    twitter: "https://x.com",
  },
];

const OurTeam = () => {
  return (
    <div className="py-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold mb-5">
        People Behind the Progress
      </h1>
      <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-base-color font-semibold mb-3">
        Our dedicated professionals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {teamMembers.map((member) => (
          <OurTeamCard key={member.id} team={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
