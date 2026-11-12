// LinkedIn posts shown on the homepage.
//
// HOW TO ADD A POST
// 1. Export the post image(s) from LinkedIn into public/posts/<folder>/
//    (for a carousel, one image per slide: 1.png, 2.png, ...).
// 2. Add an entry below. slides[0] is the grid cover.
// 3. `summary` doubles as the image alt text, since the post's text lives
//    inside the image and search engines / screen readers can't read it.
// 4. `date` ("YYYY-MM-DD") and `url` (link to the LinkedIn post) are optional.
//    Without a url, "View on LinkedIn" opens your profile instead.
//
// The order here is the order on the page.
//
// Not included (see notes from setup):
// - public/posts/nodejs_03: exact copy of nodejs_01.
// - public/posts/ts_05: cover says "Objects / Parameter Properties" but
//   slides 2-9 are the Promise lesson from ts_04. Re-export it, then add it.

export const LINKEDIN_PROFILE = "https://linkedin.com/in/mahmud-munna-75849772";

const slides = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/posts/${folder}/${i + 1}.png`);

export const postsData = [
  {
    id: "ts_01",
    title: "TypeScript Interfaces, Generics & Beyond",
    summary:
      "Interfaces for describing object shapes, type alias vs interface for function signatures, generics with constraints, and type assertions in TypeScript.",
    tags: ["TypeScript", "Generics"],
    date: "",
    url: "",
    slides: slides("ts_01", 6),
  },
  {
    id: "ts_02",
    title: "Advanced TypeScript Concepts",
    summary:
      "Conditional types, the typeof and keyof operators, and mapped types: writing types that adapt to and transform other types.",
    tags: ["TypeScript", "Advanced"],
    date: "",
    url: "",
    slides: slides("ts_02", 7),
  },
  {
    id: "ts_03",
    title: "TypeScript Utility Types",
    summary:
      "Pick, Omit, Required, Partial, Readonly and Record explained with examples: build new types from existing ones instead of rewriting them.",
    tags: ["TypeScript", "Utility Types"],
    date: "",
    url: "",
    slides: slides("ts_03", 8),
  },
  {
    id: "ts_04",
    title: "TypeScript Promises",
    summary:
      "Typed Promises, async/await, typing API responses, fetching data with types and handling errors: predictable async code with TypeScript.",
    tags: ["TypeScript", "Async"],
    date: "",
    url: "",
    slides: slides("ts_04", 9),
  },
  {
    id: "ts_06",
    title: "TypeScript Enums",
    summary:
      "Numeric and string enums with real-world examples: define a fixed set of named values to make code more readable, safer and easier to maintain.",
    tags: ["TypeScript", "Enums"],
    date: "",
    url: "",
    slides: slides("ts_06", 8),
  },
  {
    id: "vscode_01",
    title: "Must-Have VS Code Extensions for Frontend Developers",
    summary:
      "Prettier, ESLint, Live Server, Tailwind CSS IntelliSense, GitLens and Path IntelliSense: six extensions that speed up everyday frontend work.",
    tags: ["VS Code", "Tooling"],
    date: "",
    url: "",
    slides: slides("vscode_01", 8),
  },
  {
    id: "nodejs_02",
    title: "How Node.js Handles Multiple Requests",
    summary:
      "Backend Development Series, Part 2: how Node.js stays fast with thousands of users. It runs on a single thread with non-blocking I/O, hands heavy tasks to the background, and gets results back through the Event Loop.",
    tags: ["Node.js", "Event Loop", "Backend"],
    date: "",
    url: "",
    slides: slides("nodejs_02", 5),
  },
  {
    id: "nodejs_01",
    title: "Node.js Basics",
    summary:
      "Backend Development Series, Part 1: what Node.js is (a JavaScript runtime built on Chrome's V8 engine), why developers use it, and the companies that run it in production, like Netflix, PayPal, Uber and LinkedIn.",
    tags: ["Node.js", "JavaScript", "Backend"],
    date: "",
    url: "",
    slides: slides("nodejs_01", 5),
  },
];
