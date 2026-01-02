import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import InfrastructureMaintenanceOverview from "../../components/service-page/infrastructureMaintenanceOverview";
import InfrastructureMaintenanceWhyMatters from "../../components/service-page/infrastructureMaintenanceWhyMatters";
import InfrastructureMaintenanceChooseService from "../../components/service-page/infrastructureMaintenanceChooseService";
import InfrastructureMaintenanceSpotlightPond from "../../components/service-page/infrastructureMaintenanceSpotlightPond";
import InfrastructureMaintenanceWhyBlueTrust from "../../components/service-page/infrastructureMaintenanceWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import InfrastructureMaintenanceStartCTA from "../../components/service-page/infrastructureMaintenanceStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function InfrastructureMaintenanceRehabilitationPage() {
  return (
    <>
      <Head>
        <title>
          Infrastructure Maintenance &amp; Rehabilitation | Blue Trust Water
          Management
        </title>
        <meta
          name="description"
          content="Infrastructure maintenance and rehabilitation services supporting stormwater systems, ponds, drainage assets, and long-term compliance."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.infrastructureMaintenanceRehabilitation} />

        <InfrastructureMaintenanceOverview />

        <InfrastructureMaintenanceWhyMatters />

        <InfrastructureMaintenanceChooseService />

        <InfrastructureMaintenanceSpotlightPond />

        <InfrastructureMaintenanceWhyBlueTrust />

        <WhiteGloveProgram />

        <InfrastructureMaintenanceStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
