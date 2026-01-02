import React from 'react';
import { Hero } from '../components/Hero';
import { AppShowcase } from '../components/AppShowcase';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { WhoItsFor } from '../components/WhoItsFor';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <FAQ />
      <CTA />
    </>
  );
};
