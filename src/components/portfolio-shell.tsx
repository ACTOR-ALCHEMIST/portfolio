"use client";

import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { profile } = portfolio;

  return (
    <div className="portfolio-shell">
      <aside className="portfolio-sidebar" aria-label="Profile navigation">
        <div className="sidebar-profile">
          <div className="avatar-frame">
            <Image
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              width={148}
              height={148}
              priority
            />
          </div>
          <div>
            <h1>{profile.name}</h1>
            <p className="profile-cn">{profile.chineseName}</p>
            <p className="profile-title">{profile.title}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {portfolio.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-links">
          <Link href={profile.github} target="_blank" rel="noreferrer">
            <span aria-hidden="true">💻</span>
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">
            <span aria-hidden="true">🔗</span>
            LinkedIn
          </Link>
          <Link href={`mailto:${profile.email}`}>
            <span aria-hidden="true">✉️</span>
            Email
          </Link>
          <p>
            <span aria-hidden="true">📍</span>
            {profile.location}
          </p>
        </div>
      </aside>

      <main className="portfolio-main">{children}</main>
    </div>
  );
}
