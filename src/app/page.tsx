'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/BrandKit/Logo';
import { CheckIcon, ArrowRightIcon, DialerIcon, CoachingIcon, IntelligenceIcon } from '@/components/BrandKit/Icons';
import { AnimatedWorkflow } from '@/components/Landing/AnimatedWorkflow';
import { ArchitectureDiagram } from '@/components/Landing/ArchitectureDiagram';

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col bg-grid-pattern relative">
      {/* Soft blue glow in background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-blue-glow pointer-events-none" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-100/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem-section" className="hover:text-brand-blue transition-colors">Problem</a>
            <a href="#workflow-section" className="hover:text-brand-blue transition-colors">Workflow</a>
            <a href="#architecture-diagram-section" className="hover:text-brand-blue transition-colors">Architecture</a>
            <Link href="/presentation" className="hover:text-brand-blue transition-colors">Presentation</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/demo" 
              className="text-xs font-semibold text-brand-blue bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-100 transition-all flex items-center gap-1.5"
              id="cta-hackathon-one-pager"
            >
              Hackathon Live Demo
              <ArrowRightIcon size={12} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 text-center" id="hero-section">
        <div className="max-w-4xl mx-auto">
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/60 rounded-full px-3 py-1.5 mb-6 animate-fade-in shadow-sm">
            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping" />
            <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase">
              Cerebras + Gemma 4 Impact Track
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-3xl mx-auto">
            The AI intelligence platform that turns sales conversations into <span className="bg-gradient-to-r from-brand-blue to-brand-azure bg-clip-text text-transparent">actionable memory.</span>
          </h1>

          {/* Tagline */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            The Enterprise Memory Layer for Sales — capture every call, transcribe in sub-seconds with Cerebras, and guide the next move. CRM remembers customers; SalesIQ remembers conversations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo" 
              className="w-full sm:w-auto font-display font-medium text-white bg-brand-blue hover:bg-blue-700 px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
              id="cta-primary-demo"
            >
              Open Live Dashboard
              <ArrowRightIcon size={16} />
            </Link>
            <Link 
              href="/presentation" 
              className="w-full sm:w-auto font-display font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 text-sm"
              id="cta-presentation"
            >
              View Apple-Style Deck
            </Link>
          </div>
        </div>
      </section>

      {/* Value Comparison / Problem Section */}
      <section className="py-16 px-4 bg-slate-50/50 border-y border-slate-100" id="problem-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
              Pillar
            </span>
            <h2 className="font-display text-3xl font-bold mt-3 text-slate-900">
              CRM remembers clients. SalesIQ remembers conversations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old CRM card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">The Old Stack</span>
              <h3 className="font-display text-xl font-bold text-slate-700 mb-4">Static CRM Records</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Reps forget detail. Transcripts are locked in phone providers or delayed 15 minutes. Competitive insights slip away, and CRM notes look like: <em>"Had a good call, scheduled follow-up."</em>
              </p>
              <div className="space-y-3">
                {['Conversations vanish', 'Delayed coaching battlecards', 'Outdated deal risk analysis'].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center font-bold text-xs">✕</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* New SalesIQ card */}
            <div className="glass-card border-blue-100 rounded-2xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[9px] font-extrabold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
                Active Memory
              </div>
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-2">The Intelligence Layer</span>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">SalesIQ Conversational Memory</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Powered by Gemma 4 running on Cerebras' CS-3 accelerator. Standardizes real-time objection handling cues, structured call logging, and auto-syncs next steps directly to Salesforce.
              </p>
              <div className="space-y-3">
                {['Sub-1s latency transcription', 'Instant live objection cue cards', 'Automatic CRM data updates'].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckIcon size={12} /></span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4" id="solution-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
              Features
            </span>
            <h2 className="font-display text-3xl font-bold mt-3 text-slate-900">
              Three Pillars, One Seamless Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coaching */}
            <div className="glass-card rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                  <CoachingIcon size={20} />
                </div>
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">AI Coaching</span>
                <h3 className="font-display text-lg font-bold text-slate-800 mb-3">Make every rep your best rep</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Gives reps live cues for objection handling, pricing models, and competitive positioning instantly based on Cerebras-powered transcripts.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-slate-500 text-xs">
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-brand-blue" /> Next Best Action suggestions</li>
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-brand-blue" /> Risk & opportunity alerts</li>
              </ul>
            </div>

            {/* Dialer */}
            <div className="glass-card rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <DialerIcon size={20} />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">AI Dialer</span>
                <h3 className="font-display text-lg font-bold text-slate-800 mb-3">Al-assisted calling, hands-free</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Integrates with standard VoIP. Automates speaker separation, transcribes calls live, and ensures rep focus remains on the client.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-slate-500 text-xs">
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-emerald-600" /> Auto-pull records via Webhook</li>
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-emerald-600" /> Speaker-separated audio logging</li>
              </ul>
            </div>

            {/* Intelligence */}
            <div className="glass-card rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <IntelligenceIcon size={20} />
                </div>
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block mb-1">Sales Intelligence</span>
                <h3 className="font-display text-lg font-bold text-slate-800 mb-3">A searchable memory of every deal</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Indexes transcripts in a unified graph. Instantly find who raised integrations, which leads are at risk, and search conversation vector logs.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-slate-500 text-xs">
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-purple-600" /> Full-text vector search</li>
                <li className="flex items-center gap-2"><CheckIcon size={12} className="text-purple-600" /> Executive summary auto-generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Workflow section */}
      <AnimatedWorkflow />

      {/* Cerebras Speed / Gemma 4 Section */}
      <section className="py-16 px-4 bg-slate-900 text-white relative overflow-hidden rounded-3xl max-w-6xl mx-auto my-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-950/90 mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <span className="text-[10px] font-bold tracking-widest text-brand-sky uppercase bg-blue-950/80 px-3 py-1 rounded-full">
            Inference Performance
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Zero Latency. Powered by Gemma 4 on Cerebras.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
            Standard LLMs are too slow to guide live reps. Running Gemma 4 31B on Cerebras' Wafer-Scale Engine allows real-time inference in sub-100ms.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-sky">&lt; 1s</div>
              <div className="text-slate-400 text-xs mt-1">To search all transcripts</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-sky">100k</div>
              <div className="text-slate-400 text-xs mt-1">TPM API Token Limit</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-sky">100%</div>
              <div className="text-slate-400 text-xs mt-1">Calls analyzed automatically</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-sky">0</div>
              <div className="text-slate-400 text-xs mt-1">Leads forgotten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture section */}
      <section className="py-16 px-4">
        <ArchitectureDiagram />
      </section>

      {/* Testimonials Placeholders */}
      <section className="py-16 px-4 bg-slate-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-800">
              Trusted by Revenue Innovators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <p className="text-slate-600 text-xs italic">
                "SalesIQ resolved the single biggest blind spot in our sales operations. Reps focus entirely on discovery while the live card recommendations keep them positioned correctly during objections."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Sarah J.</h4>
                  <span className="text-[10px] text-slate-400">VP of Sales, CloudScale</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <p className="text-slate-600 text-xs italic">
                "With 150+ reps, ramping was incredibly slow. Having Gemma 4 battlecards populate immediately when a customer mentions ZoomInfo cut ramp time by 45% in Q2."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Elena R.</h4>
                  <span className="text-[10px] text-slate-400">Head of Enablement, ApexData</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-100 bg-slate-50/50 py-12 px-4 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo showText={true} size={24} />
          
          <div className="flex gap-6 text-slate-500">
            <Link href="/demo" className="hover:text-brand-blue transition-colors">Live Demo</Link>
            <Link href="/presentation" className="hover:text-brand-blue transition-colors">Slide Deck</Link>
            <Link href="/multimodal" className="hover:text-brand-blue transition-colors">Multimodal Sandbox</Link>
          </div>
          
          <p>© 2026 SalesIQ Inc. Built for Cerebras + Gemma 4 Impact. Works with Odoo & Microsoft Teams.</p>
        </div>
      </footer>
    </div>
  );
}
