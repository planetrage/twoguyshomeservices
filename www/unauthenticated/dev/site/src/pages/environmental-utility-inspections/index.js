import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import EnvironmentalUtilityInspectionsHub from "../../components/service-page/environmentalUtilityInspectionsHub";
import EnvironmentalUtilityInspectionsChooser from "../../components/service-page/environmentalUtilityInspectionsChooser";
import EnvironmentalUtilityInspectionsNeeds from "../../components/service-page/environmentalUtilityInspectionsNeeds";
import EnvironmentalUtilityInspectionsImportance from "../../components/service-page/environmentalUtilityInspectionsImportance";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import EnvironmentalUtilityInspectionsStartCTA from "../../components/service-page/environmentalUtilityInspectionsStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function EnvironmentalUtilityInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          Environmental & Utility Inspections | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Environmental and utility inspection services supporting compliance, safety, and long-term system performance."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.environmentalUtilityInspections} />

        {/* CONTENT */}
        <EnvironmentalUtilityInspectionsHub />
        <EnvironmentalUtilityInspectionsChooser />
        <EnvironmentalUtilityInspectionsNeeds />
        <EnvironmentalUtilityInspectionsImportance />

        {/* RECURRING PROGRAM */}
        <WhiteGloveProgram />

        {/* CTA + CONTACT */}
        <EnvironmentalUtilityInspectionsStartCTA />
        <ContactInfo />
      </main>
    </>
  );
}
