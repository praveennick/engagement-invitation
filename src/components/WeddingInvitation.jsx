import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  Heart,
  Sparkles,
  Phone,
} from "lucide-react";
import templeImage from "../assets/temple.png";

const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/8mYnpjN4gE95Hyu17";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4525.768375667284!2d81.804959!3d17.006156300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3bf6658436f%3A0x9f226cd13ee3e272!2sS%20V%20Function%20Hall!5e1!3m2!1sen!2sin!4v1779564738906!5m2!1sen!2sin";
const WHATSAPP_RSVP_URL =
  "https://wa.me/918142721111?text=Hi%20Praveen%20We%20will%20be%20joining%20your%20wedding%20celebration.";
const FAMILY_CONTACT_NUMBER = "+919392015858";

const events = [
  {
    title: "Dinner",
    date: "21 June 2026",
    time: "07:00 PM onwards",
    icon: "🍽️",
  },
  {
    title: "Wedding Muhurtham",
    date: "22 June 2026",
    time: "02:32 AM",
    icon: "🪔",
  },
];

const countdownItems = [
  { value: "24", label: "Days" },
  { value: "12", label: "Hours" },
  { value: "45", label: "Mins" },
  { value: "30", label: "Secs" },
];

const lanterns = [
  { left: "7%", top: "6%", size: 42, delay: 0 },
  { left: "72%", top: "5%", size: 50, delay: 0.5 },
  { left: "18%", top: "25%", size: 34, delay: 1.1 },
  { left: "83%", top: "28%", size: 38, delay: 0.7 },
  { left: "45%", top: "12%", size: 30, delay: 1.4 },
];

function FloatingLanterns() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {lanterns.map((lantern, index) => (
        <motion.div
          key={`lantern-${index}`}
          className="absolute rounded-[45%] bg-[radial-gradient(circle_at_50%_58%,#fff6b8_0%,#ffd8bd_25%,#f8a7c9_58%,#b9dce9_100%)] opacity-75 shadow-[0_0_22px_rgba(255,215,170,.65)]"
          style={{
            left: lantern.left,
            top: lantern.top,
            width: lantern.size,
            height: lantern.size * 1.25,
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [-3, 4, -3],
            opacity: [0.65, 0.88, 0.65],
          }}
          transition={{
            duration: 5.5,
            delay: lantern.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {Array.from({ length: 14 }).map((_, index) => (
        <motion.span
          key={`petal-${index}`}
          className="absolute text-[12px] text-[#caa269]/45"
          initial={{ y: -80, x: `${(index * 19) % 100}%`, rotate: 0 }}
          animate={{
            y: 1400,
            x: `${((index * 19) % 100) + (index % 2 ? 7 : -7)}%`,
            rotate: 240,
          }}
          transition={{
            duration: 18 + (index % 7),
            repeat: Infinity,
            delay: index * 0.6,
            ease: "linear",
          }}
        >
          {index % 4 === 0
            ? "❋"
            : index % 4 === 1
              ? "✦"
              : index % 4 === 2
                ? "❀"
                : "•"}
        </motion.span>
      ))}
    </div>
  );
}

function SideBananaLeaves({ side }) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-0 ${
        isLeft ? "left-0" : "right-0"
      } z-40 h-full w-[68px] overflow-hidden`}
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <motion.div
          key={`${side}-leaf-${index}`}
          className={`absolute ${
            isLeft ? "-left-12" : "-right-12"
          } h-[128px] w-[68px] rounded-[80%_8%_80%_8%] bg-[linear-gradient(115deg,#103820_0%,#235c39_45%,#77965a_100%)] shadow-[inset_-12px_-8px_18px_rgba(0,0,0,.2),inset_10px_8px_15px_rgba(255,255,255,.12),0_14px_32px_rgba(0,0,0,.15)] ring-1 ring-[#d8bd7a]/25`}
          style={{
            top: `${index * 14 + 2}%`,
            transform: `rotate(${isLeft ? -42 : 42}deg)`,
          }}
          animate={{ rotate: isLeft ? [-43, -38, -43] : [43, 38, 43] }}
          transition={{
            duration: 7 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-1/2 top-3 h-[86%] w-[1px] -translate-x-1/2 rounded-full bg-[#ead294]/45" />
        </motion.div>
      ))}
    </div>
  );
}

function HeroTemple() {
  const { scrollYProgress } = useScroll();

  const templeYRaw = useTransform(scrollYProgress, [0, 0.28], [90, -20]);
  const templeScaleRaw = useTransform(scrollYProgress, [0, 0.28], [1.08, 1]);

  const templeY = useSpring(templeYRaw, {
    stiffness: 70,
    damping: 24,
    mass: 0.4,
  });

  const templeScale = useSpring(templeScaleRaw, {
    stiffness: 70,
    damping: 24,
    mass: 0.4,
  });

  const titleY = useTransform(scrollYProgress, [0, 0.18], [0, -34]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative z-30 min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#587b99_0%,#8da9bb_42%,#e9c79b_100%)]" />
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.42),transparent_28%),radial-gradient(circle_at_70%_18%,rgba(255,217,166,.35),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05),transparent_34%,rgba(246,234,210,.9)_100%)]" />

      <FloatingLanterns />

      <motion.div
        style={{ y: titleY }}
        className="relative z-40 px-7 pt-28 text-center text-white"
      >
        <p className="text-[12px] uppercase tracking-[0.42em] drop-shadow-sm">
          Priyanka
        </p>
        <p className="mt-2 text-[12px] uppercase tracking-[0.8em] drop-shadow-sm">
          weds
        </p>
        <h1 className="mt-3 text-[54px] font-light leading-none tracking-[0.02em] drop-shadow-md">
          Praveen
        </h1>
        <p className="mx-auto mt-5 max-w-[260px] text-[12px] leading-6 text-white/85">
          With the blessings of our families, we invite you to celebrate our
          sacred wedding ceremony.
        </p>
      </motion.div>

      <motion.div
        style={{ y: templeY, scale: templeScale }}
        className="absolute inset-x-0 bottom-[8vh] z-30 mx-auto flex justify-center will-change-transform transform-gpu"
      >
        <div className="relative w-[128%] max-w-[620px] will-change-transform transform-gpu">
          <motion.div
            className="absolute left-1/2 top-[20%] h-56 w-56 -translate-x-1/2 rounded-full bg-[#ffe09c]/30 blur-3xl"
            animate={{
              opacity: [0.35, 0.6, 0.35],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <img
            src={templeImage}
            alt="Premium South Indian temple gopuram"
            className="relative z-10 h-auto w-full object-contain opacity-100 drop-shadow-[0_28px_45px_rgba(0,0,0,.35)] will-change-transform transform-gpu"
            loading="eager"
            draggable={false}
          />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-t from-[#f6ead2] via-[#f6ead2]/75 to-transparent" />
    </motion.section>
  );
}

function Section({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative z-30 mx-5 my-6 rounded-[28px] border border-[#d8a94c]/45 bg-[#fff6df]/92 p-5 shadow-[0_24px_65px_rgba(40,17,8,.16)] backdrop-blur-md ${className}`}
    >
      <div className="pointer-events-none absolute inset-[8px] rounded-[22px] border border-[#8b1e12]/10" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

function WeddingDetailsCard() {
  return (
    <Section className="mt-6 text-center">
      <div className="mb-3 flex justify-center gap-4 text-3xl">
        <motion.span
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          🪔
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0.75, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          🪔
        </motion.span>
      </div>

      <p className="text-[11px] uppercase tracking-[0.35em] text-[#9c291a]">
        Wedding Ceremony
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#691208]">22 June 2026</h2>

      <p className="mt-3 flex items-center justify-center gap-2 text-sm text-[#532214]">
        <Clock size={15} /> 02:32 AM Muhurtham
      </p>

      <p className="mt-2 flex items-center justify-center gap-2 text-sm text-[#532214]">
        <MapPin size={15} /> S.V. Function Hall, Rajamahendravaram
      </p>
    </Section>
  );
}

function BlessingsSection() {
  return (
    <Section>
      <div className="text-center">
        <Sparkles className="mx-auto mb-3 text-[#9c291a]" size={24} />
        <h2 className="text-2xl font-bold text-[#6d160d]">
          With Divine Blessings
        </h2>
        <p className="mt-4 text-[14px] leading-7 text-[#62301b]">
          With blessings from Gummadi Anand, Smt. Lokeswari, and our beloved
          elders, we warmly invite you to grace this auspicious wedding ceremony
          with your presence and blessings.
        </p>
      </div>
    </Section>
  );
}

function EventsSection() {
  return (
    <Section>
      <h2 className="mb-5 text-center text-2xl font-bold text-[#6d160d]">
        Wedding Events
      </h2>

      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl border border-[#d7a149]/45 bg-[#fffaf0]/75 p-4 shadow-[0_14px_28px_rgba(83,34,20,.14)]"
          >
            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-[#8f1d13]/8" />

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8e1b12] to-[#4a0b08] text-2xl shadow-lg ring-2 ring-[#e5bd64]">
                {event.icon}
              </div>

              <div className="text-left">
                <h3 className="font-bold text-[#691208]">{event.title}</h3>
                <p className="flex items-center gap-2 text-xs text-[#62301b]">
                  <CalendarDays size={13} /> {event.date}
                </p>
                <p className="flex items-center gap-2 text-xs text-[#62301b]">
                  <Clock size={13} /> {event.time}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CountdownSection() {
  return (
    <Section className="overflow-hidden bg-[linear-gradient(180deg,#fff7e7_0%,#f6ead2_100%)] text-center shadow-[0_20px_50px_rgba(83,34,20,.10)]">
      {/* Top Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,118,.18),transparent_42%)]" />

      {/* Decorative Top Border */}
      <div className="absolute left-6 right-6 top-5 h-[1px] bg-gradient-to-r from-transparent via-[#ddb45a] to-transparent" />

      <div className="relative z-10">
        <p className="text-[11px] uppercase tracking-[0.38em] text-[#d09a2c]">
          Countdown
        </p>

        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#6d160d]">
          The Auspicious Day
          <br />
          Awaits
        </h2>

        <p className="mx-auto mt-3 max-w-[260px] text-xs leading-6 text-[#7a4d34]/70">
          Counting the sacred moments until our forever begins.
        </p>

        <div className="mt-7 grid grid-cols-4 gap-3">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[22px] border border-[#e6c06b]/45 bg-[linear-gradient(180deg,#fff9ed_0%,#f8ecd3_100%)] px-2 py-5 shadow-[0_10px_25px_rgba(83,34,20,.10)]"
            >
              {/* Soft Gold Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,118,.12),transparent_60%)]" />

              <div className="relative z-10">
                <div className="text-3xl font-bold tracking-wide text-[#d59b22]">
                  {item.value}
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#8a5a3d]/70">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function VenueSection() {
  return (
    <Section>
      <h2 className="text-center text-2xl font-bold text-[#6d160d]">Venue</h2>

      <div className="mt-4 rounded-3xl border border-[#d7a149]/50 bg-gradient-to-br from-[#fffaf0] to-[#f4d99d] p-4 text-center shadow-inner">
        <MapPin className="mx-auto mb-2 text-[#8f1d13]" />

        <h3 className="font-bold text-[#691208]">S.V. Function Hall</h3>

        <p className="mt-1 text-xs text-[#62301b]">
          J.N. Road, Rajamahendravaram
        </p>

        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-full bg-gradient-to-r from-[#7d170f] via-[#a92317] to-[#7d170f] px-5 py-2 text-sm font-bold text-[#fff4d8] shadow-lg ring-1 ring-[#e8bd63]/55"
        >
          Open Google Maps
        </a>

        <a
          href={`tel:${FAMILY_CONTACT_NUMBER}`}
          className="mx-auto mt-3 flex items-center justify-center gap-2 text-sm text-[#62301b]"
        >
          <Phone size={15} /> {FAMILY_CONTACT_NUMBER}
        </a>
      </div>
    </Section>
  );
}

function LocationMapSection() {
  return (
    <Section>
      <h2 className="text-center text-2xl font-bold text-[#6d160d]">
        Venue Location
      </h2>

      <div className="mt-5 overflow-hidden rounded-3xl border border-[#d7a149]/45">
        <iframe
          title="Wedding Venue Map"
          src={GOOGLE_MAPS_EMBED_URL}
          className="h-[300px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gradient-to-r from-[#7d170f] via-[#a92317] to-[#7d170f] px-5 py-2 text-sm font-bold text-[#fff4d8]"
        >
          Get Directions
        </a>
      </div>
    </Section>
  );
}

function RsvpSection() {
  return (
    <Section className="text-center">
      <Heart className="mx-auto mb-2 text-[#9c291a]" />

      <h2 className="text-2xl font-bold text-[#6d160d]">
        Grace Us With Your Presence
      </h2>

      <p className="mt-3 text-sm leading-7 text-[#62301b]">
        Your love, presence, and blessings mean the world to us.
      </p>

      <motion.a
        href={WHATSAPP_RSVP_URL}
        target="_blank"
        rel="noreferrer"
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.03 }}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f5b31] to-[#06351d] px-6 py-3 text-sm font-bold text-white shadow-xl ring-1 ring-[#e8bd63]/40"
      >
        <MessageCircle size={18} /> RSVP on WhatsApp
      </motion.a>
    </Section>
  );
}

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-[#f7f0df] font-serif text-[#4c160b]">
      <style>{`
        .royal-bg {
          background: linear-gradient(180deg, #f6ead2 0%, #f3e3c1 100%);
        }
      `}</style>

      <main className="royal-bg relative mx-auto min-h-screen max-w-md overflow-hidden pb-10 shadow-[0_0_80px_rgba(0,0,0,.10)]">
        <SideBananaLeaves side="left" />
        <SideBananaLeaves side="right" />
        <Petals />

        <HeroTemple />
        <WeddingDetailsCard />
        <BlessingsSection />
        <EventsSection />
        <CountdownSection />
        <VenueSection />
        <LocationMapSection />
        <RsvpSection />

        <div className="relative z-30 px-8 pb-8 text-center text-xs text-[#6b2b16]/75">
          Made by Praveen
        </div>
      </main>
    </div>
  );
}
