import React from "react";

export default function About() {
    return (
        <section id="about" className="bg-neutral-900 pt-10 pb-10 md:pt-20 md:pb-40">
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
                <div className="pb-10 md:pb-0 md:pr-24 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded w-full h-full"
                        alt="hero"
                        src="./me-portfolio.png"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl font-medium text-white mb-4">About Me</h1>
                    <p className="leading-relaxed text-left">
                        Hello World! My name is Luis Sevilla, a developer looking to explore the world of software development. With a background in IT and Customer Service, I believe I can fit right in and use my skills to make a successful, hard-working career in software development.
                        <br />
                        <br />
                        Fueled by my passion of becoming a React developer, I'm determined to comprehend software development technologies at a professional level. Like many of my peers in development, I consider myself a "forever student", eager to stay up-to-date with the latest digital trends through coursework and professional development.
                        <br />
                        <br />
                        One of my biggest accomplishments was graduating from the Fullstack Academy Web Development Bootcamp. My desire to learn and the application of my knowledge into my projects played a huge role in completing the course. From creating individual components to working with a small team to create a full stack e-commerce website, my ambitious spirit helped me find success in the early stages of my journey to become a software developer.
                        <br />
                        <br />
                        I'm currently looking to start my first position as a developer at a great company. In the meantime, I'm sharpening my programming skills and creating new projects. Please feel free to reach out and connect at any time!
                    </p>
                </div>
            </div>
        </section>
    );
}