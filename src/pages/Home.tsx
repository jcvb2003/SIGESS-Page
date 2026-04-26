import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { CompleteManagement } from '../sections/CompleteManagement';
import { ForWho } from '../sections/ForWho';
import { Modules } from '../sections/Modules';
import { Extension } from '../sections/Extension';
import { Differentials } from '../sections/Differentials';
import { Defeso } from '../sections/Defeso';
import { Pricing } from '../sections/Pricing';
import { Testimonials } from '../sections/Testimonials';
import { Contact } from '../sections/Contact';
import { FAQ } from '../sections/FAQ';
import { Footer } from '../sections/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CompleteManagement />
        <ForWho />
        <Modules />
        <Extension />
        <Differentials />
        <Defeso />
        <Pricing />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
