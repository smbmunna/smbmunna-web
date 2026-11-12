import socialsData from "../../data/socials.json";
import { socialIconMap } from "../../data/socialIcons";

export default function SocialMedia() {
  return (
    <section className="bg-[#343539] rounded-2xl px-0 pt-6 pb-6 mb-10">
      <h2 className="text-amber-500 text-lg md:text-xl font-semibold mb-6 tracking-tight">
        My Posts on Popular Media
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {socialsData.map((social) => {
          const Icon = socialIconMap[social.icon];
          return (
            <article
              key={social.id}
              className="bg-gray-800/30 rounded-xl p-4 md:p-5 transition-all duration-200 hover:bg-gray-800/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 shrink-0">
                  {Icon ? <Icon size={18} /> : null}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-100 leading-none">
                    {social.platform}
                  </h3>
                  <p className="text-xs text-gray-500 leading-none">
                    {social.handle}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                {social.title}
              </p>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
              >
                Visit profile &rarr;
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
