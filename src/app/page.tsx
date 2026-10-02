'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ================= GSAP REGISTRATION ================= */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ================= DIVIDER COMPONENT ================= */
const PhotoDivider = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => (
  <section className="w-full bg-[#FAF9F6] py-12 md:py-24 border-y-[4px] border-ink relative z-10 flex flex-col items-center overflow-hidden">
    <div className={`flex gap-4 md:gap-10 px-4 md:px-6 w-full max-w-[1500px] overflow-x-auto no-scrollbar snap-x ${reverse ? 'flex-row-reverse' : ''}`}>
      {images.map((src, i) => (
        <div key={i} className="relative w-[200px] h-[140px] sm:w-[260px] sm:h-[180px] md:w-[400px] md:h-[260px] shrink-0 border-[3px] md:border-[4px] border-ink shadow-[6px_6px_0_#B3E5FC] md:shadow-[8px_8px_0_#B3E5FC] snap-center hover:-translate-y-2 hover:shadow-[12px_12px_0_#000000] transition-all duration-300">
          <Image src={src} alt={`Divider Photo ${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  </section>
);

/* ================= HOME PAGE COMPONENT ================= */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRefs = useRef<HTMLSpanElement[]>([]);
  const philRef = useRef<HTMLDivElement>(null);
  
  const wallContainerRef = useRef<HTMLDivElement>(null);
  const wallTrackRef = useRef<HTMLDivElement>(null);
  const wallSpeed = useRef(-1);
  const currentXPos = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.hero-bg-img', { scale: 1.15 }, { scale: 1.05, duration: 3.5, ease: 'power3.out' })
        .to(heroTextRefs.current, { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.15 }, "-=3");

      gsap.to('.hero-content-wrap', { 
        yPercent: -30, 
        ease: 'none', 
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } 
      });

      gsap.timeline({ scrollTrigger: { trigger: philRef.current, start: 'top 75%' } })
        .to('.overline-text', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 })
        .to('.reveal-text', { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.1 }, "-=0.6")
        .to('.body-text', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.8");

      gsap.utils.toArray('.section-bg-wrap').forEach((wrap: any) => {
        const img = wrap.querySelector('.section-bg-img');
        gsap.fromTo(img, 
          { yPercent: -15 }, 
          { 
            yPercent: 15, 
            ease: "none", 
            scrollTrigger: { trigger: wrap.parentElement, start: "top bottom", end: "bottom top", scrub: true } 
          }
        );
      });

      gsap.utils.toArray('.floating-card-layer').forEach((layer: any) => {
        gsap.fromTo(layer, 
          { y: 50 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: { trigger: layer.parentElement, start: "top bottom", end: "bottom top", scrub: true }
          }
        );
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!wallContainerRef.current) return;
      const rect = wallContainerRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const percentage = relX / rect.width;
      
      if (percentage < 0.4) { 
        wallSpeed.current = 8 * (0.4 - percentage) * 2.5; 
      } else if (percentage > 0.6) { 
        wallSpeed.current = -8 * (percentage - 0.6) * 2.5; 
      } else { 
        wallSpeed.current = 0; 
      }
    };

    const handleMouseLeave = () => {
      wallSpeed.current = -1;
    };

    const animatePhotoWall = () => {
      if (!wallTrackRef.current) return;
      currentXPos.current += wallSpeed.current;
      
      const trackWidth = wallTrackRef.current.scrollWidth / 2; 
      if (currentXPos.current <= -trackWidth) { 
        currentXPos.current += trackWidth; 
      } else if (currentXPos.current > 0) { 
        currentXPos.current -= trackWidth; 
      }
      
      gsap.set(wallTrackRef.current, { x: currentXPos.current });
      rafRef.current = requestAnimationFrame(animatePhotoWall);
    };

    const container = wallContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      rafRef.current = requestAnimationFrame(animatePhotoWall);
    }

    return () => {
      ctx.revert();
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const addToHeroTextRefs = (el: HTMLSpanElement | null) => {
    if (el && !heroTextRefs.current.includes(el)) {
      heroTextRefs.current.push(el);
    }
  };

  const photoImages = [
    "/Photos/2026FallGBM/gbm1-crowd-02.webp",
    "/Photos/2026FallGBM/gbm1-moment-03.webp",
    "/Photos/2026FallGBM/gbm1-moment-04.webp",
    "/Photos/2026FallGBM/gbm1-checkin.webp",
    "/Photos/2026FallGBM/gbm1-camera-03.webp",
    "/Photos/2026FallGBM/gbm1-moment-01.webp",
    "/Photos/2026FallGBM/gbm1-catering.webp"
  ];

  return (
    <>
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-ink pt-16 md:pt-20">
        <div className="absolute inset-0 w-full h-full opacity-40 hero-bg-img">
          <Image src="/Photos/2026SpringGBM/2ndGBM1.jpg" alt="Hero Background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-ink/90 to-transparent z-0" />
        
        <div className="hero-content-wrap relative z-10 flex flex-col items-center text-center mt-12 px-4 w-full">
          <h2 className="text-sblue text-[11px] sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 font-sans overflow-hidden">
            <span ref={addToHeroTextRefs} className="block translate-y-[110%]">@University of Florida</span>
          </h2>
          <h1 className="text-white text-5xl sm:text-7xl md:text-7xl lg:text-[100px] font-serif font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9]">
            <span className="overflow-hidden block"><span ref={addToHeroTextRefs} className="block translate-y-[110%]">SOCIETY OF</span></span>
            <span className="overflow-hidden block"><span ref={addToHeroTextRefs} className="block text-sblue italic translate-y-[110%]">SOFTWARE</span></span>
            <span className="overflow-hidden block"><span ref={addToHeroTextRefs} className="block translate-y-[110%]">DEVELOPERS</span></span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-sm sm:text-base md:text-xl font-medium font-sans overflow-hidden">
            <span ref={addToHeroTextRefs} className="block translate-y-[110%]">
              We ditch the boring lectures for hands-on keyboards. From packing classrooms in the CISE building to surviving late-night SwampHacks coding sprints, we're a community of Gators passionate about building real things.
            </span>
          </p>
        </div>
      </section>

      <section ref={philRef} className="relative w-full pt-20 pb-12 md:pt-32 md:pb-16 px-6 md:px-20 flex flex-col items-center justify-start bg-transparent">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <h2 className="text-ink font-bold tracking-[0.15em] text-sm md:text-lg uppercase overline-text opacity-0 translate-y-6 font-sans">
            IT STARTS WITH A PHILOSOPHY
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-sblue my-4 md:my-6 overline-text opacity-0" />
          
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-ink uppercase mb-6 md:mb-8 leading-[1.1] tracking-tight italic">
            <span className="overflow-hidden block"><span className="reveal-text block translate-y-[110%]">WHERE CODE</span></span>
            <span className="overflow-hidden block"><span className="reveal-text block translate-y-[110%]">MATTERS</span></span>
          </h3>

          <p className="body-text text-base md:text-xl text-gray-800 font-sans max-w-3xl leading-relaxed opacity-0 translate-y-6">
            Whether you're a freshman writing your first "Hello World" or a senior battling segmentation faults prepping for technical interviews, SSD is your home at the University of Florida. We believe in learning by doing, offering the hardcore, caffeine-fueled engineering experience you can't get from a textbook alone.
          </p>
        </div>
      </section>

      <section ref={wallContainerRef} className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] overflow-hidden bg-ink py-6 md:py-8 border-y-[3px] md:border-y-[4px] border-sblue shadow-2xl">
        <div ref={wallTrackRef} className="flex h-full items-center gap-4 md:gap-6 px-4 md:px-6 w-max">
          {[...photoImages, ...photoImages].map((src, index) => (
            <div key={index} className="relative h-[90%] w-[220px] sm:w-[300px] md:w-[450px] shrink-0 rounded shadow-lg border border-gray-800 hover:border-sblue transition-colors duration-300">
              <Image src={src} alt={`SSD Moment ${index}`} fill className="object-cover rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARALLAX FEATURE 1: GBMs ================= */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-ink border-b-[3px] md:border-b-[4px] border-ink">
        <div className="section-bg-wrap absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image src="/Photos/2026FallGBM/gbm1-crowd-02.webp" alt="Fall 2026 GBM audience" fill className="section-bg-img object-cover opacity-60" />
        </div>
            <div className="max-w-[1400px] w-full flex justify-start floating-card-layer relative z-10 px-6 md:px-12">
            <div className="bg-white border-[4px] border-ink p-8 md:p-14 shadow-[20px_20px_0px_#B3E5FC] w-full md:w-[45%]">
            <span className="text-ink font-bold tracking-[0.1em] md:tracking-[0.15em] text-[10px] md:text-sm mb-3 md:mb-4 font-sans block">MOMENTS TO REMEMBER</span>
            <div className="w-8 md:w-12 h-[2px] bg-sblue mb-3 md:mb-6" />
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold uppercase mb-3 md:mb-8 leading-none tracking-tight">GBMs &<br />SOCIALS</h3>
            <p className="text-gray-800 text-[13px] sm:text-base lg:text-xl font-sans leading-relaxed">
              Pizza, code, and pure chaos. Our General Body Meetings are the heartbeat of the UF tech scene. We bring Gator developers together to network, swap debugging horror stories, and level up their engineering skills in a completely collaborative environment.
            </p>
          </div>
        </div>
      </section>

      <PhotoDivider images={["/Photos/2026FallGBM/gbm1-moment-01.webp", "/Photos/2026FallGBM/gbm1-crowd-01.webp", "/Photos/2026FallGBM/gbm1-moment-03.webp", "/Photos/2026FallGBM/gbm1-camera-03.webp"]} />

      {/* ================= PARALLAX FEATURE 2: POSTERS ================= */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-ink border-y-[3px] md:border-y-[4px] border-ink">
        <div className="section-bg-wrap absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image src="/Photos/Event/Fall2026-Pickleball-Social.webp" alt="Fall 2026 Pickleball Social poster" fill className="section-bg-img object-cover opacity-60" />
        </div>
            <div className="max-w-[1400px] w-full flex justify-end floating-card-layer relative z-10 px-6 md:px-12">
            <div className="bg-white border-[4px] border-ink p-8 md:p-14 shadow-[20px_20px_0px_#B3E5FC] w-full md:w-[45%]">
            <span className="text-ink font-bold tracking-[0.1em] md:tracking-[0.15em] text-[10px] md:text-sm mb-3 md:mb-4 font-sans block">VISUAL IDENTITY</span>
            <div className="w-8 md:w-12 h-[2px] bg-sblue mb-3 md:mb-6" />
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold uppercase mb-3 md:mb-8 leading-none tracking-tight">OUR POSTER<br />GALLERY</h3>
            <p className="text-gray-800 text-[13px] sm:text-base lg:text-xl font-sans leading-relaxed">
              Great code deserves an incredible UI. Take a look at the flyers, merch, and branding crafted by our talented design team for hackathons and workshops. Because let's be real, aesthetics matter just as much as an optimized sorting algorithm.
            </p>
          </div>
        </div>
      </section>

      <PhotoDivider reverse={true} images={["/Photos/2026FallGBM/gbm1-moment-02.webp", "/Photos/2026FallGBM/gbm1-moment-04.webp", "/Photos/2026FallGBM/gbm1-moment-05.webp", "/Photos/2026FallGBM/gbm1-catering.webp"]} />

      {/* ================= PARALLAX FEATURE 3: PROJECTS ================= */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-ink border-t-[3px] md:border-t-[4px] border-ink">
        <div className="section-bg-wrap absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image src="/Photos/2019GBM/2019GBM2.PNG" alt="Projects Background" fill className="section-bg-img object-cover opacity-60" />
        </div>
            <div className="max-w-[1400px] w-full flex justify-start floating-card-layer relative z-10 px-6 md:px-12">
            <div className="bg-white border-[4px] border-ink p-8 md:p-14 shadow-[20px_20px_0px_#B3E5FC] w-full md:w-[45%]">
            <span className="text-ink font-bold tracking-[0.1em] md:tracking-[0.15em] text-[10px] md:text-sm mb-3 md:mb-4 font-sans uppercase block">BUILDING BEYOND CLASS</span>
            <div className="w-8 md:w-12 h-[2px] bg-sblue mb-3 md:mb-6" />
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-ink uppercase mb-3 md:mb-8 leading-none tracking-tight">
              PROJECT<br />SHOWCASE
            </h3>
            <p className="text-gray-800 text-[13px] sm:text-base lg:text-xl font-sans leading-relaxed">
              We turn insane amounts of coffee into fully deployed applications. Watch our members team up for open-source contributions, conquer weekend hackathons across Florida, and build software that actually serves the Gainesville community.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF9F6] pt-16 pb-24 md:pt-24 md:pb-32 px-6 border-t-[3px] md:border-t-[4px] border-ink relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 md:gap-y-16">
          {[
            { img: "/Photos/Event/Event6.PNG", title: "SPECIAL INTEREST GROUPS", desc: "Dive deep into specific tech domains, from React frontend frameworks to massive backend architectures." },
            { img: "/Photos/2026SpringGBM/2ndGBM10.jpg", title: "PROJECT INCUBATOR", desc: "Form a team, build your ideas from scratch, and get ruthless code reviews from senior Gators." },
            { img: "/Photos/Event/Event19.PNG", title: "TECH NETWORKING", desc: "Connect with industry experts and outstanding UF alumni for internship referrals and resume roasts." },
            { img: "/Photos/Event/Event43.PNG", title: "OPEN SOURCE", desc: "Contribute to club open-source projects and improve your Git collaboration standards in a real engineering environment." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative overflow-hidden mb-4 md:mb-6 shadow-[6px_6px_0_#000000] border-[3px] border-ink rounded-sm h-48 md:h-56 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-lg md:text-xl font-serif font-bold text-ink uppercase mb-2 md:mb-3 tracking-tight">{item.title}</h4>
              <p className="text-gray-700 mb-6 flex-grow text-sm md:text-base font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
