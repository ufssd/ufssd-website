import Image from "next/image";
import styles from "./About.module.css";

import OfficerCard, { OfficerCardProperties } from "./officer-card";

const officerCardData: OfficerCardProperties[] = [
  {
    position: "President",
    image: "/eric-navar.webp",
    alt: "",
    name: "Yonas Bahre",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Vice President",
    image: "/eric-navar.webp",
    alt: "",
    name: "Michael Hayworth",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Treasurer",
    image: "/eric-navar.webp",
    alt: "",
    name: "Stephen Coomes",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Outreach Officer",
    image: "/eric-navar.webp",
    alt: "",
    name: "Angel Lopez",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Program Officer",
    image: "/eric-navar.webp",
    alt: "",
    name: "Param Gupta",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Involvement Officer",
    image: "/eric-navar.webp",
    alt: "",
    name: "CJ Weir",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/EricNavar",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
];

export default function About() {
  const officerCards = officerCardData.map((cardData) => (
    <OfficerCard
      position={cardData.position}
      image={cardData.image}
      alt={cardData.alt}
      name={cardData.name}
      socialLinksData={cardData.socialLinksData}
      key={cardData.name}
    />
  ));

  return (
    <main className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          We are an organization that helps students learn and apply software
          engineering principles to real-world applications. We host weekly
          workshops on topics like software design to help bridge the gap
          between what students need to know for industry and what they&apos;re
          taught in classes. These concepts help with building complex software
          systems and better prepare members for team projects, internships, and
          careers in software development.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="fall_2022_planning_meeting.jpg"
          alt="SSD members (about 30) at our Fall 2022 planning meeting in CISE."
          height={600}
          width={600}
        />
      </div>

      <section className={styles.officers}>
        <div className={styles.container}>
          <h2>Officers</h2>
          <div className={styles.cardContainer}>{officerCards}</div>
        </div>
      </section>
    </main>
  );
}
