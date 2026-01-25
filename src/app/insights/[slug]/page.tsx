import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft, IconClock, IconCalendar } from "@tabler/icons-react";
import { blogPosts } from "../../config/data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightDetail({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Helper to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-transparent">
      {/* Article Header */}
      <header className={`relative pt-40 pb-20 px-6 md:px-0 ${post.bg}`}>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-12"
          >
            <IconArrowLeft size={16} />
            Back to Insights
          </Link>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-medium bg-white/50 backdrop-blur-md`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-medium text-zinc-900 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-black/60 font-mono border-t border-black/5 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black/5 overflow-hidden relative">
                  <Image
                    src={post.authorImg}
                    alt={post.author}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <span className="text-black uppercase tracking-widest text-xs">
                  {post.author}
                </span>
              </div>
              <span className="w-px h-4 bg-black/10"></span>
              <div className="flex items-center gap-2 uppercase tracking-widest text-xs">
                <IconCalendar size={14} className="text-black/40" />
                <span>{formatDate(post.date)}</span>
              </div>
              <span className="w-px h-4 bg-black/10"></span>
              <div className="flex items-center gap-2 uppercase tracking-widest text-xs">
                <IconClock size={14} className="text-black/40" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mx-auto max-w-5xl -mt-10 mb-20 px-6 md:px-0 relative z-10">
        <div className="relative aspect-21/9 rounded-3xl overflow-hidden shadow-2xl shadow-black/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-2xl px-6 md:px-0 pb-32">
        <div
          className="prose prose-lg prose-zinc max-w-none
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-zinc-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:font-sans prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-4
            prose-p:font-serif prose-p:text-xl prose-p:leading-relaxed prose-p:text-black/80 prose-p:mb-8
            prose-lead:text-2xl prose-lead:leading-relaxed prose-lead:font-normal prose-lead:text-black
            prose-strong:font-medium prose-strong:text-black
            prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4
            prose-li:pl-0 prose-li:font-serif prose-li:text-xl prose-li:text-black/80
            prose-li:before:hidden
            first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-black first-letter:leading-[0.8]
          "
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* Footer / Author Block */}
        <div className="mt-20 pt-10 border-t border-black/10">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
            Written by
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-black/5 overflow-hidden relative">
              <Image
                src={post.authorImg}
                alt={post.author}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-lg">{post.author}</h4>
              <p className="text-black/60 text-sm">{post.designation}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
