import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsProps {
  skills: Skills;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <section
      className={cn("space-y-3", className)}
      aria-labelledby="skills-section"
    >
      <h2
        className="text-xs font-semibold uppercase tracking-wider text-foreground/50 print:text-[9px]"
        id="skills-section"
      >
        Skills
      </h2>
      <ul
        className="flex list-none flex-wrap gap-1.5 p-0"
        aria-label="List of skills"
      >
        {skills.map((skill) => (
          <li key={skill}>
            <Badge
              variant="secondary"
              className="px-2 py-0.5 text-xs font-normal transition-colors hover:border-cyan-500/50 hover:text-cyan-500 print:text-[8px]"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
