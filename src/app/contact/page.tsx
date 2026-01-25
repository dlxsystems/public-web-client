"use client";

import { useState, useRef } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconLoader2,
  IconPaperclip,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CustomSelect } from "../components/ui/custom-select.component";

export default function Contact() {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    message: string;
    attachment: { name: string; content: string; type: string } | null;
  }>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    attachment: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "System Architecture",
    "Product Engineering",
    "Cloud Infrastructure",
    "Platform Modernization",
    "Other",
  ];

  const budgets = ["< $2k", "$2k - $5k", "$5k - $10k", "$10k+"];

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 md:px-0 overflow-hidden">
      <div className="mx-auto px-6 md:px-32 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:pt-12">
          {/* Left Column: Context */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-[10px] font-mono uppercase tracking-[0.2em] mb-8 text-black/60 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for new projects
              </div>

              <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-[0.9]">
                Let's build <br />
                <span className="text-black/40 italic font-light">
                  something real.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed mb-16">
                Tell us about your challenges. We prefer clear problems over
                fancy specs. Whether you need a full system overhaul or a
                scalability audit, we are ready to listen.
              </p>

              <div className="hidden lg:block">
                <div className="flex flex-col gap-8 text-sm text-black/80 font-mono">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
                      Email us directly
                    </p>
                    <a
                      href="mailto:ceo@dlxsystems.com"
                      className="hover:text-sky-700 transition-colors"
                    >
                      ceo@dlxsystems.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
                      Office
                    </p>
                    <p>
                      Ratnapura, SG
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[40px] shadow-2xl shadow-indigo-500/10 min-h-[600px]"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/30">
                    <IconCheck size={40} />
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-zinc-900">
                    Message received.
                  </h3>
                  <p className="text-black/50 max-w-xs mx-auto mb-8">
                    We've got your details. Our team will review your request
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                        attachment: null,
                      });
                    }}
                    className="text-sm border-b border-black/20 pb-1 hover:border-black transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/60 backdrop-blur-xl border border-black/5 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/5 relative"
                >
                  {error && (
                    <div className="w-full mb-6">
                      <div className="w-full bg-red-50 text-red-600 text-xs py-3 rounded-lg text-center">
                        {error}
                      </div>
                    </div>
                  )}

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors placeholder:text-black/10"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors placeholder:text-black/10"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors placeholder:text-black/10"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 relative">
                        <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                          Service
                        </label>
                        <CustomSelect
                          value={formState.service}
                          options={services}
                          placeholder="Select a service"
                          onChange={(val) =>
                            setFormState({ ...formState, service: val })
                          }
                        />
                      </div>

                      <div className="space-y-2 relative">
                        <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                          Budget Range
                        </label>
                        <CustomSelect
                          value={formState.budget}
                          options={budgets}
                          placeholder="Select a range"
                          onChange={(val) =>
                            setFormState({ ...formState, budget: val })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-black/40">
                        Project Details
                      </label>
                      <textarea
                        required
                        className="w-full bg-transparent border-b border-black/10 py-3 text-lg focus:outline-none focus:border-black/40 transition-colors placeholder:text-black/10 min-h-[100px] resize-none"
                        placeholder="Tell us about the problem you're trying to solve..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                        >
                          <IconPaperclip size={16} />
                          {formState.attachment ? "Change file" : "Attach file"}
                        </button>
                        {formState.attachment && (
                          <div className="flex items-center gap-2 text-[10px] text-emerald-600 font-mono">
                            <IconCheck size={12} />
                            <span className="truncate max-w-[150px]">
                              {formState.attachment.name}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormState((prev) => ({
                                  ...prev,
                                  attachment: null,
                                }));
                                if (fileInputRef.current)
                                  fileInputRef.current.value = "";
                              }}
                              className="text-red-500 hover:text-red-700 ml-1"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-3 bg-(--primary) text-white px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:opacity-90 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            Sending
                            <IconLoader2 size={16} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Request
                            <IconArrowRight
                              size={16}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
