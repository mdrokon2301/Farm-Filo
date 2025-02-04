import React from 'react';
import Hero from '../components/Hero';
import Insights from '../components/Insights';
import TrustPlatform from '../components/TrustPlatform';
import Technology from '../components/Technology';
import HowWeHelp from '../components/HowWeHelp';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Insights />
      <TrustPlatform />
      <Technology />
      <HowWeHelp />
      <Partners />
      <FAQ />
    </main>
  );
}