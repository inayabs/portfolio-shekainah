"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CircleDot,
  FileText,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Sparkles,
  Table2,
  X,
  ZoomIn,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SampleWork = {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  icon: LucideIcon;
};

const sectionIn = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
} satisfies Variants;

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} satisfies Variants;

const services = [
  {
    icon: Table2,
    title: "Data Entry",
    copy: "Clean, accurate updates in spreadsheets, trackers, and records without the chaos.",
  },
  {
    icon: Workflow,
    title: "CRM Support",
    copy: "Keep client notes, follow-ups, and pipelines organized so nothing slips through.",
  },
  {
    icon: FileText,
    title: "Document Handling",
    copy: "Format files, prepare Word docs, and keep shared folders easy to navigate.",
  },
  {
    icon: CalendarDays,
    title: "Scheduling + Research",
    copy: "Handle calendars, inbox triage, and light research with a calm, steady flow.",
  },
];

const tools = [
  "Excel",
  "Word",
  "Google Drive",
  "Google Sheets",
  "Google Docs",
  "CRM tools",
  "Email",
  "Calendar",
];

const background = [
  {
    title: "Hospitality and service",
    copy: "Built people skills through fast-paced customer-facing work, where timing and care matter.",
  },
  {
    title: "Clinic and admin support",
    copy: "Gained experience with records, coordination, and detail-heavy day-to-day office tasks.",
  },
  {
    title: "Virtual assistance",
    copy: "Worked with profile matching, scheduling, spreadsheets, and CRM-based support workflows.",
  },
];

const workflow = [
  {
    icon: CircleDot,
    title: "Sort",
    copy: "Gather the task, organize the inputs, and decide what needs attention first.",
  },
  {
    icon: Sparkles,
    title: "Systemize",
    copy: "Set up a clean path for data, files, and communication so work stays easy to repeat.",
  },
  {
    icon: MessageSquareText,
    title: "Send",
    copy: "Finish with clear updates, neat handoffs, and a reliable final pass.",
  },
];

const sampleWorks: SampleWork[] = [
  {
    title: "Face Checking",
    icon: BriefcaseBusiness,
    image: "/kainah-files/face-checking.jpg",
    alt: "Face checking and verification screen with search results",
    description:
      "Reviewed profile photos carefully to verify matches, catch inconsistencies, and support accurate decision-making during client workflows.",
    highlights: [
      "Visual review of profile images",
      "Consistency checks across profiles",
      "Clean logging for faster follow-up",
    ],
  },
  {
    title: "Client Matching",
    icon: Workflow,
    image: "/kainah-files/client-matching.jpg",
    alt: "Client matching and profile review screen",
    description:
      "Compared client preferences against available profiles and organized the best matches for faster review and better fit.",
    highlights: [
      "Preference-based matching",
      "Search and shortlist support",
      "Better flow for the next step",
    ],
  },
  {
    title: "Data Entry",
    icon: Table2,
    image: "/kainah-files/data-entry.jpg",
    alt: "Spreadsheet tracker with status columns and row entries",
    description:
      "Entered, updated, and cleaned records in spreadsheet trackers while keeping the data structure easy to scan and maintain.",
    highlights: [
      "Spreadsheet updates",
      "Status tracking",
      "Accuracy-focused entry work",
    ],
  },
  {
    title: "Detailed Reporting",
    icon: FileText,
    image: "/kainah-files/detailed-reporting.jpg",
    alt: "Detailed reporting table with notes and example text",
    description:
      "Prepared clear notes and structured reports so managers could see progress, blockers, and next actions at a glance.",
    highlights: [
      "Progress summaries",
      "Manager notes",
      "Readable reporting format",
    ],
  },
  {
    title: "Healthcare Assistant",
    icon: BriefcaseBusiness,
    image: "/kainah-files/healthcare-assistant.jfif",
    alt: "Healthcare services spreadsheet with billing and payment tracking",
    description:
      "Handled healthcare billing records in a structured spreadsheet, keeping patient rows, payment status, and due dates organized for easier review.",
    highlights: [
      "Billing and payment tracking",
      "Patient record organization",
      "Clean spreadsheet structure",
    ],
  },
];

function FadeSection({
  kicker,
  title,
  copy,
  children,
}: {
  kicker: string;
  title: string;
  copy?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      variants={sectionIn}
      className="rounded-lg border border-slate-900/10 bg-white/75 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6"
    >
      <div className="flex items-start justify-between gap-6 border-b border-slate-900/10 pb-4">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-teal-700">
            {kicker}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          {copy ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {copy}
            </p>
          ) : null}
        </div>
        <ChevronRight className="mt-1 h-5 w-5 text-slate-400" />
      </div>
      <div className="pt-5">{children}</div>
    </motion.section>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-teal-700/25 hover:bg-teal-50 hover:text-slate-950">
      {children}
    </span>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group rounded-lg border border-slate-900/10 bg-white/80 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 ease-out hover:border-teal-700/25 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white transition duration-300 ease-out group-hover:bg-teal-700">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Service
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
    </motion.article>
  );
}

export default function Page() {
  const [activeSample, setActiveSample] = useState<SampleWork | null>(null);

  useEffect(() => {
    if (!activeSample) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSample(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSample]);

  return (
    <MotionConfig reducedMotion="user">
      <main
        id="top"
        className="min-h-screen bg-[linear-gradient(180deg,#f8f6f1_0%,#edf3f4_100%)] text-slate-900"
      >
        <header className="sticky top-0 z-30 border-b border-slate-900/10 bg-white/75 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-white shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-slate-950">
                  Shekainah Aparri
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Virtual Assistant
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="#services" className="transition hover:text-slate-950">
                Services
              </a>
              <a href="#tools" className="transition hover:text-slate-950">
                Tools
              </a>
              <a href="#background" className="transition hover:text-slate-950">
                Background
              </a>
              <a href="#samples" className="transition hover:text-slate-950">
                Samples
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-3 py-2 font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-teal-800"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <motion.section
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          >
            <motion.div variants={sectionIn} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg border border-teal-700/20 bg-teal-50 px-3 py-2 text-sm text-teal-800">
                <BadgeCheck className="h-4 w-4" />
                Detail-first support for organized work
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Calm, accurate virtual support for busy inboxes and busy systems.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                I am a virtual assistant who keeps data tidy, CRM records current,
                and documents where they belong. I work comfortably across Excel,
                Word, Google Drive, Sheets, and day-to-day admin tools.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:kaikaiaparri@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-4 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>
                <a
                  href="tel:09619963944"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-900/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-teal-700/25 hover:text-slate-950"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Data entry with care",
                  "CRM and follow-up support",
                  "Docs, files, and scheduling",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {["Excel", "Word", "Google Drive", "CRM"].map((tool) => (
                  <Pill key={tool}>{tool}</Pill>
                ))}
              </div>
            </motion.div>

            <motion.div variants={sectionIn} className="lg:pl-8">
              <div className="rounded-lg border border-slate-900/10 bg-white/80 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-24 shrink-0 rounded-full border border-slate-900/10 bg-white p-1 shadow-sm sm:h-28 sm:w-28">
                    <Image
                      src="/resume-headshot.jpg"
                      alt="Shekainah Shalom Aparri"
                      width={112}
                      height={112}
                      priority
                      sizes="112px"
                      className="h-full w-full rounded-full object-contain object-center"
                    />
                  </div>
                  <div className="min-w-0 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                      Profile
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                      Shekainah Shalom Aparri
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Virtual Assistant / Data Entry
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                      Organized support for CRM updates, spreadsheet work, file
                      management, and everyday admin tasks.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { label: "Focus", value: "Accuracy" },
                    { label: "Tools", value: "Excel + Drive" },
                    { label: "Style", value: "Calm" },
                    { label: "Work", value: "CRM + entry" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-3"
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-lg border border-teal-700/20 bg-teal-50 px-3 py-3">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.24em] text-teal-700">
                      Based in
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-950">
                      <MapPin className="h-4 w-4 text-teal-700" />
                      Davao City
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    Available for<br />
                    remote support
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-500">
                  {["Data entry", "CRM upkeep", "Shared drives"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-900/10 bg-white px-3 py-2 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            id="services"
            variants={sectionIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6"
          >
            <FadeSection
              kicker="What I do"
              title="Services that feel organized, not overloaded."
              copy="The site focuses on the kind of support you actually need from a virtual assistant: careful data work, CRM upkeep, and routine office tasks with clean handoffs."
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    copy={service.copy}
                  />
                ))}
              </div>
            </FadeSection>
          </motion.section>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.section
              id="tools"
              variants={sectionIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <FadeSection
                kicker="Tool stack"
                title="The apps I move through comfortably."
                copy="Excel, Word, Google Drive, and CRM systems are part of the daily rhythm. I like tools that keep work visible, searchable, and simple to hand off."
              >
                <div className="flex flex-wrap gap-2.5">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-teal-700/25 hover:bg-teal-50 hover:text-slate-950"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </FadeSection>
            </motion.section>

            <motion.section
              variants={sectionIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <FadeSection
                kicker="Workflow"
                title="A simple way I keep work moving."
                copy="The point is not just speed. It is steady output, fewer loose ends, and a process that does not become messy under pressure."
              >
                <div className="space-y-3">
                  {workflow.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="rounded-lg border border-slate-900/10 bg-white px-4 py-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-slate-950">
                                {step.title}
                              </p>
                              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                0{index + 1}
                              </span>
                            </div>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {step.copy}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeSection>
            </motion.section>
          </div>

          <motion.section
            id="background"
            variants={sectionIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6"
          >
            <FadeSection
              kicker="Background"
              title="The experience that shaped the work."
              copy="This site keeps the resume context, but it presents it as a short story instead of a long document."
            >
              <div className="grid gap-4 md:grid-cols-3">
                {background.map((item) => (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="rounded-lg border border-slate-900/10 bg-white/85 p-5"
                  >
                    <div className="inline-flex items-center gap-2 rounded-lg border border-teal-700/20 bg-teal-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                      <BriefcaseBusiness className="h-4 w-4" />
                      Background
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.copy}
                    </p>
                  </motion.article>
                ))}
              </div>
            </FadeSection>
          </motion.section>

          <motion.section
            id="samples"
            variants={sectionIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6"
          >
            <FadeSection
              kicker="Sample work"
              title="Clickable samples from the kind of work I actually do."
              copy="Tap any card to open the screenshot in a larger view. The work spans face checking, client matching, data entry, and detailed reporting."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {sampleWorks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveSample(item)}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 220, damping: 20 }}
                      className="group overflow-hidden rounded-lg border border-slate-900/10 bg-white/85 text-left shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                    >
                      <div className="relative aspect-[16/10] bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-2"
                        />
                        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent px-4 py-3 text-white">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em]">
                            <Icon className="h-4 w-4" />
                            Sample
                          </span>
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-white/90">
                            <ZoomIn className="h-4 w-4" />
                            Open
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {item.highlights.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-1.5 text-xs text-slate-700"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </FadeSection>
          </motion.section>

          <motion.footer
            id="contact"
            variants={sectionIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6 rounded-lg border border-slate-900/10 bg-slate-950 px-5 py-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:px-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-200">
                  Let&apos;s work together
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  I keep the details tidy so your day can stay lighter.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
                  Reach out if you need dependable support for data entry,
                  CRM upkeep, file management, or general admin tasks.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:kaikaiaparri@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-teal-50"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="tel:09619963944"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  <ArrowRight className="h-4 w-4" />
                  Back to top
                </a>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Excel", "Word", "Google Drive", "CRM tools"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.footer>

          <AnimatePresence>
            {activeSample && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSample(null)}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={activeSample.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(event) => event.stopPropagation()}
                  className="grid w-full max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl lg:grid-cols-[1.2fr_0.8fr]"
                >
                  <div className="relative min-h-[320px] bg-slate-100 lg:min-h-[70vh]">
                    <Image
                      src={activeSample.image}
                      alt={activeSample.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-teal-700">
                          Sample work
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                          {activeSample.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveSample(null)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 bg-slate-50 text-slate-600 transition hover:border-teal-700/25 hover:text-slate-950"
                        aria-label="Close preview"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {activeSample.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {activeSample.highlights.map((point) => (
                        <span
                          key={point}
                          className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-50 px-3 py-1.5 text-xs text-slate-700"
                        >
                          {point}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-lg border border-teal-700/15 bg-teal-50 p-4 text-sm leading-6 text-slate-700">
                      These screenshots show the way I support profiles,
                      organize data, and keep reporting clear enough for quick
                      review.
                    </div>

                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        onClick={() => setActiveSample(null)}
                        className="inline-flex items-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-teal-800"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Close preview
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </MotionConfig>
  );
}
