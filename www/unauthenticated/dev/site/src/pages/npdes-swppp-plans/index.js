import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import NpdesOverview from "../../components/service-page/npdesOverview";
import SwpppOverview from "../../components/service-page/swpppOverview";
import SwpppPlanIncludes from "../../components/service-page/swpppPlanIncludes";
import SwpppInspections from "../../components/service-page/swpppInspections";
import SwpppCommonViolations from "../../components/service-page/swpppCommonViolations";
import NpdesWhyBlueTrust from "../../components/service-page/npdesWhyBlueTrust";

/* CTA + CONTACT */
import NpdesStartCTA from "../../components/service-page/npdesStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function NpdesSwpppPlansPage() {
  return (
    <>
      <Head>
        <title>
          NPDES Permit & SWPPP Development Plans | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="NPDES permitting, SWPPP development, inspections, and compliance services for construction sites across Florida."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.npdesSwpppPlans} />

        <NpdesOverview />

        <SwpppOverview />

        <SwpppPlanIncludes />

        <SwpppInspections />

        <SwpppCommonViolations />

        <NpdesWhyBlueTrust />

        <NpdesStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
