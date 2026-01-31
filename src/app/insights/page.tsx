import { Metadata } from "next";
import { blogPosts } from "../config/data";
import { InsightCard, BlogPostItem } from "../components/ui/cards.component";
import {
  SectionHeader,
  SectionBadge,
  SectionTitle,
} from "../components/ui/section.component";

export const metadata: Metadata = {
  title: "Insights | DLX Systems",
  description:
    "Thoughts on software architecture, engineering culture, and system design from the DLX Systems team.",
};

export default function InsightsIndex() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-10 md:px-32 relative z-30">
      <SectionHeader>
        <SectionBadge>INSIGHTS</SectionBadge>
        <SectionTitle>How we think</SectionTitle>
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {(blogPosts as unknown as BlogPostItem[]).map((post) => (
          <InsightCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
