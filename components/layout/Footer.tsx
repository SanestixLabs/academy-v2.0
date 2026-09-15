import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-alt">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-icon.jpg"
              alt="Sanestix"
              width={80}
              height={80}
              className="h-20 w-20 object-contain mix-blend-multiply"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {siteConfig.description}
          </p>
        </div>

        {footerNav.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-surface-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} Sanestix. All rights reserved.</p>
          <p>Built by Sanestix Academy.</p>
        </Container>
      </div>
    </footer>
  );
}
