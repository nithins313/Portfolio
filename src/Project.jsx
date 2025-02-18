import React from "react";
import stock from "./assets/stock.jpg";
import RAT from "./assets/RAT.avif";
import datawatch from "./assets/datawatch.jpg";
import food from "./assets/foodorder.jpg";
import bunker from "./assets/bunker.jpg";
import python from "./assets/Python.png";
import c from "./assets/c.png";
import cpp from "./assets/C++.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import react from "./assets/react.png";
import chatbot from "./assets/chatbot.jpg";
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative border rounded-lg overflow-hidden shadow-lg">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
        <p className="text-white p-4">{project.descriptiom}</p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      </div>
      <div className="p-4">
        <h2 className="text-xl text-white font-bold">{project.title}</h2>
        <p className="text-gray-600">{project.stack}</p>
      </div>
    </div>
  );
};
const stack = {
  node: node,
  react: react,
  express: express,
  c: c,
  cpp: cpp,
  python: python,
};
const Project = () => {
  const proj = {
    stock: {
      descriptiom:
        "Designed and implemented a comprehensive stock market simulation program in C++ to model the dynamic behavior of financial markets.",
      title: "Stock Market simulation",
      stack: "c++",
      link: "https://github.com/Vengateshwaran1/Market-Playground",
      img: stock,
    },
    datawatch: {
      descriptiom:
        "A Data monitor mobile application built using Java. It focuses on tracking network data usage of individual apps. An user can select the apps of their interest and get info about their network usage in real-time.",
      title: "Data Watch",
      stack: "Java",
      link: "https://github.com/sai-venkii/Data-Watch",
      img: datawatch,
    },
    rat: {
      descriptiom:
        "Designed and implemented a Remote Access Trojan (RAT) using Python. This project focuses on remote control and monitoring of systems, highlighting both the technical implementation and potential security implications.",
      title: "Remote access trojans (RATs)",
      stack: "Python",
      link: "https://github.com/Dineshprasath7/RAT",
      img: RAT,
    },
    foodorder: {
      descriptiom:
        "Created a food Ordering website for the users to view restaurants, order their food.",
      title: "Food order",
      stack: "React.Js, Express.Js, Mysql",
      link: "https://github.com/nithins313/Foodorder",
      img: food,
    },
    bunker: {
      descriptiom: "Web scraping app using Jsoup and Android Studio",
      title: "Bunker APP",
      stack: "Java",
      link: "https://github.com/Dineshprasath7/BunkerApp",
      img: bunker,
    },
    Chatbot: {
      descriptiom: "The Chatbot project is a web application that integrates AI-driven conversational capabilities using the Gemini API.",
      title: "ChatBot",
      stack: "React.js, Express.js, Gemini API, MongoDB, Docker",
      link: "https://github.com/nithins313/Chatbot",
      img: chatbot,
    }, 
  };
  return (
    <div className="w-[1000px] mx-auto">
      <div>
        <h1 className="w-fit mx-auto text-[#00ff00] flex text-[30px]">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.values(proj).map((proj1, index) => (
          <ProjectCard key={index} project={proj1} />
        ))}
      </div>
      <div>
        <h1 className="w-fit mx-auto text-[#00ff00] flex text-[30px]">
          Tech Stack
        </h1>
        <br />
        <div className="flex flex-wrap h-[100px]">
          {Object.entries(stack).map(([key, value]) => (
            <div key={key} className="mx-auto my-auto pt-6">
              <img src={value} alt={key} className="h-[60px] w-[60px]" />
              <p className="text-center text-white text-sm mt-1">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
