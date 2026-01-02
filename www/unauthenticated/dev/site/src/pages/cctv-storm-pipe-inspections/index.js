import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import CCTVOverview from "../../components/service-page/cctvOverview";
import CCTVWhyEssential from "../../components/service-page/cctvWhyEssential";
import CCTVInspectionIncludes from "../../components/service-page/cctvInspectionIncludes";
import CCTVProblemsAndWhenNeeded from "../../components/service-page/cctvProblemsAndWhenNeeded";
import CCTVPipeTypes from "../../components/service-page/cctvPipeTypes";
import CCTVWhyBlueTrust from "../../components/service-page/cctvWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import CCTVStartCTA from "../../components/service-page/cctvStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function CCTVStormPipeInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          CCTV Storm Pipe Inspections | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="CCTV storm pipe inspections to diagnose drainage issues, verify pipe conditions, and support repairs, rehabilitation, and compliance."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.cctvStormPipeInspections} />

        <CCTVOverview />

        <CCTVWhyEssential />

        <CCTVInspectionIncludes />

        <CCTVProblemsAndWhenNeeded />

        <CCTVPipeTypes />

        <CCTVWhyBlueTrust />

        <WhiteGloveProgram />

        <CCTVStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
