"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function RecruitmentPrivacyNotice() {
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
            Recruitment Privacy Notice
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
            This Recruitment Privacy Notice explains how DLX Systems ("we",
            "our", or "us") collects, uses, and protects personal data submitted
            as part of our recruitment, internship, or hiring processes. This
            notice applies to all candidates, including interns, contractors,
            and full-time applicants.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            During the recruitment process, we may collect and process the
            following categories of personal data:
          </p>
          <ul>
            <li>
              <strong>Identification and Contact Information:</strong> Name,
              email address, phone number, and location.
            </li>
            <li>
              <strong>Application Materials:</strong> Resumes, CVs, cover
              letters, portfolios, code samples, GitHub or LinkedIn profiles,
              and other information you voluntarily provide.
            </li>
            <li>
              <strong>Assessment Information:</strong> Interview notes,
              technical evaluations, task submissions, and feedback generated
              during the selection process.
            </li>
            <li>
              <strong>Communication Records:</strong> Emails and messages
              exchanged as part of recruitment coordination.
            </li>
          </ul>

          <h2>2. Legal Basis for Processing</h2>
          <p>
            We process recruitment-related personal data based on one or more of
            the following lawful bases, depending on the context:
          </p>
          <ul>
            <li>Your consent, where required.</li>
            <li>
              Legitimate interests in assessing and managing candidates for
              current or future roles.
            </li>
            <li>
              Taking steps at your request prior to entering into an employment
              or internship contract.
            </li>
            <li>Compliance with applicable legal obligations.</li>
          </ul>

          <h2>3. How We Use Recruitment Data</h2>
          <p>
            Personal data collected during recruitment is used solely for
            legitimate hiring-related purposes, including:
          </p>
          <ul>
            <li>Evaluating your qualifications and suitability for a role.</li>
            <li>Communicating with you about your application.</li>
            <li>Conducting interviews and technical assessments.</li>
            <li>
              Improving our recruitment processes and decision-making quality.
            </li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            Access to recruitment data is limited to individuals involved in
            hiring decisions. We do not sell recruitment data. Personal data may
            be shared only:
          </p>
          <ul>
            <li>
              Internally with team members directly involved in recruitment.
            </li>
            <li>
              With trusted service providers used for recruitment tooling,
              subject to confidentiality obligations.
            </li>
            <li>When required by law or lawful authority.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            If your application is unsuccessful, we retain recruitment data only
            for a reasonable period, typically to consider you for future
            opportunities or to meet legal requirements. You may request
            deletion of your application data at any time.
          </p>
          <p>
            If you are hired, relevant recruitment data may become part of your
            personnel or internship records, subject to applicable employment
            policies.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to
            protect recruitment data against unauthorized access, loss, or
            misuse. Access is restricted on a need-to-know basis.
          </p>

          <h2>7. Your Rights</h2>
          <p>Subject to applicable law, you may have the right to:</p>
          <ul>
            <li>Request access to your recruitment-related personal data.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal data.</li>
            <li>
              Object to or request restriction of certain processing activities.
            </li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>

          <h2>8. Contact Information</h2>
          <p>
            If you have questions or requests regarding this Recruitment Privacy
            Notice or your personal data, you may contact us at:
            <br />
            <strong>Email:</strong> legal@dlxsystems.com
            <br />
            <strong>Address:</strong> Colombo, Sri Lanka
          </p>
        </article>
      </div>
    </main>
  );
}
