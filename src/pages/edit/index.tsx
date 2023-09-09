import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";



export default function Edit() {

  return (
    <>
      <Head>
        <title>Scan your text</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col bg-dark">
        {/* <nav className="bg-teal-500 bg-secondary flex flex-wrap items-center justify-between p-6">
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
                href="#responsive-header"
                className="mr-4 mt-4 block text-white transition delay-75 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="mr-4 mt-4 block text-white transition delay-75 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="mt-4 block text-white transition delay-75 ease-in-out hover:text-primary lg:mt-0 lg:inline-block"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="#"
                className="hover:border-transparent hover:text-teal-500 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:bg-white lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav> */}
        <h1 className="text-white mt-6 ml-10 mb-4">
                Get started with Source Scanner. 
        </h1>
        <div className="flex mx-10 gap-8 ">
            <div className="flex flex-col w-1/2">
                <form className="">
                    <textarea className="w-full h-[85vh] bg-secondary text-white rounded-lg p-6 focus-visible:border-white border-2 focus-within:border-white" placeholder="Enter your text here"></textarea>
                </form>

                <div className="flex justify-end">
                    <button className="bg-primary text-white rounded-lg p-4 mt-2 ">Scan</button>
                </div>
            </div>

            <div className=" w-1/2 pt-6 bg-white h-[90vh] rounded-lg px-10">
                <p className="overflow-auto">text</p>
            </div>
           

            
        </div>
      </main>
    </>
  );
}
