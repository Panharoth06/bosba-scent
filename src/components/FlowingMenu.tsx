'use client';

import React, { useRef, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface MenuItemProps {
  link: string;
  text: string;
  icon: React.ReactNode;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => (
  <div className="w-full h-screen overflow-hidden bg-primary">
    <nav className="flex flex-col h-full m-0 p-0">
      {items.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </nav>
  </div>
);

/* ------------------------------------------------------------------ */

const MenuItem: React.FC<MenuItemProps> = ({ link, text, icon }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const [isTouching, setIsTouching] = useState(false);

  const anim = { duration: 0.6, ease: 'expo.out' };

  /* ---------- edge detection ---------- */
  const edge = (mouseY: number, height: number): 'top' | 'bottom' =>
    mouseY < height / 2 ? 'top' : 'bottom';

  /* ---------- mouse handlers ---------- */
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const side = edge(e.clientY - rect.top, rect.height);

    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);

    gsap.set(marqueeRef.current, { y: side === 'top' ? '-100%' : '100%' });
    gsap.set(marqueeInnerRef.current, { y: side === 'top' ? '100%' : '-100%' });

    gsap.to(marqueeRef.current, { y: '0%', ...anim });
    gsap.to(marqueeInnerRef.current, { y: '0%', ...anim });
  };

  const leave = (e: React.MouseEvent<HTMLElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const side = edge(e.clientY - rect.top, rect.height);
    const outY = side === 'top' ? '-100%' : '100%';
    const innerOutY = side === 'top' ? '100%' : '-100%';

    gsap.to(marqueeRef.current, { y: outY, ...anim });
    gsap.to(marqueeInnerRef.current, { y: innerOutY, ...anim });
  };

  /* ---------- touch handlers ---------- */
  const touchStart = () => {
    setIsTouching(true);
    // fake a mouse-enter in the middle of the element
    const fakeEv = { clientX: 0, clientY: 0 } as React.MouseEvent<HTMLElement>;
    enter(fakeEv);
  };

  const touchEnd = () => {
    setTimeout(() => setIsTouching(false), 100);
    const fakeEv = { clientX: 0, clientY: 0 } as React.MouseEvent<HTMLElement>;
    leave(fakeEv);
  };

  /* ---------- marquee content ---------- */
  const marqueeContent = useMemo(() => {
    // inside the marqueeContent memo
    const unit = (
      <>
        <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] mx-[2vw] whitespace-nowrap">
          {text}
        </span>

        {/* ICON */}
        <div className="flex items-center justify-center w-[200px] h-[7vh] mx-[2vw] rounded-[50px] bg-gray-100 p-4">
          {icon}
        </div>
      </>
    );

    return Array.from({ length: 6 }).map((_, i) => (
      <React.Fragment key={i}>{unit}</React.Fragment>
    ));
  }, [text, icon]);

  /* ------------------------------------------------------------------ */
  return (
    <div
      ref={itemRef}
      className="flex-1 relative overflow-hidden bg-primary shadow-[0_-1px_0_0_rgba(255,255,255,0.2)]"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {/* default link */}
      <Link
        href={link}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        className="flex items-center justify-center h-full relative z-10 cursor-pointer uppercase no-underline font-medium text-[4vh] text-white hover:text-transparent transition-colors"
        target='_blank'
      >
        {text}
      </Link>

      {/* marquee layer */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 overflow-hidden pointer-events-none bg-white"
        style={{ transform: 'translateY(-100%)' }}
      >
        <div
          ref={marqueeInnerRef}
          className="flex items-center h-full"
          style={{ transform: 'translateY(100%)' }}
        >
          {/* two copies → seamless loop */}
          <div className="flex animate-marquee whitespace-nowrap">{marqueeContent}</div>
          <div className="flex animate-marquee whitespace-nowrap">{marqueeContent}</div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;