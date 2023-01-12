import Head from "next/head";

import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>George Kimani Porfolio</title>
        <meta name="description" content="George Kimani Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl ">George Kimani</h1>
            <ul className="flex items-center space-x-10">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" /> 
              </li>
              <li>
                <a  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                href="/about">About</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
