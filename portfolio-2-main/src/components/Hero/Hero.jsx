import React from "react";
import PersonImg from "../../assets/website/Mypp.jpg";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="" className="h-96 w-80" />
          </div>
          <div className="space-y-3 ">
            <p className="text-primary">Hello I'm Wai Yan Hein</p>
            <h1 className="text-5xl font-semibold">Web Developer</h1>
            <p>
             I studied computer university(pyay).I'm final student.There are two majors in my university.They are Computer Science and Computer Techlonogy.
             I'm 24 years old.I don't have experience but i have written many projects.
            </p>
            <button className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
             <a href="#">About Me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
