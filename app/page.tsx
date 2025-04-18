import WorkExperienceCard from "./components/work/work-experience-card";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="grid grid-rows-[0.5fr_0.25fr_0.25fr_0.25fr] items-center justify-items-center min-h-screen gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full lg:w-4/5">
        <main className="flex flex-col row-start-1 text-left items-center sm:items-start">
          <h1 className="text-2xl font-bold">
            Nicholas Rios
          </h1>
          <h2 className="text-lg">
            Software Engineer
          </h2>
          <p>I'm focused on creating great user experiences in software and dev tools. In addition to my love for technology, I'm passionate about photography, coffee, fitness, and music.</p>
        </main>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="w-full text-lg font-bold text-left">Work</h2>
          {/* Use database to pass this data and map function to display all experiences? */}
          <WorkExperienceCard company="JPMorganChase" position="Software Engineer" location="Jersey City, NJ" startDate="February 2025"/>
          <WorkExperienceCard company="JPMorganChase" position="Software Engineer Intern" location="Jersey City, NJ" startDate="June 2024" endDate="August 2024"/>
          <WorkExperienceCard company="Fiserv" position="Software Engineer Intern" location="Berkeley Heights, NJ" startDate="June 2023" endDate="August 2023"/>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="w-full text-lg font-bold text-left">Projects</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="w-full text-lg font-bold text-left">Contact</h2>
        </div>
      </div>
    </div>
  );
}
