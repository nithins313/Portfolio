import React from "react";
import { TypeAnimation } from "react-type-animation";
import photo from "./assets/photo.webp";
const About = () => {
  return (
    <div>
      <div className="text-white text-3xl w-[900px] h-fit m-auto leading-snug flex flex-auto flex-col md:flex-row min-h-[300px]">
        <div className="flex-1 p-4">
          <p>
            <TypeAnimation
              sequence={[
                "Hi I'm", // Types 'One'
                1000, // Waits 1s
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ fontSize: "1.5em", display: "inline-block" }}
            />
          </p>
          <p>
            <TypeAnimation
              sequence={[
                "Nithin", // Types 'One'
                1000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </p>
          <p>
            <TypeAnimation
              sequence={[
                "And I'm a" + " ", // Types 'One'
                1000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ fontSize: "1em", display: "inline-block" }}
            />
            <TypeAnimation
              sequence={[
                " " + " Penetration Tester", // Types 'One'
                1000, // Waits 1s
                " " + " Backend Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s

                " " + " Ethical Hacker", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1em", display: "inline" }}
            />
          </p>
          <p className="text-[20px] leading-7">
            As a learning enthusiast, I have an adaptive nature that helps me
            thrive in fast-paced environments. I have a keen interest in
            research that deepens my understanding of the surrounding world.
            <br />
            As a natural teacher who believes in the power of knowledge-sharing,
            and an attentive listener, I thrive on feedback and accept criticism
            as an opportunity for growth.
          </p>
        </div>
        <div className="relative-auto mr-auto flex-1 flex justify-center items-center h-fit p-4">
          <span className="mx-auto absolute rounded-full flex border-[16px] bg-transparent border-transparent border-t-lime-700 border-r-lime-700 border-l-lime-700 w-[370px] h-[370px] mt-12 animate-circleRotate circle"></span>
          <img src={photo} width="300px" className="relative mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
