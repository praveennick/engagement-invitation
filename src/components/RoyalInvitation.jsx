import { useState } from 'react';
import { ArrowDown, ArrowUpRight, CalendarPlus, Check, Heart, MapPin, Menu, MessageCircle, Phone, Share2, Sparkles, UtensilsCrossed, X } from 'lucide-react';
import { GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_MAPS_EMBED_URL, WHATSAPP_RSVP_URL, FAMILY_CONTACT_NUMBER, INVITATION_URL, SHARE_INVITATION_MESSAGE } from './weddingData';
import './royal-invitation.css';

const celebrations = [
  {
    name: 'The Wedding Dinner', subtitle: 'An evening of togetherness',
    day: '21', month: 'JUNE', date: 'Sunday, 21 June 2026', time: '7:00 PM onwards',
    start: '20260621T190000', end: '20260621T223000', Icon: UtensilsCrossed,
    description: 'The festivities begin with a warm welcome, a beautiful feast, and the joy of our loved ones gathering together.',
  },
  {
    name: 'The Sacred Muhurtham', subtitle: 'A promise for a lifetime',
    day: '22', month: 'JUNE', date: 'Monday, 22 June 2026', time: '2:32 AM',
    start: '20260622T023200', end: '20260622T043000', Icon: Sparkles,
    description: 'In the early hours of Monday, sacred vows and the blessings of our elders mark the beginning of our forever.',
  },
];

function calendarHref(event) {
  return `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE', text: `Praveen & Priyanka — ${event.name}`,
    dates: `${event.start}/${event.end}`, ctz: 'Asia/Kolkata',
    location: 'S.V. Function Hall, J.N. Road, Rajamahendravaram',
    details: `${event.description}\n\n${INVITATION_URL}`,
  })}`;
}

function Lotus({ className = '' }) {
  return <svg className={`royal-lotus ${className}`} width="64" height="46" viewBox="0 0 80 56" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M40 46C19 31 29 12 40 3c11 9 21 28 0 43Z" />
    <path d="M40 46C18 46 10 29 12 16c15 1 26 10 28 30Zm0 0c22 0 30-17 28-30-15 1-26 10-28 30Z" />
    <path d="M40 46C18 54 5 42 2 29c17-4 29 2 38 17Zm0 0c22 8 35-4 38-17-17-4-29 2-38 17ZM17 53h46" />
  </svg>;
}

function Ornament() {
  return <div className="royal-ornament" aria-hidden="true"><span /><Lotus /><span /></div>;
}

export default function RoyalInvitation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [copied, setCopied] = useState(false);

  async function shareInvitation() {
    setShareStatus('');
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Praveen & Priyanka Wedding', text: SHARE_INVITATION_MESSAGE });
      } else {
        await navigator.clipboard.writeText(SHARE_INVITATION_MESSAGE);
        setCopied(true);
        setShareStatus('Invitation copied. Share it with your loved ones.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') setShareStatus('Copy the invitation link from your browser to share with your loved ones.');
    }
  }

  return <div className="royal-page">
    <a className="royal-skip" href="#celebrations">Skip to wedding details</a>
    <header className="royal-header">
      <a className="royal-brand" href="#home" aria-label="Praveen and Priyanka home">P<span>&</span>P<span className="brand-caption">THE WEDDING</span></a>
      <button className="royal-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="royal-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="royal-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
        <a href="#invitation">The invitation</a><a href="#celebrations">Celebrations</a><a href="#venue">The venue</a><a className="nav-rsvp" href="#rsvp">Join our celebration <ArrowUpRight size={14} /></a>
      </nav>
    </header>

    <main>
      <section id="home" className="royal-hero" aria-labelledby="wedding-title">
        <img className="royal-hero-image" src="/images/royal-mandapam.png" alt="" fetchPriority="high" />
        <div className="royal-hero-shade" />
        <div className="royal-hero-frame" aria-hidden="true" />
        <div className="royal-hero-content">
          <p className="royal-blessing" lang="te">శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు</p>
          <Ornament />
          <p className="royal-kicker">With our families’ love & blessings</p>
          <h1 id="wedding-title">Praveen <span>&</span> Priyanka</h1>
          <p className="royal-hero-tagline">A sacred promise. An eternal togetherness.</p>
          <div className="royal-hero-date"><span>SUNDAY</span><strong>21 JUNE 2026</strong><span>RAJAMAHENDRAVARAM</span></div>
          <a href="#invitation" className="royal-button gold-button">Open the invitation <ArrowDown size={15} /></a>
        </div>
        <span className="hero-bottom-note">A CELEBRATION OF LOVE, ROOTED IN TRADITION</span>
      </section>

      <div className="royal-date-ribbon"><span>Wedding dinner <strong>21 June · 7:00 PM</strong></span><span className="ribbon-diamond" aria-hidden="true">✧</span><span>Sacred muhurtham <strong>22 June · 2:32 AM</strong></span><span className="ribbon-diamond" aria-hidden="true">✧</span><span>S.V. Function Hall <strong>Rajamahendravaram</strong></span></div>

      <section id="invitation" className="royal-invitation-section royal-light">
        <div className="invitation-art"><img src="/images/royal-rituals.png" alt="Antique brass oil lamp with jasmine flowers and emerald silk, decorative wedding artwork" loading="lazy" width="1024" height="1536" /><div className="art-border" aria-hidden="true" /><div className="art-label"><Lotus /><span>Traditions we treasure.<br />Memories we make.</span></div></div>
        <div className="invitation-letter">
          <p className="royal-kicker">An invitation from the heart</p>
          <h2>Two souls.<br />One sacred <em>journey.</em></h2>
          <Ornament />
          <p>With immense joy and the blessings of our elders,</p>
          <h3>Gummadi Anand <span>&</span> Smt. Lokeswari</h3>
          <p>request the honour of your presence, with family and friends, as</p>
          <div className="couple-formal"><span>Praveen Kumar</span><small>weds</small><span>Priyanka</span></div>
          <p>Surrounded by love and guided by tradition, we begin a new chapter. Your presence and blessings will make it truly complete.</p>
          <span className="letter-signature">With love, the Gummadi family</span>
        </div>
      </section>

      <section id="celebrations" className="royal-celebrations">
        <div className="royal-section-heading"><p className="royal-kicker">The moments that become memories</p><h2>A celebration to <em>cherish.</em></h2><p>One beautiful evening, followed by a lifetime’s promise.</p><Ornament /></div>
        <div className="royal-events">{celebrations.map((event, index) => <article className="royal-event" key={event.start}>
          <div className="event-calendar"><span>{event.month}</span><strong>{event.day}</strong><span>2026</span></div>
          <div className="event-body"><p className="royal-kicker">0{index + 1} / {event.subtitle}</p><h3>{event.name}</h3><p>{event.description}</p><div className="event-time"><span>{event.date}</span><strong>{event.time} <small>IST</small></strong></div><a href={calendarHref(event)} target="_blank" rel="noreferrer" className="royal-text-link"><CalendarPlus size={16} /> Add to your calendar <ArrowUpRight size={14} /></a></div>
          <event.Icon className="event-symbol" size={40} strokeWidth={1} />
        </article>)}</div>
        <p className="royal-timing-note">Please join us on Sunday evening. The muhurtham follows after midnight, in the early hours of Monday.</p>
      </section>

      <section className="royal-quote"><Lotus /><blockquote>“Where love is a blessing,<br />and togetherness is <em>forever.</em>”</blockquote><span>PRAVEEN & PRIYANKA</span></section>

      <section id="venue" className="royal-venue royal-light">
        <div className="royal-venue-copy"><p className="royal-kicker">The setting for our beginning</p><h2>We’ll meet you <em>here.</em></h2><div className="venue-rule" /><MapPin size={25} strokeWidth={1.2} /><h3>S.V. Function Hall</h3><p>J.N. Road, Rajamahendravaram<br />Andhra Pradesh</p><a className="royal-button dark-button" href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a><div className="royal-contact"><span>FOR DIRECTIONS & ARRIVAL ASSISTANCE</span><a href={`tel:${FAMILY_CONTACT_NUMBER}`}><Phone size={15} /> {FAMILY_CONTACT_NUMBER}</a></div></div>
        <div className="royal-map-frame"><div className="map-heading"><MapPin size={15} /><span>RAJAMAHENDRAVARAM</span><span>ANDHRA PRADESH</span></div><iframe title="Map showing S.V. Function Hall wedding venue" src={GOOGLE_MAPS_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" className="map-bottom">Your journey to our celebration <ArrowUpRight size={17} /></a></div>
      </section>

      <section id="rsvp" className="royal-rsvp">
        <div className="rsvp-inner"><Ornament /><p className="royal-kicker">The most beautiful part is you</p><h2>Come with love.<br />Leave with <em>memories.</em></h2><p>Your presence is our greatest gift.<br />We look forward to celebrating this beautiful beginning with you.</p><div className="royal-rsvp-actions"><a className="royal-button gold-button" href={WHATSAPP_RSVP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> RSVP on WhatsApp</a><button type="button" className="royal-button outline-button" onClick={shareInvitation}>{copied ? <Check size={16} /> : <Share2 size={16} />} {copied ? 'Invitation copied' : 'Share the invitation'}</button></div><p className="royal-share-status" role="status">{shareStatus}</p></div>
      </section>
    </main>
    <footer className="royal-footer"><a href="#home" className="royal-brand" aria-label="Back to top">P<span>&</span>P</a><p>21 JUNE 2026 <span>·</span> PRAVEEN & PRIYANKA</p><span>Made with <Heart size={11} /> by Praveen</span></footer>
  </div>;
}
