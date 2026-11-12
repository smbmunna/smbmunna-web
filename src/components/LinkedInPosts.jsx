import { useState } from "react";
import { PiArrowUpRight, PiCopySimpleFill } from "react-icons/pi";
import { LINKEDIN_PROFILE, postsData } from "@/data/posts";
import PostLightbox from "./PostLightbox";

// Same seamless-loop trick as ProjectsSlider: a loop must be wider than the
// viewport, so short lists are repeated until a loop has at least MIN_CARDS.
const MIN_CARDS = 6;
// Seconds per card, so the scroll speed stays the same however many posts there are.
const SECONDS_PER_CARD = 7;

function PostCard({ post, hidden, onOpen }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isCarousel = post.slides.length > 1;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      aria-label={hidden ? undefined : `Open post: ${post.title}`}
      className="group shrink-0 w-44 md:w-52 mr-4 text-left rounded-xl overflow-hidden bg-[#2a2b2e] border border-amber-500/10 hover:border-amber-500/60 focus-visible:border-amber-500 focus-visible:outline-none transition-colors duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-700">
        {!isLoaded && <div className="absolute inset-0 bg-gray-700 animate-pulse" />}
        <img
          src={post.slides[0]}
          alt={hidden ? "" : post.summary}
          loading="lazy"
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          className={`size-full object-cover object-top transition duration-500 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {isCarousel && (
          <span
            className="absolute top-2 right-2 text-white drop-shadow-md"
            title={`${post.slides.length} slides`}
          >
            <PiCopySimpleFill size={18} />
          </span>
        )}
      </div>
      <h3 className="px-3 py-2 text-sm font-medium text-gray-200 truncate group-hover:text-amber-400 transition-colors">
        {post.title}
      </h3>
    </button>
  );
}

export default function LinkedInPosts() {
  // { post, slide } of the open lightbox, or null when closed
  const [open, setOpen] = useState(null);

  if (!postsData.length) return null;

  const repeats = Math.ceil(MIN_CARDS / postsData.length);
  const loop = Array.from({ length: repeats }, () => postsData).flat();

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-amber-500 text-lg md:text-xl font-semibold tracking-tight">
          Tech Posts
        </h2>
        <a
          href={LINKEDIN_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          Follow on LinkedIn <PiArrowUpRight size={14} />
        </a>
      </div>

      {/* Shares the marquee styles in App.css with ProjectsSlider */}
      <div className="projects-slider overflow-hidden">
        <div
          className={`projects-slider-track flex w-max ${open ? "is-paused" : ""}`}
          style={{ "--marquee-duration": `${loop.length * SECONDS_PER_CARD}s` }}
        >
          {[...loop, ...loop].map((post, i) => (
            <PostCard
              key={`${post.id}-${i}`}
              post={post}
              hidden={i >= postsData.length}
              onOpen={() =>
                setOpen({ post: postsData.indexOf(post), slide: 0 })
              }
            />
          ))}
        </div>
      </div>

      {open && (
        <PostLightbox
          posts={postsData}
          postIndex={open.post}
          slideIndex={open.slide}
          onChange={(post, slide) => setOpen({ post, slide })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
