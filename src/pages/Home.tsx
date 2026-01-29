import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import SkillsPage from "../components/Skills";
import StackingCards from "../components/StackingCards";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <StackingCards />
      <SkillsPage />
      <Footer/>
    </div>
  );
}
