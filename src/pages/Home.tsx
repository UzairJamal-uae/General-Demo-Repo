import Hero from "@/src/components/Hero";
import Stats from "@/src/components/Stats";
import ProblemSolution from "@/src/components/ProblemSolution";
import Services from "@/src/components/Services";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import CaseStudies from "@/src/components/CaseStudies";
import PerformanceGraphs from "@/src/components/PerformanceGraphs";
import ContactForm from "@/src/components/ContactForm";
import Map from "@/src/components/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <PerformanceGraphs />
      <CaseStudies />
      <ProblemSolution />
      <ContactForm />
      <Map />
    </main>
  );
}
