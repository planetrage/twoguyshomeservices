import Hero from "../components/sections/Hero";
import Overview from "../components/sections/Overview";
import WhyItMatters from "../components/sections/WhyItMatters";
import ServicesIncluded from "../components/sections/ServicesIncluded";
import Process from "../components/sections/Process";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTA from "../components/sections/CTA";
import ContactBanner from "../components/sections/ContactBanner";

export default function ServicePageTemplate({
  hero,
  overview,
  whyItMatters,
  servicesIncluded,
  process,
  whyChooseUs,
  cta
}) {
  return (
    <>
      {hero && <Hero {...hero} />}
      {overview && <Overview {...overview} />}
      {whyItMatters && <WhyItMatters {...whyItMatters} />}
      {servicesIncluded && <ServicesIncluded {...servicesIncluded} />}
      {process && <Process {...process} />}
      {whyChooseUs && <WhyChooseUs {...whyChooseUs} />}
      {cta && <CTA {...cta} />}
      <ContactBanner />
    </>
  );
}
