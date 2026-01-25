"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBriefcase,
  IconMapPin,
  IconClock,
  IconLoader2,
  IconCheck,
  IconPaperclip,
  IconChevronDown,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { openPositions } from "../config/data";
import { CustomSelect } from "../components/ui/custom-select.component";

function JobCard({
  job,
  onApply,
}: {
  job: any;
  onApply: (title: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div>
          <h3 className="text-3xl font-medium mb-3 group-hover:text-(--primary) transition-colors">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-black/50">
            <span className="flex items-center gap-1">
              <IconBriefcase size={14} /> {job.department}
            </span>
            <span className="flex items-center gap-1">
              <IconMapPin size={14} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <IconClock size={14} /> {job.type}
            </span>
          </div>
        </div>
        <button
          onClick={() => onApply(job.title)}
          className="self-start md:self-center px-6 py-3 rounded-full border border-black/10 text-sm font-medium hover:bg-(--primary) hover:text-white transition-all cursor-pointer whitespace-nowrap"
        >
          Apply Now
        </button>
      </div>

      <p className="text-lg text-black/60 max-w-3xl leading-relaxed mb-8">
        {job.description}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-8 border-t border-black/5 grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-black/40 mb-6">
                  Responsibilities
                </h4>
                <ul className="space-y-4">
                  {job.responsibilities?.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-black/70 text-base leading-relaxed"
                    >
                      <span className="text-(--primary) mt-1 shrink-0">
                        <IconCheck size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-black/40 mb-6">
                  Requirements
                </h4>
                <ul className="space-y-4">
                  {job.requirements?.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-black/70 text-base leading-relaxed"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
      >
        {expanded ? "Show Less" : "See Details"}
        <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
          <IconChevronDown size={16} />
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function Careers() {
  // Same form state logic as Contact, but with extra fields
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    linkedin: string;
    portfolio: string;
    position: string;
    message: string;
    attachment: { name: string; content: string; type: string } | null;
  }>({
    name: "",
    email: "",
    linkedin: "",
    portfolio: "",
    position: "",
    message: "",
    attachment: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to form when applying
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setFormState((prev) => ({ ...prev, position: positionTitle }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prev) => ({
          ...prev,
          attachment: {
            name: file.name,
            content: reader.result as string,
            type: file.type,
          },
        }));
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-black pt-40 pb-20">
      <div className="mx-auto px-6 md:px-32 max-w-7xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-20"
        >
          <IconArrowLeft size={16} />
          Back Home
        </Link>

        {/* Header */}
        <section className="mb-32">
          <span className="text-black/40 font-mono uppercase tracking-widest text-sm mb-4 block">
            Join the team
          </span>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 max-w-4xl">
            Build systems that matter.
          </h1>
          <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
            We're a team of engineers, designers, and architects who believe in
            craft, clarity, and code that lasts. If you're tired of "move fast
            and break things," you'll fit right in.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-32">
          <h2 className="text-2xl font-medium mb-12 border-b border-black/10 pb-4">
            Open Positions
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {openPositions.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApplyClick} />
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section ref={formRef} className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-black/5 rounded-[40px] p-8 md:p-16 shadow-2xl shadow-black/5 relative">
            <h2 className="text-3xl font-medium mb-2">Apply for a role</h2>
            <p className="text-black/50 mb-10">
              Tell us about yourself and why you'd be a great fit.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/30">
                    <IconCheck size={40} />
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-zinc-900">
                    Application received.
                  </h3>
                  <p className="text-black/50 max-w-xs mx-auto mb-8">
                    Thanks for your interest. We'll review your application and
                    be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        Position
                      </label>
                      <CustomSelect
                        value={formState.position}
                        options={openPositions.map((p) => p.title)}
                        placeholder="Select a role"
                        onChange={(val) =>
                          setFormState({ ...formState, position: val })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        value={formState.linkedin}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            linkedin: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors"
                        placeholder="linkedin.com/in/jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        Portfolio / GitHub
                      </label>
                      <input
                        type="url"
                        value={formState.portfolio}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            portfolio: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors"
                        placeholder="github.com/jane"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                      Resume / CV
                    </label>
                    <div className="pt-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/40 hover:text-emerald-600 transition-colors border border-black/10 px-4 py-3 rounded-lg hover:border-emerald-600 w-full"
                      >
                        <IconPaperclip size={16} />
                        {formState.attachment
                          ? "Change Resume"
                          : "Attach Resume (PDF/DOC)"}
                      </button>
                      {error && (
                        <p className="text-red-500 text-xs mt-2">{error}</p>
                      )}
                      {formState.attachment && (
                        <div className="flex items-center gap-2 text-xs text-emerald-600 font-mono mt-2">
                          <IconCheck size={14} />
                          <span className="truncate">
                            {formState.attachment.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                      Why DLX?
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors resize-none"
                      placeholder="Tell us why you want to join..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-(--primary) text-white text-sm font-mono uppercase tracking-widest py-4 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? (
                      <>
                        <IconLoader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <IconArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  );
}
