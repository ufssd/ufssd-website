import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h1 className={styles.about__title}>About</h1>
      <div className={styles.about__description_container}> 
        <p className={styles.about__description}>We are an organization that helps students learn and apply software engineering principles to real-world applications. We host weekly workshops on topics like software design to help bridge the gap between what students need to know for industry and what they're taught in classes. These concepts help with building complex software systems and better prepare members for team projects, internships, and careers in software development.

</p>
</div>
     
      <div className={styles.about__image_container}><Image src="group_photo.jpg" alt="A group of club members sitting in a room looking at the camera and posing" height={600} width={600} />
      </div>
      
    </main>
    

  );
}