"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function TermsOfService() {
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
            Terms of Service
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
            These Terms of Service ("Terms") govern your access to and use of
            the DLX Systems website and any publicly available content or
            materials provided through it. By accessing or using this website,
            you agree to be bound by these Terms. If you do not agree, you must
            not use the website.
          </p>

          <h2>1. Scope of These Terms</h2>
          <p>
            These Terms apply solely to the use of the DLX Systems website and
            related public content. Any software development, consulting,
            engineering, or architectural services provided by DLX Systems are
            governed exclusively by separate written agreements, such as a
            Master Services Agreement (MSA), Statement of Work (SOW), or similar
            contract executed between DLX Systems and the client.
          </p>

          <h2>2. Use of the Website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to
            use the website in any manner that could damage, disable, interfere
            with, or impair its operation or security, or interfere with other
            users’ access to the site.
          </p>
          <p>
            Unauthorized access to any portion of the website, backend systems,
            or related infrastructure is strictly prohibited.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            graphics, logos, images, code snippets, design elements, and written
            materials, is the intellectual property of DLX Systems or its
            licensors and is protected under applicable intellectual property
            laws.
          </p>
          <p>
            You may not copy, reproduce, distribute, modify, or create
            derivative works from any content on this website without prior
            written permission from DLX Systems, except where permitted by law.
          </p>

          <h2>4. No Professional Advice</h2>
          <p>
            Information provided on this website is for general informational
            purposes only. Nothing on the site constitutes legal, financial,
            architectural, or professional advice, nor should it be relied upon
            as such. Any reliance on information obtained through this website
            is at your own risk.
          </p>

          <h2>5. Third-Party Services and Links</h2>
          <p>
            This website may include links to third-party websites or services,
            including analytics or hosting providers. DLX Systems does not
            control and is not responsible for the content, policies, or
            practices of any third-party websites or services.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The website is provided on an "as is" and "as available" basis,
            without warranties of any kind, whether express or implied. DLX
            Systems makes no representations or warranties regarding the
            accuracy, completeness, reliability, or availability of the website
            or its content.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, DLX Systems shall not be
            liable for any indirect, incidental, consequential, special, or
            punitive damages arising out of or related to your use of, or
            inability to use, this website, even if DLX Systems has been advised
            of the possibility of such damages.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless DLX Systems, its founders,
            employees, and affiliates from any claims, liabilities, damages, or
            expenses arising out of your misuse of the website or violation of
            these Terms.
          </p>

          <h2>9. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Sri Lanka, without regard to conflict of law principles. Any
            disputes arising from or relating to these Terms shall be subject to
            the exclusive jurisdiction of the courts of Ratnapura, Sri Lanka.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            DLX Systems reserves the right to modify these Terms at any time.
            Updates will be posted on this page with a revised "Last Updated"
            date. Continued use of the website after changes take effect
            constitutes acceptance of the updated Terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms, you may contact us
            at:
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
