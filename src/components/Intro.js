import React, { useState, useEffect } from "react";

export default function Intro() {
    const changingText = ["responsive websites.", "mobile apps.", "user interfaces."];
    const [state, setState] = useState(changingText[0]);

    useEffect(() => {
        const newText = setInterval(() => {
            setState((oldState) => {
                const currentIndex = changingText.indexOf(oldState);
                const nextIndex = -1 === currentIndex || currentIndex === changingText.length - 1 ? 0 : currentIndex + 1;
                return changingText[nextIndex];
            });
        }, 3000);

        return () => clearInterval(newText);
    });

    return (
        <section id="intro" className="bg-neutral-900 pt-20 pb-40 md:pt-40 md:pb-64 block">
            <div className="container mx-auto flex px-10 py-2 md:flex-row flex-col items-center">
                <div className="text-left lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hello, I'm Luis.
                        <br className="hidden lg:inline-block" /> I build {state}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        An aspiring React developer based in Dallas who is determined to learn more about software development to build visually appealing, responsive websites and apps.
                    </p>
                    <div className="justify-center block">
                        <a
                            href="https://docs.google.com/document/d/e/2PACX-1vT7F0g8PLUzqKUFaBgx3PsvNOjuagOGL91E5kpqUGCKB20HaEKJ88dQBERHlAKKpgwJ4XoerODjTpVm/pub"
                            className="inline-flex justify-center w-full md:w-fit text-white bg-indigo-500 border-0 mb-4 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg transition-colors duration-200 ease-in-out">
                            See My Resume
                        </a>
                        <a
                            href="#projects"
                            className="lg:ml-4 inline-flex justify-center w-full md:w-fit text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg transition-colors duration-200 ease-in-out">
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:flex">
                    <img
                        className="object-cover object-center rounded md:h-full md:w-full sm:h-full sm:w-full w-full h-full"
                        alt="hero"
                        src="./programming.svg"
                    />
                </div>
            </div>
        </section>
    );
}