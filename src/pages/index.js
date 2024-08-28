import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <main className="bg-gray-100 p-10 sm:p-0">
    <div className="max-w-2xl mx-auto pt-20">

      <div className="flex flex-wrap-reverse sm:flex-nowrap sm:justify-between justify-center pt-5">

        <div className="text-center sm:text-left">
          <p className="animate-fade-down font-special-elite text-lg bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent">&lt;leticiaschneider/&gt;</p>
          <p className="animate-fade-down animate-delay-[400ms] text-3xl my-2">I’m front-end developer</p>
          <p className="animate-fade-down animate-delay-[600ms]">São Paulo, Brazil · leticia.schneider@gmail.com</p>
          <div className="flex mx-auto sm:mx-0 sm:mt-3 border rounded-full border-solid border-slate-300 w-fit px-3 py-2 mt-5 animate-fade-right animate-delay-[600ms]">
            <a className="px-2" href="https://github.com/leticiaschneider">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="hover:fill-slate-600" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a className="px-2" href="https://www.linkedin.com/in/leticia-schneider/">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="hover:fill-cyan-600" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a className="px-2" href="mailto:leticia.schneider@gmail.com?body=lets%20work%20together">
              <svg
              class="hover:fill-slate-600"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
              >
                <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-5 sm:mb-0">
          <StaticImage
            src="../images/my-photo.png"
            loading="eager"
            height={100}
            quality={95}
            className="animate-fade-left transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>

      <div className="pt-16 pb-9">
        <h2 className="animate-fade-right animate-delay-[600ms] font-semibold text-2xl pb-3">Skills</h2>
        <div>
          <div className="animate-fade-down animate-delay-[650ms] flex flex-wrap gap-4 border rounded-xl border-solid bg-gray-500 p-3 mt-2">
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Angular+</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">HTML5</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">CSS3</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Sass</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">JavaScript</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">TypeScript</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">RxJS</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">GIT</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">ChartJs</span>
          </div>

          <div className="animate-fade-down animate-delay-[700ms] flex flex-wrap gap-4 border rounded-xl border-solid bg-gray-400 p-3 mt-2">
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">ReactJs</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jest</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Swagger</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Kibana</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 whitespace-nowrap">Web Components</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Java</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 whitespace-nowrap">Spring Boot</span>
          </div>

          <div className="animate-fade-down animate-delay-[750ms] flex gap-4 border rounded-xl border-solid bg-gray-300 p-3 mt-2">
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Dart</span>
            <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Flutter</span>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-9 animate-fade-down animate-delay-[800ms]">
        <h2 className="font-semibold text-2xl">Experiences</h2>
      </div>
      <div className="flex items-center justify-center animate-fade-down animate-delay-[800ms]">
        <div className="space-y-6 border-l-2 border-dashed w-full">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold">Softawe Engineer</h4>
              <p className="py-1">AMERICANAS S.A. | DEC 2020 - At the moment</p>
              <p className="mt-2 text-sm text-gray-500 text-wrap">
                Currently, I work in one of the branches of Americanas, specifically in the Marketplace, in the promotions squad. My focus is on developing and improving the promotions page, ensuring an excellent user experience, as well as building reusable components and optimizing for maximum speed and scalability. In addition to development, I'm also responsible for documentation and assist with the implementation of the micro-front.
              </p>

              <div className="flex gap-2 flex-wrap pt-2">
                <p className="text-sm text-gray-500 font-medium">Technologies:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Angular4</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Angular8</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">HTML5</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">CSS3</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Bootstrap</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">SASS</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jest</span>
              </div>

              <div className="flex gap-2 flex-wrap pt-2">
                <p className="text-sm text-gray-500 font-medium">Tools:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jira</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jenkins</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">GitLab</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Confluence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold">Junior Softawe Engineer</h4>
              <p className="py-1">ACCENTURE BRASIL | MAY 2018 - NOV 2020</p>
              <p className="mt-2 text-sm text-gray-500 font-semibold">Petrobras System Aug 2019 - Dec 2020</p>
              <p className="mt-2 text-sm text-gray-500 text-wrap">
                Front-end performance in the development of a web system designed to manage ships, including correction and support for the developed system.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Technologies:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Angular4</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">HTML5</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">CSS3</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Bootstrap</span>
              </div>

              {/* ------------- */}
              <p className="mt-5 text-sm text-gray-500 font-semibold">Miltichannel Architecture Safra Sept 2018 - Aug 2019</p>
              <p className="mt-2 text-sm text-gray-500 text-wrap">
                Full-stack performance in developing the SafraPay application for brokers to sell bank machines. I was involved in correcting and supporting the developed system, and I also led a team of developers, sharing knowledge and assigning tasks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Technologies:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">AngularJs</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">HTML5</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">CSS3</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Bootstrap</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">C#</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">SQL</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Tools:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jira</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">GitLab</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Swagger</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">kibanna</span>
              </div>

              {/* ------------- */}
              <p className="mt-5 text-sm text-gray-500 font-semibold">Vivere Santander Mortgage May 2018 - Aug 2018</p>
              <p className="mt-2 text-sm text-gray-500 text-wrap">
                Back-end performance in the development of a real estate simulation website, along with contributions to the system documentation.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Technologies:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Java 8</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">SpringBoot</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Maven</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Hibernate</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Tools:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Jira</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Confluence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold">Junior Software Engineer</h4>
              <p className="py-1">VALEMOBI S.A. | JAN 2017 - JUNE 2017</p>
              <p className="mt-2 text-sm text-gray-500 text-wrap">
                As a junior developer, I worked on the Portal Backoff, focusing on its stability, performance, and usability. My contributions ranged from identifying and fixing bugs to implementing new features, as well as actively participating in the user interface design and development process.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Technologies:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">AngularJs</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">HTML5</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">CSS3</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">JQuery</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">ColdFusion</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <p className="text-sm text-gray-500 font-medium">Tools:</p>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">GitHub</span>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-9">
        <h2 className="font-semibold text-2xl pb-3">Education</h2>
        <div>
          <p className="py-1">FATEC at Mogi das Cruzes | <span className="font-medium">2017</span></p>
          <p className="py-1">Degree in System Analysis and Development.</p>
          <p className="ml-4 py-1"><span className="text-blue-500">#</span> Monitoring in the discipline of calculation</p>
          <p className="ml-4 py-1"><span className="text-blue-500">#</span> Monitoring in the discipline of Algorithm and Programming Logic</p>
        </div>
      </div>

      <hr class="my-3 md:my-6 border-gray-400" />

      <div class="flex flex-wrap items-center md:justify-between justify-center pb-10">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 dark:text-gray-400 py-1">
            &copy;
            <span id="year">2024 </span>
            <a href="https://github.com/leticiaschneider" class="hover:underline hover:text-gray-900"> Letícia Schneider</a>.
          </div>
        </div>
      </div>
    </div>
  </main>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
