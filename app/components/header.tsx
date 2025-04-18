"use client";

import { Camera, FileUser, Github, Home, Linkedin, Sun } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 sticky z-50 flex items-center justify-between gap-10 p-4 text-black bg-white">
      <Link href="/" className="text-xl font-black p-2 hover:bg-neutral-200 rounded-2xl">
        NR
      </Link>

      <nav className="flex items-center gap-4 p-2 bg-neutral-400/95 text-white rounded-2xl" role="navigation">
        <Link href="/" aria-label="Home">
          <Home tabIndex={0}/>
        </Link>
        <Link href="/photography" aria-label="Photography">
          <Camera tabIndex={0} />
        </Link>
        | 
        <a
          href="https://www.linkedin.com/in/nicholas-rios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin tabIndex={0} />
        </a>
        <a
          href="https://github.com/RiosNicholas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github tabIndex={0} />
        </a>
        <a
          href="https://drive.google.com/file/d/your-resume-id/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <FileUser tabIndex={0} />
        </a>
       
      </nav>

      <button
        className="p-2 hover:bg-neutral-200 rounded-2xl"
        aria-label="Toggle theme"
        onClick={() => {
          // Theme toggle logic here
        }}
      >
        <Sun />
        {/* <Moon /> */}
      </button>
    </header>
  );
};

export default Header;
