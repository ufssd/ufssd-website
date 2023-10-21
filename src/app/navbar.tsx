import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <Image src="/ssd_logo.svg" alt="SSD Logo" width="50" height="50" />
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className={styles.socialLinks}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/5SyB3yx"
        >
          <Image
            src="/discord_mark.svg"
            alt="Discord Logo"
            width="40"
            height="40"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ufssd"
        >
          <Image
            src="/github_mark.svg"
            alt="GitHub Logo"
            width="40"
            height="40"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/ssduf"
        >
          <Image
            src="/linkedin_logo.png"
            alt="LinkedIn Logo"
            width="40"
            height="40"
          />
        </a>
      </div>
    </header>
  );
}
