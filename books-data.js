/* ══════════════════════════════════════════
   Book reviews — add one entry per title.
   - id: unique, URL-safe slug (no spaces) — used in the "Read more" link
   - creator: author name (and year, if you want it)
   - stars: 1–5
   - excerpt: short teaser shown on Home and the archive page
   - review: the full long-form write-up, as an array of paragraphs
     (each array item becomes its own <p> on the full review page)
   ══════════════════════════════════════════ */

const booksData = [
  {
    id: "thousand -splendid",
    title: "A Thousand Splendid Suns",
    creator: "Khalid Hosseini",
    stars: 5,
    excerpt: "One of the most mealncholically beautiful book I've ever read.",
    review: [
      `What does it mean to endure when every structure around you—political, domestic, spiritual—has been engineered to erase you? Khaled Hosseini's A Thousand Splendid Suns (2007) is a devastating exploration of this question. The novel traces the lives of two Afghan women, Mariam and Laila, separated by a generation yet bound together by the cruelties of a shared husband, a shared war, and ultimately a shared, fiercely protective love. Mariam, born illegitimate in Herat, is married off at fifteen to the abusive Rasheed after her mother's death—a betrayal that inaugurates a lifetime of silent suffering. Laila, bright and educated in Kabul's comparatively liberal era, loses her parents to a bomb and is absorbed into the same household. What begins as suspicion between the two women slowly transforms into a bond that transcends the biological, becoming the emotional architecture upon which both women rebuild a sense of selfhood. Hosseini does not merely chronicle the Soviet invasion, the civil war, and the rise of the Taliban as historical backdrop; he folds these seismic upheavals into the intimate textures of domestic life—a forced burqa, a child sent to an orphanage, the particular silence of a woman who has learned that speech invites violence. The result is a narrative that functions simultaneously as political testimony and private elegy.`,

      `Hosseini's prose is largely straightforward, yet punctuated by moments of striking imagery and symbolism that lend the narrative its emotional gravity. He is not, in the strictest sense, a stylist of the same order as, say, an Annie Ernaux or an Ocean Vuong—his craft lies less in the architecture of individual sentences and more in the cumulative weight of scene and situation. The novel's structure, divided into four parts that alternate between Mariam's and Laila's perspectives, mirrors the fragmented nature of Afghan history itself: each woman's story is incomplete without the other, just as the country's narrative cannot be told through a single lens. One of the most potent thematic undercurrents is the question of motherhood as a form of sacrifice so total it borders on self-annihilation. Every mother in this novel loses something essential—sanity, will, freedom, life itself. Mariam's final act, which I will not disclose, is perhaps the most wrenching illustration of this: a woman who spent her entire existence being told she was worthless choosing, in a single decisive moment, to assert the immeasurable worth of another's life. It is a scene that does not invite tears so much as demand a fundamental reassessment of what courage looks like when it wears no uniform and receives no recognition.`,

      `To read A Thousand Splendid Suns is to commit to an act of sustained emotional confrontation. The novel does not flinch, and it does not permit the reader to flinch either. There are moments where the weight of Hosseini's subject matter—domestic violence rendered in visceral detail, the systematic dehumanisation of women under theocratic rule—feels almost unbearable. Yet the novel earns its title. The "thousand splendid suns" are not a promise of redemption; they are a quiet insistence that beauty and tenderness persist even in the most inhospitable conditions, hidden behind walls, buried beneath rubble, whispered between two women who have nothing left but each other. If I have a reservation, it is that Hosseini occasionally subordinates narrative complexity to moral clarity—the novel's didactic impulse sometimes flattens what might otherwise be a more ambiguous, and therefore more haunting, portrait of complicity and survival. But this is a minor fracture in what is otherwise a formidable work. Ultimately, A Thousand Splendid Suns leaves us with a disquieting meditation: in a world that systematically renders certain lives invisible, the most radical act of resistance may simply be the refusal to let another person vanish.`
    ]
  }

  // Add new book reviews below — copy a block above and edit the fields.
  // {
  //   id: "some-book-slug",
  //   title: "Book Title",
  //   creator: "Author Name",
  //   stars: 5,                 // 1–5
  //   excerpt: "One or two sentences shown on Home and the archive page.",
  //   review: [
  //     "First paragraph of the full review.",
  //     "Second paragraph.",
  //     "As many paragraphs as you want."
  //   ]
  // },
];
