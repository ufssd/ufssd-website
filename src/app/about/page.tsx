import Image from "next/image";
import styles from "./About.module.css";

import OfficerCard, { OfficerCardProps } from "./officer-card";

const officerCardData: OfficerCardProps[] = [
  {
    position: "President",
    image: "public/officers/Yonas_Bahre.jpg",
    name: "Yonas Bahre",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yonasbahre/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Vice President",
    image: "public/officers/Michael_Hayworth.jpg",
    name: "Michael Hayworth",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaeldhayworth/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Treasurer",
    image: "public/officers/Stephen_Coomes.jpg",
    name: "Stephen Coomes",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stephen-coomes-8a4885221/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Outreach Officer",
    image: "public/officers/Angel_Lopez.png",
    name: "Angel Lopez",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/angel1254mc",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angel1254/",
        icon: "/linkedin_logo.png",
      },
      {
        name: "Website",
        url: "https://www.angel1254.com/",
        icon: "/web_logo.svg",
      },
    ],
  },
  {
    position: "Program Officer",
    image: "public/officers/Param_Gupta.jpg",
    name: "Param Gupta",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paramg/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Involvement Officer",
    image: "public/officers/CJ_Weir.jpg",
    name: "CJ Weir",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cj-weir/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
];

export default function About() {
  const officerCards = officerCardData.map((cardData) => (
    <OfficerCard
      key={cardData.position}
      position={cardData.position}
      image={cardData.image}
      name={cardData.name}
      socialLinksData={cardData.socialLinksData}
    />
  ));

  return (
    <main className={styles.content}>
      <h1>About</h1>
      <div>
        <p>
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
          className={styles.image}
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
