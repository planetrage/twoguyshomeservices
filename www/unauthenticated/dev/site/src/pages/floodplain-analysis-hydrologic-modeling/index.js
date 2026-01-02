import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import FloodplainOverview from "../../components/service-page/floodplainOverview";
import FloodplainFloridaImportance from "../../components/service-page/floodplainFloridaImportance";
import FloodplainServicesProvided from "../../components/service-page/floodplainServicesProvided";
import FloodplainWhyBlueTrust from "../../components/service-page/floodplainWhyBlueTrust";
import FloodplainProcess from "../../components/service-page/floodplainProcess";

/* REUSED */
import BlueTrustReport from "../../components/service-page/blueTrustReport";
import FloodplainStartCTA from "../../components/service-page/floodplainStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function FloodplainAnalysisHydrologicModelingPage() {
  return (
    <>
      <Head>
        <title>
          Floodplain Analysis & Hydrologic Modeling | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Floodplain analysis and hydrologic modeling services supporting permitting, compliance, and resilient land development."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT (CORRECT KEY) */}
        <ServiceHero {...serviceHeroes.floodplainAnalysisHydrologicModeling} />

        <FloodplainOverview />
        <FloodplainFloridaImportance />
        <FloodplainServicesProvided />
        <FloodplainWhyBlueTrust />
        <BlueTrustReport />
        <FloodplainProcess />
        <FloodplainStartCTA />
        <ContactInfo />
      </main>
    </>
  );
}
