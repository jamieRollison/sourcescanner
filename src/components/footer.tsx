import Image from "next/image";
import UIUC from "../../public/uiuc_logo.png";

export default function Navbar() {
  return (
    // fixed bottom-0 left-0
    <footer className="bg-secondary flex w-full flex-wrap items-center justify-between p-4">
      <div className="flex items-center">
        <Image className="mr-6" alt="" src={UIUC} width={30} height={30} />

        <p className="text-white">
          Made with ♡ by <span className="underline">Jamie</span>,{" "}
          <span className="underline">Cole</span>,{" "}
          <span className="underline">Ellie</span>, and{" "}
          <span className="underline">Owen</span> @ Pennapps, 2023
        </p>
      </div>
      <div className="align-center flex justify-between space-x-5">
        <a href="https://devpost.com/software/sourcescanner">
          <Image
            src="/devpost-logo.png"
            width="35"
            height="35"
            alt="devpost"
          ></Image>
        </a>
        <a href="https://github.com/jamieRollison/sourcescanner">
          <Image
            src="/github-mark-white.png"
            width="30"
            height="30"
            alt="Github"
          ></Image>
        </a>
      </div>
    </footer>
  );
}
