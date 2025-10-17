"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote, Mic2, Sparkles, Layers, ArrowRight, Globe2, Users2, Megaphone } from "lucide-react";
import Enquiries from "@/components/Enquiries";

const EMAIL_TO = "chloe@thestrategyedit.co.uk";
const EMAIL_SUBJECT = "The Strategy Edit Enquiry";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <style>{`.libutton{display:flex;flex-direction:column;justify-content:center;padding:7px;text-align:center;outline:none;text-decoration:none;color:#ffffff;width:200px;height:32px;border-radius:16px;background-color:#0A66C2;font-family:SF Pro Text, Helvetica, sans-serif}`}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <div className="text-xl tracking-tight font-semibold">The Strategy Edit</div>
          <span className="text-xs tracking-widest uppercase text-zinc-500">with Chloe</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#essence" className="hover:opacity-70">Essence</a>
          <a href="#wedges" className="hover:opacity-70">Wedges</a>
          <a href="#capsules" className="hover:opacity-70">Capsules</a>
          <a href="#insights" className="hover:opacity-70">Insights</a>
          <a href="#testimonials" className="hover:opacity-70">Spotlights</a>
          <a href="#contact" className="hover:opacity-70">Enquiries</a>
          <a className="libutton" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888" target="_blank" rel="noreferrer">Subscribe on LinkedIn</a>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-5 gap-10 items-end">
        <div className="md:col-span-3 space-y-6">
          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
            Strategy as craft and culture
            <span className="block">where beauty and tech converge.</span>
          </h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-prose">
            The Strategy Edit is a living hub, not an agency, not a portfolio. A premium invitation into my world of thinking, creating and activating impact.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#wedges"><Button className="rounded-2xl">Explore the three wedges</Button></a>
            <a href="#contact"><Button variant="secondary" className="rounded-2xl">Partner with Chloe</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainSections() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pb-24">
      <Essence />
      <Wedges />
      <Capsules />
      <Insights />
      <Spotlights />
      <Enquiries />
    </div>
  );
}

function Essence() {
  return (
    <section id="essence" className="grid md:grid-cols-3 gap-6">
      <Card className="border-zinc-200 bg-white/80">
        <CardHeader><CardTitle>Essence</CardTitle></CardHeader>
        <CardContent className="text-sm text-zinc-700 space-y-2">
          <p>A curated ecosystem where work across industries converges. A hub to experience strategy as craft and culture, with beauty and tech as guiding threads.</p>
        </CardContent>
      </Card>
      <Card className="border-zinc-200 bg-white/80">
        <CardHeader><CardTitle>Energy</CardTitle></CardHeader>
        <CardContent className="text-sm text-zinc-700 space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Warm, intelligent, elevated.</li>
            <li>Premium and intentional.</li>
            <li>Modern editorial; inviting, human, quietly poetic.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border-zinc-200 bg-white/80">
        <CardHeader><CardTitle>Purpose</CardTitle></CardHeader>
        <CardContent className="text-sm text-zinc-700 space-y-2">
          <p>One seamless platform for services, projects and insights, showing not only the result but the reasoning and resonance behind it.</p>
        </CardContent>
      </Card>
    </section>
  );
}

function Wedges() {
  const [active, setActive] = useState("research");
  return (
    <section id="wedges" className="space-y-6">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl tracking-tight">Three Wedges of Expertise</h2>
        <Tabs value={active} onValueChange={setActive} className="hidden md:block">
          <TabsList>
            <TabsTrigger value="research">User Research</TabsTrigger>
            <TabsTrigger value="mentoring">Marketing Mentoring</TabsTrigger>
            <TabsTrigger value="experiences">Experience Curation & Speaking</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="md:hidden">
        <Tabs value={active} onValueChange={setActive}>
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="mentoring">Mentor</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {active === "research" && (
        <WedgeCard
          icon={<Layers className="h-5 w-5" />}
          title="User Research"
          lead="Grounded in user centred design, translating complexity into clarity at scale."
          body="Projects across NHS, Government, Akuna TV, Solana and fintech, improving services, products and experiences."
          funnels={["Group chats", "LinkedIn community"]}
          ctas={[{ label: "View case notes", href: "#" }, { label: "Discuss a discovery", href: "#contact" }]}
        />
      )}

      {active === "mentoring" && (
        <WedgeCard
          icon={<Users2 className="h-5 w-5" />}
          title="Marketing Mentoring & Support"
          lead="From waitlisted 1:1 mentorships to fractional CMO roles, scaling with authenticity and cultural depth."
          body="I work with founders who can win. Collaborations through Superteams and startup ecosystems; known from London startup circles to global rooms."
          funnels={["Agency collabs", "Startup ecosystems", "Private group chats"]}
          ctas={[{ label: "Mentor with Chloe", href: "#contact" }, { label: "Fractional CMO", href: "#contact" }]}
        />
      )}

      {active === "experiences" && (
        <WedgeCard
          icon={<Mic2 className="h-5 w-5" />}
          title="Experience Curation & Speaking"
          lead="Insights that spark conversations bridging business and culture."
          body="Stages include Anthropy; curated brand experiences from Somerset House to Solana."
          funnels={["Events", "Conferences", "Partnerships"]}
          ctas={[
            { label: "Book Chloe to speak", href: "#contact" },
            { label: "Curate an activation", href: "#contact" },
            { label: "Watch speaking clip", href: "https://www.linkedin.com/posts/chloeoladipo_anthropy-leadership-professionaldevelopment-activity-7312371829610827777-c-aG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2oX-UBLdhhzOBv2RslvDdqGC7Zv7KDDUI" },
          ]}
        />
      )}
    </section>
  );
}
type Capsule = { id: number; title: string; summary: string; tags: string[] };


// put near the top of the file (after imports)
type CTA = { label: string; href: string };

type WedgeCardProps = {
  icon: React.ReactNode;
  title: string;
  lead: string;
  body: string;
  funnels: string[];
  ctas: CTA[];
};

// update the component signature
function WedgeCard({
  icon,
  title,
  lead,
  body,
  funnels,
  ctas,
}: WedgeCardProps) {
  return (
    <Card className="border-zinc-200 bg-white">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="p-2 rounded-xl border bg-white shadow-sm">{icon}</div>
        <div>
          <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
          <p className="text-sm text-zinc-600 mt-1">{lead}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-zinc-700">{body}</p>
        <div className="flex flex-wrap gap-2">
          {funnels.map((f: string) => (
            <span
              key={f}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-50 border px-3 py-1 text-xs text-zinc-700"
            >
              <Sparkles className="h-3.5 w-3.5" /> {f}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {ctas.map((c: CTA) => (
            <a key={c.label} href={c.href}>
              <Button className="rounded-2xl" variant="secondary">
                {c.label} <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Capsules() {
  const filters = ["All", "Tech", "Beauty", "Finance", "B2B", "Government", "Entertainment"];
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const items = useMemo(
    () => sampleCapsules.filter((c) => (tag === "All" || c.tags.includes(tag)) && matchQuery(c, query)),
    [tag, query]
  );

  return (
    <section id="capsules" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl tracking-tight">Current Focus & Capsules</h2>
      </div>
      <p className="text-sm text-zinc-700 max-w-prose">
        Present chapter: scaling from tech and beauty, bridging data driven insight with cultural desirability. Previous activations appear as limited collections, proof of range without diluting focus.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setTag(f)}
            className={`text-xs px-3 py-1 rounded-full border ${
              tag === f ? "bg-black text-white border-black" : "bg-white border-zinc-300 text-zinc-700"
            }`}
          >
            {f}
          </button>
        ))}
        <div className="ml-auto w-full md:w-64">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search capsules…" className="h-9" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((c) => (
          <Card key={c.id} className="border-zinc-200 bg-white group hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> {c.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-600 space-y-2">
              <p>{c.summary}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {c.tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-wide uppercase bg-zinc-50 border px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const sampleCapsules: Capsule[] = [
  {
    id: 1,
    title: "Geny beauty tech growth system",
    summary: "Beauty tech assistant shaping client communications and pipeline...",
    tags: ["Beauty", "Tech"],
  },
  {
    id: 2,
    title: "NHS service discovery",
    summary: "Translated complex patient journeys into clear opportunities...",
    tags: ["Government", "Tech"],
  },
  {
    id: 3,
    title: "Solana experience pop up",
    summary: "Curated an institutional meets culture activation with wayfinding...",
    tags: ["Tech", "Entertainment"],
  },
  {
    id: 4,
    title: "Fintech founder funnel",
    summary: "Mentored GTM and narrative; created lightweight measurement loops...",
    tags: ["Finance", "B2B"],
  },
  {
    id: 5,
    title: "Akuna TV audience insight",
    summary: "Qual and quant study informed partnership roadmap.",
    tags: ["Entertainment", "Tech"],
  },
  {
    id: 6,
    title: "Gov digital consent patterns",
    summary: "Mapped data consent behaviours; recommended privacy aware patterns.",
    tags: ["Government", "B2B"],
  },
];

function matchQuery(c: Capsule, q: string): boolean {
  if (!q) return true;
  const s = (c.title + " " + c.summary + " " + c.tags.join(" ")).toLowerCase();
  return s.includes(q.toLowerCase());
}


const sampleInsights = [
  {
    id: "insight-1",
    title: "The Celebrity Beauty Brand Playbook",
    teaser: "How cultural capital, community and category design shape modern beauty.",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888",
  },
  {
    id: "insight-2",
    title: "Brand Strategy for Fintech Startups: What You Need To Know For Sure",
    teaser: "From regulation to resonance: translating trust into traction.",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888",
  },
  {
    id: "insight-3",
    title: "What Is a Brand? It’s Not What You Sell...It’s How You Make People Feel.",
    teaser: "On identity, ritual and the feelings that scale products into culture.",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888",
  },
];

function Insights() {
  return (
    <section id="insights" className="space-y-6">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl tracking-tight">Latest Insights</h2>
        <a className="libutton" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888" target="_blank" rel="noreferrer">Subscribe on LinkedIn</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {sampleInsights.map((p) => (
          <Card key={p.id} className="border-zinc-200 bg-white group hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-600 space-y-2">
              <p>{p.teaser}</p>
              <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm underline underline-offset-4">
                Read on LinkedIn <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Spotlights() {
  const quotes = [
    {
      quote: `Chloe does not just speak; she makes you feel seen.`,
      by: `Melodie Redbourg, Creative Director`,
    },
  {
  quote: `I have had the pleasure of working with Chloe across several projects. She quickly grasps direction and delivers thoughtful, creative solutions. She brings adaptability and initiative to every brief, often presenting multiple approaches that elevate the final outcome.`,
  by: `Jamie Wallace, Founder of ORIGIN; Digital Creative Director to Alicia Keys and Idris Elba; Innovator in Music, Fashion and Brand Strategy`,
},


  ];

  return (
    <section id="testimonials" className="space-y-6">
      <h2 className="text-2xl md:text-3xl tracking-tight">Spotlights</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {quotes.map((q, i) => (
          <Card key={i} className="border-zinc-200 bg-white">
            <CardHeader className="flex items-center gap-2">
              <div className="p-2 rounded-xl border bg-white shadow-sm">
                <Quote className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">Transformation felt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-zinc-800 italic">“{q.quote}”</p>
              <p className="text-xs text-zinc-500">— {q.by}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-zinc-600 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="font-semibold">The Strategy Edit with Chloe</div>
          <div className="text-xs text-zinc-500">Modern editorial, human, intelligent.</div>
        </div>
        <div className="flex items-center gap-4 md:justify-end">
          <a className="underline underline-offset-4 hover:opacity-70" href="#insights">Insights</a>
          <a className="underline underline-offset-4 hover:opacity-70" href="#testimonials">Speaking</a>
          <a
            className="libutton"
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7293663838489509888"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

