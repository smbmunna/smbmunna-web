import { Link } from "react-router-dom";
import { projectData } from "@/data/projects";

function SlideCard({ project, hidden }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="group shrink-0 w-56 md:w-64 mr-4 rounded-xl overflow-hidden bg-[#2a2b2e] border border-amber-500/10 hover:border-amber-500/60 transition-colors duration-300"
    >
      <div className="aspect-video overflow-hidden bg-gray-700">
        <img
          src={project.thumb}
          alt={hidden ? "" : project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="px-3 py-2 text-sm font-medium text-gray-200 truncate group-hover:text-amber-400 transition-colors">
        {project.title}
      </h3>
    </Link>
  );
}

export default function ProjectsSlider() {
  if (!projectData.length) return null;

  // One "loop" must be wider than the viewport or a gap shows before it repeats,
  // so repeat the projects until a loop has at least MIN_CARDS cards.
  const MIN_CARDS = 6;
  const repeats = Math.ceil(MIN_CARDS / projectData.length);
  const loop = Array.from({ length: repeats }, () => projectData).flat();

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-amber-500 text-lg md:text-xl font-semibold tracking-tight">
          Recent Projects
        </h2>
        <Link
          to="/portfolio"
          className="text-xs md:text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          View all →
        </Link>
      </div>

      {/* Viewport: fades the edges so cards slide in/out softly */}
      <div className="projects-slider overflow-hidden">
        {/* Track holds the list twice; translating by -50% loops seamlessly.
            Cards use margin (not gap) so both halves are exactly equal width. */}
        <div className="projects-slider-track flex w-max">
          {[...loop, ...loop].map((p, i) => (
            <SlideCard
              key={`${p.id}-${i}`}
              project={p}
              hidden={i >= projectData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
