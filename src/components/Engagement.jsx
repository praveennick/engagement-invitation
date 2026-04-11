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

const EVENT_DATE_ISO = "2026-04-26T11:00:00+05:30";
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
    transition: { delay: i * 0.1, duration: 0.65 },
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
    value: "11:00 AM onwards",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Plush Banquet Hall, JN Road, Rajahmundry",
  },
];

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
    <main className="min-h-screen bg-[#fffaf4] text-[#5b4636]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf4_0%,#fff2e8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(235,189,145,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,122,87,0.14),transparent_24%)]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#f2d7c3]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#ead6b7]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.4em] text-[#a16d49] md:text-sm"
              >
                Together with your families
              </motion.p>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
                className="mt-5 text-5xl font-semibold leading-tight text-[#6d4f3b] md:text-7xl"
              >
                Praveen <span className="text-[#c28e67]">&</span> Priyanka
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-[#7a6353] md:text-lg"
              >
                Invite you to join our engagement celebration and bless the
                beginning of our new journey together.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#details"
                  className="rounded-full bg-[#a86d49] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a86d49]/20 transition hover:-translate-y-0.5"
                >
                  View Invitation
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d8b89f] bg-white/80 px-6 py-3 text-sm font-semibold text-[#7d5b45] transition hover:bg-white"
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
              className="rounded-[36px] border border-[#ecd8c7] bg-white/85 p-6 shadow-xl shadow-[#d9bca5]/20 md:p-8"
            >
              <div className="rounded-[28px] bg-[linear-gradient(180deg,#fffaf7_0%,#fff2ea_100%)] p-6">
                <p className="text-center text-xs uppercase tracking-[0.38em] text-[#b07f5c]">
                  Save the date
                </p>
                <p className="mt-4 text-center text-2xl font-semibold text-[#6d4f3b] md:text-3xl">
                  Sunday, 26 April 2026
                </p>
                <p className="mt-2 text-center text-sm uppercase tracking-[0.28em] text-[#9d7659]">
                  10:30 AM onwards
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {countdownItems.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[#ecd8c7] bg-white px-3 py-4 text-center"
                    >
                      <p className="text-2xl font-semibold text-[#8b5e3f] md:text-3xl">
                        {String(value).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#af8768]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="border-y border-[#ecd8c7] bg-[linear-gradient(180deg,#fff8f2_0%,#fffdfb_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="rounded-[32px] border border-[#ecd8c7] bg-white p-7 shadow-sm md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#b07f5c] md:text-sm">
                Invitation
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#6d4f3b] md:text-5xl">
                We would be honored by your presence and blessings.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#7d6657]">
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
              className="rounded-[32px] border border-[#ecd8c7] bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="text-2xl font-semibold text-[#6d4f3b]">
                Event Details
              </h3>
              <div className="mt-6 space-y-4">
                {eventDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex gap-4 rounded-[24px] border border-[#f0dfd1] bg-[#fffaf5] p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className="h-5 w-5 text-[#a86d49]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#b08769]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-[#6f5849]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="location"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#b07f5c] md:text-sm">
              Venue & directions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#6d4f3b] md:text-5xl">
              Find us here
            </h2>
          </div>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#a86d49] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a86d49]/20 transition hover:-translate-y-0.5"
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
          className="overflow-hidden rounded-[36px] border border-[#ecd8c7] bg-white shadow-sm"
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

          <div className="grid gap-4 p-6 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#f0dfd1] bg-[#fffaf5] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#b08769]">
                Venue
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f5849]">
                Plush Banquet Hall, JN Road, Rajahmundry
              </p>
            </div>
            <div className="rounded-[24px] border border-[#f0dfd1] bg-[#fffaf5] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#b08769]">
                Contact
              </p>
              <a
                href={`tel:${FAMILY_CONTACT_NUMBER}`}
                className="mt-2 inline-flex items-center gap-2 text-sm leading-7 text-[#6f5849] hover:text-[#a86d49]"
              >
                <Phone className="h-4 w-4" />
                {FAMILY_CONTACT_NUMBER}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-[#ecd8c7] bg-[linear-gradient(180deg,#fffdfb_0%,#fff6ee_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[30px] border border-[#ecd8c7] bg-white p-7 shadow-sm"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#a86d49]" />
                  <h3 className="text-2xl font-semibold text-[#6d4f3b]">
                    RSVP
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#7d6657]">
                  Kindly confirm your presence with your good wishes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_RSVP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#a86d49] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a86d49]/20 transition hover:-translate-y-0.5"
                >
                  RSVP on WhatsApp
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d8b89f] bg-white px-6 py-3 text-sm font-semibold text-[#7d5b45] transition hover:bg-[#fff8f2]"
                >
                  View Location
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-[#9d7b63] md:px-10">
        Made with ❤️ for Praveen & Priyanka
      </footer>
    </main>
  );
}
