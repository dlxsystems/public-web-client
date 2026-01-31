import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { caseStudies } from "../../config/data";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: [study.imagePost],
    },
  };
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dlxsystems.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://www.dlxsystems.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `https://www.dlxsystems.com/work/${study.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-transparent pt-40 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto px-6 md:px-32 max-w-7xl">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-12"
        >
          <IconArrowLeft size={16} />
          Back to Work
        </Link>

        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-black/10 text-xs font-mono uppercase tracking-widest text-black/60">
              {study.industry}
            </span>
            <span className="px-3 py-1 rounded-full border border-black/10 text-xs font-mono uppercase tracking-widest text-black/60">
              {study.year}
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 max-w-4xl">
            {study.title}
          </h1>

          <p className="text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed">
            {study.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video shadow-2xl shadow-black/10 rounded-3xl overflow-hidden mb-20 bg-zinc-100">
          <Image
            src={study.imagePost}
            alt={study.title}
            fill
            sizes="100vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2">
                Team
              </h3>
              <p className="text-lg font-medium">{study.team}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2">
                Duration
              </h3>
              <p className="text-lg font-medium">{study.duration}</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-normal prose-headings:text-zinc-900
                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:tracking-tight prose-h2:mb-8 prose-h2:mt-16 prose-h2:first:mt-0
                prose-h3:text-xs prose-h3:font-mono prose-h3:uppercase prose-h3:tracking-widest prose-h3:text-black/40 prose-h3:mb-6 prose-h3:mt-12
                prose-p:text-lg prose-p:md:text-xl prose-p:leading-[1.8] prose-p:text-black/60 prose-p:mb-8
                prose-strong:text-black prose-strong:font-medium
                prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-6 prose-ul:my-10
                prose-li:relative prose-li:pl-6 prose-li:text-lg prose-li:md:text-xl prose-li:text-black/60
                prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.7em] prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:bg-emerald-500 prose-li:before:rounded-full
              "
              dangerouslySetInnerHTML={{ __html: study.content || "" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
