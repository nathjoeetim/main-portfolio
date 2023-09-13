import Head from "next/head";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/myImage.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/wen3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My-NextJs-Portfolio-website</title>
        <meta name="description" content="Nathjoeetim potfolio website" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl ">Nathjoeetim</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1OpTYHOR1aoFDjtNYRNGo_DoYkCcQtz14rwEv-y3iYEs/edit?usp=sharing "
                >
                  Resume / CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Etim, Nathaniel Joseph
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-End Developer and tutor.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming needs. Join me down
              below and let get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillFacebook />
              <a href="https://www.linkedin.com/in/nathaniel-etim-08a519227 ">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Nathaniel-Etim">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto  justify-center text-center bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                alt="dev"
                className="  justify-center text-center "
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Services I offer{" "}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a software with{" "}
              <span className="text-teal-500"> 7+ years of experience </span>{" "}
              and I have a lot of experience working with various software
              technologies. <br /> With my skillset I believe I have what it
              take to contribute efficiently to your teams thereby promoting the
              growth of your company. <br /> I have made several applications
              with{" "}
              <span className="text-teal-500">
                {" "}
                React , Flutter , JavaScript and node.js
              </span>{" "}
              etc .{" "}
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="codderImg" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">technologies I Use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS & SASS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NextJs</p>
              <p className="text-gray-800 py-1"> Flutter</p>
              <p className="text-gray-800 py-1">node.js</p>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">Mongodb</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="consultancyimg"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600"> Tools I Use</h4>
              <p className="text-gray-800 py-1">Git & Github</p>
              <p className="text-gray-800 py-1">Netlify</p>
              <p className="text-gray-800 py-1">Vercel</p>
              <p className="text-gray-800 py-1">
                Routing and Rudux state management
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Areas of professional experence
              </h3>
              <h4 className="py-4 text-teal-600"> 😇</h4>
              <p className="text-gray-800 py-1">
                Collaboratoin with git and github
              </p>
              <p className="text-gray-800 py-1">
                Excellent understanding and use of Javascript , ReactJs , and
                NextJs
              </p>
              <p className="text-gray-800 py-1">Good problem solving skills </p>
              <p className="text-gray-800 py-1">Ability to work with team</p>
              <p className="text-gray-800 py-1">Debugging</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a Software developer with experience and passion in writing
              applications the runs using DART, JAVASCRIPT, HTML, CSS, and
              TYPESCRIPT. <br />
              <span className="text-teal-500">
                Experience in using frameworks like VS-CODE, ANDROID-STUDIO,
                FLUTTER, NODE-JS, NEXTJS and REACT.
              </span>
              Expertise interacting with JSON –WEB services and GRAPHQL
              endpoints.{" "}
              <span className="text-teal-500">
                {" "}
                Excellent understanding of{" "}
              </span>
              software architecture and micro-services.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Production experience with FLUTTER, NODE-JS. Experience with
              working remotely, Building applications with distributed
              international teams.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://meals-w2k9.vercel.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="mealWebSite"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://nathjoeetim-forkify-react.netlify.app">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt="web2"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://menscript.com/uk">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                  alt="web3"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.payhelpa.com/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                  alt="web3"
                />
              </a>
            </div>
          </div>

          <h3 className="text-3xl py-10 dark:text-white ">
              Other project include
            </h3>
          <div>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://play.google.com/store/apps/datasafety?id=com.payhelpa.app.two"
                >
                 Payhelpa app
                </a>
              </div>
              <div className="py-5">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://mrjay176.github.io/findservices/"
                >
                 DesktopView FindServices
                </a>
              </div>
              <div className="py-1">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://mrjay176.github.io/EcommerceSale/"
                >
                DesktopView React Practical
                </a>
              </div>
              <div className="py-5">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href=" https://jazzy-valkyrie-43973e.netlify.app/"
                >
                DesktopView Ecommerce education site
                </a>
              </div>

             
              

        </section>
      </main>
    </div>
  );
}
