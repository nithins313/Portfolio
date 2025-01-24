import React from "react";
import github from "./assets/github.webp";
import lin from "./assets/linkedin.webp";
import insta from "./assets/insta.jpg";

const imageMap = { github, lin, insta };

const Contact = () => {
  const cont = {
    lin: "http://linkedin.com/in/nithin313",
    insta: "https://www.instagram.com/n.i.t.h.i.n_s/?__d=1",
    github: "https://github.com/nithins313",
  };

  return (
    <div className="w-[1000px] mx-auto">
      <div>
        <h1 className="w-fit mx-auto text-[#00ff00] flex text-[30px]">
          Contact
        </h1>
        <div className="flex flex-wrap h-[100px]">
          {Object.entries(cont).map(([key, value]) => (
            <div key={key} className="mx-auto my-auto pt-6">
              <a href={value} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageMap[key]}
                  alt={value}
                  className="h-[60px] w-[60px]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
