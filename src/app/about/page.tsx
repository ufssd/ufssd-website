import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

import OfficerCard from "./officer-card";
import officerCardData, { officerData, positionData } from "./officer-data";

export default function About() {
  // const officerCards = officerCardData.map((cardData) => (
  //   <OfficerCard
  //     key={cardData.position}
  //     position={cardData.position}
  //     image={cardData.image}
  //     name={cardData.name}
  //     socialLinksData={cardData.socialLinksData}
  //   />
  // ));

  const officerCardSection = Object.entries(positionData).map(
    ([semester, officers]) => {
      const officerCards = Object.entries(officers).map(
        ([position, officer]) => {
          if (officer === undefined) {
            return <div key={`${semester} ${position}`} />;
          }

          return (
            <OfficerCard
              key={`${semester} ${position}`}
              position={position}
              image={officer.image}
              name={officer.name}
              socialLinksData={officer.socialLinksData}
            />
          );
        },
      );

      return (
        <React.Fragment key={semester}>
          <h2>{semester}</h2>
          <div className={styles.cardContainer}>{officerCards}</div>
        </React.Fragment>
      );
    },
  );

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
          {/* <div className={styles.cardContainer}>{officerCards}</div> */}
          {officerCardSection}
        </div>
      </section>
    </main>
  );
}
