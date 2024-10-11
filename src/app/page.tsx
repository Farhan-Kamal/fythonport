import Image from "next/image";
import TypingAnimation from "@/components/ui/typing-animation";
import RetroGrid from "@/components/ui/retro-grid";
import WordPullUp from "@/components/ui/word-pull-up";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import LinkGrid from "@/components/LinkGrid";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FadeText } from "@/components/ui/fade-text";

export default function Home() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/cfu", label: "CFU" },
    { href: "/projects", label: "Projects" },
    { href: "/addwork", label: "Additonal Work" },
  ];
  return (
    <div className=" opacity-100 relative flex size-full flex-col h-screen items-center justify-center overflow-hidden">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 opacity-100"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>📞 Contact me</span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <FadeText
        className="mt-8 text-base dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Thomas A. Edison CTE HS"
      />
      <FadeText
        className="mt-8 text-base dark:text-white"
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Web and App Development | Programming and Prototyping"
      />
      <FadeText
        className="mt-8 text-4xl font-bold text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="2024-2025"
      />
      <span>
        <TypingAnimation
          className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#004eff] via-[#0066bd] to-[#1673ff] bg-clip-text text-center text-9xl font-bold leading-none tracking-tighter text-transparent"
          text="Farhan Kamal"
        />
      </span>
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
        words="Python Portfolio"
      />
      <LinkGrid links={links} />
      <RainbowButton href="https://github.com/farhankamal05">
        Access my GitHub!
      </RainbowButton>
      <RetroGrid />
    </div>
  );
}
