import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import GreaseTrapOverview from "../../components/service-page/greaseTrapOverview";
import GreaseTrapWhoNeeds from "../../components/service-page/greaseTrapWhoNeeds";
import GreaseTrapWhyRequired from "../../components/service-page/greaseTrapWhyRequired";
import GreaseTrapInspectionIncludes from "../../components/service-page/greaseTrapInspectionIncludes";
import GreaseTrapMaintenanceRules from "../../components/service-page/greaseTrapMaintenanceRules";
import GreaseTrapWhyBlueTrust from "../../components/service-page/greaseTrapWhyBlueTrust";

/* RECURRING */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";

/* CTA + CONTACT */
import GreaseTrapStartCTA from "../../components/service-page/greaseTrapStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function GreaseTrapInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          Grease Trap Inspection & Compliance Services | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Grease trap inspections, pump-out coordination, and compliance services to meet local and county requirements."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.greaseTrapInspectionsCompliance} />

        <GreaseTrapOverview />

        <GreaseTrapWhoNeeds />

        <GreaseTrapWhyRequired />

        <GreaseTrapInspectionIncludes />

        <GreaseTrapMaintenanceRules />

        <GreaseTrapWhyBlueTrust />

        <WhiteGloveProgram />

        <GreaseTrapStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
