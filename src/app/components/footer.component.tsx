import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/assets/images/logo-full.png";

export function Footer() {
  return (
    <footer className="relative z-30 bg-white pt-24 pb-10 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 md:px-32">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-20">
          {/* Left Column: Brand */}
          <div className="max-w-xs">
            <Link href="/" className="block relative w-24 h-8 mb-6">
              <Image
                src={Logo}
                alt="dlx systems"
                fill
                className="object-contain"
                sizes="100px"
                unoptimized
              />
            </Link>
            <p className="text-black/60 text-sm leading-relaxed">
              Building engineering foundations for companies that care about
              craft, clarity, and scale.
            </p>
          </div>

          {/* Right Column: Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:flex md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black/40">
                Company
              </h4>
              <Link
                href="/#expertise"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="/#work"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Work
              </Link>
              <Link
                href="/#team"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Team
              </Link>
              <Link
                href="/#insights"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/careers"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black/40">
                Connect
              </h4>
              <a
                href="#"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black/40">
                Office
              </h4>
              <p className="text-sm text-black/80">
                Ratnapura,
                <br />
                Sri Lanka
              </p>
              <a
                href="mailto:ceo@dlxsystems.com"
                className="text-sm text-black/80 hover:text-black transition-colors mt-2"
              >
                ceo@dlxsystems.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black/40 font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} DLX Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/recruitment"
              className="hover:text-black transition-colors"
            >
              Recruitment Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
