/* ============================================================
   CONFIG.JS — Your single source of truth
   
   THIS IS THE ONLY FILE YOU NEED TO EDIT for personal info.
   Change something here → it updates everywhere automatically.
   ============================================================ */

const SITE = {

  /* ---- YOUR IDENTITY ---- */
  name:       "Your Name",          // appears in nav, footer, page titles
  tagline:    "Engineer by training. Explorer by nature.",
  email:      "your@email.com",
  linkedin:   "https://www.linkedin.com/in/yourname",
  photo:      "assets/profile.jpg", // path to your profile photo
  photoAlt:   "Portrait of Your Name",

  /* ---- RESUMES ---- 
     Add one entry per resume. Each becomes its own download card.
     - label       : title shown on the card (keep it short)
     - description : one line explaining what role it's tailored for
     - file        : path to the PDF inside your assets/ folder

     To add a resume: copy one { } block, paste it, fill in the fields.
     To remove one:   delete that { } block.
  ---- */
  resumes: [
    {
      label:       "CAD Design",
      description: "Focused on SolidWorks, parametric modelling & technical drawing",
      file:        "assets/resume-cad.pdf",
    },
    {
      label:       "Manufacturing",
      description: "CNC machining, process planning, GD&T & quality control",
      file:        "assets/resume-manufacturing.pdf",
    },
    // Add more resumes here — copy the block above and update the fields
  ],

  /* ---- ABOUT ME — edit the strings, or add more <br> for new lines ---- */
  bio: [
    // Each item here becomes one paragraph on your About page
    "I'm a mechanical engineer with a passion for precision and craftsmanship — whether I'm programming a CNC mill, designing a part in CAD, or figuring out the best bowl of noodles in a city I've never been to before.",
    "This is my little corner of the internet where I document projects I'm proud of and places that have left a mark on me."
  ],

  /* ---- SKILLS / INTEREST TAGS ---- */
  // Add or remove items freely. Keep them short (1–3 words).
  tags: [
    "CNC Milling",
    "CAD / SolidWorks",
    "Mechanical Design",
    "GD&T",
    "Prototyping",
    "Travel",
    "Photography",
    "Food & Culture",
    "Writing",
  ],

  /* ---- CURRENTLY SECTION (optional) ---- */
  // Delete items or add new ones. Use an emoji at the start if you like.
  currently: [
    "🔧 Working on a fixture design project",
    "✈️ Planning a trip to Portugal",
    "📖 Reading The Buried Giant by Kazuo Ishiguro",
  ],

  /* ---- FOOTER NOTE (optional short line) ---- */
  footerNote: "", // leave empty for no extra note, or e.g. "Based in Melbourne."

  /* ---- SITE YEAR (update each year) ---- */
  year: "2025",
};
