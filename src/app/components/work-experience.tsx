import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type WorkExperience = (typeof RESUME_DATA)["work"][number];

interface BulletListProps {
  label: string;
  items: readonly string[];
  /** cyan dot = achievements, muted dot = responsibilities */
  accent?: boolean;
}

function BulletList({ label, items, accent = false }: BulletListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground print:text-[8px]">
        {label}
      </p>
      <ul className="space-y-0.5 list-none p-0">
        {items.map((item) => (
          <li key={item} className="flex gap-1.5 text-xs text-foreground/80 print:text-[10px]">
            <span
              className={`mt-1.5 size-1 shrink-0 rounded-full ${accent ? "bg-cyan-500" : "bg-muted-foreground/50"}`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, responsibilities, achievements } = work;

  const [locationBadge, ...techBadges] = badges;

  return (
    <div className="relative pl-6 print:pl-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 size-2.5 -translate-x-[7px] rounded-full border-2 border-cyan-500 bg-background print:hidden" />

      <div className="space-y-2.5">
        {/* Period */}
        <p className="font-mono text-xs text-muted-foreground tabular-nums">
          {start} — {end ?? "Present"}
        </p>

        {/* Title | Company */}
        <div>
          <h3 className="text-sm font-semibold leading-tight">
            {title}{" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-cyan-500 transition-colors hover:text-cyan-400"
              aria-label={`${company} website`}
            >
              | {company}
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </h3>
          {locationBadge && (
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {locationBadge}
            </p>
          )}
        </div>

        {/* Summary */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground print:text-[8px]">
            Summary
          </p>
          <p className="text-xs text-foreground/80 text-pretty print:text-[10px]">
            {description}
          </p>
        </div>

        {/* Responsibilities */}
        <BulletList label="Responsibilities" items={responsibilities ?? []} accent={false} />

        {/* Achievements */}
        <BulletList label="Achievements" items={achievements ?? []} accent={true} />

        {/* Tech badges */}
        {techBadges.length > 0 && (
          <ul className="flex list-none flex-wrap gap-1 p-0" aria-label="Technologies used">
            {techBadges.map((badge) => (
              <li key={badge}>
                <Badge
                  variant="secondary"
                  className="px-1.5 py-0 text-[10px] font-normal print:px-1 print:py-0 print:text-[8px]"
                >
                  {badge}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2
        className="text-xs font-semibold uppercase tracking-wider text-foreground/50 print:text-[9px]"
        id="work-experience"
      >
        Work Experience
      </h2>
      <div
        className="relative space-y-6 border-l-2 border-border print:border-l-0 print:space-y-3"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`}>
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
