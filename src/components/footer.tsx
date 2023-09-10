import Image from "next/image";
import UIUC from "../../public/uiuc_logo.png";

export default function Navbar() {
  return (
    // fixed bottom-0 left-0
    <footer className="flex w-full flex-wrap items-center justify-between bg-secondary p-4">
      <div className="flex items-center">
        <Image className="mr-6" alt="" src={UIUC} width={30} height={30} />

        <p className="text-white">
          Made with ♡ by{" "}
          <a href="https://github.com/jamieRollison " className="underline">
            Jamie
          </a>
          ,{" "}
          <a href="https://github.com/ca-zimmerman" className="underline">
            Cole
          </a>
          ,{" "}
          <a href="https://github.com/exrlla" className="underline">
            Ellie
          </a>
          , and{" "}
          <a href="https://github.com/opcushing" className="underline">
            Owen
          </a>{" "}
          @ Pennapps, 2023
        </p>
      </div>
      <a href="https://github.com/jamieRollison/sourcescanner">
        <Image
          src="/github-mark-white.png"
          width="30"
          height="30"
          alt="Github"
        ></Image>
      </a>
    </footer>
  );
}
