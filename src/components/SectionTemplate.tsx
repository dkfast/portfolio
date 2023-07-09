import React, { ReactNode, useEffect, useState } from "react";
import { Element } from "react-scroll";

interface SectionProps{
  heading: string;
  children: ReactNode;
}

function SectionTemplate({heading, children}: SectionProps) {
  const [offset, setOffset] = useState<number | null>(null);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;
      setOffset(headerHeight);
    }
  },[offset])

  return (
    <Element name={heading.toLowerCase()} className={`min-h-screen grid grid-cols-12 md:grid-cols-9`}>
      <div className="col-span-1 relative overflow-hidden">
        <p className="side-label text-black font-display opacity-10 font-medium uppercase ">{heading}</p>
      </div>
      <div className={`col-span-11 md:col-span-8 bg-neutral-900 pt-32 overflow-hidden`}>
        {children}
      </div>
    </Element>
  );
};

export default SectionTemplate;
