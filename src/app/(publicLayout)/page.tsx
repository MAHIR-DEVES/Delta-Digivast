import { Blog } from '@/components/layouts/blog';
import BrandLogoSection from '@/components/layouts/BrandLogoSection';
import ClientReview from '@/components/layouts/ClientReview';
import { Contact2 } from '@/components/layouts/contact2';
import { Hero } from '@/components/layouts/hero';
import HeroVideo from '@/components/layouts/HeroVideo';
import { ServiceSection } from '@/components/layouts/ServiceSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <Hero
        badge="Trusted by 200+ Brands Worldwide"
        heading="Build Your Agency Website"
        description="We create modern, scalable and beautiful web applications."
        image={{
          src: '/image/banner-image.jpeg',
          alt: 'Agency Hero Image',
        }}
      />
      <BrandLogoSection></BrandLogoSection>
      <HeroVideo></HeroVideo>
      <ServiceSection></ServiceSection>
      <ClientReview></ClientReview>
      <Blog></Blog>
      <Contact2></Contact2>
    </div>
  );
}
