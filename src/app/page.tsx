"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   AXIOM CREST — Geometric abstract logo
   Stylized compass rose / shield mark
───────────────────────────────────────────── */
function AxiomCrest({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer octagonal frame */}
      <path
        d="M24 2L38 8V20L44 24L38 28V40L24 46L10 40V28L4 24L10 20V8L24 2Z"
        stroke="#e5e5e5"
        strokeWidth="1"
        fill="none"
      />
      {/* Inner diamond */}
      <path
        d="M24 10L34 24L24 38L14 24L24 10Z"
        stroke="#e5e5e5"
        strokeWidth="0.75"
        fill="none"
      />
      {/* Center crosshair */}
      <line x1="24" y1="16" x2="24" y2="32" stroke="#e5e5e5" strokeWidth="0.5" />
      <line x1="17" y1="24" x2="31" y2="24" stroke="#e5e5e5" strokeWidth="0.5" />
      {/* Center dot */}
      <circle cx="24" cy="24" r="1.5" fill="#e5e5e5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const destinations = [
  {
    name: "Santorini",
    region: "Cyclades, Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
  },
  {
    name: "Kyoto",
    region: "Kansai, Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
  },
  {
    name: "Amalfi",
    region: "Campania, Italy",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80",
    rating: 4.9,
  },
];

const services = [
  {
    number: "01",
    title: "PRIVATE AVIATION",
    description:
      "Direct charter access across six continents. Turboprop to ultra-long-range heavy jet — positioned and fueled on your timeline.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    number: "02",
    title: "GLOBAL SECURITY",
    description:
      "Executive protection, advance reconnaissance, and secure logistics coordinated across 140+ jurisdictions.",
    className: "",
  },
  {
    number: "03",
    title: "ITINERARY ARCHITECTURE",
    description:
      "End-to-end trip design — ground transport, dining, lodging, cultural access — engineered to the quarter-hour.",
    className: "",
  },
  {
    number: "04",
    title: "DISCRETION PROTOCOL",
    description:
      "Encrypted communications. NDA-backed personnel. Zero public-facing documentation of client movements.",
    className: "",
  },
  {
    number: "05",
    title: "PRIORITY CLEARANCE",
    description:
      "Expedited customs, private terminal access, and diplomatic-channel coordination where applicable.",
    className: "",
  },
  {
    number: "06",
    title: "RETAINED CONCIERGE",
    description:
      "A single point of contact retained to your account. Available across all time zones, every day of the year.",
    className: "md:col-span-2",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#e5e5e5]">
      {/* ═══════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <AxiomCrest className="h-7 w-7" />
            <span className="text-[13px] font-light tracking-[0.35em] uppercase text-[#e5e5e5]/80">
              Axiom Concierge
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden items-center gap-10 md:flex"
          >
            {["Services", "Destinations", "Principal", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[12px] font-normal tracking-[0.12em] uppercase text-[#e5e5e5]/30 transition-colors duration-300 hover:text-[#e5e5e5]/70"
                >
                  {item}
                </a>
              )
            )}
            <button className="rounded-full bg-[#39FF14] px-7 py-2.5 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#0a0a12] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)]">
              Book Concierge
            </button>
          </motion.div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO — VIDEO BACKGROUND
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
          >
            <source src="https://your-video-url-here.mp4" type="video/mp4" />
          </video>
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/80 via-[#0a0a12]/50 to-[#0a0a12]" />
          <div className="absolute inset-0 bg-[#0a0a12]/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 inline-flex items-center gap-3 rounded-full glass px-6 py-2.5"
          >
            <AxiomCrest className="h-3.5 w-3.5" />
            <span className="text-[10px] font-normal tracking-[0.35em] uppercase text-[#e5e5e5]/40">
              Private Aviation &bull; Security &bull; Lifestyle Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 font-serif text-5xl font-medium italic leading-[0.95] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-[6.5rem]"
          >
            Unified Lifestyle
            <br />
            <span className="not-italic font-bold tracking-[-0.04em]">
              Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-16 max-w-lg text-[15px] font-light leading-[2] text-[#e5e5e5]/35"
          >
            Axiom Concierge operates at the intersection of private aviation,
            global security, and precision itinerary architecture — for
            principals who delegate everything except the destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group flex items-center gap-3 rounded-full bg-[#39FF14] px-10 py-4 text-[13px] font-semibold tracking-[0.1em] uppercase text-[#0a0a12] transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.25)]">
              Book Concierge
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-[#e5e5e5]/10 px-10 py-4 text-[13px] font-light tracking-[0.1em] uppercase text-[#e5e5e5]/40 transition-all duration-300 hover:border-[#e5e5e5]/20 hover:text-[#e5e5e5]/60">
              View Services
            </button>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[9px] font-light tracking-[0.4em] uppercase text-[#e5e5e5]/15">
              Scroll
            </span>
            <div className="h-12 w-[0.5px] bg-gradient-to-b from-[#e5e5e5]/15 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — BENTO GRID
      ═══════════════════════════════════════ */}
      <section id="services" className="px-6 py-44 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-28 max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-6 text-[10px] font-normal tracking-[0.4em] uppercase text-[#e5e5e5]/25"
            >
              Service Architecture
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl font-medium italic leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl"
            >
              Precision at
              <br />
              <span className="not-italic font-bold">Every Altitude</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-10 max-w-md text-[14px] font-light leading-[2] text-[#e5e5e5]/25"
            >
              Six integrated disciplines. One retained team. Each service
              module operates independently or in concert — calibrated to the
              engagement.
            </motion.p>
          </motion.div>

          <div className="grid auto-rows-[minmax(200px,auto)] gap-[1px] md:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className={`group relative overflow-hidden glass rounded-none p-10 transition-all duration-500 hover:bg-white/[0.04] ${service.className}`}
              >
                <span className="mb-6 block font-serif text-[32px] font-light italic text-[#e5e5e5]/[0.07]">
                  {service.number}
                </span>
                <h3 className="mb-4 text-[12px] font-medium tracking-[0.2em] text-[#e5e5e5]/70">
                  {service.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.9] text-[#e5e5e5]/25">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DESTINATIONS
      ═══════════════════════════════════════ */}
      <section id="destinations" className="px-6 py-44 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-28 text-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-6 text-[10px] font-normal tracking-[0.4em] uppercase text-[#e5e5e5]/25"
            >
              Select Destinations
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl font-medium italic leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl"
            >
              Curated
              <br />
              <span className="not-italic font-bold">Itineraries</span>
            </motion.h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <Star className="h-3 w-3 fill-[#e5e5e5]/40 text-[#e5e5e5]/40" />
                    <span className="text-[11px] font-light text-[#e5e5e5]/40">
                      {dest.rating}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-medium italic tracking-[-0.02em]">
                    {dest.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[#e5e5e5]/25">
                    <MapPin className="h-3 w-3" />
                    <span className="text-[11px] font-light tracking-wide">
                      {dest.region}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THE PRINCIPAL — Editorial Profile
      ═══════════════════════════════════════ */}
      <section id="principal" className="px-6 py-44 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
            {/* Image with glassmorphism overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop&q=80"
                  alt="The Principal"
                  className="h-full w-full object-cover"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-[#0a0a12]/20" />
                <div className="absolute inset-0 glass rounded-2xl opacity-30" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="mb-6 text-[10px] font-normal tracking-[0.4em] uppercase text-[#e5e5e5]/25"
              >
                Founder & Managing Director
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mb-10 font-serif text-5xl font-medium italic leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              >
                The <span className="not-italic font-bold">Principal</span>
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="space-y-6"
              >
                <p className="text-[14px] font-light leading-[2] text-[#e5e5e5]/35">
                  Commercial airline captain with over a decade in the flight
                  deck. Built a following of 800,000 across platforms — not
                  through marketing, but through an unfiltered view into
                  aviation at the highest level.
                </p>
                <p className="text-[14px] font-light leading-[2] text-[#e5e5e5]/35">
                  Axiom Concierge was founded on a single operational
                  principle: the infrastructure that moves high-profile
                  individuals should be invisible, redundant, and
                  uncompromising. No detail deferred. No contingency
                  unplanned.
                </p>
                <p className="text-[14px] font-light leading-[2] text-[#e5e5e5]/35">
                  Based in New York. Operating globally.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} custom={3} className="mt-12">
                <button className="group flex items-center gap-3 text-[12px] font-normal tracking-[0.15em] uppercase text-[#e5e5e5]/30 transition-colors hover:text-[#e5e5e5]/60">
                  Request Introduction
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section id="contact" className="px-6 py-44 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-12 flex justify-center"
          >
            <AxiomCrest className="h-12 w-12 opacity-20" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mb-8 font-serif text-4xl font-medium italic leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl"
          >
            Begin the
            <br />
            <span className="not-italic font-bold">Conversation</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mb-16 text-[14px] font-light leading-[2] text-[#e5e5e5]/25"
          >
            Engagements begin with a confidential consultation. Provide your
            travel parameters and a member of our team will respond within
            four hours.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#39FF14] px-12 py-5 text-[13px] font-semibold tracking-[0.1em] uppercase text-[#0a0a12] transition-all duration-300 hover:shadow-[0_0_50px_rgba(57,255,20,0.2)]">
              Book Concierge
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-[#e5e5e5]/[0.04] px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <AxiomCrest className="h-5 w-5 opacity-30" />
            <span className="text-[12px] font-light tracking-[0.3em] uppercase text-[#e5e5e5]/20">
              Axiom Concierge
            </span>
          </div>
          <div className="flex items-center gap-8">
            {["Terms", "Privacy", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] font-light tracking-[0.1em] uppercase text-[#e5e5e5]/15 transition-colors hover:text-[#e5e5e5]/30"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[11px] font-light text-[#e5e5e5]/10">
            &copy; {new Date().getFullYear()} Axiom Concierge Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
