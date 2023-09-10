import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-wrap items-center justify-between bg-secondary p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href={"/"}>
          <Image
            src="/ss_logo.png"
            width="120"
            height="80"
            alt="Source Scanner Logo"
          ></Image>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border px-3 py-2 hover:border-white hover:text-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm sm:space-x-0 lg:flex-grow lg:space-x-4">
          <a
            href="about"
            className="mt-4 block font-mono text-white transition duration-100 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
          >
            About
          </a>
          <a
            href="scan"
            className="mt-4 block font-mono text-white transition duration-100 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
          >
            Scan
          </a>
        </div>
        <div className="space-x-2">
          <button
            onClick={session ? () => void signOut() : () => void signIn()}
            className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-primary hover:bg-primary hover:text-white lg:mt-0"
          >
            {session ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
    </nav>
  );
}
