import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import BackflowOverview from "../../components/service-page/backflowOverview";
import BackflowTypesTested from "../../components/service-page/backflowTypesTested";
import BackflowTestingProcess from "../../components/service-page/backflowTestingProcess";
import BackflowWhyBlueTrust from "../../components/service-page/backflowWhyBlueTrust";
import BackflowRelatedServices from "../../components/service-page/backflowRelatedServices";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import BackflowStartCTA from "../../components/service-page/backflowStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function BackflowPreventerInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          Backflow Preventer Inspections | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Certified backflow preventer testing, documentation, and compliance reporting for commercial, municipal, and industrial properties."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.backflowPreventerInspections} />

        <BackflowOverview />

        <BackflowTypesTested />

        <BackflowTestingProcess />

        <BackflowWhyBlueTrust />

        <BackflowRelatedServices />

        <WhiteGloveProgram />

        <BackflowStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
