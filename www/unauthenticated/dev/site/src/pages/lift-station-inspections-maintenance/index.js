import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import LiftStationOverview from "../../components/service-page/liftStationOverview";
import LiftStationInspectionIncludes from "../../components/service-page/liftStationInspectionIncludes";
import LiftStationTestingProcess from "../../components/service-page/liftStationTestingProcess";
import LiftStationMaintenanceRecommendations from "../../components/service-page/liftStationMaintenanceRecommendations";
import LiftStationWarningSigns from "../../components/service-page/liftStationWarningSigns";
import LiftStationWhyBlueTrust from "../../components/service-page/liftStationWhyBlueTrust";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import LiftStationStartCTA from "../../components/service-page/liftStationStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function LiftStationInspectionsMaintenancePage() {
  return (
    <>
      <Head>
        <title>
          Lift Station Inspections & Maintenance | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Lift station inspections, maintenance, and compliance services to prevent failures, backups, and costly repairs."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.liftStationInspectionsMaintenance} />

        <LiftStationOverview />

        <LiftStationInspectionIncludes />

        <LiftStationTestingProcess />

        <LiftStationMaintenanceRecommendations />

        <LiftStationWarningSigns />

        <LiftStationWhyBlueTrust />

        <WhiteGloveProgram />

        <LiftStationStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
