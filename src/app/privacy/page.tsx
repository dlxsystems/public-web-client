"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent pt-40 pb-20">
      <div className="mx-auto px-6 md:px-32 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-20"
        >
          <IconArrowLeft size={16} />
          Back Home
        </Link>

        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-zinc-900">
            Privacy Policy
          </h1>
          <p className="text-black/60 font-mono text-sm uppercase tracking-widest">
            Last Updated: January 24, 2026
          </p>
        </header>

        <article
          className="prose prose-lg prose-zinc max-w-none
            prose-headings:font-medium prose-headings:text-zinc-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-black/70 prose-p:leading-relaxed
            prose-li:text-black/70
            prose-strong:font-medium prose-strong:text-black
        "
        >
          <p>
            DLX Systems ("we", "our", or "us") is committed to protecting the
            privacy and personal data of individuals who interact with our
            website, services, and recruitment processes. This Privacy Policy
            explains how we collect, use, store, and protect personal
            information, and the rights available to you under applicable data
            protection laws.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect only the information necessary to operate our business,
            communicate with users, and evaluate candidates. The types of data
            we may collect include:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, company name, and similar contact details voluntarily
              provided through contact forms, inquiry submissions, or career
              applications.
            </li>
            <li>
              <strong>Recruitment Information:</strong> Resumes, portfolios,
              GitHub or LinkedIn profiles, and any additional information
              submitted as part of an application or interview process.
            </li>
            <li>
              <strong>Technical and Usage Data:</strong> IP address, browser
              type, device information, pages visited, and interaction data
              collected via cookies or analytics tools for security and
              performance monitoring.
            </li>
          </ul>

          <h2>2. Legal Basis and How We Use Your Information</h2>
          <p>
            We process personal data only when there is a lawful basis to do so.
            Depending on the context, this may include your consent, contractual
            necessity, legitimate business interests, or compliance with legal
            obligations.
          </p>
          <ul>
            <li>To respond to inquiries, messages, or service requests.</li>
            <li>
              To assess and manage recruitment and internship applications.
            </li>
            <li>
              To operate, secure, and improve our website and internal systems.
            </li>
            <li>
              To comply with applicable laws, regulations, or lawful requests
              from authorities.
            </li>
            <li>To protect against fraud, abuse, or unauthorized access.</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect
            personal data against unauthorized access, loss, misuse, or
            alteration. These measures include access controls, encrypted
            communications where appropriate, and limited internal access to
            personal data.
          </p>
          <p>
            While we strive to protect your information, no system is completely
            secure. Transmission of data over the internet is done at your own
            risk, and we cannot guarantee absolute security.
          </p>

          <h2>4. Data Sharing and Third Parties</h2>
          <p>
            We do not sell or rent personal data. Personal information may be
            shared only in limited circumstances, including:
          </p>
          <ul>
            <li>
              With trusted service providers who assist in website hosting,
              analytics, or recruitment systems, under confidentiality and data
              protection obligations.
            </li>
            <li>
              When required by law, regulation, court order, or lawful
              government request.
            </li>
            <li>
              To protect our rights, safety, or property, or that of others.
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected, unless a longer retention
            period is required or permitted by law. Recruitment-related data may
            be retained for a reasonable period to support future opportunities,
            unless you request its deletion.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Subject to applicable law, you may have the following rights with
            respect to your personal data:
          </p>
          <ul>
            <li>The right to access the personal data we hold about you.</li>
            <li>
              The right to request correction of inaccurate or incomplete data.
            </li>
            <li>The right to request deletion of your personal data.</li>
            <li>
              The right to object to or restrict certain types of processing.
            </li>
            <li>
              The right to withdraw consent where processing is based on
              consent.
            </li>
          </ul>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on this page with a revised "Last Updated" date.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have questions, requests, or concerns regarding this Privacy
            Policy or how your data is handled, you may contact us at:
            <br />
            <strong>Email:</strong> legal@dlxsystems.com
            <br />
            <strong>Address:</strong> Ratnapura, Sri Lanka
          </p>
        </article>
      </div>
    </main>
  );
}
