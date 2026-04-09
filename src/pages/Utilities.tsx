import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { UtilitiesHero } from '../sections/utilities/UtilitiesHero';
import { REAPGenerator } from '../sections/utilities/REAPGenerator';

export function Utilities() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <UtilitiesHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          {/* Featured Tools Grid */}
          <div className="grid gap-12">
            <REAPGenerator />
            {/* Adicionaremos mais ferramentas aqui futuramente */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
