import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
