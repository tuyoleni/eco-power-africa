'use client'

import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
  ],
  resources: [
    { href: "/renewable-future", text: "Renewable Future" },
    { href: "/production-cost", text: "Production Costs" },
  ],
  legal: [
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms of Service" },
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
              Pioneering sustainable energy solutions for Africa's renewable future.
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
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
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
          </div>

          {/* Legal */}
          <div>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Eco Power Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}