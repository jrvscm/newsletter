import { Footer } from "@/components/Footer";
import { GolfProCard } from "@/components/golf-pro-card";
import { GroundsSection } from "@/components/grounds-section";
import { Header } from "@/components/Header";
import { PastUpdates } from "@/components/past-updates";
import { Section } from "@/components/Section";
import { TournamentCalendar } from "@/components/tournament-calendar";
import { seasonCalendar, seasonCalendarYear } from "@/lib/calendar";
import { currentUpdate, pastUpdates } from "@/lib/data";

const SUBTITLE = "Course Updates & Events";

export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex min-h-full w-full max-w-[760px] flex-col px-5 py-14 sm:px-8 sm:py-20">
        <Header
          courseName={currentUpdate.title}
          subtitle={SUBTITLE}
          updateDate={currentUpdate.date}
          updateDateIso={currentUpdate.dateIso}
        />

        <main
          id="main-content"
          className="mt-14 flex flex-1 flex-col gap-16 sm:gap-20"
        >
          <Section id="staff-updates" title="From our team">
            <div className="space-y-8">
              <GolfProCard
                message={currentUpdate.golfProMessage}
                proName={currentUpdate.golfProName}
                proTitle={currentUpdate.golfProTitle}
                avatarUrl={currentUpdate.golfProAvatarUrl}
                avatarAlt={currentUpdate.golfProAvatarAlt}
                proInitials={currentUpdate.golfProInitials}
              />
              <GroundsSection
                blocks={currentUpdate.groundsBlocks}
                name={currentUpdate.groundsName}
                title={currentUpdate.groundsTitle}
                avatarUrl={currentUpdate.groundsAvatarUrl}
                avatarAlt={currentUpdate.groundsAvatarAlt}
                initials={currentUpdate.groundsInitials}
              />
            </div>
          </Section>

          <Section
            id="tournament-calendar"
            title="Tournament calendar"
            intro="Full list of season tournaments, outings, and recurring play days at Bell Nob."
          >
            <TournamentCalendar
              year={seasonCalendarYear}
              months={seasonCalendar}
            />
          </Section>

          <Section
            id="past-updates"
            title="Past updates"
            intro="Browse prior newsletter summaries."
          >
            <PastUpdates items={pastUpdates} />
          </Section>
        </main>

        <Footer
          clubName={currentUpdate.title}
          addressLine="4600 Overdale Dr, Gillette, WY 82718"
          phone="(307) 686-7069"
          email="yourpro@pga.com"
        />
      </div>
    </div>
  );
}
