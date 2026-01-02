import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import EnvironmentalAssessmentOverview from "../../components/service-page/environmentalAssessmentOverview";
import EnvironmentalAssessmentFloridaImportance from "../../components/service-page/environmentalAssessmentFloridaImportance";
import EnvironmentalAssessmentServicesProvided from "../../components/service-page/environmentalAssessmentServicesProvided";
import EnvironmentalAssessmentWhyBlueTrust from "../../components/service-page/environmentalAssessmentWhyBlueTrust";
import EnvironmentalAssessmentProcess from "../../components/service-page/environmentalAssessmentProcess";

/* REUSED */
import BlueTrustReport from "../../components/service-page/blueTrustReport";
import EnvironmentalAssessmentStartCTA from "../../components/service-page/environmentalAssessmentStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function EnvironmentalAssessmentsPage() {
  return (
    <>
      <Head>
        <title>Environmental Assessments | Blue Trust Water Management</title>
        <meta
          name="description"
          content="Environmental assessment services supporting permitting, compliance, and responsible land development."
        />
      </Head>

      <HeaderThree />

      <main>
        <ServiceHero {...serviceHeroes.environmentalAssessments} />

        <EnvironmentalAssessmentOverview />
        <EnvironmentalAssessmentFloridaImportance />
        <EnvironmentalAssessmentServicesProvided />
        <EnvironmentalAssessmentWhyBlueTrust />
        <BlueTrustReport />
        <EnvironmentalAssessmentProcess />
        <EnvironmentalAssessmentStartCTA />
        <ContactInfo />
      </main>
    </>
  );
}
