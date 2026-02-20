import React from 'react'

const About = () => {
  return (
    <div className=" mt-[60px] flex items-center justify-center px-4 max-w-[1152px] dark:text-normalbg mx-auto">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 dark:text-normalbg">
          About Myanmar Store
        </h1>

        <p className="text-gray-600 leading-relaxed mb-4 dark:text-normalbg">
          Myanmar Store is a simple and modern web application built to showcase
          authentic Myanmar food and products. The goal of this project is to
          make traditional Myanmar cuisine more accessible and enjoyable for
          everyone.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 dark:text-normalbg">
          This project is built using <span className="font-medium">React</span>{" "}
          for the frontend and styled with{" "}
          <span className="font-medium dark:text-normalbg">Tailwind CSS</span> to ensure a clean,
          responsive, and user-friendly experience.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8 dark:text-normalbg">
          Whether you are exploring new flavors or reconnecting with familiar
          tastes, Myanmar Store aims to deliver a smooth and delightful browsing
          experience.
        </p>
      </div>
    </div>
  );
}

export default About