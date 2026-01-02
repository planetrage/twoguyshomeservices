import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS — STORMWATER INSPECTIONS (CORRECT SET) */
import StormwaterInspectionOverview from "../../components/service-page/stormwaterInspectionOverview";
import StormwaterLetterExplanation from "../../components/service-page/stormwaterLetterExplanation";
import StormwaterInspectionIncludes from "../../components/service-page/stormwaterInspectionIncludes";
import StormwaterRestorationRepair from "../../components/service-page/stormwaterRestorationRepair";
import StormWaterInspectionWhyBlueTrust from "../../components/service-page/stormWaterInspectionWhyBlueTrust";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import StormwaterCompliance from "../../components/service-page/stormwaterCompliance";
import ContactInfo from "../../components/service-page/contactInfo";

export default function StormwaterSystemInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          Stormwater System Inspections | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Stormwater system inspections to address compliance letters, identify issues, and ensure regulatory approval."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CORRECT SERVICE */}
        <ServiceHero {...serviceHeroes.stormwaterSystemInspections} />

        {/* SECTION 1 */}
        <StormwaterInspectionOverview />

        {/* SECTION 2 */}
        <StormwaterLetterExplanation />

        {/* SECTION 3 */}
        <StormwaterInspectionIncludes />

        {/* SECTION 4 */}
        <StormwaterRestorationRepair />

        {/* SECTION 5 */}
        <StormWaterInspectionWhyBlueTrust />

        {/* SECTION 6 — REUSED */}
        <WhiteGloveProgram />

        {/* SECTION 7 */}
        <StormwaterCompliance />

        {/* SECTION 8 — REUSED */}
        <ContactInfo />
      </main>
    </>
  );
}
