import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import type React from "react";
import { Avatar } from "@/components/avatar";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import type { IconType } from "@/lib/types";

const ICON_MAP: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  telegram: TelegramIcon,
} as const;

interface SocialButtonProps {
  href: string;
  iconType: IconType;
  label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <Button className="size-8 transition-colors hover:border-cyan-500/60 hover:text-cyan-500" variant="outline" size="icon" asChild={true}>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

function ContactButtons() {
  const { contact, personalWebsiteUrl } = RESUME_DATA;

  return (
    <ul
      className="flex list-none flex-wrap gap-1 print:hidden"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <li>
          <SocialButton
            href={personalWebsiteUrl}
            iconType="globe"
            label="Personal website"
          />
        </li>
      )}
      {contact.email && (
        <li>
          <SocialButton
            href={`mailto:${contact.email}`}
            iconType="mail"
            label="Email"
          />
        </li>
      )}

      {contact.social.map((social) => (
        <li key={social.name}>
          <SocialButton
            href={social.url}
            iconType={social.icon}
            label={social.name}
          />
        </li>
      ))}
    </ul>
  );
}

function PrintContact() {
  const { contact, personalWebsiteUrl } = RESUME_DATA;

  const items = [
    contact.email && { label: contact.email, href: `mailto:${contact.email}` },
    contact.tel && { label: contact.tel, href: `tel:${contact.tel}` },
    personalWebsiteUrl && {
      label: new URL(personalWebsiteUrl).hostname,
      href: personalWebsiteUrl,
    },
    ...contact.social
      .filter((s) => s.icon !== "telegram")
      .map((s) => ({
        label: s.url.replace("https://", "").replace("www.", ""),
        href: s.url,
      })),
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="hidden print:block">
      <div className="flex flex-wrap gap-x-3 font-mono text-[10px] text-foreground/70">
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-x-1">
            {i > 0 && <span className="text-foreground/30">·</span>}
            <a href={item.href}>{item.label}</a>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="space-y-4">
      {/* Screen: centered avatar + name */}
      <div className="flex flex-col items-center gap-4 text-center print:hidden">
        <Avatar
          className="size-28 ring-2 ring-cyan-500/60"
          src={RESUME_DATA.avatarUrl}
          alt={`${RESUME_DATA.name}'s profile picture`}
          fallback={RESUME_DATA.initials}
        />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight" id="resume-name">
            {RESUME_DATA.name}
          </h1>
          <p className="text-pretty font-mono text-xs text-foreground/65">
            {RESUME_DATA.about}
          </p>
        </div>
      </div>

      {/* Print: compact name + title */}
      <div className="hidden print:block">
        <h1 className="text-xl font-bold tracking-tight">{RESUME_DATA.name}</h1>
        <p className="font-mono text-[10px] text-foreground/65">{RESUME_DATA.about}</p>
      </div>

      <div className="flex flex-col items-center gap-2 print:items-start">
        <p className="font-mono text-xs text-foreground/60 print:hidden">
          <a
            className="inline-flex items-center gap-1 transition-colors hover:text-cyan-500"
            href={RESUME_DATA.locationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon className="size-3" aria-hidden="true" />
            {RESUME_DATA.location}
          </a>
        </p>
        <ContactButtons />
        <PrintContact />
      </div>
    </header>
  );
}
