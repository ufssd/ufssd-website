'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ================= GSAP REGISTRATION ================= */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ================= TYPES & DATA ================= */
interface Officer {
  name: string;
  role?: string; // Optional for Legacy sections
  image?: string; 
}

interface BoardSection {
  term: string;
  title: string;
  officers: Officer[];
  subGroups?: { label: string; officers: Officer[] }[]; // For Legacy subgroups
  isLegacy?: boolean;
}
const BOARD_DATA: BoardSection[] = [
  {
    term: "Fall 2026",
    title: "FALL '26 EXECUTIVE BOARD",
    officers: [
      { name: "Danny Perojevic", role: "PRESIDENT", image: "/Photos/Officerheadshot/Danny_Perojevic.jpg" },
      { name: "Nate Bryan", role: "VICE PRESIDENT" },
      { name: "Josiah", role: "INTERIM TREASURER" },
    ]
  },
  {
    term: "Spring 2026",
    title: "SPRING '26 BOARD",
    officers: [
      { name: "Derek Smith Nautel", role: "PRESIDENT", image: "/Photos/Officerheadshot/Derek_Smith_Nautel.jpg" },
      { name: "Danny Perojevic", role: "VICE PRESIDENT", image: "/Photos/Officerheadshot/Danny_Perojevic.jpg" },
      { name: "Carter Swarm", role: "TREASURER", image: "/Photos/Officerheadshot/Carter_Swarm.jpg" },
    ]
  },
  {
    term: "Fall 2023",
    title: "FALL '23 BOARD",
    officers: [
      { name: "Yonas Bahre", role: "PRESIDENT", image: "/Photos/Officerheadshot/Yonas_Bahre.jpg" },
      { name: "Michael Hayworth", role: "VICE PRESIDENT", image: "/Photos/Officerheadshot/Michael_Hayworth.jpg" },
      { name: "Stephen Coomes", role: "TREASURER", image: "/Photos/Officerheadshot/Stephen_Coomes.jpg" },
      { name: "Angel Lopez", role: "OUTREACH", image: "/Photos/Officerheadshot/Angel_Lopez.png" },
      { name: "Param Gupta", role: "PROGRAM", image: "/Photos/Officerheadshot/Param_Gupta.jpg" },
      { name: "CJ Weir", role: "INVOLVEMENT", image: "/Photos/Officerheadshot/CJ_Weir.jpg" },
    ]
  },
  {
    term: "Spring 2023",
    title: "SPRING '23 BOARD",
    officers: [
      { name: "Trevor Richardson", role: "PRESIDENT", image: "/Photos/Officerheadshot/Trevor_Richardson.jpg" },
      { name: "Michael Hayworth", role: "VICE PRESIDENT", image: "/Photos/Officerheadshot/Michael_Hayworth.jpg" },
      { name: "Yonas Bahre", role: "TREASURER", image: "/Photos/Officerheadshot/Yonas_Bahre.jpg" },
      { name: "Stephen Coomes", role: "OUTREACH", image: "/Photos/Officerheadshot/Stephen_Coomes.jpg" },
      { name: "Param Gupta", role: "PROGRAM", image: "/Photos/Officerheadshot/Param_Gupta.jpg" },
      { name: "CJ Weir", role: "INVOLVEMENT", image: "/Photos/Officerheadshot/CJ_Weir.jpg" },
    ]
  },
  {
    term: "Fall 2022",
    title: "FALL '22 BOARD",
    officers: [
      { name: "Ranger Chenore", role: "PRESIDENT", image: "/Photos/Officerheadshot/Ranger_Chenore.jpg" },
      { name: "Trevor Richardson", role: "VICE PRESIDENT", image: "/Photos/Officerheadshot/Trevor_Richardson.jpg" },
      { name: "Yonas Bahre", role: "TREASURER", image: "/Photos/Officerheadshot/Yonas_Bahre.jpg" },
      { name: "Michael Hayworth", role: "OUTREACH", image: "/Photos/Officerheadshot/Michael_Hayworth.jpg" },
      { name: "Alex Good", role: "PROGRAM", image: "/Photos/Officerheadshot/Alex_Good.jpg" },
      { name: "Eric Navar", role: "INVOLVEMENT", image: "/Photos/Officerheadshot/Eric_Navar.jpg" },
    ]
  },
  {
    term: "Archive",
    title: "LEGACY LEADERS",
    isLegacy: true,
    officers: [], // Use subGroups for Legacy
    subGroups: [
      {
        label: "Spring 2022",
        officers: [
          { name: "Eric Navar", image: "/Photos/Officerheadshot/Eric_Navar.jpg" },
          { name: "Ranger Chenore", image: "/Photos/Officerheadshot/Ranger_Chenore.jpg" },
          { name: "Caijun Qin", image: "/Photos/Officerheadshot/Caijun_Qin.jpg" },
          { name: "Michael Hayworth", image: "/Photos/Officerheadshot/Michael_Hayworth.jpg" },
          { name: "Trevor Richardson", image: "/Photos/Officerheadshot/Trevor_Richardson.jpg" },
          { name: "Isaac Fuenmayor" }, // Placeholder case
        ]
      },
      {
        label: "Fall 2020 - Spring 2021",
        officers: [
          { name: "Varun Puri", image: "/Photos/Officerheadshot/Varun_Puri.jpg" },
          { name: "Eric Navar", image: "/Photos/Officerheadshot/Eric_Navar.jpg" },
          { name: "Andrew Kennedy" }, // Placeholder case
          { name: "Tianrui Li", image: "/Photos/Officerheadshot/Tianrui_Li.jpg" },
          { name: "Katherine Chan" }, // Placeholder case
          { name: "Ranger Chenore", image: "/Photos/Officerheadshot/Ranger_Chenore.jpg" },
        ]
      }
    ]
  }
];

/* ================= OFFICER CARD COMPONENT ================= */
const OfficerCard = ({ officer, isLegacy }: { officer: Officer, isLegacy?: boolean }) => {
  // Helper to get initials for placeholder
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white border-[4px] border-ink p-3 flex flex-col text-center shadow-[6px_6px_0_#000000] hover:shadow-[12px_12px_0_#B3E5FC] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 interactive-element group rounded-sm h-full">
      <div className="aspect-square w-full border-[3px] border-ink mb-3 md:mb-4 overflow-hidden bg-ink relative">
        {officer.image ? (
          <Image 
            src={officer.image} 
            alt={officer.name} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-ink text-sblue font-serif text-3xl md:text-5xl uppercase tracking-widest">
            {getInitials(officer.name)}
          </div>
        )}
      </div>
      
      {!isLegacy && officer.role && (
        <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase mb-1 tracking-wider block">
          {officer.role}
        </span>
      )}
      
      <h3 className="text-base md:text-lg font-serif font-bold leading-tight text-ink mt-auto pb-1">
        {officer.name}
      </h3>
    </div>
  );
};

/* ================= OFFICERS PAGE ================= */
export default function OfficersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Reveal Animation
      gsap.to('.reveal-text', {
        y: '0%',
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.1
      });

      // 2. Sections Fade-in Animation
      gsap.utils.toArray('.reveal-item').forEach((item: any) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-[1500px] mx-auto px-6 pt-48 pb-24 relative overflow-visible">
      
      {/* Header Title */}
      <h1 className="text-6xl md:text-[110px] font-serif font-black uppercase tracking-tighter mb-24 leading-none overflow-hidden">
        <span className="reveal-text block translate-y-[110%] text-ink">Leadership Board</span>
      </h1>

      {/* Rendering Board Sections */}
      {BOARD_DATA.map((section, sIdx) => (
        <div key={sIdx} className="mb-32 md:mb-40 relative reveal-item">
          
          {/* Background Term Label */}
          <div className="absolute -left-5 -top-5 text-[5rem] md:text-[8rem] font-serif italic font-black text-ink opacity-[0.05] leading-none pointer-events-none select-none z-0 whitespace-nowrap">
            {section.term}
          </div>
          
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 md:mb-12 border-l-8 border-sblue pl-6 relative z-10 text-ink uppercase">
            {section.title}
          </h2>

          {/* Standard Board Layout */}
          {!section.isLegacy && (
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 relative z-10`}>
              {section.officers.map((officer, oIdx) => (
                <OfficerCard key={oIdx} officer={officer} />
              ))}
            </div>
          )}

          {/* Legacy Leaders Layout (Subgroups) */}
          {section.isLegacy && section.subGroups && (
            <div className="relative z-10">
              {section.subGroups.map((subGroup, subIdx) => (
                <div key={subIdx} className="mb-16 last:mb-0">
                  <div className="mb-6 md:mb-8 text-[10px] md:text-xs font-bold tracking-widest uppercase text-ink/50 border-b border-ink/10 pb-2">
                    {subGroup.label}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {subGroup.officers.map((officer, oIdx) => (
                      <OfficerCard key={oIdx} officer={officer} isLegacy={true} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
