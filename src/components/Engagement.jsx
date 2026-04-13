"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const EVENT_DATE_ISO = "2026-04-26T10:30:00+05:30";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4525.730877113577!2d81.8087382!3d17.0077084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a33bc324b32b%3A0x8fd3e4651af67d6!2sPLUSH%20Boutique%20%26%20Beauty%20Lounge!5e1!3m2!1sen!2sin!4v1775509809181!5m2!1sen!2sin";
const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/GxcsaQAfRYgwVSN37";
const WHATSAPP_RSVP_URL =
  "https://wa.me/8142721111?text=Hello%20Praveen%2C%20I%20will%20be%20joining%20your%20engagement%20celebration.";
const FAMILY_CONTACT_NUMBER = "+919392015858";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

const eventDetails = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "Sunday, 26 April 2026",
  },
  {
    icon: Clock3,
    label: "Time",
    value: "10:30 AM onwards",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Plush Banquet Hall, JN Road, Rajahmundry",
  },
];

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d2b39b]" />
      <div className="h-2.5 w-2.5 rotate-45 rounded-[2px] border border-[#c79d79] bg-[#f5e1cf]" />
      <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d2b39b]" />
    </div>
  );
}

function FloralCorner({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className="relative h-28 w-28 md:h-36 md:w-36">
        <div className="absolute left-6 top-10 h-14 w-14 rounded-full bg-[#f3cdb3]/60 blur-[2px]" />
        <div className="absolute left-0 top-12 h-12 w-20 -rotate-12 rounded-full border border-[#e5bf9f]/60 bg-[#f8e5d6]/65" />
        <div className="absolute left-8 top-2 h-14 w-14 rotate-12 rounded-full border border-[#e5bf9f]/60 bg-[#f8e5d6]/65" />
        <div className="absolute left-12 top-16 h-12 w-12 rounded-full border border-[#e5bf9f]/60 bg-[#f6dcc7]/70" />
        <div className="absolute left-20 top-3 h-16 w-[2px] rotate-12 bg-[#d8ba97]" />
        <div className="absolute left-24 top-0 h-8 w-4 -rotate-12 rounded-full border border-[#d8ba97]/70 bg-[#efe2c6]/80" />
        <div className="absolute left-24 top-8 h-8 w-4 rotate-12 rounded-full border border-[#d8ba97]/70 bg-[#efe2c6]/80" />
      </div>
    </div>
  );
}

export default function Engagement() {
  const countdown = useCountdown(EVENT_DATE_ISO);

  const countdownItems = useMemo(
    () => [
      ["Days", countdown.days],
      ["Hours", countdown.hours],
      ["Minutes", countdown.minutes],
      ["Seconds", countdown.seconds],
    ],
    [countdown]
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf4] text-[#5b4636] antialiased">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf4_0%,#fff4eb_50%,#fffaf4_100%)]">
        <FloralCorner className="top-0 opacity-60" />
        <FloralCorner className="bottom-4 left-6 rotate-[110deg] opacity-45" />
        <FloralCorner className="right-0 top-0 scale-x-[-1] opacity-60" />
        <FloralCorner className="bottom-4 right-6 scale-x-[-1] rotate-[110deg] opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(235,189,145,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,122,87,0.12),transparent_24%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b79b] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-[11px] uppercase tracking-[0.42em] text-[#a16d49] md:text-xs"
              >
                Together with your families
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.5}
                variants={fadeUp}
                className="mt-6"
              >
                <OrnamentalDivider />
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
                className="mt-5 text-5xl md:text-6xl font-semibold xl:text-[5rem] text-[#6b4b37] leading-[1.2] "
              >
                Praveen <span className="text-[#c08c68]">&</span> <br />
                Priyanka
              </motion.h1>

              <motion.pz
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="mt-8 max-w-2xl text-[15px] leading-8 text-[#7b6252] md:text-lg md:leading-9"
              >
                Inviting you to join our engagement celebration and bless the
                beginning of our new journey together.
              </motion.pz>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#details"
                  className="rounded-full bg-[#a86d49] px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(168,109,73,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(168,109,73,0.28)]"
                >
                  View Invitation
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d8b89f] bg-white/85 px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-[#7d5b45] shadow-[0_8px_24px_rgba(120,86,61,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Get Directions
                </a>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="relative rounded-[40px] border border-[#ecd8c7] bg-white/75 p-6 shadow-[0_24px_80px_rgba(157,112,77,0.16)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b496] to-transparent" />
              <div className="rounded-[32px] border border-[#f1e3d6] bg-[linear-gradient(180deg,#fffdfb_0%,#fff5ec_100%)] p-6 md:p-7">
                <p className="text-center text-[11px] uppercase tracking-[0.42em] text-[#b07f5c] md:text-xs">
                  Save the date
                </p>
                <p className="mt-5 text-center text-2xl font-semibold tracking-[-0.03em] text-[#6d4f3b] md:text-[2rem]">
                  Sunday, 26 April 2026
                </p>
                <p className="mt-2 text-center text-[11px] uppercase tracking-[0.34em] text-[#9d7659] md:text-xs">
                  10:30 AM onwards
                </p>

                <div className="my-6">
                  <OrnamentalDivider />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {countdownItems.map(([label, value]) => (
                    <motion.div
                      key={label}
                      className="rounded-[22px] border border-[#ecd8c7] bg-white/95 px-3 py-4 text-center shadow-[0_10px_24px_rgba(143,108,83,0.06)]"
                      whileHover={{ y: -4 }}
                    >
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-[#8b5e3f] md:text-3xl">
                        {String(value).padStart(2, "0")}
                      </p>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.24em] text-[#af8768] md:text-[11px]">
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="relative border-y border-[#ecd8c7] bg-[linear-gradient(180deg,#fff8f2_0%,#fffdfb_100%)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#dec1aa] to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="rounded-[34px] border border-[#ecd8c7] bg-white/80 p-7 shadow-[0_16px_50px_rgba(157,112,77,0.08)] backdrop-blur-md md:p-9"
            >
              <p className="text-[11px] uppercase tracking-[0.38em] text-[#b07f5c] md:text-xs">
                Invitation
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#6d4f3b] md:text-5xl">
                We would be honored by your presence and blessings.
              </h2>
              <div className="mt-6 max-w-30">
                <OrnamentalDivider />
              </div>
              <p className="mt-6 text-[15px] leading-8 text-[#7d6657] md:text-base md:leading-8">
                Together with your families, we warmly invite you to join us as
                we celebrate our engagement. Your presence will make this
                occasion even more meaningful and memorable for us.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={1}
              variants={fadeUp}
              className="rounded-[34px] border border-[#ecd8c7] bg-white/80 p-6 shadow-[0_16px_50px_rgba(157,112,77,0.08)] backdrop-blur-md md:p-8"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#6d4f3b] md:text-[2rem]">
                Event Details
              </h3>
              <div className="mt-7 space-y-4">
                {eventDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex gap-4 rounded-[26px] border border-[#f0dfd1] bg-[#fffaf5]/95 p-4 md:p-5"
                      whileHover={{ y: -3, scale: 1.01 }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(151,111,82,0.08)]">
                        <Icon className="h-5 w-5 text-[#a86d49]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[#b08769] md:text-[11px]">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-sm leading-7 text-[#6f5849] md:text-[15px]">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="location"
        className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#b07f5c] md:text-xs">
              Venue & directions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#6d4f3b] md:text-5xl">
              Find us here
            </h2>
          </div>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#a86d49] px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(168,109,73,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(168,109,73,0.28)]"
          >
            Open in Google Maps
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={1}
          variants={fadeUp}
          className="overflow-hidden rounded-[38px] border border-[#ecd8c7] bg-white/80 shadow-[0_18px_60px_rgba(157,112,77,0.1)] backdrop-blur-md"
        >
          <div className="aspect-[16/8] w-full bg-[#f8ede2]">
            <iframe
              title="Venue Map"
              src={GOOGLE_MAPS_EMBED_URL}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 md:p-7">
            <div className="rounded-[26px] border border-[#f0dfd1] bg-[#fffaf5] p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#b08769] md:text-[11px]">
                Venue
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f5849] md:text-[15px]">
                Plush Banquet Hall, JN Road, Rajahmundry
              </p>
            </div>
            <div className="rounded-[26px] border border-[#f0dfd1] bg-[#fffaf5] p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#b08769] md:text-[11px]">
                Contact
              </p>
              <a
                href={`tel:${FAMILY_CONTACT_NUMBER}`}
                className="mt-2 inline-flex items-center gap-2 text-sm leading-7 text-[#6f5849] transition hover:text-[#a86d49] md:text-[15px]"
              >
                <Phone className="h-4 w-4" />
                {FAMILY_CONTACT_NUMBER}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-t border-[#ecd8c7] bg-[linear-gradient(180deg,#fffdfb_0%,#fff6ee_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[34px] border border-[#ecd8c7] bg-white/80 p-7 shadow-[0_16px_50px_rgba(157,112,77,0.08)] backdrop-blur-md md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#a86d49]" />
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#6d4f3b] md:text-[2rem]">
                    RSVP
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-8 text-[#7d6657]">
                  Kindly confirm your presence with your good wishes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_RSVP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#a86d49] px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(168,109,73,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(168,109,73,0.28)]"
                >
                  RSVP on WhatsApp
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d8b89f] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-[#7d5b45] shadow-[0_8px_24px_rgba(120,86,61,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8f2]"
                >
                  View Location
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm tracking-[0.08em] text-[#9d7b63] md:px-10">
        Made with ❤️ for Praveen & Priyanka
      </footer>
    </main>
  );
}
