import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS (EXACT FILE NAMES YOU HAVE) */
import PondSprayingOverview from "../../components/service-page/pondSprayingOverview";
import PondSolidsRemoval from "../../components/service-page/pondSolidsRemoval";
import PondMaintenanceWhy from "../../components/service-page/pondMaintenanceWhy";
import PondSprayingIncludes from "../../components/service-page/pondSprayingIncludes";
import PondProblemsAndAudience from "../../components/service-page/pondProblemsAndAudience";
import PondSprayingWhyBlueTrust from "../../components/service-page/pondSprayingWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import PondSprayingStartCTA from "../../components/service-page/pondSprayingStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function PondMaintenancePage() {
  return (
    <>
      <Head>
        <title>
          Pond Spraying & Maintenance | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Pond spraying, solids removal, shoreline control, and routine pond maintenance services for compliance and long-term system health."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.pondMaintenance} />

        <PondSprayingOverview />

        <PondSolidsRemoval />

        <PondMaintenanceWhy />

        <PondSprayingIncludes />

        <PondProblemsAndAudience />

        <PondSprayingWhyBlueTrust />

        <WhiteGloveProgram />

        <PondSprayingStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
