import React from "react";

const languages = ["Javascript", "TypeScript", "Html", "CSS", "C#", "php"];
const frameWorks = ["Next.js", "Angular", "Vue js", "Asp Core", "laravel"];
const libraries = [
  "React",
  "tailwind",
  "styled-component",
  "redux tool-kit",
  "Formik",
  "bootstrap",
  "react-router-dom",
  "Material-UI",
];

const Skills = () => {
  const languagesList = languages.map((item, index) => (
    <li className="text-xl" key={index}>
      {item} {index === languages.length - 1 ? "." : ","}
      &nbsp;
    </li>
  ));

  const frameWroksList = frameWorks.map((item, index) => (
    <li className="text-xl" key={index}>
      <span>
        {item} {index === frameWorks.length - 1 ? "" : ","}
        &nbsp;
      </span>
    </li>
  ));

  const librariesList = libraries.map((item, index) => (
    <li className="text-xl" key={index}>
      <span>
        {item} {index === libraries.length - 1 ? "" : ","}
        &nbsp;
      </span>
    </li>
  ));
  return (
    <div className="min-h-screen py-48 flex flex-col justify-between gap-y-2">
      <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-2 animate-fadInTopBasic1">
        <h1 className="text-3xl md:text-5xl ">Languages:</h1>
        <ul className=" p-0 flex flex-wrap max-w-sm justify-center md:max-w-full">
          {languagesList}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-2 animate-fadInTopBasic2">
        <h1 className="text-3xl md:text-5xl ">Frameworks:</h1>
        <ul className=" p-0 flex flex-wrap max-w-sm justify-center md:max-w-full">
          {frameWroksList}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-2 animate-fadInTopBasic3">
        <h1 className="text-3xl md:text-5xl ">Libraries:</h1>
        <ul className=" p-0 flex flex-wrap  justify-center md:max-w-full mi">
          {librariesList}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
