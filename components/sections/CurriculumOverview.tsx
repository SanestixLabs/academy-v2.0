import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BrainCircuit, MessageCircle, Mic, Globe, ShoppingBag, Megaphone, Trophy, Bot } from "lucide-react";

const modules = [
  {
    week: "Week 1",
    title: "AI Foundations & n8n",
    description: "Understand LLMs and automation basics.",
    icon: BrainCircuit,
    color: "text-[#10B981]", // green
  },
  {
    week: "Week 2",
    title: "AI Agents",
    description: "Design and build autonomous AI agents that reason and take action.",
    icon: Bot,
    color: "text-[#10B981]", // green
  },
  {
    week: "Week 3",
    title: "Voice Agents",
    description: "Build human-like AI calling agents (with Retell etc.).",
    icon: Mic,
    color: "text-blue-500",
  },
  {
    week: "Week 4",
    title: "AI Websites",
    description: "Create modern websites with AI tools.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    week: "Week 5",
    title: "Ecommerce AI",
    description: "Automate Shopify stores and eCommerce workflows.",
    icon: ShoppingBag,
    color: "text-[#10B981]", // green
  },
  {
    week: "Week 6",
    title: "Meta Ads & Lead Gen",
    description: "Find clients with paid ads and automation.",
    icon: Megaphone,
    color: "text-pink-500",
  },
  {
    week: "Week 7-8",
    title: "Client Acquisition & Capstone",
    description: "Work on real projects and present your final system.",
    icon: Trophy,
    color: "text-yellow-500",
  }
];

export function CurriculumOverview() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-surface-border">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center text-center md:text-left gap-6 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-6 h-px bg-brand-cyan hidden md:block"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Featured Modules
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Practical Skills. Real Applications.
            </h2>
            <p className="mt-3 text-ink-soft">
              A hands-on curriculum built for the real world.
            </p>
          </div>
          <div>
            <ButtonLink 
              href="/course" 
              variant="secondary" 
              className="!border-brand-cyan !text-brand-cyan hover:!bg-brand-50 font-bold w-full md:w-auto"
            >
              View Full Curriculum →
            </ButtonLink>
          </div>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-4 hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 md:overflow-visible md:px-0 md:mx-0 md:gap-4 md:pb-0">
          {modules.map((mod) => (
            <div 
              key={mod.week} 
              className="flex-none w-[220px] md:w-auto snap-center bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.06)] border border-surface-border/40 p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="mb-6 h-12 flex items-center justify-center">
                <mod.icon className={`w-10 h-10 ${mod.color}`} strokeWidth={2} />
              </div>
              <div className="text-[11px] font-bold text-ink-muted mb-2 uppercase tracking-wider">{mod.week}</div>
              <h3 className="font-bold text-ink mb-2 text-sm leading-snug">{mod.title}</h3>
              <p className="text-[13px] text-ink-soft leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/enroll" className="shadow-button !px-8 !py-4 text-base w-full sm:w-auto">
            Reserve Your Seat →
          </ButtonLink>
          <p className="text-xs text-ink-muted sm:ml-2">Spots fill up quickly.</p>
        </div>
      </Container>
    </section>
  );
}
