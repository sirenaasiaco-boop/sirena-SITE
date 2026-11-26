/* ═══════════════════════════════════════════════════════════════════
   UNDERWATER TALES — news data (used by news.html AND index.html)

   To publish a story, add an object at the TOP of the list.
   Only publish facts that are verified (from a screenshot, poster,
   official result, or confirmed by Angel). Never invent placings,
   dates, prizes or quotes.

   Fields:
     slug     unique id, lowercase-with-dashes (used in news.html#slug)
     type     'Win' | 'Contest' | 'Promo' | 'Event' | 'Announcement'
     date     'YYYY-MM-DD', 'YYYY-MM' or 'YYYY' (only as precise as known)
     featured true to pin a story (e.g. a big win) as the headline
     upcoming true for an event/contest that hasn't happened yet:
              upcoming items always take the top headline first
     title    headline
     excerpt  1–2 sentence summary for cards and the ticker
     body     array of paragraphs for the full story
     image    path to image in /media (or null)
     people   performer slugs mentioned, e.g. ['sporti']
     link     optional external link (registration, tickets, source)
   ═══════════════════════════════════════════════════════════════════ */
window.NEWS = [
  {
    slug: 'founder-head-mermaid-diver',
    type: 'Announcement',
    date: '2026-09',
    featured: false,
    title: 'Our Founder Named Head Mermaid Diver at One of the World\'s Most Beautiful Aquariums',
    excerpt: 'Sirena\'s founder was named Head Mermaid Diver at one of the most luxurious and most beautiful aquariums in the world.',
    body: [
      'In September 2026, the founder of Sirena Asia was named Head Mermaid Diver at one of the most luxurious and most beautiful aquariums in the world, leading a team of professional mermaids in the water every day.',
      'It was a proud moment for a community that started with a few mermaids sharing opportunities and grew into a global network of professional performers and instructors.',
      'The same standard of safety, artistry and teamwork runs through every Sirena team we build for venues and events.'
    ],
    image: null,
    people: [],
    link: null
  },
  {
    slug: 'sporti-joins-sirena-elites',
    type: 'Announcement',
    date: '2026-11',
    featured: false,
    title: 'Mermaid SporTi Joins the Sirena Elites',
    excerpt: 'IUPC 2026 Muse Mermaid 1st Runner-up and PADI Mermaid Instructor SporTi is the newest face of the Sirena Elites, now based in Dubai.',
    body: [
      'Sirena Asia welcomes Mermaid SporTi to the Sirena Elites. A competition mermaid, instructor and lifeguard, she brings both stage presence and serious water credentials to the collective.',
      'SporTi is a PADI Mermaid Instructor, PADI Underwater Dance Instructor, AIDA3 freediver, rescue diver and certified lifeguard. On the competition stage she placed 1st Runner-up at the IUPC 2026 Muse Mermaid Competition and 6th in the International Category at the CMAS Mermaids World Cup.',
      'Now based in Dubai, she is available for underwater shows, activations and mermaid instruction in the UAE and beyond.'
    ],
    image: 'media/performers/sporti/photo2.jpg',
    people: ['sporti'],
    link: null
  },
  {
    slug: 'sporti-iupc-2026-muse-mermaid',
    type: 'Win',
    date: '2026',
    featured: true,
    title: 'SporTi Takes 1st Runner-up at the IUPC 2026 Muse Mermaid Competition',
    excerpt: 'Sirena Elite SporTi finished 1st Runner-up at the IUPC 2026 Muse Mermaid Competition.',
    body: [
      'Mermaid SporTi of the Sirena Elites placed 1st Runner-up at the IUPC 2026 Muse Mermaid Competition.',
      'It adds to an international record that already includes 6th place in the International Category at the CMAS Mermaids World Cup.',
      'Outside competition, SporTi teaches as a PADI Mermaid Instructor and PADI Underwater Dance Instructor. Follow her journey at @mywaterjourney.'
    ],
    image: 'media/performers/sporti/photo1.jpg',
    people: ['sporti'],
    link: null
  },
  {
    slug: 'kita-taiwan-cup-cwtb-silver-2026',
    type: 'Win',
    date: '2026',
    featured: false,
    title: 'Kita Wins Silver at the Taiwan Cup Freediving CWTB',
    excerpt: 'Sirena Elite Kita took silver in the CWTB discipline at the Taiwan Cup Freediving (2026).',
    body: [
      'Mermaid Kita added a freediving medal to her record, winning silver in the CWTB discipline at the Taiwan Cup Freediving in 2026.',
      'A former professional mermaid at Farglory Ocean Park, Kita was also Rookie Champion at the Taiwan Freediving Competition in 2024. She teaches as both a mermaid instructor and an AIDA freediving instructor.'
    ],
    image: 'media/performers/kita/photo1.jpg',
    people: ['kita'],
    link: null
  },
  {
    slug: 'braveeer-mergala-mermaid-island-getaway',
    type: 'Event',
    date: '2026-07',
    featured: false,
    title: 'Braveeer Mergala: Mermaid Island Getaway',
    excerpt: 'Buy a silicone mermaid tail, get a free 3D2N island stay at Summerbay Resort, Lang Tengah Island, Malaysia. From RM 3,200.',
    body: [
      'Braveeer Mergala brought mermaids to Lang Tengah Island, Malaysia, from 30 July to 1 August 2026.',
      'The offer: purchase a silicone mermaid tail and receive a free 3-day, 2-night stay at Summerbay Resort, with all meals included. The programme included mermaid styling, ocean snorkelling, drone photoshoots and a farewell dance party. Packages started from RM 3,200.'
    ],
    image: 'News1.jpeg',
    people: [],
    link: null
  },
  {
    slug: 'chen-hong-kong-mermaid-competition-2025',
    type: 'Win',
    date: '2025',
    featured: false,
    title: 'Chen Takes Team Champion and Silver in Hong Kong',
    excerpt: 'Master Mermaid Instructor Chen won Team Champion and an individual silver at the Hong Kong Mermaid Competition (2025).',
    body: [
      'Mermaid Chen came home from the Hong Kong Mermaid Competition in 2025 with two results: Team Champion and an individual Silver Medal.',
      'The same season she also took Bronze at the MFI Korea Open. Known to her TikTok audience as the "Princess of Atlantis", Chen is a Master Mermaid Instructor and former professional mermaid at Farglory Ocean Park.'
    ],
    image: 'media/performers/chen/photo1.jpg',
    people: ['chen'],
    link: null
  }
  ,{
    slug: 'sirena-mermaids-perform-in-india-2025',
    type: 'Event',
    date: '2025',
    featured: false,
    title: 'Sirena Mermaids Take the Stage in India',
    excerpt: 'Fan, Ying, Minmin, Chen, Ronnie and Kita performed as international mermaid performers in India in 2025.',
    body: [
      'In 2025, Sirena mermaids Fan, Ying, Minmin, Chen, Ronnie and Kita travelled to India as international mermaid performers.',
      'India remains one of the community\'s strongest markets, with Sirena connecting performers to aquariums and venues across the country.'
    ],
    image: 'media/performers/minmin/photo1.jpg',
    people: ['fan','ying','minmin','chen','ronnie','kita'],
    link: null
  },
  {
    slug: 'mfi-korea-open-2025-team-medals',
    type: 'Win',
    date: '2025',
    featured: false,
    title: 'Team Sirena Medals at the MFI Korea Open',
    excerpt: 'Ying and Minmin were Team Medalists, Chen took Bronze and Fan medalled at the MFI Korea Open in South Korea (2025).',
    body: [
      'The MFI Korea Open 2025 in South Korea was a big one for the Sirena family.',
      'Ying and Minmin both came home as Team Medalists, Chen won Bronze, and Fan added another medal to her record.',
      'Four Sirena mermaids, one podium story: proof of the depth of talent across our community.'
    ],
    image: 'media/performers/ying/photo1.jpg',
    people: ['ying','minmin','chen','fan'],
    link: null
  },
  {
    slug: 'asia-cup-2024-silver',
    type: 'Win',
    date: '2024',
    featured: false,
    title: 'Fan and Ronnie Bring Home Silver from the Asia Cup',
    excerpt: 'Fan was a Team Silver Medalist and Ronnie won Silver at the Asia Cup (2024).',
    body: [
      'At the 2024 Asia Cup, Mermaid Fan was part of the Team Silver Medal win, and Mermaid Ronnie also took Silver.',
      'Ronnie capped the season with another Silver at the Taiwan Mermaid Competition (2024).'
    ],
    image: 'media/performers/fan/photo1.jpg',
    people: ['fan','ronnie'],
    link: null
  },
  {
    slug: 'kita-rookie-champion-2024',
    type: 'Win',
    date: '2024',
    featured: false,
    title: 'Kita Crowned Rookie Champion in Freediving',
    excerpt: 'Kita was named Rookie Champion at the Taiwan Freediving Competition (2024).',
    body: [
      'Mermaid Kita made her mark in competitive freediving as Rookie Champion at the Taiwan Freediving Competition in 2024.',
      'Two years later she followed it with a Silver Medal at the Taiwan Cup Freediving CWTB (2026).'
    ],
    image: 'media/performers/kita/photo2.jpg',
    people: ['kita'],
    link: null
  }
];

window.NEWS_TYPES = {
  Win:          { label: 'Win',          icon: '🏆' },
  Contest:      { label: 'Contest',      icon: '📣' },
  Promo:        { label: 'Promo',        icon: '🛍' },
  Event:        { label: 'Event',        icon: '📅' },
  Announcement: { label: 'Announcement', icon: '✨' }
};

window.fmtNewsDate = function (d) {
  if (!d) return '';
  const p = d.split('-');
  if (p.length === 1) return p[0];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (p.length === 2) return months[+p[1] - 1] + ' ' + p[0];
  return (+p[2]) + ' ' + months[+p[1] - 1] + ' ' + p[0];
};

/* Headline order: upcoming event/contest first, then newest featured
   story, then everything else newest first. */
window.sortedNews = function () {
  const list = [...window.NEWS].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const up = list.filter(n => n.upcoming).sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  const rest = list.filter(n => !n.upcoming);
  const fi = rest.findIndex(n => n.featured);
  if (fi > 0) rest.unshift(rest.splice(fi, 1)[0]);
  return up.concat(rest);
};
window.winsNews = function () {
  return [...window.NEWS].filter(n => n.type === 'Win').sort((a, b) => (b.date || '').localeCompare(a.date || ''));
};
