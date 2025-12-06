import AboutMe from "@/components/sections/About";
import ContactForm from "@/components/sections/Contact";
import ExperienceTimeline from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ExperienceTimeline/>
      <ContactForm />

    </main>
  );
}
