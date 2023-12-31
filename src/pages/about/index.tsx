import Head from "next/head";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="search_favi.png" />
      </Head>

      <main className="flex min-h-screen flex-col bg-dark text-white">
        <Navbar />
        <section className="flex flex-1 flex-col items-center">
          <p className="relative mt-20 w-[max-content] text-center text-5xl text-sky-400 before:absolute before:inset-0 before:animate-typewriter before:bg-dark">
            The Team ⚡️
          </p>
          <p></p>
          <div className="m-6 flex flex-col items-center md:flex-row md:justify-center gap-10">
            <div className="flex flex-col items-center">
              <h3 className="my-4 text-center text-xl text-sky-600">
                Jamie <br />
                Rollison
              </h3>
              <Image
                className="border-blue rounded-full border-2"
                alt=""
                src="/jamie.png"
                width={200}
                height={200}
              />
              <p className="pt-4 text-lg">CS @ UIUC &apos;25</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="my-4 text-center text-xl text-sky-600">
                Ellie <br /> Popoca
              </h3>
              <Image
                className="rounded-full"
                alt=""
                src="/ellie.png"
                width={200}
                height={200}
              />
              <p className="pt-4 text-lg">IS @ UIUC &apos;25</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="my-4 text-center text-xl text-sky-600">
                Cole <br /> Zimmerman
              </h3>
              <Image
                className="rounded-full"
                alt=""
                src="/cole.png"
                width={200}
                height={200}
              />
              <p className="pt-4 text-lg">CS @ UIUC &apos;25</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="my-4 text-center text-xl text-sky-600">
                Owen <br />
                Cushing
              </h3>
              <Image
                className="rounded-full"
                alt=""
                src="/owen.png"
                width={200}
                height={200}
              />
              <p className="pt-4 text-center text-lg">
                CS + Music @ <br />
                UIUC &apos;25
              </p>
            </div>
            <p></p>
          </div>
          <h1 className="mx-10 mb-10 md:mx-60 text-center text-lg md:text-2xl text-sky-400">
            Hello! We &apos;re students from UIUC studying computer and
            information science, exploring hackathons and learning about code!
            We created SourceScanner for the Education track at PennApps XXIIV. 
            Learn more about us, and what we &apos;re passionate about!
          </h1>
        </section>
        <Footer />
      </main>
    </>
  );
}
