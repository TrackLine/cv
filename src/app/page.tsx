import type { Metadata } from "next";
import { CommandMenu } from "@/components/command-menu";
import { PrintButton } from "@/components/print-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { WorkExperience } from "./components/work-experience";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Senior IT Operations Engineer`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [{ url: RESUME_DATA.avatarUrl, width: 400, height: 400 }],
  },
};

function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <PrintButton />
      <ThemeToggle />

      <main
        className="container mx-auto max-w-5xl p-4 print:p-0 md:p-8 lg:p-12"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <div
          className="flex flex-col gap-8 md:flex-row print:flex-row print:gap-4"
          aria-label="Resume Content"
        >
          {/* Sidebar */}
          <aside
            className="w-full shrink-0 space-y-6 md:w-72 lg:w-80 print:w-44"
            aria-label="Profile and Skills"
          >
            <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
              <Header />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <Skills skills={RESUME_DATA.skills} />
            </div>
          </aside>

          {/* Main content */}
          <div
            className="min-w-0 flex-1 space-y-8 print:space-y-4"
            aria-label="Experience and Projects"
          >
            <div
              className="animate-fade-in"
              style={{ animationDelay: "75ms" }}
            >
              <Summary summary={RESUME_DATA.summary} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <WorkExperience work={RESUME_DATA.work} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "225ms" }}
            >
              <Education education={RESUME_DATA.education} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Projects projects={RESUME_DATA.projects} />
            </div>
          </div>
        </div>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
