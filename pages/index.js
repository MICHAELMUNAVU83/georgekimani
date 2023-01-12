import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";

import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";
import kimanipic from "../public/kimani.png";
import design from "../public/design.png";
import vid1 from "../public/synix.mp4";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "" : ""}>
      <Head>
        <title>George Kimani Porfolio</title>
        <meta name="description" content="George Kimani Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 {darkMode ? 'bg-gray-900' : 'bg-gray-100'}">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl  font-burtons text-light">George Kimani</h1>
            <ul className="flex items-center space-x-10">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/about"
                >
                  Porfolio
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/georgekimani_?igshid=YmMyMTA2M2Y="
                >
                  <AiFillInstagram className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/254714466144 "
                >
                  <RiWhatsappFill className="cursor-pointer text-3xl" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/georgekimani_/?hl=en"
                >
                  <AiFillYoutube className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto: gnkimani93@gmail.com"
                >
                  <AiFillMail className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:0714466144"
                >
                  <AiFillPhone className="cursor-pointer text-3xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center relative bg-gradient-to-b  from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-10">
            <Image
              src={kimanipic}
              alt="kimani"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* { second section} */}

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-gray-500 text-md leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              <span className="text-teal-500">quod, voluptatum </span>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              <span className="text-teal-500">quod, voluptatum </span>
            </p>

            <p className="text-gray-500 py-2 text-md leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>

          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={design} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-xl">Beautiful Design</h3>
              <p className="text-gray-500 text-md leading-8">
                Lorem ipsum dolor sit amet
                <span className="text-teal-500">quod, voluptatum </span>
                consectetur adipisicing elit. Quisquam
              </p>
              <h4 className="py-2 text-teal-600">Brands I have worked for</h4>

              <p className="text-gray-800 py-1 "> Google</p>
              <p className="text-gray-800 py-1 "> Facebook</p>
              <p className="text-gray-800 py-1 "> Twitter</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={design} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-xl">Beautiful Design</h3>
              <p className="text-gray-500 text-md leading-8">
                Lorem ipsum dolor sit amet
                <span className="text-teal-500">quod, voluptatum </span>
                consectetur adipisicing elit. Quisquam
              </p>
              <h4 className="py-2 text-teal-600">Brands I have worked for</h4>

              <p className="text-gray-800 py-1 "> Google</p>
              <p className="text-gray-800 py-1 "> Facebook</p>
              <p className="text-gray-800 py-1 "> Twitter</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <div className="flex justify-center">
                <Image src={design} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-xl">Beautiful Design</h3>
              <p className="text-gray-500 text-md leading-8">
                Lorem ipsum dolor sit amet
                <span className="text-teal-500">quod, voluptatum </span>
                consectetur adipisicing elit. Quisquam
              </p>
              <h4 className="py-2 text-teal-600">Brands I have worked for</h4>

              <p className="text-gray-800 py-1 "> Google</p>
              <p className="text-gray-800 py-1 "> Facebook</p>
              <p className="text-gray-800 py-1 "> Twitter</p>
            </div>
          </div>
        </section>
        {/* {third section} */}

        <section>
          <div>
            <h1 className="text-3xl py-1">My Work</h1>
            <h2 className="text-gray-500 text-2xl text-center">
              Brand Partnerships
            </h2>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">1.Synix</p>
              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">2.Gordons Gin</p>
              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">3.Knorr</p>
              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            {/* {fourth section} */}

            <h2 className="text-gray-500 text-2xl mt-10 text-center">
              Comedy Skits
            </h2>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">
                1.When you find your girl ..
              </p>
              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">
                2. When you find your girl ..
              </p>

              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            <div className="mt-5 shadow-lg rounded-xl">
              <p className="text-teal-500 text-center py-1">
                3.When you find your girl ..
              </p>
              <video
                controls
                className="w-full h-full mt-10 shadow-lg rounded-xl"
              >
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* {fifth section} */}
      </main>
    </div>
  );
}
