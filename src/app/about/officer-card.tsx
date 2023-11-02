import Image from "next/image";
import styles from "./OfficerCard.module.css";

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type OfficerCardProperties = {
  position: string;
  image: string;
  alt: string;
  name: string;
  socialLinksData: SocialLink[];
};

export default function OfficerCard({
  position,
  image,
  alt,
  name,
  socialLinksData,
}: OfficerCardProperties) {
  const socialLinks = socialLinksData.map((link) => (
    <a href={link.url} key={link.name}>
      <Image src={link.icon} alt={link.name} height={30} width={30} />
    </a>
  ));

  return (
    <div className={styles.officerCard}>
      <h3>{position}</h3>
      <Image
        className={styles.portrait}
        src={image}
        alt={alt}
        height={180}
        width={180}
      />
      <h4>{name}</h4>
      <div className={styles.socialLinks}>{socialLinks}</div>
    </div>
  );
}
