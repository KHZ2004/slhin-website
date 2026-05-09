import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const BRAND_BLUE = "#160fd0";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M16.65 2.5c.37 2.35 1.75 3.92 4.05 4.07v3.06c-1.34.13-2.52-.31-3.96-1.2v5.72c0 7.28-7.92 9.55-11.1 4.33-2.05-3.37-.79-9.28 5.77-9.52v3.23c-.44.07-.91.18-1.34.34-1.29.49-2.02 1.4-1.82 3.01.39 3.08 6.1 3.99 5.63-2.03V2.5h2.77Z" />
    </svg>
  );
}

const branches = [
  "Klang Valley Branch",
  "Northern Region Branch",
  "Southern Region Branch",
];

const services = [
  "Reliable Wholesale Supply",
  "Helpful customer service",
  "Affordable wholesale prices",
];

export default function SLHinEnterpriseWebpage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              SL
            </div>
            <div className="leading-tight">
              <p className="text-sm font-black tracking-wide sm:text-base">S.L.Hin Enterprise</p>
              <p className="text-xs font-medium text-slate-500">SDN BHD</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#branches" className="transition hover:text-[#160fd0]">Our branches</a>
            <a href="#about" className="transition hover:text-[#160fd0]">About Us</a>
            <a href="#contact" className="transition hover:text-[#160fd0]">Contact Us</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#160fd0] hover:bg-[#160fd0] hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#160fd0] hover:bg-[#160fd0] hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#160fd0] hover:bg-[#160fd0] hover:text-white"
            >
              <TikTokIcon />
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#160fd0]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-flex rounded-full border border-[#160fd0]/20 bg-white px-4 py-2 text-sm font-bold text-[#160fd0] shadow-sm">
              Enterprise solutions with dependable service
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Welcome to S.L.Hin Enterprise SDN BHD
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              S.L.Hin Enterprise SDN BHD provides professional, customer-focused support through a growing branch network and a commitment to reliable service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#160fd0] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#160fd0]/25 transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#branches"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#160fd0] hover:text-[#160fd0]"
              >
                View Our Branches
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-200 ring-1 ring-slate-200">
              <div className="rounded-[1.5rem] bg-[#160fd0] p-8 text-white">
                <Building2 className="h-12 w-12" />
                <h2 className="mt-8 text-3xl font-black">S.L.Hin Enterprise SDN BHD</h2>
                <p className="mt-3 text-white/80">
                  Reliable grocery wholesaler offering foodstuffs and sundry goods at competitive prices across multiple branches in Kelantan.
                </p>
                <div className="mt-8 grid gap-3">
                  {services.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="branches" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#160fd0]">Our branches</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Convenient wholesale access across Kelantan</h2>
          <p className="mt-4 text-slate-600">
            Our branches provide convenient access to foodstuffs and sundry goods, with customer-focused service including assistance with carrying and loading purchased items.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {branches.map((branch, index) => (
            <article key={branch} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#160fd0]/10 text-[#160fd0]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-black">{branch}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Branch details can be updated with the exact address, opening hours, and contact person.
              </p>
              <p className="mt-5 text-sm font-bold text-[#160fd0]">Branch 0{index + 1}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#160fd0]">About Us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reliable Wholesale Supply Since 1996</h2>
          </div>
          <div className="text-base leading-8 text-slate-600">
            <p>
              S. L. Hin Enterprise Sdn. Bhd. is a Kelantan-based grocery wholesaler supplying foodstuffs, sundry goods, and selected directly imported products such as onions, shallots, dried chillies, and garlic. Supported by multiple large warehouses and cold storage facilities, we are committed to maintaining product freshness, stable supply, and competitive pricing for our customers.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/60">Contact Us</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let’s connect.</h2>
              <p className="mt-4 text-white/70">
                Please feel free to contact us. We will get back to you as soon as possible.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href="tel:+60000000000" className="rounded-3xl bg-white/10 p-5 transition hover:bg-white/15">
                <Phone className="h-6 w-6 text-white" />
                <p className="mt-4 text-sm font-bold">Phone</p>
                <p className="mt-1 text-sm text-white/70">+60 00-000 0000</p>
              </a>
              <a href="mailto:info@slhin.com" className="rounded-3xl bg-white/10 p-5 transition hover:bg-white/15">
                <Mail className="h-6 w-6 text-white" />
                <p className="mt-4 text-sm font-bold">Email</p>
                <p className="mt-1 text-sm text-white/70">info@slhin.com</p>
              </a>
              <div className="rounded-3xl bg-white/10 p-5">
                <MapPin className="h-6 w-6 text-white" />
                <p className="mt-4 text-sm font-bold">Location</p>
                <p className="mt-1 text-sm text-white/70">Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 S.L.Hin Enterprise SDN BHD. All rights reserved.</p>
          <div className="flex gap-5 font-semibold">
            <a href="#branches" className="hover:text-[#160fd0]">Our branches</a>
            <a href="#about" className="hover:text-[#160fd0]">About Us</a>
            <a href="#contact" className="hover:text-[#160fd0]">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
