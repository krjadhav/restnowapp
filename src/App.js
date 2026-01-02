import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AppShowcase } from './components/AppShowcase';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { WhoItsFor } from './components/WhoItsFor';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AppShowcase />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;