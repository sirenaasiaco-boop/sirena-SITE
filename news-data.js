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
    slug: 'first-mermaid-competition-malaysia-2026',
    type: 'Contest',
    date: '2026-12-13',
    upcoming: true,
    featured: false,
    title: 'The First Mermaid Competition in Malaysia: 13 December 2026',
    excerpt: 'Malaysia\'s first mermaid competition comes to Selamberr Dive Training Pool, Dengkil, on 13 December 2026, 3pm to 6pm, with a PADI Mermaid Instructor course in the champion\'s prize.',
    body: [
      'Malaysia is getting its first mermaid competition. On 13 December 2026, from 3pm to 6pm, mermaids will compete at Selamberr Dive Training Pool in Dengkil, hosted with Merveille League Mermaid Society and PADI Mermaid, with Sirena Asia among the supporting partners.',
      'The Pro Mermaid category carries a serious prize table. The Champion takes home a Braveeer silicone mermaid outfit and accessories, a Kayasuba mermaid tail, a Merveille League duffle bag and Apnea\'s Life Journey dive log, plus a PADI Mermaid Instructor course with processing fee included.',
      'First Runner-up wins a Kayasuba mermaid tail, a Rainy Gooi designer tail and tail bag, a Merveille League duffle bag and dive log, and a PADI Mermaid Performer course. Second Runner-up wins a Rainy Gooi designer tail and tail bag, a Merveille League duffle bag and dive log, and a PADI Mermaid Performer course.',
      'Partners include PADI, Braveeer, Kayasuba, Rainy Gooi, Merveille League and Sirena Asia. Mermaids, mark the date.'
    ],
    image: 'media/news/first-mermaid-competition-malaysia-2026.jpg',
    people: [],
    link: null
  },
  {
    slug: 'first-mermaid-camp-malaysia-2026',
    type: 'Event',
    date: '2026-10-17',
    featured: false,
    title: 'The First Mermaid Camp in Malaysia',
    excerpt: 'Two days of skills, pool sessions, a mini match and a PADI sharing session at Selamberr Dive Training Pool, Dengkil, on 17 and 18 October 2026.',
    body: [
      'Before the competition came the camp. On 17 and 18 October 2026, mermaids gathered at Selamberr Dive Training Pool in Dengkil for The First Mermaid Camp in Malaysia, with Sirena Asia among the partners alongside Merveille League Mermaid Society, PADI Mermaid, Mermaid Mystery, Mahina Mermaid and M.R. Yuner.',
      'Day one opened with a group photo and a skills review against competition criteria, then a pool session to sharpen skills and a mini match. In the evening, PADI Regional Consultant Mr. Ferdy led a mermaid course sharing session before the prize ceremony and a BBQ night.',
      'Mini match winners took home Mermaid Mystery prizes: a hybrid silicone mermaid tail and underwater dance costume for the champion, and mermaid outfits and underwater dance costumes for the runners-up. Day two was all about mermaid craft making, mermaid makeup and a final group photo.'
    ],
    image: 'media/news/first-mermaid-camp-malaysia-2026.jpg',
    people: [],
    link: null
  },
  {
    slug: 'chen-korea-international-mermaid-open-2026-bronze',
    type: 'Win',
    date: '2026-03',
    featured: false,
    title: 'Chen Takes Bronze at the 2026 Korea International Mermaid Open',
    excerpt: 'Sirena Elite Chen placed third at the 2026 Korea International Mermaid Open with her "Night Shanghai" routine.',
    body: [
      'Mermaid Chen finished third at the 2026 Korea International Mermaid Open, bringing home bronze with a routine inspired by the glamour of old Shanghai nights.',
      'Chen trains in Hualien, on Taiwan\'s east coast, where she says resources are scarce and preparing for international competition is hard and costly. She thanked everyone behind her for letting her give it everything without worry.',
      'It adds to a competition record that includes Team Champion and Silver at the Hong Kong Mermaid Competition (2025).'
    ],
    image: 'media/news/chen-korea-international-mermaid-open-2026.jpg',
    people: ['chen'],
    link: 'https://www.instagram.com/chenc0213/'
  },
  {
    slug: 'kita-cmas-mermaid-world-cup-2026-silver',
    type: 'Win',
    date: '2026-08-30',
    featured: true,
    title: 'Kita Takes Silver at the First CMAS Mermaid World Cup',
    excerpt: 'Representing Taiwan in her first world competition, Kita finished Women\'s All-Around Runner-up at the inaugural CMAS Mermaid World Cup in Hainan, China.',
    body: [
      'Mermaid Kita is now second in the world. At the First World Underwater Federation (CMAS) Mermaid World Cup and 2026 China Mermaid Open in Lingshui, Hainan, she finished Women\'s All-Around Runner-up, taking home silver and a ¥12,000 prize.',
      'The field brought together athletes from 12 countries and hundreds of competitors, split into skill and performance events. Kita reached the final in both and placed third in each: third in the Adult Women\'s Solo Mermaid Dance and third in the Adult Women\'s Solo Skill event, where she climbed from fifth in the preliminaries by adding 38 points. Those two podium finishes added up to silver overall.',
      'It was her first world competition, and in her own words she became the first female athlete from Taiwan to finish in the top three at a world competition in China. Her favourite routine of the event was her Cruella character, rebuilt with new choreography and music for the deep pool.',
      'The silver capped a breakout 2026 season that also brought a championship title in May and a bronze medal in Hangzhou in July. Her message after the podium: next year, she goes again.'
    ],
    image: 'media/news/kita-cmas-mermaid-world-cup-2026.jpg',
    people: ['kita'],
    link: 'https://www.instagram.com/cloud_kita/'
  },
  {
    slug: 'ying-co-champion-mfi-taiwan-championship-2026',
    type: 'Win',
    date: '2026-10',
    featured: false,
    title: 'Ying Crowned Co-Champion at the 2026 MFI Taiwan Mermaid Championship',
    excerpt: 'Out of around 30 competitors, Ying shared first place in the Female Mermaid division with a Día de los Muertos routine.',
    body: [
      'Mermaid Ying is a champion. At the 2026 MFI Taiwan Mermaid and Underwater Dancing Championship, the Female Mermaid division drew around 30 strong competitors, and the title was shared by two athletes. Ying was one of them.',
      'Her winning routine drew on Mexico\'s Día de los Muertos: marigold crown, sugar-skull makeup, a flower-lined hoop and a burst of bubbles above her head. Photographers at the event described it as a performance full of tension and striking visual style.',
      'Ying also took to the water with a Mulan-inspired sword routine during the championship. A PADI Mermaid Instructor and Team Medalist at the MFI Korea Open (2025), she says she will keep carrying that love to the next stage.'
    ],
    image: 'media/news/ying-mfi-taiwan-championship-2026.jpg',
    people: ['ying'],
    link: 'https://www.instagram.com/shuying__0513/'
  },
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
