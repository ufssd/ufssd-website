import styles from "./Home.module.css";
import ImageCarousel from "./image-carousel";

export default function Home() {
  return (
    <div className={styles.landingBackground}>
      <main className={styles.content}>
        <h1>Society of Software Developers</h1>
        <h2>Software Development & Design</h2>
        <p>
          We are an organization that helps students learn and apply software
          engineering principles to real-world applications. We host weekly
          workshops on topics like software design to help bridge the gap
          between what students need to know for industry and what they&apos;re
          taught in classes. These concepts help with building complex software
          systems and better prepare members for team projects, internships, and
          careers in software development.
        </p>
        <h2>Spring 2024 Meetings</h2>
        <p>Tuesday, 6:15pm in CISE A101 and over Zoom</p>
        <ImageCarousel />
      </main>
    </div>
  );
}
