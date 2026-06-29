'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/BrandKit/Logo';
import { CheckIcon, ArrowRightIcon } from '@/components/BrandKit/Icons';

export default function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: '01',
      title: 'The Enterprise Memory Blindspot',
      subtitle: 'The Problem',
      body: 'Every year, enterprise sales teams conduct millions of hours of phone calls, meetings, and emails. Yet, 90% of the conversational data disappears. It remains locked in isolated recordings or is completely forgotten by busy reps.',
      highlight: 'CRM remembers customers. SalesIQ remembers conversations.'
    },
    {
      number: '02',
      title: 'The Disconnected Sales Stack',
      subtitle: 'The Current Paradigm',
      body: 'Companies deploy Zoom Phone, MS Teams, Salesforce, and HubSpot. While calls are logged, the actual semantic understanding — objections, competitive positioning, and custom buying signals — is lost. Reps spend up to 6 hours a week manually logging call summaries.',
      highlight: 'Manual logging leads to critical detail loss & administrative fatigue.'
    },
    {
      number: '03',
      title: 'Our Vision: The System of Understanding',
      subtitle: 'The SalesIQ Solution',
      body: 'We sit as the cognitive memory layer on top of your existing communication channels. We capture every audio stream, transcribe it in real-time, and extract the underlying intelligence, automatically updating the CRM as the system of record.',
      highlight: 'Unifying conversation data into a searchable organizational memory graph.'
    },
    {
      number: '04',
      title: 'Real-time Ingestion Architecture',
      subtitle: 'Technical Infrastructure',
      body: 'SalesIQ intercepts SIP audio streams natively from your dialer. The speech is processed through Cerebras ASR, analyzed via Gemma 4 31B, and the structured intelligence is synced to Salesforce custom entities and our vector search graph.',
      highlight: 'Direct API integrations with Salesforce, HubSpot, and Odoo.'
    },
    {
      number: '05',
      title: 'Gemma 4 31B: Reasoning at the Edge',
      subtitle: 'Cognitive Intelligence',
      body: 'We utilize Gemma 4 31B because of its advanced multi-modal capabilities and deep reasoning logic. It reads not only call transcripts but integrates uploaded pricing sheets and competitor battlecards to coach reps during the live conversation.',
      highlight: 'Contextual reasoning matching raw conversations with corporate briefs.'
    },
    {
      number: '06',
      title: 'The Cerebras Velocity Differentiator',
      subtitle: 'Wafer-Scale Speed',
      body: 'Traditional LLM APIs take 10 to 15 seconds to process transcripts. Gemma 4 running on Cerebras dedicated CS-3 engines completes transcript inference in under 1 second. This low latency is what makes live, in-call coaching battlecards possible.',
      highlight: 'Sub-100ms real-time suggestion updates while the call is active.'
    },
    {
      number: '07',
      title: 'Interactive Sales Agent Demo',
      subtitle: 'Live Product',
      body: 'Our agent dashboard showcases a live incoming call simulator. Reps see standard transcripts scroll by, while the sidebar immediately updates with trigger-based suggestion scripts for objection handling and competitor positioning.',
      highlight: 'Try the live simulator on the dashboard workbench.'
    },
    {
      number: '08',
      title: 'Enterprise-Grade Security & Compliance',
      subtitle: 'Production Ready',
      body: 'SalesIQ is designed with data isolation. We support GDPR-compliant EU hosting regions, data residency guarantees, VPC isolation, and end-to-end encryption. All custom activities are write-back only, leaving legacy fields untouched.',
      highlight: 'Enterprise compliance with zero-risk legacy system overwrite.'
    },
    {
      number: '09',
      title: 'Strategic Delivery Roadmap',
      subtitle: 'Future Milestones',
      body: 'Q3 2026: Roll out structured 150-seat pilot program for initial design partners. Q4 2026: Enable bi-directional API writebacks for HubSpot and Teams. Q1 2027: Launch fully custom private VPC cloud deployment options.',
      highlight: 'Structured scaling from pilots to custom virtual private cloud.'
    },
    {
      number: '10',
      title: 'Join the SalesIQ Launch',
      subtitle: 'Closing Thoughts',
      body: 'Enterprise intelligence starts with remembering every conversation. By unlocking your verbal asset pipelines, SalesIQ bridges the gap between sales activity and executive insight, creating a high-performance system of understanding.',
      highlight: 'Cerebras + Gemma 4: Building the enterprise intelligence stack.'
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans relative overflow-hidden" id="presentation-deck-page">
      {/* Background visual slide accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none" />

      {/* Slide Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 h-16 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-6">
          <Logo showText={true} />
          <span className="h-4 w-px bg-slate-200" />
          <span className="text-xs font-semibold text-brand-blue bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/50">
            Apple-style Presentation Deck
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Exit Presentation
          </Link>
          <button
            onClick={() => window.print()}
            className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all font-semibold"
          >
            Export PDF (Print)
          </button>
        </div>
      </header>

      {/* Main Slide Viewer */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative min-h-[500px]">
        {/* Slide Window */}
        <div className="w-full max-w-4xl bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-16 min-h-[420px] flex flex-col justify-between relative overflow-hidden transition-all duration-500 print:shadow-none print:border-none print:p-0">
          
          {/* Slide metadata */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            <span className="text-2xl font-bold text-slate-300 font-mono">
              {slides[currentSlide].number} / 10
            </span>
          </div>

          {/* Slide Title & Body */}
          <div className="my-8 space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
              {slides[currentSlide].body}
            </p>
          </div>

          {/* Highlight Accent Panel */}
          <div className="bg-blue-50/50 border border-blue-100/40 rounded-2xl p-5 mt-4">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Key Takeaway</span>
            <p className="font-display font-medium text-xs md:text-sm text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
              {slides[currentSlide].highlight}
            </p>
          </div>
        </div>

        {/* Slide Selector Indicator */}
        <div className="mt-8 flex items-center gap-2 print:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-brand-blue' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Keyboard instructions */}
        <div className="mt-6 text-[10px] text-slate-400 text-center select-none print:hidden flex items-center gap-2">
          <span>Use</span>
          <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-sans font-bold">←</kbd>
          <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-sans font-bold">→</kbd>
          <span>or</span>
          <kbd className="px-3 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 font-sans font-bold">Space</kbd>
          <span>to navigate slides.</span>
        </div>
      </div>

      {/* Export layout support for Printing */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          #presentation-deck-page {
            min-height: auto !important;
            overflow: visible !important;
          }
          /* Hide header/controls */
          header, .print\\:hidden, kbd, button {
            display: none !important;
          }
          /* Print all slides sequentially */
          .w-full.max-w-4xl {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 0 50px 0 !important;
            page-break-after: always !important;
          }
        }
      `}</style>
    </div>
  );
}
