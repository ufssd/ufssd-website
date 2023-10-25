"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const pageLinksData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
];

const socialLinksData = [
  {
    name: "Discord",
    url: "https://discord.gg/5SyB3yx",
    icon: "/discord_logo.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/ufssd",
    icon: "/github_logo.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/ssduf",
    icon: "/linkedin_logo.png",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ufssd",
    icon: "/youtube_logo.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/uf.ssd/",
    icon: "/instagram_logo.svg",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const pageLinks = pageLinksData.map((link) => (
    <Link
      key={link.name}
      href={link.url}
      className={pathname === link.url ? styles.pageLinkOpen : ""}
    >
      {link.name}
    </Link>
  ));

  const socialLinks = socialLinksData.map((link) => (
    <a
      key={link.name}
      target="_blank"
      rel="noopener noreferrer"
      href={link.url}
    >
      <Image src={link.icon} alt={`${link.name} Logo`} width="32" height="32" />
    </a>
  ));

  return (
    <header className={styles.navbar}>
      <Link href="/">
        <Image src="/ssd_logo.svg" alt="SSD Logo" width="50" height="50" />
      </Link>
      <nav>{pageLinks}</nav>
      <div className={styles.socialLinks}>{socialLinks}</div>
    </header>
  );
}
