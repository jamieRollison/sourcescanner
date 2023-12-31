import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

import Source from "~/components/source";

export default function Home() {
  return (
    <>
      <Head>
        <title>Source Scanner</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/search_favi.png" />
      </Head>
      <main className="flex min-h-screen flex-col bg-dark">
        <Navbar />
        <section className="flex flex-1 flex-col ">
          <div className="flex justify-center ">
          <h1 className="mt-20 text-center text-6xl font-bold text-white leading-relaxed">
            Scan your text,
            <br />{" "}
            <span className="text-primary_dark underline decoration-dashed relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-dark before:h-20">
              understand
            </span>{" "}
            the words.✨
          </h1>
          </div>
          <div className="mx-10 flex gap-6 lg:mx-60 xl:mx-80">
            <div className="mt-10 w-1/2 rounded-md border-2 border-white bg-secondary ">
              <p className="p-4 text-white">
                A hackathon is a great way to learn about ways you can
                manipulate code and software in unique and interesting ways.
              </p>
            </div>
            <div className="mt-10 inline-block w-1/2 rounded-md bg-[#f5f5f5] p-4">
              A{" "}
              <Source
                word="hackathon"
                info="A hackathon (also known as a hack day, hackfest, datathon or codefest; a portmanteau of hacking and marathon) is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours."
                pageTitle="Hackathon Wikipedia"
                url="https://en.wikipedia.org/wiki/Hackathon"
              />{" "}
              is a great way to learn about ways you can manipulate code and
              software in unique and interesting ways.
            </div>
          </div>
          <div className="mt-16 flex bg-primary_dark py-20 text-center font-semibold text-white">
            <div className="flex w-1/2 flex-col items-center">
              <p className="mx-10 text-3xl">
                We are students too, and we know how hard it can be to fully
                <br /> understand academic papers and reading materials 📚📝
              </p>
              <Link
                href={"/edit"}
                className="mt-10 w-40 rounded-md border-2 border-white bg-transparent p-4 hover:bg-primary"
              >
                Try it Now
              </Link>
            </div>
            <div className="flex w-1/2 flex-col gap-10">
              <div className="mx-10 rounded-md border-4 border-primary bg-[#F2DDC9] p-4 font-semibold hover:border-white">
                <p className="text-xl text-sky-700">Wikipedia Lens 🔎</p>
                <p className="mx-10 text-black">
                  The Wikipedia lens offers you the ability to provide you with
                  wikipedia links and articles that are relevant to the text you
                  are reading!
                </p>
              </div>
              <div className="mx-10 rounded-md border-4 border-primary bg-[#F2DDC9] p-4 font-semibold hover:border-white">
                <p className="text-green-700 text-xl ">Technical Lens 👩🏻‍🔬</p>
                <p className="mx-10 text-black">
                  The Technical lens provides you to websites and links that are
                  catered towards the technical side, perfect for science and
                  engineering students!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
