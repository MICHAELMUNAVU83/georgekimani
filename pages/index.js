import Head from "next/head";
import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import kimanipic from "../public/kimani.png";
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
            <h1 className="text-xl  font-burtons">George Kimani</h1>
            <ul className="flex items-center space-x-10">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col ">
            <h1 className="text-5xl font-burtons text-center text-teal-600">
              George Kimani
            </h1>
            <p className="text-2xl font-light text-center leading-8 text-gray-800 ">
              Content Creator{" "}
            </p>
          </div>

          <div className="flex justify-center mt-10 text-gray-500 ">
            <ul className="flex items-center space-x-5">
              <li>
                <a href="https://twitter.com/GeorgeKimani_">
                  <AiFillTwitterCircle className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/georgekimani_/?hl=en">
                  <AiFillInstagram className="cursor-pointer text-3xl" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/georgekimani_/?hl=en">
                  <AiFillYoutube className="cursor-pointer text-3xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center relative bg-gradient-to-b  from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-10">
            <Image src={kimanipic} alt="kimani" layout="fill"  objectFit="cover" />
          </div>
        </section>
      </main>
    </div>
  );
}
