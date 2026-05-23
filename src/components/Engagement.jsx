"use client";

import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Utensils,
} from "lucide-react";

const EVENT_DATE_ISO = "2026-06-22T02:32:00+05:30";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=S.%20V.%20Function%20Hall%2C%20J.N.%20Road%2C%20Rajamahendravaram&output=embed";
const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=S.%20V.%20Function%20Hall%2C%20J.N.%20Road%2C%20Rajamahendravaram";
const WHATSAPP_RSVP_URL =
  "https://wa.me/8142721111?text=Hello%20Praveen%2C%20I%20will%20be%20joining%20your%20wedding%20celebration.";
const FAMILY_CONTACT_NUMBER = "+919392015858";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

function getTimeLeft(targetDate) {
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
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

const eventDetails = [
  {
    icon: CalendarDays,
    label: "Sumuhurtham",
    value: "Sunday, 21 June 2026 night at 2:32 AM",
  },
  {
    icon: Clock3,
    label: "Early hours",
    value: "Early hours of Monday, 22 June 2026",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "S. V. Function Hall, J.N. Road, Rajamahendravaram",
  },
  {
    icon: Utensils,
    label: "Dinner",
    value: "Sunday, 21 June 2026 at 7:00 PM onwards at the venue",
  },
];

function OrnamentalDivider({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div
        className={`h-px w-16 bg-gradient-to-r from-transparent ${
          light ? "to-[#f0d892]" : "to-[#9f7a2f]"
        }`}
      />
      <div
        className={`h-2.5 w-2.5 rotate-45 rounded-[2px] border ${
          light
            ? "border-[#f0d892] bg-[#fff4cf]"
            : "border-[#9f7a2f] bg-[#f1d99c]"
        }`}
      />
      <div
        className={`h-px w-16 bg-gradient-to-l from-transparent ${
          light ? "to-[#f0d892]" : "to-[#9f7a2f]"
        }`}
      />
    </div>
  );
}

function LuxuryMotif({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="relative h-48 w-48 rounded-full border border-[#d9bb69]/25">
        <div className="absolute inset-5 rounded-full border border-[#d9bb69]/15" />
        <div className="absolute inset-12 rounded-full border border-[#d9bb69]/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d9bb69]/30 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d9bb69]/30 to-transparent" />
      </div>
    </div>
  );
}

export default function Marriage() {
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
    <main className="min-h-screen overflow-x-hidden bg-[#071b17] text-[#fff8e7] antialiased">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#071b17]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#051411_0%,#09251f_44%,#340e19_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,187,105,0.24),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(127,29,45,0.28),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,248,231,0.12),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d9bb69] to-transparent" />
        <LuxuryMotif className="-left-20 top-16 opacity-70" />
        <LuxuryMotif className="-right-20 bottom-20 opacity-50" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl content-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Motion.aside
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col justify-between border-y border-[#d9bb69]/40 py-8 lg:min-h-[640px]"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.46em] text-[#e6c873] md:text-xs">
                Gummadi's wedding invitation
              </p>
              <h1 className="mt-8 text-6xl font-semibold leading-[0.95] text-[#fff8e7] md:text-7xl xl:text-8xl">
                Praveen
                <span className="mt-4 block text-[#d9bb69]">&</span>
                Priyanka
              </h1>
              <p className="mt-8 max-w-md text-base leading-8 text-[#e8dec1] md:text-lg">
                A timeless celebration of love, family, blessings, and the
                beginning of a sacred journey together.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">
              {countdownItems.map(([label, value]) => (
                <Motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="border border-[#d9bb69]/35 bg-[#fff8e7]/8 p-4 text-center shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-md"
                >
                  <p className="text-3xl font-semibold text-[#f4d77c]">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.26em] text-[#d8c893]">
                    {label}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.aside>

          <Motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#d9bb69]/25" />
            <div className="relative bg-[#fff8e7] p-4 text-[#17261f] shadow-[0_40px_120px_rgba(0,0,0,0.36)] md:p-6">
              <div className="border border-[#b8943b] p-6 md:p-10">
                <div className="border border-[#d8bf76]/70 px-5 py-10 text-center md:px-12 md:py-14">
                  <p className="text-[11px] uppercase tracking-[0.42em] text-[#8d6a26]">
                    Srirasthu Subhamasthu Avighnamasthu
                  </p>
                  <OrnamentalDivider />
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#6d5322]">
                    Gummadi Anand & Smt. Lokeswari
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#806638]">
                    Rajamahendravaram
                  </p>
                  <h2 className="mt-8 text-4xl font-semibold leading-tight text-[#123c32] md:text-6xl">
                    Wedding Invitation
                  </h2>
                  <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#4f4739] md:text-lg">
                    Solicit your gracious presence with family and friends on
                    the auspicious occasion of the marriage of Chi. Praveen
                    Kumar with Chi.La.Sow. Priyanka.
                  </p>

                  <div className="my-8 grid gap-4 border-y border-[#d8bf76] py-6 md:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6a26]">
                        Sumuhurtham
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#123c32]">
                        21 June 2026, 2:32 AM
                      </p>
                      <p className="mt-1 text-sm text-[#6f614b]">
                        Early hours of Monday
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6a26]">
                        Dinner
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#123c32]">
                        21 June 2026, 7:00 PM
                      </p>
                      <p className="mt-1 text-sm text-[#6f614b]">
                        Onwards at the venue
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-[#4f4739] md:text-base">
                    Daughter of Sri Kosuri Chinnarao and Smt. Krishnaveni of
                    Rajamahendravaram.
                  </p>

                  <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <a
                      href="#details"
                      className="bg-[#123c32] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#fff8e7] shadow-[0_14px_34px_rgba(18,60,50,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a4b3f]"
                    >
                      View Details
                    </a>
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-[#b8943b] bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#123c32] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5ead0]"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section
        id="details"
        className="relative bg-[#fff8e7] px-6 py-16 text-[#17261f] md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#8d6a26]">
                Ceremony
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#123c32] md:text-6xl">
                A wedding day shaped by blessings.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#5a5142] md:text-lg">
              Gummadi Anand and Smt. Lokeswari request the pleasure of your
              company as Chi. Praveen Kumar weds Chi.La.Sow. Priyanka.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#c7a958] bg-[#c7a958] md:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  custom={index}
                  variants={fadeUp}
                  className="bg-[#fffaf0] p-6 md:p-8"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#c7a958] bg-[#123c32] text-[#f4d77c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#8d6a26]">
                    {item.label}
                  </p>
                  <p className="mt-4 text-base leading-8 text-[#3f392f]">
                    {item.value}
                  </p>
                </Motion.div>
              );
            })}
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#c7a958] bg-[#c7a958] lg:grid-cols-2">
            <div className="bg-[#123c32] p-7 text-[#fff8e7] md:p-10">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f4d77c]">
                With blessings from
              </p>
              <p className="mt-5 text-xl leading-9">
                Late Gummadi Chukkamma garu, Late Gummadi Veerraju garu, and
                Smt. Bhaskaramma.
              </p>
            </div>
            <div className="bg-[#fffaf0] p-7 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d6a26]">
                With best compliments from
              </p>
              <p className="mt-5 text-lg leading-8 text-[#3f392f]">
                Gummadi Surya Prakash, Smt. Rajitha, Gummadi Nagesh, Smt.
                Annapurna, Gummadi Prabhukumar, and near and dear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="location"
        className="bg-[#0a211c] px-6 py-16 text-[#fff8e7] md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="flex flex-col justify-between border border-[#d9bb69]/45 p-7 md:p-10"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#f4d77c]">
                Venue & directions
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                S. V. Function Hall
              </h2>
              <p className="mt-5 text-base leading-8 text-[#e6dcc0]">
                J.N. Road, Rajamahendravaram
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:${FAMILY_CONTACT_NUMBER}`}
                className="flex items-center gap-3 border border-[#d9bb69]/35 px-5 py-4 text-sm text-[#fff8e7] transition hover:border-[#f4d77c] hover:bg-[#fff8e7]/8"
              >
                <Phone className="h-4 w-4 text-[#f4d77c]" />
                {FAMILY_CONTACT_NUMBER}
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-[#f4d77c] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0a211c] shadow-[0_16px_36px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe89b]"
              >
                Open in Google Maps
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={1}
            variants={fadeUp}
            className="min-h-[360px] border border-[#d9bb69]/45 bg-[#fff8e7]"
          >
            <iframe
              title="Venue Map"
              src={GOOGLE_MAPS_EMBED_URL}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Motion.div>
        </div>
      </section>

      <section className="bg-[#fff8e7] px-6 py-16 text-[#17261f] md:px-10 md:py-20">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mx-auto grid max-w-7xl gap-8 border-y border-[#c7a958] py-10 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-[#8d6a26]" />
              <h3 className="text-3xl font-semibold text-[#123c32] md:text-4xl">
                RSVP
              </h3>
            </div>
            <p className="mt-4 text-base leading-8 text-[#5a5142]">
              Kindly confirm your presence and bless the couple.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_RSVP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-[#123c32] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#fff8e7] transition hover:bg-[#1a4b3f]"
            >
              RSVP on WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-[#b8943b] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#123c32] transition hover:bg-[#f5ead0]"
            >
              View Location
            </a>
          </div>
        </Motion.div>
      </section>

      <footer className="bg-[#071b17] px-6 py-10 text-center text-sm uppercase tracking-[0.18em] text-[#d9bb69] md:px-10">
        Made with love for Praveen & Priyanka
      </footer>
    </main>
  );
}
