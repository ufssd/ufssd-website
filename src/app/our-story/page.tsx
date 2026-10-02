'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';

/* ================= SCATTER CARD COMPONENT ================= */
// 这是一个高度复用的动画包装组件，负责处理 IntersectionObserver 和进入动画
interface ScatterCardProps {
  children: ReactNode;
  className?: string;
  startX?: string;
  startY?: string;
  startRot?: string;
}

const ScatterCard = ({ children, className = '', startX = '0px', startY = '40px', startRot = '0deg' }: ScatterCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // 触发一次后就取消监听，提升性能
      }
    }, { threshold: 0.1, rootMargin: '50px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 使用 React 内联样式动态计算 CSS 变量和过渡状态
  const style = {
    transform: isVisible ? 'translate(0, 0) rotate(0) scale(1)' : `translate(${startX}, ${startY}) rotate(${startRot}) scale(0.85)`,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease-out, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    willChange: 'opacity, transform',
  } as React.CSSProperties;

  return (
    <div ref={ref} style={style} className={`w-full h-full ${className}`}>
      {children}
    </div>
  );
};


/* ================= OUR STORY PAGE ================= */
export default function OurStoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10 flex justify-center">
      
      {/* Bento Grid Container */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,240px)] gap-6 overflow-visible">
        
        {/* --- Card 1: Our Story (Span 2x2) --- */}
        <ScatterCard className="md:col-span-2 md:row-span-2" startX="-150px" startY="-100px" startRot="-12deg">
          <div className="bg-white border-[4px] border-ink p-8 md:p-10 flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm">
            <div className="absolute top-4 right-4 text-[0.7rem] bg-ink text-sblue px-3 py-1.5 rounded-full font-bold uppercase tracking-widest z-10">EST. 2011</div>
            <h3 className="font-serif text-3xl md:text-[2.5rem] text-ink mb-6 uppercase leading-none z-10 relative">Our Story</h3>
            <p className="text-[1.1rem] text-gray-800 leading-relaxed mb-4 z-10 relative font-sans">
              <strong className="text-ink font-extrabold bg-sblue px-1.5 py-0.5 rounded-sm">Welcome to the Society of Software Developers!</strong> We are a passionate, student-led organization dedicated to empowering the next generation of software engineers at the University of Florida.
            </p>
            <p className="text-[1.1rem] text-gray-800 leading-relaxed z-10 relative font-sans">
              Our mission is simple: promote development, foster innovation, and build a collaborative community. Whether you're breaking into tech or fine-tuning complex systems, SSD is where you belong.
            </p>
            {/* Floating Image */}
            <div className="absolute bottom-6 right-6 w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-[4px] border-ink rounded-full overflow-hidden shadow-[4px_4px_0_#000000] animate-float group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:shadow-[6px_6px_0_#B3E5FC] transition-all duration-400 z-20">
              <Image src="/Photos/2026FallGBM/gbm1-camera-03.webp" alt="SSD members at the Fall 2026 GBM" fill className="object-cover" />
            </div>
          </div>
        </ScatterCard>

        {/* --- Card 2: Image Only (Span 1x2) --- */}
        <ScatterCard className="md:col-span-1 md:row-span-2" startX="0px" startY="-150px" startRot="5deg">
          <div className="bg-ink border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm p-0">
            <Image src="/Photos/2026FallGBM/gbm1-crowd-01.webp" alt="A packed Fall 2026 SSD meeting" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
          </div>
        </ScatterCard>

        {/* --- Card 3: GBMs (Span 1x2) --- */}
        <ScatterCard className="md:col-span-1 md:row-span-2" startX="150px" startY="-80px" startRot="15deg">
          <div className="bg-sblue border-[4px] border-ink p-8 flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#ffffff] interactive-element rounded-sm">
            <div className="absolute top-4 right-4 text-[0.7rem] bg-ink text-white px-3 py-1.5 rounded-full font-bold uppercase tracking-widest z-10">FOOD & FUN</div>
            <h3 className="font-serif text-[2.2rem] text-ink mb-4 uppercase leading-none z-10 relative mt-8">GBMs</h3>
            <p className="text-[1.1rem] text-ink/80 leading-relaxed z-10 relative font-sans font-medium">
              Our meetings are the heartbeat of the org. Compete in technical design contests, hear about opportunities, and grab <strong className="text-white bg-ink px-1.5 py-0.5 rounded-sm font-bold">Huey Magoo's</strong> with friends.
            </p>
          </div>
        </ScatterCard>

        {/* --- Card 4: Image Only (Span 2x1) --- */}
        <ScatterCard className="md:col-span-2 md:row-span-1" startX="-100px" startY="0px" startRot="-5deg">
          <div className="bg-ink border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm p-0">
            <Image src="/Photos/2026FallGBM/gbm1-crowd-02.webp" alt="Fall 2026 SSD general body meeting" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
          </div>
        </ScatterCard>

        {/* --- Card 5: Image Only (Span 1x1) --- */}
        <ScatterCard className="md:col-span-1 md:row-span-1" startX="100px" startY="50px" startRot="10deg">
          <div className="bg-ink border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm p-0">
            <Image src="/Photos/2026FallGBM/gbm1-checkin.webp" alt="Members checking in at the Fall 2026 GBM" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
          </div>
        </ScatterCard>

        {/* --- Card 6: Image Only (Span 1x1) --- */}
        <ScatterCard className="md:col-span-1 md:row-span-1" startX="120px" startY="-20px" startRot="-8deg">
          <div className="bg-ink border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm p-0">
            <Image src="/Photos/2026FallGBM/gbm1-moment-02.webp" alt="SSD members connecting at the Fall 2026 GBM" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
          </div>
        </ScatterCard>

        {/* --- Card 7: Tech Talks (Span 2x2 with Bottom Image) --- */}
        <ScatterCard className="md:col-span-2 md:row-span-2" startX="-80px" startY="120px" startRot="6deg">
          <div className="bg-white border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm">
            <div className="p-8 md:p-10 z-10 relative">
              <h3 className="font-serif text-[2.2rem] text-ink mb-4 uppercase leading-none">Tech Talks</h3>
              <p className="text-[1.1rem] text-gray-800 leading-relaxed font-sans">
                We bridge the gap between classroom algorithms and industry realities. We host insightful workshops and invite leaders like <strong className="text-ink font-extrabold bg-sblue px-1.5 py-0.5 rounded-sm">Supercell AI Lab</strong> to share knowledge.
              </p>
            </div>
            <div className="relative w-full flex-grow min-h-[180px] border-t-[4px] border-ink mt-auto overflow-hidden">
               <Image src="/Photos/2026FallGBM/gbm1-moment-05.webp" alt="Guest speaker Tina Chi at the Fall 2026 GBM" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </ScatterCard>

        {/* --- Card 8: Socials (Span 2x1) --- */}
        <ScatterCard className="md:col-span-2 md:row-span-1" startX="0px" startY="100px" startRot="-4deg">
          <div className="bg-white border-[4px] border-ink p-8 flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element rounded-sm">
            <h3 className="font-serif text-[2.2rem] text-ink mb-3 uppercase leading-none relative z-10">Socials</h3>
            <p className="text-[1.1rem] text-gray-800 leading-relaxed z-10 relative font-sans">
              The best software is built by people who know how to have fun together. We host E-Sports socials, Clash Royale tournaments, and collaborate with <strong className="text-ink font-extrabold bg-sblue px-1.5 py-0.5 rounded-sm">ColorStack</strong>.
            </p>
          </div>
        </ScatterCard>

        {/* --- Card 9: Image Only (Span 2x1) --- */}
        <ScatterCard className="md:col-span-2 md:row-span-1" startX="100px" startY="80px" startRot="8deg">
          <div className="bg-ink border-[4px] border-ink flex flex-col relative overflow-hidden h-full w-full shadow-[6px_6px_0_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#B3E5FC] interactive-element group rounded-sm p-0">
            <Image src="/Photos/2026FallGBM/gbm1-catering.webp" alt="Food and conversation at the Fall 2026 GBM" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
          </div>
        </ScatterCard>

      </div>
    </div>
  );
}
