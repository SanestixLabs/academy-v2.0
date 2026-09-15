"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-white">
      <Container className="relative flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="relative z-10 flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/sanestix-logo-green.png"
            alt="Sanestix"
            width={240}
            height={70}
            priority
            className="w-40 h-auto md:w-48 lg:w-56 object-contain mix-blend-darken"
          />
        </Link>

        <nav className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center md:gap-8">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 hidden md:block">
          <ButtonLink href="/enroll" className="px-5 py-2.5 text-sm">
            Reserve a Seat →
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-surface-border bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-alt hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/enroll" className="mt-2 w-full">
              Join Cohort →
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
