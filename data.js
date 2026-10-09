/* Ibraheem Biobaku — site content.
   Edit text, rates and policies here; index.html reads everything from this file. */
window.IB = {
  name: "Ibraheem Biobaku",
  fullName: "Ibraheem Biobaku",
  tagline: "Visual storytelling for brands, artists, athletes, creatives, and people with something to say.",
  base: "Ontario, Canada",
  email: "Ibraheembio5@gmail.com",
  phone: "(365) 889-7815",
  phoneRaw: "+13658897815",
  instagram: [
    { handle: "@ibraheembio", url: "https://www.instagram.com/ibraheembio/" },
    { handle: "@ibraheembi0", url: "https://www.instagram.com/ibraheembi0/" }
  ],
  studio: "Heemylense",
  discipline: "Photography · Film · Creative Direction",
  pitch: "Visual storytelling for brands, artists, athletes, creatives, and people with something to say.",
  workedWith: ["Tiwa Savage", "Reekado Banks", "Seyi Vibez", "Shallipopi"],
  policies: [
    { k: "Commitment fee", v: "A 30% commitment fee secures your date. It is non-refundable." },
    { k: "Payment", v: "Pay by e-transfer or direct deposit." },
    { k: "Balance", v: "The remaining 70% is due 24 hours after your shoot." },
    { k: "Cancellations", v: "If you cancel, the 30% commitment fee is not returned." },
    { k: "Rescheduling", v: "Rescheduling requires payment of the full amount, unless an exemption is agreed with Ibraheem." },
    { k: "Tax & travel", v: "All prices are subject to HST. Travel fees may apply outside the standard service area." }
  ],
  rates: [
    { id: "weddings", tab: "Weddings", intro: "Wedding photography, film, or both. Custom wedding collections are available on request.",
      groups: [
        { name: "Wedding photography", packages: [
          { name: "The Intimate", price: "$1,200", hours: "4 hours of coverage", items: ["1 photographer","250+ professionally edited images","Online gallery","High-resolution digital delivery"] },
          { name: "The Signature", price: "$1,800", hours: "6 hours of coverage", popular: true, items: ["1 photographer","350+ professionally edited images","Online gallery","High-resolution digital delivery","48-hour sneak peek"] },
          { name: "The Heemylense", price: "$2,400", hours: "8 hours of coverage", items: ["1 photographer","450+ professionally edited images","Engagement session","Online gallery","High-resolution digital delivery","48-hour sneak peek"] }
        ]},
        { name: "Wedding videography", packages: [
          { name: "The Intimate", price: "$1,500", hours: "4 hours of coverage", items: ["1 videographer","Cinematic highlight film","Ceremony coverage","Professional audio","4K digital delivery"] },
          { name: "The Signature", price: "$2,000", hours: "6 hours of coverage", popular: true, items: ["1 videographer","Cinematic highlight film","Ceremony coverage","Speeches & reception coverage","Professional audio","4K digital delivery"] },
          { name: "The Ibraheem Biobaku", price: "$2,600", hours: "8 hours of coverage", items: ["1 videographer","Cinematic highlight film","Full ceremony film","Speeches & reception coverage","Professional audio","4K digital delivery"] }
        ]},
        { name: "Photo + video", feature: true, packages: [
          { name: "The Ibraheem Biobaku Wedding Collection", price: "$4,500", from: true, hours: "Up to 8 hours of coverage", blurb: "A complete visual story of your wedding day.", items: ["1 photographer","1 videographer","450+ professionally edited images","Engagement session","Cinematic highlight film","Full ceremony film","Speeches & reception coverage","Professional audio","Online gallery","High-resolution photo & 4K video delivery","48-hour photo sneak peek"] }
        ]}
      ],
      addons: [["Second photographer","$400"],["Second videographer","$500"],["Additional coverage","$200 / hour"],["Engagement session","$350"],["Wedding album","From $500"]]
    },
    { id: "photography", tab: "Photography", intro: "Portraits, editorial, lifestyle, sports and product photography.",
      groups: [{ packages: [
        { name: "Portraits", price: "$275", from: true, items: ["Up to 1 hour","Creative direction","1 location","Multiple looks","15+ professionally edited images","High-resolution digital delivery"] },
        { name: "Editorial portraits", price: "$400", from: true, blurb: "For fashion, creative, and concept-driven portraits.", items: ["Up to 2 hours","Creative direction","Multiple looks","Multiple locations","25+ professionally edited images","High-resolution digital delivery"] },
        { name: "Lifestyle", price: "$350", from: true, items: ["Up to 2 hours","Creative direction","Multiple looks / locations","Professionally edited images","Online gallery"] },
        { name: "Sports", price: "$350", from: true, items: ["Up to 2 hours","Action & portrait coverage","Athlete / team photography","Professionally edited images","High-resolution digital delivery"] },
        { name: "Product", price: "$400", from: true, items: ["Up to 5 products","Professional lighting & styling","3–5 edited images per product","High-resolution digital delivery"] }
      ]}]
    },
    { id: "film", tab: "Film & Video", intro: "From short social content to music videos and short films.",
      groups: [{ packages: [
        { name: "Social content", price: "$500", from: true, items: ["Up to 2 hours","Photo & video coverage","Multiple short-form content pieces","Creative direction","Social media-ready delivery"] },
        { name: "Product film", price: "$600", from: true, items: ["Concept development","Cinematic product cinematography","Professional lighting","Creative direction","Short-form edited film","4K digital delivery"] },
        { name: "Sports film", price: "$600", from: true, items: ["Up to 2 hours","Cinematic action coverage","Athlete / team B-roll","Creative direction","Highlight film","Social media-ready delivery"] },
        { name: "Artist visual", price: "$900", from: true, blurb: "For musicians, performers, and artists looking for a cinematic visual.", items: ["Concept development","Creative direction","Cinematography","Production","Editing & colour","Final digital delivery"] },
        { name: "Brand film", price: "$1,200", from: true, blurb: "Cinematic films created to tell your brand's story.", items: ["Concept development","Creative direction","Cinematography","Production","Editing & colour","4K digital delivery"] },
        { name: "Music video", price: "$1,500", from: true, blurb: "Custom pricing based on concept, locations, production requirements, crew, and timeline.", items: [] },
        { name: "Short film", price: "$2,000", from: true, blurb: "For stories that require a complete cinematic production.", items: ["Concept development","Creative direction","Cinematography","Production","Editing","Colour grading","Final digital delivery"] }
      ]}]
    },
    { id: "direction", tab: "Photo + Video & Direction", intro: "Combined sessions, brand content and creative direction.",
      groups: [{ packages: [
        { name: "Creative session", price: "$750", from: true, blurb: "A combined photography and video experience for creatives, brands, athletes, artists, and individuals.", items: ["Photography","Cinematography","Creative direction","Multiple looks / setups","Edited photo & video delivery"] },
        { name: "Brand content", price: "$900", from: true, blurb: "A complete visual package designed for businesses and brands.", items: ["Product / lifestyle photography","Short-form video","Creative direction","Professional lighting","Multiple content pieces","Social media-ready delivery"] },
        { name: "Creative direction", price: "$400", from: true, blurb: "For projects where the vision comes first.", items: ["Concept development","Moodboards","Shot planning","Visual direction","Location guidance","Styling guidance","On-set direction"] }
      ]}]
    },
    { id: "campaigns", tab: "Campaigns & Retainers", intro: "Larger productions and monthly content.",
      groups: [{ packages: [
        { name: "Campaigns", price: "Custom quote", blurb: "Pricing is customized according to production scope, crew, locations, talent, equipment, post-production, and timeline.", items: ["Brand campaigns","Commercials","Fashion campaigns","Product launches","Artist campaigns","Sports campaigns","Multi-location productions"] },
        { name: "Content retainer", price: "$1,500", from: true, per: "/ month", blurb: "For brands and businesses looking for consistent visual content. Custom monthly packages available.", items: ["Monthly photography & video","Short-form content","Creative direction","Content planning","Edited social media assets","Consistent visual style"] },
        { name: "Custom projects", price: "Let's talk", blurb: "Not every story fits into a package. If you have an idea, campaign, film, visual, or project in mind, let's build it. Custom quotes are available for projects requiring additional production, locations, crew, talent, equipment, or post-production.", items: [] }
      ]}]
    }
  ],
  deposit: 30,
  portrait: null, /* set to "media/portrait.jpg" when his portrait arrives */
  about: "Ibraheem Biobaku is a photographer and director working across portraits, weddings, live shows and short film. He shoots stills like a filmmaker: a concept, a location that fits the story, and room for the moments between poses. Untamed and Ivory Tide both started as photo sessions and grew into short films.",
  behindTheScenes: [
    { id: "w2", caption: "On set of Untamed", alt: "Ibraheem behind a camera on a tripod at the stable, with the horse and model on the path ahead" },
    { id: "w1", caption: "Street portrait session", alt: "Ibraheem photographing a model in front of an iron fence" }
  ],
  hero: { video: "media/hero.mp4", poster: "media/hero.jpg" },
  categories: ["Portraits", "Weddings", "Live & Events", "Motion"],
  series: [
    {
      id: "winter-uniform",
      title: "Winter Uniform",
      category: "Portraits",
      season: "Winter",
      lead: "p08",
      photos: ["p08", "p01", "p05"],
      videos: [],
      story: "A school tie, a long wool coat and a hand-knit scarf in every colour of autumn, worn into the first real snowfall. We shot while the flakes were still coming down, so the background turns soft and the scarf does all the talking. The last frame pulls back to the empty fountain, one figure in a white world, holding a small globe like a souvenir from somewhere warmer."
    },
    {
      id: "the-wedding",
      title: "The Garden Wedding",
      category: "Weddings",
      season: "Summer",
      lead: "p09",
      photos: ["p09", "p02", "p21", "p10", "p20"],
      videos: ["v06"],
      story: "A backyard turned into a ceremony: a white tent, a layered arch and a short red carpet laid over the grass. The day moved fast, from the first kiss under the canopy to family portraits with three generations in one line, to the cake with their names piped across the top. The job was to keep up without getting in the way, and to catch every gele, every pearl and every proud face."
    },
    {
      id: "untamed",
      title: "Untamed",
      category: "Portraits",
      season: "Summer",
      lead: "p11",
      photos: ["p11", "p04", "p06"],
      videos: ["v02"],
      story: "Untamed is a short story told at a stable: a woman, a horse called Gryffin, and the quiet trust that grows between them. A white dress, a weathered fence and an animal that sets its own pace. The best frames came in the gaps, when he turned his head or wandered into the edge of the shot.",
      credits: "A Heemylense production · Directed by Ibraheem Biobaku · Starring Tatiana and Gryffin · Creative assistance from Ibrahim Ridwan, Michelle Gatis and Jinil Patel · Voice of Michelle Gatis"
    },
    {
      id: "off-the-pitch",
      title: "Off the Pitch",
      category: "Portraits",
      season: "Summer",
      lead: "p15",
      photos: ["p15", "p03"],
      videos: ["v04"],
      story: "A football jersey with a broderie skirt and terrace trainers: matchday style taken somewhere it doesn't belong. We used the concrete steps under the stand and a bright blue boom lift on a building site, because the colours matched the shirt better than any stadium could."
    },
    {
      id: "ivory-tide",
      title: "Ivory Tide",
      category: "Portraits",
      season: "Summer",
      lead: "p16",
      photos: ["p16", "p19", "p12", "p17", "p22"],
      videos: ["v07", "v08"],
      story: "Where the sea whispers, and elegance answers. Ivory Tide is a creative shoot on the shoreline: a folding chair, a few centimetres of water and the last forty minutes of daylight. Everything is white linen against peach sky, so the colours stay simple and the light does the work. Between setups we switched to black and white for the moments when Lily stopped posing and started laughing.",
      credits: "A creative photoshoot session · Directed by Ibraheem Biobaku · Starring Lily Gibbons · Creative assistance from Rachel Margolese and Toluwalase Akindolie"
    },
    {
      id: "red-room",
      title: "Red Room",
      category: "Live & Events",
      season: "Year-round",
      lead: "p13",
      photos: ["p13", "p14"],
      videos: ["v05", "v09", "v03"],
      story: "Shows are shot from inside the crowd: phones up, hands in the frame, the stage lights blowing everything red. I like keeping the audience in the picture, because that's what it felt like to be there. The motion work follows the artist from the car park to the stage and back out."
    },
    {
      id: "be-nicer",
      title: "Be Nicer",
      category: "Portraits",
      season: "Year-round",
      lead: "p18",
      photos: ["p18", "p07"],
      videos: ["v10", "v01"],
      story: "Someone had spray-painted BE NICER on a garage door, and it felt like the right backdrop for a fitness portrait. Bare chest, beanie and running shoes, standing like he owns the alley. The close-up is all texture and warm skin, and the clips carry the same energy into the boxing gym."
    }
  ],
  photos: {
    p01: { alt: "Man in glasses wearing a knit scarf and striped tie in falling snow", w: 1280, h: 1600 },
    p02: { alt: "Bride with her mother and groom on the red carpet in front of the wedding arch", w: 1067, h: 1600 },
    p03: { alt: "Woman in a blue football jersey and white skirt leaning on a blue boom lift", w: 1280, h: 1600 },
    p04: { alt: "Woman in white beside a bay horse and a palomino at a wooden fence", w: 1600, h: 1200 },
    p05: { alt: "Figure in a long coat and scarf holding a globe beside a snowy fountain", w: 1067, h: 1600 },
    p06: { alt: "Woman in a white dress leading a horse in a paddock", w: 1600, h: 900 },
    p07: { alt: "Close-up of a man's torso in warm light", w: 1200, h: 1600 },
    p08: { alt: "Man in a flat cap, scarf and tie with snow falling", w: 1280, h: 1600 },
    p09: { alt: "Bride and groom kissing under the wedding tent", w: 1067, h: 1600 },
    p10: { alt: "Wedding party group portrait in front of the arch", w: 1600, h: 1067 },
    p11: { alt: "Woman in a white dress holding a horse's lead at a fence", w: 1600, h: 1200 },
    p12: { alt: "Woman in white linen sitting on a chair in the lake", w: 1067, h: 1600 },
    p13: { alt: "Rapper performing under red stage lights with phones raised in the crowd", w: 1067, h: 1600 },
    p14: { alt: "Performer on a red-lit stage seen through the crowd", w: 1067, h: 1600 },
    p15: { alt: "Woman holding a football on concrete stadium steps", w: 1280, h: 1600 },
    p16: { alt: "Woman standing on a chair in the lake at sunset", w: 1280, h: 1600 },
    p17: { alt: "Woman in white lying on lakeside rocks shading her eyes", w: 1067, h: 1600 },
    p18: { alt: "Shirtless man in a beanie in front of BE NICER graffiti", w: 1200, h: 1600 },
    p19: { alt: "Close portrait of a blonde woman against a pastel sunset sky", w: 1067, h: 1600 },
    p20: { alt: "Wedding party portrait with the bride and groom at the centre", w: 1600, h: 1067 },
    p21: { alt: "Bride and groom cutting the wedding cake", w: 1067, h: 1600 },
    p22: { alt: "Black and white portrait of a smiling woman resting her head on her hand", w: 900, h: 1600 }
  },
  videos: {
    v01: { title: "Fight Night", orient: "land" },
    v02: { title: "Untamed", orient: "land" },
    v03: { title: "Studio Visit", orient: "port" },
    v04: { title: "Off the Pitch, in motion", orient: "port" },
    v05: { title: "Reekado Banks, live", orient: "land" },
    v06: { title: "The Garden Wedding film", orient: "land" },
    v07: { title: "Ivory Tide", orient: "port" },
    v08: { title: "Ivory Tide triptych", orient: "square" },
    v09: { title: "Showday", orient: "land" },
    v10: { title: "Portrait in motion", orient: "port" }
  },
  services: [
    { name: "Portrait sessions", detail: "Editorial, fashion, graduation and personal portraits on location. Film-style colour and full-resolution edits.", from: "Session" },
    { name: "Weddings & celebrations", detail: "Ceremonies, receptions, traditional engagements and family portraits. Photo and short-film coverage.", from: "Half or full day" },
    { name: "Live & events", detail: "Concerts, launches, gallery openings and parties. Fast turnaround so artists can post the same week.", from: "Per event" },
    { name: "Motion", detail: "Short films and reels for brands, artists and couples, shot and cut for vertical and widescreen.", from: "Per project" }
  ]
};
