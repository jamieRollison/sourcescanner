import Image from "next/image";

export default function Navbar() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full flex-wrap items-center justify-between bg-secondary p-4">
      <p className="text-white">Made by Jamie, Ellie, Cole, and Owen</p>
      <a href="https://github.com/jamieRollison/sourcescanner">
        <Image
          src="/github-mark-white.png"
          width="50"
          height="50"
          alt="Github"
        ></Image>
      </a>
    </footer>
  );
}
