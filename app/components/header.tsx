import { Camera, FileUser, Github, Linkedin, Moon, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10 text-black p-4">
      <h1 className="text-xl font-black p-2 hover:bg-neutral-200 rounded-2xl">NR</h1>
      <div className="flex bg-neutral-400 rounded-2xl p-2 gap-4 text-white">
        <Linkedin />
        <Github />
        <FileUser />
        <Camera />
      </div>
      <div className="p-2 hover:bg-neutral-200 rounded-2xl">
        <Sun />
        {/* <Moon /> */}
      </div>
    </header>
  );
}

export default Header;