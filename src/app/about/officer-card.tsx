import Image from "next/image";
import { OfficerData } from "./officer-data";
import styles from "./OfficerCard.module.css";

export type OfficerCardProps = {
  position: string;
  officer: OfficerData;
};

export default function OfficerCard({ position, officer }: OfficerCardProps) {
  const socialLinks = officer.socialLinksData.map((link) => (
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
