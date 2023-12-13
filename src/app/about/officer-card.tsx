import Image from "next/image";
import { OfficerData, SocialSite } from "./officer-data";
import styles from "./OfficerCard.module.css";

const socialIcons: Record<SocialSite, string> = {
  GitHub: "/github_logo.svg",
  LinkedIn: "/linkedin_logo.png",
  Website: "/web_logo.svg",
};

export type OfficerCardProps = {
  position: string;
  officer: OfficerData;
};

export default function OfficerCard({ position, officer }: OfficerCardProps) {
  const socialLinks = Object.entries(officer.socials).map(([site, url]) => (
    <a key={site} href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={socialIcons[site as SocialSite]} // cast key from Object.entries
        alt={site}
        height={30}
        width={30}
        data-name={site}
      />
    </a>
  ));

  return (
    <div className={styles.officerCard}>
      <h3>{position}</h3>
      <Image
        className={styles.portrait}
        src={officer.image}
        alt={`Profile picture of ${officer.name}`}
        height={180}
        width={180}
      />
      <h4>{officer.name}</h4>
      <div className={styles.socialLinks}>{socialLinks}</div>
    </div>
  );
}
