import Head from "next/head";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark flex min-h-screen flex-col">
        <Navbar />
        <Footer />
      </main>
    </>
  );
}
