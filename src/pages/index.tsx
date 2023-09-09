import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";



import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col  bg-dark">
        <nav className="bg-teal-500 bg-secondary flex flex-wrap items-center justify-between p-6">
          <div className="mr-6 flex flex-shrink-0 items-center text-white">
            <Image
              src="/ss_logo.png"
              width="120"
              height="80"
              alt="Source Scanner Logo"
            ></Image>
          </div>
          <div className="block lg:hidden">
            <button className="text-teal-200 border-teal-400 flex items-center rounded border px-3 py-2 hover:border-white hover:text-white">
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
            <div className="text-sm lg:flex-grow">
              <a
                href="#about"
                className="font-JetBrains mt-4 block text-white transition duration-100 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
              >
                About
              </a>
            </div>
            <div className="space-x-2">
              <a
                href="#"
                className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-primary hover:bg-primary hover:text-white lg:mt-0"
              >
                Login
              </a>
              <a
                href="#"
                className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white  hover:border-primary hover:bg-primary hover:text-white lg:mt-0"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>

        <footer className="bg-teal-500 bg-secondary fixed bottom-0 left-0 flex w-full flex-wrap items-center justify-between p-6">
          <div>Hello World!</div>
          <div>Hello Other World!</div>
        </footer>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
