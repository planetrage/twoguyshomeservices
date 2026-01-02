import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import FireLineBackflowOverview from "../../components/service-page/fireLineBackflowOverview";
import FireLineBackflowWhyRequired from "../../components/service-page/fireLineBackflowWhyRequired";
import FireLineBackflowInspectionIncludes from "../../components/service-page/fireLineBackflowInspectionIncludes";
import FireLineBackflowLocalRequirements from "../../components/service-page/fireLineBackflowLocalRequirements";
import FireLineBackflowWhoNeedsTesting from "../../components/service-page/fireLineBackflowWhoNeedsTesting";
import FireLineBackflowRelatedServices from "../../components/service-page/fireLineBackflowRelatedServices";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import FireLineBackflowStartCTA from "../../components/service-page/fireLineBackflowStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function FireLineBackflowInspectionsPage() {
  return (
    <>
      <Head>
        <title>
          Fire Line Backflow Inspections | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Fire line backflow inspections and testing services for fire sprinkler systems to meet local compliance and safety requirements."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.fireLineBackflowInspections} />

        <FireLineBackflowOverview />

        <FireLineBackflowWhyRequired />

        <FireLineBackflowInspectionIncludes />

        <FireLineBackflowLocalRequirements />

        <FireLineBackflowWhoNeedsTesting />

        <FireLineBackflowRelatedServices />

        <WhiteGloveProgram />

        <FireLineBackflowStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
