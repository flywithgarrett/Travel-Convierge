"use client";

import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
  Star,
  Globe,
  ArrowRight,
  Shield,
  Clock,
  Compass,
  Crown,
  Lock,
  Route,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
    tag: "SIGNATURE",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
    tag: "CURATED",
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80",
    rating: 4.9,
    tag: "EXCLUSIVE",
  },
];

const services = [
  {
    icon: Plane,
    title: "PRIVATE AVIATION",
    description:
      "Direct access to a curated fleet of private aircraft. From turboprops to heavy jets — departure on your schedule, not an airline's.",
    detail: "On-demand worldwide",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Shield,
    title: "GLOBAL SECURITY",
    description:
      "Executive protection, threat assessment, and secure ground logistics in over 140 countries. Your safety is non-negotiable.",
    detail: "140+ countries",
    className: "",
  },
  {
    icon: Route,
    title: "BESPOKE ITINERARIES",
    description:
      "Every detail architected around you — from Michelin reservations to private museum viewings. No templates. No compromises.",
    detail: "Fully custom",
    className: "",
  },
  {
    icon: Crown,
    title: "VIP ACCESS",
    description:
      "Bypass every line. Priority entry to sold-out events, exclusive lounges, and experiences money alone can't buy.",
    detail: "Priority clearance",
    className: "",
  },
  {
    icon: Lock,
    title: "DISCRETION GUARANTEED",
    description:
      "For high-profile clients who demand absolute privacy. Encrypted communications, NDA-backed teams, and zero digital footprint.",
    detail: "Full confidentiality",
    className: "",
  },
  {
    icon: Clock,
    title: "24/7 CONCIERGE",
    description:
      "A dedicated team standing by around the clock. One call changes your entire trip — any timezone, any request.",
    detail: "Always reachable",
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* ═══════════════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="flex items-center gap-3"
          >
            <Plane className="h-5 w-5 text-[#39FF14]" />
            <span className="text-sm font-extrabold tracking-[0.2em] uppercase">
              FlyWithGarrett
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="hidden items-center gap-10 md:flex"
          >
            {["Services", "Destinations", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/40 transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
            <button className="rounded-full bg-[#39FF14] px-7 py-2.5 text-[13px] font-bold tracking-wider uppercase text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:scale-[1.02]">
              Book Now
            </button>
          </motion.div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO — VIDEO BACKGROUND
      ═══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
          >
            {/* Replace this src with your 4K FlyWithGarrett YouTube clip */}
            <source
              src="https://your-video-url-here.mp4"
              type="video/mp4"
            />
          </video>
          {/* Scrim — gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full glass px-6 py-2.5"
          >
            <Globe className="h-3.5 w-3.5 text-[#39FF14]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">
              Private Aviation & Elite Travel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
            className="mb-8 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7rem]"
          >
            YOUR WORLD.
            <br />
            <span className="text-[#39FF14]">YOUR RULES.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.1, 0, 1] }}
            className="mx-auto mb-14 max-w-xl text-[15px] font-light leading-[1.8] text-white/50 sm:text-base"
          >
            FlyWithGarrett is the private concierge for those who
            don&apos;t wait in lines, don&apos;t fly commercial, and
            don&apos;t settle for ordinary. Aviation. Security. Luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group flex items-center gap-3 rounded-full bg-[#39FF14] px-10 py-4 text-sm font-bold tracking-[0.1em] uppercase text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.35)] hover:scale-[1.02]">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="rounded-full glass px-10 py-4 text-sm font-medium tracking-[0.1em] uppercase text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.08]">
              View Fleet
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/25">
              Scroll
            </span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — BENTO GRID WITH GLASSMORPHISM
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="px-6 py-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-24 max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-5 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#39FF14]"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-7xl"
            >
              BUILT FOR THE
              <br />
              <span className="text-white/20">UNREACHABLE</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-8 max-w-lg text-[15px] font-light leading-[1.9] text-white/35"
            >
              Three pillars. One standard. Every service we offer exists because
              the alternatives weren&apos;t good enough.
            </motion.p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid auto-rows-[minmax(220px,auto)] gap-3 md:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className={`group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:bg-white/[0.06] ${service.className}`}
              >
                <div className="mb-6 inline-flex rounded-xl glass p-3">
                  <service.icon className="h-5 w-5 text-[#39FF14]" />
                </div>
                <h3 className="mb-3 text-[13px] font-extrabold tracking-[0.15em]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-[1.8] text-white/30">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#39FF14]" />
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">
                    {service.detail}
                  </span>
                </div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#39FF14]/[0.02] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DESTINATIONS
      ═══════════════════════════════════════════════════ */}
      <section id="destinations" className="px-6 py-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-24 text-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-5 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#39FF14]"
            >
              Destinations
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-7xl"
            >
              WHERE WE
              <br />
              <span className="text-white/20">TAKE YOU</span>
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
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Tag */}
                <div className="absolute left-5 top-5">
                  <span className="glass rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 flex items-center gap-1.5">
                    <Star className="h-3 w-3 fill-[#39FF14] text-[#39FF14]" />
                    <span className="text-xs font-semibold text-[#39FF14]">
                      {dest.rating}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-[-0.03em]">
                    {dest.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-white/40">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs font-medium tracking-wide">
                      {dest.country}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT / BRAND STATEMENT
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="px-6 py-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="mb-5 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#39FF14]"
              >
                The Pilot Behind It All
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mb-8 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-5xl lg:text-6xl"
              >
                GARRETT RAY
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mb-6 text-[15px] font-light leading-[2] text-white/40"
              >
                Airline captain. Content creator with over 800K followers.
                Founder of Atlas Hydration. Based in New York City.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="mb-10 text-[15px] font-light leading-[2] text-white/40"
              >
                FlyWithGarrett was born from a simple belief: the best travel
                experiences shouldn&apos;t require you to figure it out yourself.
                From private aviation to on-ground security to every
                reservation in between — this is concierge the way it should
                have always been.
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <button className="group flex items-center gap-3 text-sm font-semibold tracking-[0.1em] uppercase text-[#39FF14] transition-colors hover:text-[#32e612]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
                  alt="Private Aviation"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-6">
                <div className="text-3xl font-black tracking-tighter text-[#39FF14]">
                  800K+
                </div>
                <div className="mt-1 text-[11px] font-medium tracking-[0.15em] uppercase text-white/40">
                  Community
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="px-6 py-40 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="mb-8 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-7xl"
          >
            STOP PLANNING.
            <br />
            <span className="text-[#39FF14]">START FLYING.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mb-14 text-[15px] font-light leading-[1.9] text-white/35"
          >
            One conversation with our team is all it takes. Tell us where,
            when, and how — we handle the rest.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#39FF14] px-12 py-5 text-sm font-bold tracking-[0.1em] uppercase text-black transition-all duration-300 hover:shadow-[0_0_50px_rgba(57,255,20,0.3)] hover:scale-[1.02]">
              Book Your Concierge
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Plane className="h-4 w-4 text-[#39FF14]" />
            <span className="text-[13px] font-extrabold tracking-[0.2em] uppercase text-white/30">
              FlyWithGarrett
            </span>
          </div>
          <div className="flex items-center gap-8">
            {["Instagram", "TikTok", "YouTube"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/20 transition-colors hover:text-white/50"
              >
                {platform}
              </a>
            ))}
          </div>
          <p className="text-[12px] font-light text-white/15">
            &copy; {new Date().getFullYear()} FlyWithGarrett. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
