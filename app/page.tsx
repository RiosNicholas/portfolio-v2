/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px_20px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-1 text-left items-center sm:items-start">
        <h1 className="text-2xl font-bold">
          Nicholas Rios
        </h1>
        <h2 className="text-lg">
          Software Engineer
        </h2>
        <p>I'm a Software Engineer working focused on creating great user experiences in software and dev tools. In addition to my love for technology, I'm passionate about photography, coffee, fitness, and music.</p>
      </main>
      <div className="flex flex-col items-center justify-center gap-4 text-left">
        <h2 className="text-lg font-bold text-center">Work</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-left">
        <h2 className="text-lg font-bold text-center">Projects</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-left">
        <h2 className="text-lg font-bold text-center">Contact</h2>
      </div>
    </div>
  );
}
