import Layout from '@/components/layout/Layout';
import PageSection from '@/components/ui/PageSection';
import TopRibbon from '@/components/ui/TopRibbon';
import CtaButton from '@/components/ui/CtaButton';
import FeatureCard from '@/components/ui/FeatureCard';
import VehicleCard from '@/components/ui/VehicleCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { loadSettings } from '@/lib/settings';

export default function Home({ settings }) {
  return (
    <Layout settings={settings}>
      {settings.sections.topRibbon.enabled && <TopRibbon settings={settings.sections.topRibbon} />}

      {/* HERO */}
      <PageSection id="hero" bgColor="bg-neutral-900 text-white" vPadding="py-32 md:py-48" className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={settings.sections.hero.image}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/80 to-neutral-900/90 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {settings.sections.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-neutral-200">
            {settings.sections.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CtaButton variant="primary" href="#vehicles">{settings.sections.hero.ctaPrimary}</CtaButton>
            <CtaButton variant="outline" href="#cta" className="text-white border-white hover:bg-white hover:text-neutral-900 hover:border-white">{settings.sections.hero.ctaSecondary}</CtaButton>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/20 pt-8">
            {settings.sections.hero.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-red-500">{stat.number}</div>
                <div className="text-sm text-neutral-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* ABOUT */}
      <PageSection id="about" title={settings.sections.about.title}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {settings.sections.about.content}
            </p>
            <div className="mt-6">
              <CtaButton variant="outline" href="#cta">Conheça Nossa Loja</CtaButton>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={settings.sections.about.image}
              alt={settings.sections.about.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </PageSection>

      {/* FEATURES */}
      <PageSection
        id="features"
        title={settings.sections.features.title}
        subtitle={settings.sections.features.subtitle}
        bgColor="bg-neutral-50 dark:bg-neutral-900/50"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {settings.sections.features.items.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </PageSection>

      {/* VEHICLES (ex-PRICING) */}
      <PageSection
        id="vehicles"
        title={settings.sections.vehicles.title}
        subtitle={settings.sections.vehicles.subtitle}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {settings.sections.vehicles.items.map((vehicle, i) => (
            <VehicleCard key={i} {...vehicle} />
          ))}
        </div>
        <div className="text-center mt-12">
          <CtaButton variant="outline" href="#cta">Ver Estoque Completo</CtaButton>
        </div>
      </PageSection>

      {/* TESTIMONIALS */}
      <PageSection id="testimonials" title={settings.sections.testimonials.title} bgColor="bg-neutral-50 dark:bg-neutral-900/50">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {settings.sections.testimonials.items.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </PageSection>

      {/* CTA FINAL */}
      <PageSection
        id="cta"
        bgColor="bg-red-600 text-white"
        vPadding="py-20"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">{settings.sections.cta.title}</h2>
          <p className="text-xl mb-8 text-red-100">{settings.sections.cta.subtitle}</p>
          <CtaButton variant="primary" className="bg-white text-red-600 hover:bg-neutral-100 hover:scale-105 shadow-xl">{settings.sections.cta.button}</CtaButton>
          <p className="text-sm mt-6 opacity-80">{settings.sections.cta.secondaryText}</p>
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = loadSettings();
  return { props: { settings } };
}
