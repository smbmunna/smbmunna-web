import { useState } from "react";

export default function PortfolioCard({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="w-11/12 md:w-full mx-auto ">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Skeleton Loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}

        {/* Project Image */}
        <img
          className={`rounded-2xl transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={project.thumb}
          alt="project img"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="px-4">
        <h2 className="text-sm font-light my-2">{project.title}</h2>
        <p className="text-xs text-gray-400">{project.subtitle}</p>
      </div>
    </div>
  );
}
