import Image from "next/image";
import UIUC from "../../public/uiuc_logo.png";

export default function Navbar() {
  return (
    // fixed bottom-0 left-0
    <footer className="flex w-full flex-wrap items-center justify-between bg-secondary p-4">
      <div className="flex items-center">
        <Image className="mr-6" alt="" src={UIUC} width={30} height={30} />

        <p className="text-white">
          Made with ♡ by <span className="underline">Jamie</span>,{" "}
          <span className="underline">Cole</span>,{" "}
          <span className="underline">Ellie</span>, and{" "}
          <span className="underline">Owen</span> @ Pennapps, 2023
        </p>
      </div>
    </footer>
  );
}
