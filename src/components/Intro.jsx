import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-6 text-center">
      <h1 className="mb-1 text-4xl font-bold md:mb-3 md:text-7xl">ASOwnerYT</h1>
      <p className="mb-3 w-3/4 text-base font-medium md:text-xl">
        Greetings! I'm ASOwnerYT, a 15 year old software developer from NZ.
      </p>
      <ul className="mb-6 max-w-xl list-disc font-bold text-md md:text-xl">
        <li>HTML, CSS, JS</li>
        <li>React and Tailwind</li>
        <li>Video editing</li>
      </ul>
    </div>
  );
}
