/* ══════════════════════════════════════════
   Film & TV reviews — add one entry per title.
   - id: unique, URL-safe slug (no spaces) — used in the "Read more" link
   - excerpt: short teaser shown on the Home page and the archive page
   - review: the full long-form write-up, as an array of paragraphs
     (each array item becomes its own <p> on the full review page)
   ══════════════════════════════════════════ */

const reviewsData = [
  {
    id: "spirited-away",
    type: "Film",
    title: "Spirited Away",
    creator: "Hayao Miyazaki, 2001",
    stars: 5,
    excerpt: "No film has ever made me feel more like a child standing at the edge of something immense and unknowable. A masterwork.",
    review: [
      "No film has ever made me feel more like a child standing at the edge of something immense and unknowable. Spirited Away doesn't just tell a story — it builds a whole logic of its own, one where bathhouses for spirits and soot sprites and a dragon who used to be a river all feel less like fantasy and more like memory, like something you forgot you once believed.",
      "Chihiro's arc works precisely because Miyazaki refuses to rush it. Her transformation from a sullen, frightened child into someone capable of holding a job, keeping a promise, and walking calmly past monsters happens in increments so small you almost don't notice them — until the scene on the train, the quietest in the film, where you realize she has become someone else entirely, and you trust her completely.",
      "And then there's Haku, and No-Face, and the whole unbearable tenderness of the bathhouse — a place built on greed that somehow also contains real kindness, real rules, real consequences for forgetting your name. That tension between the grotesque and the gentle is, I think, the whole point: the world will try to make you forget who you are, and the only defence is memory, and love, and a promise kept."
    ]
  }

  // Add new reviews below — copy a block above and edit the fields.
  // For a TV show, just set type: "TV Show" and creator to the showrunner/creator + year(s):
  // {
  //   id: "some-show",
  //   type: "TV Show",
  //   title: "Show Title",
  //   creator: "Creator Name, 2020–2023",
  //   stars: 4,                 // 1–5
  //   excerpt: "One or two sentences shown on Home and the archive page.",
  //   review: [
  //     "First paragraph of the full review.",
  //     "Second paragraph.",
  //     "As many paragraphs as you want."
  //   ]
  // },
];
