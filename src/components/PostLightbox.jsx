import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PiArrowUpRight, PiCaretLeft, PiCaretRight, PiX } from "react-icons/pi";
import { LINKEDIN_PROFILE } from "@/data/posts";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/**
 * Full-screen viewer for LinkedIn posts.
 * Arrows / swipe step through a carousel's slides, then continue into the
 * next or previous post, so every slide of every post is one long sequence.
 */
export default function PostLightbox({ posts, postIndex, slideIndex, onChange, onClose }) {
  const post = posts[postIndex];
  const slideCount = post.slides.length;
  const src = post.slides[slideIndex];

  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const [loadedSrc, setLoadedSrc] = useState(null);

  const hasPrev = postIndex > 0 || slideIndex > 0;
  const hasNext = postIndex < posts.length - 1 || slideIndex < slideCount - 1;

  const goNext = () => {
    if (slideIndex < slideCount - 1) onChange(postIndex, slideIndex + 1);
    else if (postIndex < posts.length - 1) onChange(postIndex + 1, 0);
  };
  const goPrev = () => {
    if (slideIndex > 0) onChange(postIndex, slideIndex - 1);
    else if (postIndex > 0) onChange(postIndex - 1, posts[postIndex - 1].slides.length - 1);
  };

  // Keep the latest handlers reachable from the one-time keydown listener.
  const nav = useRef({});
  useEffect(() => {
    nav.current = { goNext, goPrev, onClose };
  });

  // Keyboard: Esc closes, arrows navigate, Tab stays inside the dialog.
  // Also move focus in on open and restore it on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") nav.current.onClose();
      else if (e.key === "ArrowRight") nav.current.goNext();
      else if (e.key === "ArrowLeft") nav.current.goPrev();
      else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll("a[href], button:not([disabled])");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, []);

  // Preload the next slide so paging feels instant.
  useEffect(() => {
    const next =
      post.slides[slideIndex + 1] ?? posts[postIndex + 1]?.slides[0];
    if (next) new Image().src = next;
  }, [posts, post, postIndex, slideIndex]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const navBtn =
    "absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center size-10 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors";

  // Portal to <body>: the page wrapper uses a transform animation, which would
  // otherwise trap this `fixed` overlay inside the middle column.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overscroll-contain animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="post-lightbox-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-full flex flex-col md:flex-row overflow-hidden rounded-2xl bg-[#232324] border border-amber-500/20 shadow-2xl"
      >
        {/* Image area */}
        <div
          className="relative flex-1 min-h-0 flex items-center justify-center bg-black select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {loadedSrc !== src && (
            <div className="absolute inset-0 m-auto size-10 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
          )}
          <img
            key={src}
            src={src}
            alt={`${post.title}${slideCount > 1 ? ` (slide ${slideIndex + 1} of ${slideCount})` : ""}: ${post.summary}`}
            onLoad={() => setLoadedSrc(src)}
            draggable={false}
            className={`max-h-[60dvh] md:max-h-[85dvh] w-auto object-contain transition-opacity duration-300 ${
              loadedSrc === src ? "opacity-100" : "opacity-0"
            }`}
          />

          {hasPrev && (
            <button type="button" onClick={goPrev} className={`${navBtn} left-3`} aria-label="Previous">
              <PiCaretLeft size={20} />
            </button>
          )}
          {hasNext && (
            <button type="button" onClick={goNext} className={`${navBtn} right-3`} aria-label="Next">
              <PiCaretRight size={20} />
            </button>
          )}

          {slideCount > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5" aria-hidden="true">
              {post.slides.map((s, i) => (
                <span
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    i === slideIndex ? "w-5 bg-amber-500" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Caption panel */}
        <div className="md:w-72 shrink-0 p-5 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-white/10">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs text-gray-400">
              {[post.date && formatDate(post.date), slideCount > 1 && `${slideIndex + 1}/${slideCount}`]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mt-1 -mr-1 p-1 rounded-full text-gray-400 hover:text-amber-400 hover:bg-white/5"
            >
              <PiX size={20} />
            </button>
          </div>

          <h3 id="post-lightbox-title" className="text-lg font-semibold text-white leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-gray-300">{post.summary}</p>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs text-amber-400 border border-amber-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={post.url || LINKEDIN_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 text-black text-sm font-medium hover:bg-amber-400 transition-colors"
          >
            View on LinkedIn <PiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
