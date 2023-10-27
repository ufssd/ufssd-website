import Image from "next/image";
import styles from "./About.module.css";

import OfficerCard from "./officer-card";

export default function About() {
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
          <OfficerCard
            position="GOAT SSD Member"
            image="/eric-navar.webp"
            alt=""
            name="Eric Navar"
            socialLinksData={[
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
            ]}
          />
        </div>
      </section>
    </main>
  );
}
