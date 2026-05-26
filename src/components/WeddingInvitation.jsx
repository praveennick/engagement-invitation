import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  Heart,
  Sparkles,
  Phone,
  UtensilsCrossed,
  CalendarPlus,
  Share2,
} from "lucide-react";
import templeImage from "../assets/temple.png";

const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/8mYnpjN4gE95Hyu17";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4525.768375667284!2d81.804959!3d17.006156300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3bf6658436f%3A0x9f226cd13ee3e272!2sS%20V%20Function%20Hall!5e1!3m2!1sen!2sin!4v1779564738906!5m2!1sen!2sin";

const WHATSAPP_RSVP_URL =
  "https://wa.me/918142721111?text=Hi%20Praveen%2C%20We%20are%20happy%20to%20join%20Priyanka%20%26%20Praveen's%20wedding%20celebration.%20Looking%20forward%20to%20being%20there%20and%20blessing%20the%20couple.";

const FAMILY_CONTACT_NUMBER = "+919392015858";
const MUHURTHAM_DATE = new Date("2026-06-22T02:32:00+05:30");

const headingFont = {
  fontFamily: "'Cinzel', serif",
};

const bodyFont = {
  fontFamily: "'Lora', serif",
};

const scriptFont = {
  fontFamily: "'Great Vibes', cursive",
};

const greenButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c7a158] bg-[#291410] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#fff8e6] shadow-[0_15px_34px_rgba(41,20,16,.24),inset_0_1px_0_rgba(255,255,255,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a1c16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a158]/55";

const subtleButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9aa63]/60 bg-[#fff9ed]/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4b2f21] shadow-[0_10px_22px_rgba(71,43,17,.10),inset_0_1px_0_rgba(255,255,255,.72)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a57e37] hover:bg-[#fff5df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68a3a]/45";

const events = [
  {
    title: "Dinner",
    date: "21st June 2026",
    time: "07:00 PM onwards",
    Icon: UtensilsCrossed,
  },
  {
    title: "Wedding Muhurtham",
    date: "Early hours of 22nd June 2026",
    time: "02:32 AM",
    Icon: Sparkles,
  },
];

const calendarEvents = [
  {
    title: "Priyanka & Praveen Wedding Dinner",
    fileName: "priyanka-praveen-dinner.ics",
    start: "20260621T190000",
    end: "20260621T223000",
    description:
      "Wedding dinner for Priyanka and Praveen at S.V. Function Hall.",
  },
  {
    title: "Priyanka & Praveen Wedding Muhurtham",
    fileName: "priyanka-praveen-muhurtham.ics",
    start: "20260622T023200",
    end: "20260622T043000",
    description:
      "Wedding muhurtham for Priyanka and Praveen, early hours of 22 June.",
  },
];

const lanterns = [
  { left: "7%", top: "6%", size: 42, delay: 0 },
  { left: "72%", top: "5%", size: 50, delay: 0.5 },
  { left: "18%", top: "25%", size: 34, delay: 1.1 },
  { left: "83%", top: "28%", size: 38, delay: 0.7 },
  { left: "45%", top: "12%", size: 30, delay: 1.4 },
];

function buildCalendarHref(event) {
  const calendarText = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Priyanka Praveen Wedding//Invitation//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${event.fileName}@priyanka-praveen-wedding`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART;TZID=Asia/Kolkata:${event.start}`,
    `DTEND;TZID=Asia/Kolkata:${event.end}`,
    `SUMMARY:${event.title}`,
    "LOCATION:S.V. Function Hall, J.N. Road, Rajamahendravaram",
    `DESCRIPTION:${event.description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(calendarText)}`;
}

function getCountdownItems() {
  const diff = Math.max(0, MUHURTHAM_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { value: String(days), label: "Days" },
    { value: String(hours).padStart(2, "0"), label: "Hours" },
    { value: String(minutes).padStart(2, "0"), label: "Mins" },
    { value: String(seconds).padStart(2, "0"), label: "Secs" },
  ];
}

function isMuhurthamComplete() {
  return MUHURTHAM_DATE.getTime() - Date.now() <= 0;
}

function useCountdown() {
  const [items, setItems] = useState(getCountdownItems);
  const [isComplete, setIsComplete] = useState(isMuhurthamComplete);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setItems(getCountdownItems());
      setIsComplete(isMuhurthamComplete());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return { items, isComplete };
}

function FloatingLanterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {lanterns.map((lantern, index) => (
        <motion.div
          key={`lantern-${index}`}
          className="absolute rounded-[48%] bg-[radial-gradient(circle_at_52%_54%,#fff5b8_0%,#ffe3a7_23%,#eaa0c7_57%,#d992bd_78%,rgba(217,146,189,.18)_100%)] opacity-80 shadow-[0_0_18px_rgba(255,220,164,.58),0_0_34px_rgba(223,147,192,.34)] blur-[0.2px]"
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
    <div
      className="pointer-events-none absolute inset-0 z-50 overflow-hidden opacity-80"
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.span
          key={`petal-${index}`}
          className="absolute h-3 w-2 rounded-[70%_10%_70%_10%] bg-[linear-gradient(135deg,rgba(255,202,209,.86)_0%,rgba(230,147,162,.72)_48%,rgba(196,149,70,.48)_100%)] shadow-[0_2px_8px_rgba(155,83,82,.18)]"
          initial={{ y: -80, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: 1600,
            x: index % 2 ? [0, 36, -18, 28] : [0, -34, 16, -26],
            rotate: index % 2 ? 280 : -240,
            opacity: [0, 0.85, 0.7, 0],
          }}
          transition={{
            duration: 15 + (index % 8),
            repeat: Infinity,
            delay: index * 0.45,
            ease: "linear",
          }}
          style={{
            left: `${(index * 37 + 9) % 100}%`,
            width: 7 + (index % 4),
            height: 11 + (index % 5),
          }}
        />
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
      } z-40 h-full w-[54px] overflow-hidden sm:w-[68px] lg:w-[96px]`}
      aria-hidden="true"
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <motion.div
          key={`${side}-leaf-${index}`}
          className={`absolute ${
            isLeft ? "-left-12" : "-right-12"
          } h-[120px] w-[64px] origin-center rounded-[82%_10%_82%_10%] bg-[radial-gradient(circle_at_70%_28%,rgba(238,236,157,.28)_0%,transparent_24%),linear-gradient(118deg,#173f27_0%,#2f6f3e_36%,#6f9a58_70%,#b3ac69_100%)] opacity-90 shadow-[inset_-14px_-10px_20px_rgba(14,39,22,.28),inset_12px_8px_16px_rgba(239,241,196,.16),0_14px_32px_rgba(33,22,12,.10)] ring-1 ring-[#d8bd7a]/16 sm:h-[128px] sm:w-[68px] lg:h-[148px] lg:w-[78px]`}
          style={{
            top: `${index * 14 + 2}%`,
            transform: `rotate(${isLeft ? -42 : 42}deg) scale(${index % 2 ? 0.94 : 1})`,
          }}
          animate={{ rotate: isLeft ? [-43, -38, -43] : [43, 38, 43] }}
          transition={{
            duration: 7 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-1/2 top-3 h-[86%] w-[1px] -translate-x-1/2 rounded-full bg-[#e6d58e]/46" />
          <div
            className={`absolute left-1/2 top-8 h-[1px] w-8 origin-left bg-[#e6d58e]/20 ${
              isLeft ? "-rotate-[28deg]" : "rotate-[28deg]"
            }`}
          />
          <div
            className={`absolute left-1/2 top-14 h-[1px] w-9 origin-left bg-[#e6d58e]/18 ${
              isLeft ? "-rotate-[22deg]" : "rotate-[22deg]"
            }`}
          />
          <div
            className={`absolute left-1/2 top-20 h-[1px] w-8 origin-left bg-[#e6d58e]/16 ${
              isLeft ? "-rotate-[18deg]" : "rotate-[18deg]"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function HeroTemple() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const templeYRaw = useTransform(scrollYProgress, [0, 1], [42, -64]);
  const templeScaleRaw = useTransform(scrollYProgress, [0, 1], [1.055, 0.985]);

  const templeY = useSpring(templeYRaw, {
    stiffness: 210,
    damping: 30,
    mass: 0.18,
  });

  const templeScale = useSpring(templeScaleRaw, {
    stiffness: 210,
    damping: 30,
    mass: 0.18,
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.2]);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative z-30 min-h-[100svh] overflow-hidden lg:min-h-[860px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#3ba7ee_0%,#71bddd_46%,#e4e3e2_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_18%,rgba(255,255,255,.38),transparent_28%),radial-gradient(circle_at_74%_17%,rgba(255,214,190,.2),transparent_26%),linear-gradient(180deg,rgba(58,125,169,.05)_0%,transparent_42%,rgba(245,237,217,.88)_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <FloatingLanterns />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-40 mx-auto max-w-2xl px-7 pt-20 text-center text-white sm:pt-24 md:pt-28 lg:pt-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-[54%] -z-10 h-[220px] w-[min(86vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(28,46,58,.2)_0%,rgba(28,46,58,.12)_38%,transparent_72%)] blur-xl lg:h-[250px] lg:w-[660px]" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.46em] text-white drop-shadow-[0_2px_8px_rgba(28,43,54,.42)] sm:text-[12px]">
          Praveen
        </p>

        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.8em] text-white drop-shadow-[0_2px_8px_rgba(28,43,54,.42)] sm:text-[12px]">
          weds
        </p>

        <h1
          className="mt-2 text-[72px] font-normal leading-none text-white drop-shadow-[0_8px_24px_rgba(24,35,44,.52),0_0_20px_rgba(255,255,255,.22)] sm:text-[88px] md:text-[98px] lg:text-[112px]"
          style={scriptFont}
        >
          Priyanka
        </h1>

        <p className="mx-auto mt-5 max-w-[310px] text-[14px] font-semibold leading-7 text-white/95 drop-shadow-[0_3px_10px_rgba(18,29,38,.62)] sm:max-w-[380px] sm:text-[16px] lg:max-w-[520px] lg:text-[18px]">
          With the blessings of our families, we invite you to celebrate our
          sacred wedding ceremony.
        </p>

        <p
          className="mt-4 text-[19px] font-semibold text-white/90 drop-shadow-[0_3px_10px_rgba(18,29,38,.48)]"
          lang="te"
        >
          శుభమస్తు
        </p>
      </motion.div>

      <motion.div
        style={{ y: templeY, scale: templeScale }}
        className="absolute inset-x-0 bottom-[-1vh] z-30 mx-auto flex justify-center will-change-transform transform-gpu lg:bottom-[-86px]"
      >
        <div className="relative flex w-full justify-center will-change-transform transform-gpu">
          <motion.div
            className="absolute left-1/2 top-[18%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#f4cf96]/20 blur-3xl"
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
            className="relative z-10 h-auto max-h-[61svh] w-[110vw] max-w-[520px] object-contain opacity-100 drop-shadow-[0_30px_48px_rgba(19,13,8,.38)] will-change-transform transform-gpu sm:max-h-[63svh] sm:max-w-[620px] md:max-h-[64svh] md:max-w-[720px] lg:w-[58vw] lg:max-h-[760px] lg:max-w-[840px] xl:max-w-[920px]"
            width="2772"
            height="3508"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            draggable={false}
          />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-[#f5edd9] via-[#f2ead4]/74 to-transparent" />
    </motion.section>
  );
}

function Section({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative z-30 h-full overflow-hidden rounded-[18px] border border-[#d1ad5e]/45 bg-[linear-gradient(180deg,rgba(255,252,244,.95)_0%,rgba(247,238,214,.95)_100%)] p-5 shadow-[0_18px_45px_rgba(58,32,24,.11),inset_0_1px_0_rgba(255,255,255,.78)] backdrop-blur-md sm:p-6 md:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-[7px] rounded-[13px] border border-[#7d4d2d]/10" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d8ba6b]/70 to-transparent" />
      <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#c4a15b]/38" />
      <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#c4a15b]/38" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#c4a15b]/28" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#c4a15b]/28" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      className="text-center text-[24px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#3f2219] sm:text-[28px] md:text-[32px]"
      style={headingFont}
    >
      {children}
    </h2>
  );
}

function OrnamentalDivider({ className = "" }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-[260px] items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c4a15b]/70" />
      <span className="h-2 w-2 rotate-45 rounded-[1px] border border-[#c4a15b]/75 bg-[#fff8e8]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c4a15b]/70" />
    </div>
  );
}

function FloralBand() {
  return (
    <div className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-center px-6 pt-7">
      <div className="flex w-full items-center justify-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4a15b]/60 to-[#c4a15b]/25" />
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-[#b99145]/70 bg-[#fff8e8] shadow-[0_0_18px_rgba(196,161,91,.22)]" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b99145]/70 bg-[#fff8e8] text-[11px] font-semibold tracking-[0.16em] text-[#7d5529] shadow-[0_10px_24px_rgba(71,43,17,.12)]">
          P & P
        </span>
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-[#b99145]/70 bg-[#fff8e8] shadow-[0_0_18px_rgba(196,161,91,.22)]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c4a15b]/60 to-[#c4a15b]/25" />
      </div>
    </div>
  );
}

function WeddingDetailsCard() {
  return (
    <Section className="text-center lg:col-span-2">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#d0ad60]/50 bg-[#fff9ea] text-[#9b7430] shadow-[0_10px_24px_rgba(77,43,21,.12)]">
        <Sparkles size={20} />
      </div>

      <p className="text-[11px] uppercase tracking-[0.32em] text-[#8c692d]">
        Wedding Celebration
      </p>

      <h2
        className="mt-3 text-[29px] font-semibold uppercase tracking-[0.08em] text-[#3f2219] sm:text-[34px]"
        style={headingFont}
      >
        21 June 2026
      </h2>

      <OrnamentalDivider className="my-5" />

      <p className="mt-4 flex items-center justify-center gap-2 text-[15px] font-medium text-[#573728]">
        <Clock size={15} /> Dinner from 07:00 PM onwards
      </p>

      <p className="mt-2 flex items-center justify-center gap-2 text-[15px] font-medium text-[#573728]">
        <Sparkles size={15} /> Muhurtham at 02:32 AM, early hours of 22 June
      </p>

      <p className="mt-2 flex items-center justify-center gap-2 text-[15px] font-medium text-[#573728]">
        <MapPin size={15} /> S.V. Function Hall, Rajamahendravaram
      </p>

      <p className="mx-auto mt-5 max-w-xl text-[14px] font-medium leading-7 text-[#573728]/82 sm:text-[15px]">
        Please join us on the evening of 21 June; the sacred muhurtham follows
        after midnight in the early hours of 22 June.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {calendarEvents.map((event) => (
          <a
            key={event.fileName}
            href={buildCalendarHref(event)}
            download={event.fileName}
            className={subtleButton}
            aria-label={`Add ${
              event.fileName.includes("dinner") ? "dinner" : "muhurtham"
            } to calendar`}
          >
            <CalendarPlus size={15} />{" "}
            {event.fileName.includes("dinner") ? "Add Dinner" : "Add Muhurtham"}
          </a>
        ))}
      </div>
    </Section>
  );
}

function BlessingsSection() {
  return (
    <Section>
      <div className="text-center">
        <Sparkles className="mx-auto mb-3 text-[#9b7430]" size={22} />

        <SectionTitle>With Divine Blessings</SectionTitle>
        <OrnamentalDivider className="mt-5" />

        <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-8 text-[#573728] sm:text-[18px]">
          With the blessings of Gummadi Anand, Smt. Lokeswari, and our beloved
          elders, we request the honour of your presence as Priyanka and Praveen
          begin their sacred journey together.
        </p>

        <p className="mx-auto mt-4 max-w-md text-[14px] font-medium italic leading-7 text-[#8c692d]">
          May auspiciousness, joy, and togetherness bless this celebration.
        </p>
      </div>
    </Section>
  );
}

function EventsSection() {
  return (
    <Section>
      <SectionTitle>Wedding Events</SectionTitle>
      <OrnamentalDivider className="mt-5" />

      <div className="mt-6 space-y-3.5">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[14px] border border-[#d8ba6b]/45 bg-[#fffaf0]/75 p-4 shadow-[0_12px_26px_rgba(61,34,22,.09),inset_0_1px_0_rgba(255,255,255,.68)]"
          >
            <div className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-[#b99145]/70" />
            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-[#b99145]/8" />

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6b565]/60 bg-[#fff9ea] text-[#8b682e] shadow-[0_10px_22px_rgba(63,34,25,.10)]">
                <event.Icon size={20} strokeWidth={1.8} />
              </div>

              <div className="text-left">
                <h3
                  className="text-[17px] font-semibold uppercase tracking-[0.08em] text-[#3f2219]"
                  style={headingFont}
                >
                  {event.title}
                </h3>

                <p className="mt-1 flex items-center gap-2 text-[14px] font-medium text-[#573728]">
                  <CalendarDays size={13} /> {event.date}
                </p>

                <p className="mt-1 flex items-center gap-2 text-[14px] font-medium text-[#573728]">
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
  const { items: countdownItems, isComplete } = useCountdown();

  return (
    <Section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#f3e8cc_100%)] px-6 py-8 text-center sm:px-8 sm:py-9 lg:col-span-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,181,101,.16),transparent_42%)]" />
      <div className="absolute left-8 right-8 top-7 h-[1px] bg-gradient-to-r from-transparent via-[#c4a15b]/70 to-transparent  " />

      <div className="relative z-10 ">
        <p className="mb-3 text-[11px] uppercase tracking-[0.36em] text-[#8c692d]">
          Countdown
        </p>

        <h2
          className="mx-auto max-w-4xl text-center text-[22px] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-[#3f2219] sm:text-[27px] md:text-[31px] lg:text-[32px]"
          style={headingFont}
        >
          The Auspicious Day Awaits
        </h2>

        {isComplete ? (
          <p className="mx-auto mt-6 max-w-xl text-[17px] font-medium leading-8 text-[#573728]/90 sm:text-[19px]">
            The blessed muhurtham has arrived. Thank you for being part of our
            celebration.
          </p>
        ) : (
          <>
            <p className="mx-auto mt-5 max-w-[360px] text-[15px] font-medium leading-7 text-[#573728]/85 sm:text-[17px]">
              Counting down to the blessed hour when two families gather as one.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
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
                  className="relative min-h-[86px] overflow-hidden rounded-[12px] border border-[#d8ba6b]/50 bg-[linear-gradient(180deg,#fffbf3_0%,#f3e8cc_100%)] px-1 py-4 shadow-[0_10px_22px_rgba(61,34,22,.09),inset_0_1px_0_rgba(255,255,255,.7)] sm:min-h-[96px] sm:px-2 sm:py-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,161,91,.11),transparent_60%)]" />

                  <div className="relative z-10">
                    <div
                      className="text-[24px] font-semibold tracking-wide text-[#7d5529] sm:text-3xl"
                      style={headingFont}
                    >
                      {item.value}
                    </div>

                    <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#573728]/70 sm:text-[10px] sm:tracking-[0.24em]">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
}

function VenueSection() {
  return (
    <Section className="lg:col-span-2">
      <SectionTitle>Venue</SectionTitle>
      <OrnamentalDivider className="mt-5" />

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[14px] border border-[#d8ba6b]/50 bg-[linear-gradient(145deg,#fffaf0_0%,#efe0bd_100%)] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_12px_26px_rgba(61,34,22,.08)] sm:p-6">
          <MapPin className="mx-auto mb-3 text-[#8b682e]" size={22} />

          <h3
            className="text-[23px] font-semibold uppercase tracking-[0.08em] text-[#3f2219]"
            style={headingFont}
          >
            S.V. Function Hall
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-[15px] font-medium leading-7 text-[#573728]">
            J.N. Road, Rajamahendravaram
          </p>

          <div className="mt-6 rounded-[12px] border border-[#d8ba6b]/45 bg-[#fff9ed]/75 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8c692d]">
              Family Contact
            </p>

            <a
              href={`tel:${FAMILY_CONTACT_NUMBER}`}
              className="mx-auto mt-3 inline-flex items-center justify-center gap-2 text-[17px] font-semibold text-[#3f2219] transition-colors hover:text-[#7d5529]"
              aria-label={`Call family contact ${FAMILY_CONTACT_NUMBER}`}
            >
              <Phone size={16} /> {FAMILY_CONTACT_NUMBER}
            </a>

            <p className="mx-auto mt-2 max-w-xs text-[13px] leading-6 text-[#573728]/78">
              For directions, arrival help, or any wedding-day assistance.
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className={`mt-5 ${subtleButton}`}
            aria-label="Get directions to S.V. Function Hall"
          >
            Get Directions
          </a>

          <p className="mx-auto mt-3 max-w-xs text-[12px] font-medium leading-5 text-[#573728]/70">
            On mobile, tap the map or directions button to open navigation.
          </p>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-[#d8ba6b]/45 shadow-[0_16px_34px_rgba(61,34,22,.11)]">
          <iframe
            title="Wedding Venue Map"
            src={GOOGLE_MAPS_EMBED_URL}
            className="h-[300px] w-full border-0 sm:h-[360px] lg:h-full lg:min-h-[390px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

function ShareInvitationButton() {
  const [status, setStatus] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: "Priyanka & Praveen Wedding",
      text: "Join us for Priyanka and Praveen's wedding celebration.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setStatus("");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setStatus("Invitation link copied");
    } catch (error) {
      if (error?.name !== "AbortError") {
        setStatus("Share from your browser menu");
      }
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleShare}
        className={subtleButton}
        aria-label="Share wedding invitation"
      >
        <Share2 size={15} /> Share Invitation
      </button>

      {status ? (
        <p className="mt-2 text-[12px] font-medium text-[#573728]/70">
          {status}
        </p>
      ) : null}
    </div>
  );
}

function RsvpSection() {
  return (
    <Section className="text-center lg:col-span-2">
      <Heart className="mx-auto mb-3 text-[#8b682e]" />

      <SectionTitle>Grace Us With Your Presence</SectionTitle>
      <OrnamentalDivider className="mt-5" />

      <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-8 text-[#573728] sm:text-[18px]">
        Your presence will make our celebration complete, and your blessings
        will be treasured always.
      </p>

      <motion.a
        href={WHATSAPP_RSVP_URL}
        target="_blank"
        rel="noreferrer"
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.03 }}
        className={`mt-6 ${greenButton}`}
        aria-label="Confirm attendance on WhatsApp"
      >
        <MessageCircle size={18} /> Confirm on WhatsApp
      </motion.a>

      <ShareInvitationButton />
    </Section>
  );
}

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-[#e8dfca] text-[#3f2219]" style={bodyFont}>
      <style>{`
        .royal-bg {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 248, 226, .86) 0%, transparent 34%),
            linear-gradient(180deg, #f5edd9 0%, #efe2c4 42%, #eadbb7 100%);
        }
      `}</style>

      <main className="royal-bg relative min-h-screen w-full overflow-hidden pb-10 shadow-[0_0_90px_rgba(43,28,19,.16)]">
        <SideBananaLeaves side="left" />
        <SideBananaLeaves side="right" />
        <Petals />

        <HeroTemple />
        <FloralBand />
        <div className="relative z-30 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-4 py-7 sm:px-6 md:gap-6 lg:grid-cols-2 lg:px-10">
          <WeddingDetailsCard />
          <BlessingsSection />
          <EventsSection />
          <CountdownSection />
          <VenueSection />
          <RsvpSection />
        </div>

        <div className="relative z-30 px-8 pb-8 text-center text-[12px] uppercase tracking-[0.18em] text-[#6b4a2e]/70">
          Made by Praveen
        </div>
      </main>
    </div>
  );
}
