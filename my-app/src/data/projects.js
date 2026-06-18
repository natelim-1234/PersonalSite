import RecommenderImg  from '../img/session-recommender-images/session-recommender-landing.svg';
import MAQWebsiteImg   from '../img/MAQ_Website.png';
import MAQIgniteImg    from '../img/MAQ_Ignite_Booth.png';
import DataMgmtImg     from '../img/Data_Management.svg';

/**
 * Project data — add a new entry here to have it appear on the Work page.
 *
 * Fields:
 *   title   — display name
 *   desc    — one-sentence summary shown on the card
 *   tags    — array of pill labels
 *   to      — internal route (must match App.js Route path)
 *   img     — imported image/SVG for the card thumbnail
 */
const PROJECTS = [
  {
    title: 'Convention Schedule Recommender',
    desc:  'Led end-to-end design of a mobile app that helps attendees plan their conference schedule — cutting decision time and improving session satisfaction.',
    tags:  ['Product Strategy', 'UX Design', 'Mobile'],
    to:    '/event-recommender',
    img:   RecommenderImg,
  },
  {
    title: 'MAQ Website Redesign',
    desc:  'Planned and executed the full development lifecycle of the MAQ Software company website — from competitive analysis and wireframes to a shipped redesign.',
    tags:  ['Web Design', 'Development', 'Product Design'],
    to:    '/MAQ-website-portfolio',
    img:   MAQWebsiteImg,
  },
  {
    title: 'MAQ Conference Collaterals',
    desc:  'Designed high-impact collaterals for MAQ Software at Microsoft Ignite — booth art, video presentations, and brochures that told a cohesive brand story.',
    tags:  ['Brand', 'Visual Design', 'Marketing'],
    to:    '/MAQ-collaterals-portfolio',
    img:   MAQIgniteImg,
  },
  {
    title: 'Data Management Revamp',
    desc:  'Led the redesign of a data management interface, working closely with data modelers and engineers to reduce clicks by 30% and simplify complex workflows.',
    tags:  ['UX Research', 'Data Design'],
    to:    '/data-serve-portfolio',
    img:   DataMgmtImg,
  },
];

export default PROJECTS;
