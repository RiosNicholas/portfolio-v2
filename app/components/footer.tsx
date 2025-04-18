import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex p-10 flex-wrap items-center justify-center">
      <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          2025 - Nicholas Rios
        </a>
      </footer>
  );
}
export default Footer;