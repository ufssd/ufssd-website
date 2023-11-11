import Image from "next/image";
import styles from "./OfficerCard.module.css";

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type OfficerCardProps = {
  position: string;
  image: string;
  name: string;
  socialLinksData: SocialLink[];
};

export default function OfficerCard({
  position,
  image,
  name,
  socialLinksData,
}: OfficerCardProps) {
  const socialLinks = socialLinksData.map((link) => (
    <a
      href={link.url}
      key={link.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={link.icon}
        alt={link.name}
        height={30}
        width={30}
        data-name={link.name}
      />
    </a>
  ));

  return (
    <div className={styles.officerCard}>
      <h3>{position}</h3>
      <Image
        className={styles.portrait}
        src={image}
        alt={`Profile picture of ${name}`}
        height={180}
        width={180}
      />
      <h4>{name}</h4>
      <div className={styles.socialLinks}>{socialLinks}</div>
    </div>
  );
}
