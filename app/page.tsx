import Skills from '@/components/sections/Skills';
import ClientHero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <ClientHero />

      <section id="projects" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          {/* project cards */}
        </div>
      </section>

      <Skills />

      <section id="contact" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to work together? Send an email — <a href="mailto:you@example.com" className="underline">you@example.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
