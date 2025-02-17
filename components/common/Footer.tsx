'use client'

import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/vision", label: "Vision" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]
};

export default function AppFooter() {
  return (
    <footer className="w-full py-12 bg-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Eco Power Africa</h3>
            <p className="text-white/70 text-sm">
              Pioneering sustainable energy solutions for Africa&apos;s renewable future.
            </p>
            <p className="text-white/70 text-sm mt-4">
              Built with passion by <a href="https://www.moodbod.design" className="text-white hover:text-white/90 transition-colors">moodbod.design</a> and brought to you by <a href="https://www.fessynam.com" className="text-white hover:text-white/90 transition-colors">fessynam.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal */}
          {/* <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Eco Power Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}