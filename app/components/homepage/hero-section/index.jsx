'use client';
import React, { useState, useEffect } from 'react';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BiRefresh } from "react-icons/bi";

const HeroSection = React.memo(() => {
  const [windowState, setWindowState] = useState("normal");
  const [visibleLines, setVisibleLines] = useState(0);

  const codeLines = [
    `<span style="color: #268bd2;">const</span> coder = {`,
    `  <span style="color: #b58900;">name</span>: <span style="color: #2aa198;">'Clément Fornes'</span>,`,
    `  <span style="color: #b58900;">skills</span>: [<span style="color: #2aa198;">'HTML'</span>, <span style="color: #2aa198;">'CSS'</span>, <span style="color: #2aa198;">'JS'</span>, <span style="color: #2aa198;">'React'</span>, <span style="color: #2aa198;">'Next JS'</span>, <span style="color: #2aa198;">'Docker'</span>, <span style="color: #2aa198;">'Markdown'</span>, <span style="color: #2aa198;">'Microsoft Office'</span>, <span style="color: #2aa198;">'C#'</span>, <span style="color: #2aa198;">'C++'</span>, <span style="color: #2aa198;">'Python'</span>, <span style="color: #2aa198;">'PHP'</span>, <span style="color: #2aa198;">'Flutter'</span>, <span style="color: #2aa198;">'Dart'</span>, <span style="color: #2aa198;">'Typescript'</span>, <span style="color: #2aa198;">'Git'</span>, <span style="color: #2aa198;">'Figma'</span>, <span style="color: #2aa198;">'Canva'</span>, <span style="color: #2aa198;">'MongoDB'</span>, <span style="color: #2aa198;">'Tailwind'</span>, <span style="color: #2aa198;">'MySQL'</span>, <span style="color: #2aa198;">'PostgreSQL'</span>],`,
    `  <span style="color: #b58900;">hardWorker</span>: <span style="color: #859900;">true</span>,`,
    `  <span style="color: #b58900;">quickLearner</span>: <span style="color: #859900;">true</span>,`,
    `  <span style="color: #b58900;">problemSolver</span>: <span style="color: #859900;">true</span>,`,
    `  <span style="color: #b58900;">hireable</span>: <span style="color: #268bd2;">function</span>() {`,
    `    <span style="color: #657b83;">return</span> (`,
    `      <span style="color: #657b83;">this</span>.<span style="color: #b58900;">hardWorker</span> &&`,
    `      <span style="color: #657b83;">this</span>.<span style="color: #b58900;">problemSolver</span> &&`,
    `      <span style="color: #657b83;">this</span>.<span style="color: #b58900;">skills</span>.<span style="color: #268bd2;">length</span> >= 5`,
    `    );`,
    `  },`,
    `};`
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleLines(prevLines => prevLines + 1);
    }, 50); // Adjust this delay for the typing speed

    // Clear timeout if all lines are visible
    return () => {
      clearTimeout(timeout);
    };
  }, [visibleLines]);


  const handleClose = () => setWindowState("closed");
  const handleMinimize = () => setWindowState("minimized");
  const handleMaximize = () => setWindowState(prevState => prevState === "maximized" ? "normal" : "maximized");
  const handleReset = () => setWindowState("normal");

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I am <span className="text-pink-500">{personalData.name}</span>{` , a `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            {[
              { href: personalData.github, icon: BsGithub },
              { href: personalData.linkedIn, icon: BsLinkedin },
            ].map(({ href, icon: Icon }, idx) => (
              <Link key={idx} href={href} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
                <Icon size={30} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href={`mailto:${personalData.email}`} className="text-[#16f2b3] hover:text-[#16f2b3] transition-all duration-200 ease-out">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link href={personalData.resume} target="_blank" className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button">
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {windowState === "closed" ? (
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-32">
            <button onClick={handleReset} className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 rounded-full text-white font-semibold uppercase tracking-wider text-xs md:text-sm hover:scale-110 transition-all duration-200 ease-out">
              <BiRefresh size={32} />
            </button>
          </div>
        ) : (
          <div className={`order-1 lg:order-2 relative rounded-lg border ${windowState === "maximized" ? "w-full h-[90vh]" : "bg-gradient-to-r from-[#0d1224] to-[#0a0d37]"}`}>
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400 cursor-pointer" onClick={handleClose}></div>
                <div className="h-3 w-3 rounded-full bg-orange-400 cursor-pointer" onClick={handleMinimize}></div>
                <div className="h-3 w-3 rounded-full bg-green-200 cursor-pointer" onClick={handleMaximize}></div>
              </div>
            </div>
            {windowState !== "minimized" && (
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base"
                  dangerouslySetInnerHTML={{ __html: codeLines.join('\n').slice(0, visibleLines) + '<span class="blink">|</span>' }}>

                </code>

              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';
export default HeroSection;
