/* ══════════════════════════════════════════
   Writings -- add one entry per piece.
   - id: unique, URL-safe slug (no spaces) -- used in the "Read more" link
   - genre: e.g. "Scribbles", "Essay", "Poetry", "Short Story" -- shown as a label
   - excerpt: short teaser shown on the Home page and the archive page
   - poem: set to true for poetry -- preserves line breaks and uses poem spacing
   - body: the full piece, as an array of paragraphs (or stanzas for poems)
     (each array item becomes its own <p> on the full page; use \n inside
     a string for a line break within that paragraph/stanza)
   ══════════════════════════════════════════ */

const writingsData = [
  {
    id: "alternate-universe",
    genre: "Scribbles",
    title: "Alternate Universe",
    excerpt: "In some other world, I am an unscathed child who wakes up to the sparkling feeling of a carefree life...",
    poem: false,
    body: [
      "In some other world, I am an unscathed child who wakes up to the sparkling feeling of a carefree life. There, the color of the sky is a gorgeous mixture of amethyst and turquoise - hauntingly beautiful and forever dark. Trees talk to people, and lichies are grown all seasons.",
      "In that parallel universe, I'm busy living for the trivialities - I weave jasmine flowers and dandelions into a bracelet; I knead bread out of a chocolate and strawberry blended dough; I fell asleep while reading Zahir Raihan's novels under the flickering light of vanilla-scented candles; I get hurt while chasing monarch butterflies and then my mother makes me payesh and father buys me fairy lights to stop my crying.",
      "In that alternate universe, I heal myself and save myself. I do not grow to be a cynic but rather a happy soul, running barefoot through moonlit meadows and my scars sparkling like constellations beneath the star-studded sky."
    ]
  },
  {
    id: "happiness-sorrow-feeling",
    genre: "Scribbles",
    title: "Moondrae",
    excerpt: "I feel there’s something persisting in the space between happiness and sadness. It’s not joy, sorrow, or nostalgia...",
    poem: false,
  body: [
  `I feel there’s something persisting in the space between happiness and sadness. It’s not joy, sorrow, or nostalgia. It’s something more elusive with its heaviness and strange comfort at the same time.
  It’s certainly not hope. Hope has a direction, stretching toward some distant end, but this has no direction--it only rests, like some kind of emotional stillness, like the pause between heartbeats or like the ocean holding its breath before the next wave rises.`,

  `At night, I walk with it sometimes, under the still moon peering down at the ground it cannot touch--and realize it feels like that moon. I don’t know what it wants from me; I only know that it has settled inside me and made itself at home. And then I find myself in the ache of not knowing how to name it. So, today I named it ‘Moondrae’.`
]
  },
  {
    id: "translations-of-rain",
    genre: "Poetry",
    title: "The Night Before Sunrise",
    excerpt: "A poem I wrote in 8th grade to express my wish to explore late night and let go of my unspoken words",
    poem: true,
    body: [             
      `The night is still young,`,
      `Let's take a stroll along the meadows,`,
      `Stars are waiting for you to come outside,`,
      `Don't fear the darkness, it's covered in lights.`,
      `I don’t wanna sit inside, just crave to be soaked in moonlight;`,
      `I don’t fear darkness, but it’s the loneliness that I fear,`,
      `So darling, accompany me for this one night.`,
      `No worries, no chaos, no lies;`,
      `Add some music and just feel the vibes.`,

      `Aren't our minds filled with unspoken words?`,
      `Won’t it be lovely to pour them out and ease our heavy hearts?`,
      `Can you trust me once and talk to the moon?`,
      `No remarks, no judgements, you are just ONLY heard.`,
      `Honey, you are free to do anything right now,`,
      `Shed tears, laugh hard, play tunes, dance wild;`,
      `Do whatever you want to mend your broken heart,`,
      `The night will make them fade with his going,`,
      `And you will again find yourself smiling.`, 

      `The night is still young`,
      `So love, let's just feel the hype`,
      `Cuss out your worries,`,
      `Don’t fear the timing, I promise`,
      `We will return before sunrise. 🍁`
    ]
  }

  // Add new writings below -- copy a block above and edit the fields.
  // {
  //   id: "some-piece",
  //   genre: "Short Story",      // or "Essay", "Poetry", "Scribbles", etc.
  //   title: "Piece Title",
  //   excerpt: "One or two sentences shown on Home and the archive page.",
  //   poem: false,               // set true for poetry to preserve line breaks
  //   body: [
  //     "First paragraph or stanza.",
  //     "Second paragraph or stanza.",
  //     "As many as you want. Use \\n for a line break within one entry."
  //   ]
  // },
];
