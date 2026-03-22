"use client";

import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
  Star,
  Globe,
  ArrowRight,
  Compass,
  Shield,
  Clock,
  Check,
  Sparkles,
  Map,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
  },
  {
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80",
    rating: 4.9,
  },
];

const features = [
  {
    icon: Compass,
    title: "CURATED ITINERARIES",
    description:
      "Bespoke travel plans tailored to your preferences, crafted by expert concierges.",
    checks: ["Personalized day-by-day plans", "Local expert recommendations"],
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "PREMIUM PROTECTION",
    description:
      "Comprehensive travel insurance and 24/7 emergency concierge support worldwide.",
    checks: ["24/7 global support", "Full coverage insurance"],
    span: "md:col-span-1",
  },
  {
    icon: Clock,
    title: "PRIORITY ACCESS",
    description:
      "Skip the lines with VIP access to exclusive venues, restaurants, and experiences.",
    checks: ["VIP venue access", "Priority reservations"],
    span: "md:col-span-1",
  },
  {
    icon: Sparkles,
    title: "LUXURY EXPERIENCES",
    description:
      "Hand-picked experiences from private yacht charters to Michelin-star dining.",
    checks: ["Private experiences", "Exclusive partnerships"],
    span: "md:col-span-1",
  },
  {
    icon: Map,
    title: "SEAMLESS LOGISTICS",
    description:
      "Every detail handled — flights, transfers, accommodations, and beyond.",
    checks: ["End-to-end booking", "Real-time updates"],
    span: "md:col-span-1",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Globe className="h-6 w-6 text-lime-400" />
            <span className="text-lg font-black tracking-tight uppercase">
              Travel Concierge
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden items-center gap-8 md:flex"
          >
            {["Destinations", "Experiences", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium tracking-wider uppercase text-white/60 transition-colors hover:text-lime-400"
                >
                  {item}
                </a>
              )
            )}
            <button className="rounded-full bg-lime-400 px-5 py-2 text-sm font-bold tracking-wider text-black transition-all hover:bg-lime-500">
              Book Now
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Gradient Orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-lime-400/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-white/3 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
          >
            <Plane className="h-3.5 w-3.5 text-lime-400" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/70">
              Premium Travel Experiences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-6xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl lg:text-9xl"
          >
            YOUR JOURNEY
            <br />
            <span className="text-lime-400">ELEVATED</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/50"
          >
            Discover the world through a lens of luxury. Our concierge service
            crafts unforgettable experiences tailored exclusively to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-sm font-bold tracking-wider uppercase text-black transition-all hover:bg-lime-500">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium tracking-wider uppercase text-white/70 transition-all hover:border-white/30 hover:text-white">
              Explore Destinations
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-10 w-6 rounded-full border border-white/20 p-1"
          >
            <div className="h-2 w-full rounded-full bg-lime-400/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section — Bento Grid */}
      <section className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-4 text-sm font-medium tracking-widest uppercase text-lime-400"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              UNPARALLELED
              <br />
              SERVICE
            </motion.h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className={`group rounded-3xl border border-white/10 bg-black p-8 transition-all hover:border-lime-400/20 hover:bg-white/[0.02] ${feature.span}`}
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <feature.icon className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="mb-3 text-lg font-black tracking-tight">
                  {feature.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/40">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.checks.map((check) => (
                    <div
                      key={check}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <Check className="h-4 w-4 text-lime-400" />
                      {check}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section
        id="destinations"
        className="border-t border-white/5 px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-4 text-sm font-medium tracking-widest uppercase text-lime-400"
            >
              Destinations
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl font-black uppercase tracking-tighter md:text-6xl"
            >
              CURATED
              <br />
              ESCAPES
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-lime-400 text-lime-400" />
                    <span className="text-sm font-bold text-lime-400">
                      {dest.rating}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {dest.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-white/50">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-sm">{dest.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 px-6 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-6xl"
          >
            READY TO
            <br />
            <span className="text-lime-400">EXPLORE</span>?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mb-10 text-lg text-white/40"
          >
            Let our concierge team craft your perfect getaway. Exclusive
            experiences await.
          </motion.p>
          <motion.button
            variants={fadeUp}
            custom={2}
            className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-10 py-4 text-sm font-bold tracking-wider uppercase text-black transition-all hover:bg-lime-500"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-lime-400" />
            <span className="text-sm font-black tracking-tight uppercase text-white/60">
              Travel Concierge
            </span>
          </div>
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Travel Concierge. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
