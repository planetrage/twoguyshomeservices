import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import CippOverview from "../../components/service-page/cippOverview";
import CippWhyRehabilitation from "../../components/service-page/cippWhyRehabilitation";
import CippServicesIncluded from "../../components/service-page/cippServicesIncluded";
import CippBenefitsAndIssues from "../../components/service-page/cippBenefitsAndIssues";
import CippPipeTypesAndMethods from "../../components/service-page/cippPipeTypesAndMethods";
import CippWhyBlueTrust from "../../components/service-page/cippWhyBlueTrust";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import CippStartCTA from "../../components/service-page/cippStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function PipeLiningCippRehabilitationPage() {
  return (
    <>
      <Head>
        <title>
          Pipelining & Spraying (CIPP Rehabilitation) | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="CIPP pipelining and spraying services for storm pipe rehabilitation, trenchless repair, and long-term infrastructure protection."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.pipeLiningCippRehabilitation} />

        <CippOverview />

        <CippWhyRehabilitation />

        <CippServicesIncluded />

        <CippBenefitsAndIssues />

        <CippPipeTypesAndMethods />

        <CippWhyBlueTrust />

        <WhiteGloveProgram />

        <CippStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
