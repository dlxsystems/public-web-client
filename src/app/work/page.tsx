import { Metadata } from "next";
import { caseStudies } from "../config/data";
import { WorkCard, CaseStudyItem } from "../components/ui/cards.component";
import {
  SectionHeader,
  SectionBadge,
  SectionTitle,
} from "../components/ui/section.component";

export const metadata: Metadata = {
  title: "Our Work | DLX Systems",
  description:
    "Explore our recent case studies in systems architecture, cloud engineering, and digital platform development.",
};

export default function WorkIndex() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-10 md:px-32 relative z-30">
      <SectionHeader>
        <SectionBadge>CASE STUDIES</SectionBadge>
        <SectionTitle>Recent Work</SectionTitle>
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <WorkCard key={study.id} study={study as unknown as CaseStudyItem} />
        ))}
      </div>
    </main>
  );
}
