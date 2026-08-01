import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { CompleteManagement } from '../sections/CompleteManagement';
import { ForWho } from '../sections/ForWho';
import { Modules } from '../sections/Modules';
import { Extension } from '../sections/Extension';

import { Defeso } from '../sections/Defeso';
import { Pricing } from '../sections/Pricing';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { ServiceFooter } from '../sections/ServiceFooter';
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
        <Defeso />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <ServiceFooter />
      <Footer />
    </div>
  );
}
