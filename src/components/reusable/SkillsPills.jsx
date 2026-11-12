import skillsData from "../../data/skills.json";
import { iconMap } from "../../data/icons";

export default function SkillsPills() {
  return (
    <section className="bg-[#343539] rounded-2xl px-0 pt-0 pb-6 mb-10">
      <h2 className="text-amber-500 text-lg md:text-xl font-semibold mb-4 tracking-tight">
        Tech Stack
      </h2>
      <div className="flex flex-wrap items-center gap-2 md:gap-3 min-w-0">
          {skillsData.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <button
                key={skill.id}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-gray-300 text-xs md:text-sm font-medium transition-all duration-200 border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500 shrink-0"
                aria-label={skill.name}
              >
                {Icon ? <Icon className="text-amber-400" size={15} /> : null}
                <span className="leading-none">{skill.name}</span>
              </button>
            );
          })}
          {!skillsData.length && (
            <div className="text-gray-500 text-xs italic">No skills added yet</div>
          )}
        </div>
      </section>
  );
}
