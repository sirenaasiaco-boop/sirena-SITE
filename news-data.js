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
     poster   true if the image is a flyer/poster (shown whole, not cropped)
   ═══════════════════════════════════════════════════════════════════ */
window.NEWS = [
  {
    slug: 'first-mermaid-competition-malaysia-2026',
    poster: true,
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
    poster: true,
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
    medal: 'bronze',
    type: 'Win',
    date: '2026-03',
    featured: false,
    title: 'TikTok Star Chen Brings Home Bronze from Korea',
    excerpt: 'TikTok star Mermaid Chen placed third in Women\'s Solo at the 2026 Korea International Mermaid Open with her "Night Shanghai" routine.',
    body: [
      'Mermaid Chen finished third at the 2026 Korea International Mermaid Open, bringing home bronze with a routine inspired by the glamour of old Shanghai nights.',
      'Chen trains in Hualien, on Taiwan\'s east coast, where she says resources are scarce and preparing for international competition is hard and costly. She thanked everyone behind her for letting her give it everything without worry.',
      'It adds to a competition record that includes the Doubles title and Women\'s Solo runner-up at the Hong Kong Mermaid Competition (2025).'
    ],
    image: 'media/news/chen-korea-international-mermaid-open-2026-portrait.jpg',
    people: ['chen'],
    link: 'https://www.instagram.com/chenc0213/'
  },

  {
    slug: 'kita-2026-the-year-nobody-saw-coming',
    medal: 'silver',
    type: 'Win',
    date: '2026-08-30',
    featured: true,
    title: 'The Year Nobody Saw Coming: Kita\'s 2026, From Champion to World No. 2',
    excerpt: 'A champion in May, bronze in Hangzhou in July, silver at the first CMAS Mermaid World Cup in August. Two years after her first mermaid class, Kita is second in the world.',
    body: [
      '"I wanted to prove the version of me nobody believed in." That is how Mermaid Kita opens the story of her 2026, and the results back her up.',
      'May 2026: champion at the mermaid competition of Taiwan\'s National Museum of Marine Science and Technology. Her first title of the year.',
      'July 2026: third place, and a bronze medal, at the mermaid competition in Hangzhou, China.',
      'August 2026: silver at the first World Underwater Federation (CMAS) Mermaid World Cup in Lingshui, Hainan. Facing athletes from 12 countries, she placed third in both the Adult Women\'s Solo Mermaid Dance and the Adult Women\'s Solo Skill event, climbing from fifth in the skill preliminaries by adding 38 points. Together they made her Women\'s All-Around Runner-up, with a ¥12,000 prize, at her very first world competition. In her own words she became the first female athlete from Taiwan to finish top three at a world competition in China, with her Cruella character rebuilt for the deep pool.',
      'Rewind two years. Kita learned mermaid in May 2024 and performed professionally until March 2025, then left to make the kind of shows she loves. In May 2025 she placed seventh at a mermaid competition, realised how much she still had to learn, and asked coach Afa Zhang to train her. A few sessions later, he became her teammate.',
      'No dance background, no performing-arts school. Kita still builds every routine herself: choreography, music, costume, props and makeup. After each competition she studies what worked and changes what did not.',
      'Her promise for 2027 is short: next year, again.'
    ],
    image: 'media/news/kita-cmas-mermaid-world-cup-2026.jpg',
    people: ['kita'],
    link: 'https://www.instagram.com/p/Dcu9LpaEUoj/'
  },

  {
    slug: 'south-taiwan-tropical-fish-team-champion-mfi-taiwan-2026',
    medal: 'gold',
    type: 'Win',
    date: '2026-10-03',
    featured: false,
    title: 'Mulan Rides South: Ying, Minmin and Merman 潘家祥 Strike Team Gold',
    excerpt: 'Team "South Taiwan Tropical Fish", Sirena Elites Ying and Minmin with merman 潘家祥 (@legeageai_manigay) took first place in the team event with their Mulan routine.',
    body: [
      'Sirena Elites Ying and Minmin are team champions. Competing as "South Taiwan Tropical Fish" with merman 潘家祥 (@legeageai_manigay), they took first place in the team event at the 2026 MFI Taiwan mermaid championship, staged at Farglory Ocean Park.',
      'Their Mulan-inspired routine was built the hard way: props they designed themselves, music edited over late nights, and practice sessions squeezed in around three busy schedules. In Minmin\'s words, they brought the championship back to the south, proof that talent can make up for scarce resources.',
      'All three are based in southern Taiwan, and they are now ambassadors inviting divers to train in Kaohsiung\'s 5-metre pool.'
    ],
    image: 'media/news/south-taiwan-tropical-fish-team-champion-2026.jpg',
    people: ['ying','minmin'],
    link: 'https://www.instagram.com/p/DeBe6QYPZcF/'
  },

  {
    slug: 'ying-co-champion-mfi-taiwan-championship-2026',
    medal: 'gold',
    type: 'Win',
    date: '2026-10',
    featured: false,
    title: 'Day of the Dead, Day of Gold: Ying Shares the MFI Taiwan Crown',
    excerpt: 'Out of around 30 competitors, Ying shared first place in the Female Mermaid division with a Día de los Muertos routine.',
    body: [
      'Mermaid Ying is a champion. At the 2026 MFI Taiwan Mermaid and Underwater Dancing Championship, the Female Mermaid division drew around 30 strong competitors, and the title was shared by two athletes. Ying was one of them.',
      'Her winning routine drew on Mexico\'s Día de los Muertos: marigold crown, sugar-skull makeup, a flower-lined hoop and a burst of bubbles above her head. Photographers at the event described it as a performance full of tension and striking visual style.',
      'Ying also took to the water with a Mulan-inspired sword routine during the championship, the routine that won team gold with Minmin and merman 潘家祥 (@legeageai_manigay). A PADI Mermaid Instructor and Team Medalist at the MFI Korea Open (2025), she says she will keep carrying that love to the next stage.'
    ],
    image: 'media/news/ying-mfi-taiwan-championship-2026.jpg',
    people: ['ying'],
    link: 'https://www.instagram.com/shuying___0513/'
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
