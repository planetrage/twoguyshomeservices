import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import FireSprinklerOverview from "../../components/service-page/fireSprinklerOverview";
import FireSprinklerSystemTypes from "../../components/service-page/fireSprinklerSystemTypes";
import FireSprinklerTestIncludes from "../../components/service-page/fireSprinklerTestIncludes";
import FireSprinklerLocalRequirements from "../../components/service-page/fireSprinklerLocalRequirements";
import FireSprinklerWhoNeedsTesting from "../../components/service-page/fireSprinklerWhoNeedsTesting";
import FireSprinklerRelatedServices from "../../components/service-page/fireSprinklerRelatedServices";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import FireSprinklerStartCTA from "../../components/service-page/fireSprinklerStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function FireSprinklerSystemTestingPage() {
  return (
    <>
      <Head>
        <title>
          Fire Sprinkler System Testing | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Fire sprinkler system testing, inspections, and compliance services for commercial and multi-unit buildings."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.fireSprinklerSystemTesting} />

        <FireSprinklerOverview />

        <FireSprinklerSystemTypes />

        <FireSprinklerTestIncludes />

        <FireSprinklerLocalRequirements />

        <FireSprinklerWhoNeedsTesting />

        <FireSprinklerRelatedServices />

        <WhiteGloveProgram />

        <FireSprinklerStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
