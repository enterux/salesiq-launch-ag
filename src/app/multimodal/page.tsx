'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/BrandKit/Logo';
import { UploadIcon, CheckIcon, ArrowRightIcon, DatabaseIcon } from '@/components/BrandKit/Icons';

export default function MultimodalDemo() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [parseProgress, setParseProgress] = useState(0);
  const [parsed, setParsed] = useState(false);

  const presets = [
    { name: 'Enterprise_Pricing_SLA.pdf', size: '2.4 MB', type: 'pricing' },
    { name: 'Integration_API_Brief.pdf', size: '1.8 MB', type: 'integration' },
    { name: 'Competitor_Battlecard_2026.pdf', size: '3.1 MB', type: 'competitor' }
  ];

  const handleSelectPreset = (filename: string) => {
    setSelectedFile(filename);
    setIsParsing(true);
    setParseProgress(0);
    setParsed(false);

    // Simulate progress bar
    const interval = setInterval(() => {
      setParseProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setIsParsing(false);
          setParsed(true);
          return 100;
        }
        return p + 25;
      });
    }, 400);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans bg-dot-pattern" id="multimodal-sandbox-page">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo showText={true} />
          <span className="h-4 w-px bg-slate-200" />
          <span className="text-xs font-semibold text-brand-blue bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/50">
            Multimodal Context Workbench
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xs text-slate-500 hover:text-brand-blue font-medium transition-colors">
            Back to Landing Page
          </Link>
          <Link href="/demo" className="text-xs text-slate-500 hover:text-brand-blue font-medium transition-colors">
            Live Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
              Gemma Multimodal (32K MCL)
            </span>
          </div>
        </div>
      </header>

      {/* Workspace */}
      <div className="flex-1 max-w-5xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Panel: Dropzone & File List */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-slate-800 mb-2">
              Context Document Ingestion
            </h3>
            <p className="text-xs text-slate-500 leading-normal mb-6">
              Upload pricing sheets, integration documents, or product sheets. Gemma 4 combines them with the CRM history and call transcript to synthesize custom coaching scripts.
            </p>

            {/* Custom Dropzone */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-blue/40 transition-all cursor-pointer bg-slate-50/30">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <UploadIcon size={24} />
              </div>
              <p className="text-xs font-semibold text-slate-700">Drag & drop files here, or click to upload</p>
              <p className="text-[10px] text-slate-400 mt-1">Supports PDF, DOCX, PNG, JPEG up to 10MB</p>
            </div>

            {/* Presets List */}
            <div className="mt-6 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Preset Assets (Click to Simulate Upload)
              </span>
              <div className="grid grid-cols-1 gap-2">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(preset.name)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      selectedFile === preset.name
                        ? 'border-brand-blue/30 bg-blue-50/40'
                        : 'border-slate-100 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-700 block">{preset.name}</span>
                      <span className="text-[10px] text-slate-400">{preset.size}</span>
                    </div>
                    {selectedFile === preset.name && parsed && (
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckIcon size={12} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Gemma Synthetic Output Card */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden min-h-[500px] flex flex-col">
          {/* Output Header */}
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h3 className="font-display text-sm font-semibold text-slate-800">
              Gemma Multimodal Output
            </h3>
            <span className="text-[9px] font-bold tracking-widest text-brand-blue bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase">
              Synthesized
            </span>
          </div>

          {/* Context status */}
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/20 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-slate-500">
            <div>FILE: {selectedFile ? <strong className="text-brand-blue">INGESTED</strong> : 'NONE'}</div>
            <div>TRANSCRIPT: <strong className="text-brand-blue">Sarah Jenkins Discovery</strong></div>
            <div>CRM STATE: <strong className="text-brand-blue">Salesforce Active</strong></div>
          </div>

          {/* Loading Parsing State */}
          {isParsing && (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <span className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-brand-blue animate-spin mb-4" />
              <p className="text-xs font-semibold text-slate-700">Gemma 4 parsing document & merging context...</p>
              <div className="w-48 bg-slate-100 h-1 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-blue h-full transition-all duration-300" style={{ width: `${parseProgress}%` }} />
              </div>
            </div>
          )}

          {/* Empty State */}
          {!selectedFile && !isParsing && (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center opacity-60">
              <DatabaseIcon className="text-slate-300 mb-2 animate-pulse" size={32} />
              <p className="text-xs text-slate-500">
                Awaiting context document... Click on one of the preset documents on the left to simulate ingestion.
              </p>
            </div>
          )}

          {/* Output Content */}
          {parsed && !isParsing && (
            <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar text-slate-700">
              
              {/* Card 1: E-Brief summary */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  1. Document Summary & Target Match
                </h4>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-xs space-y-1.5 leading-normal">
                  {selectedFile?.includes('Pricing') && (
                    <>
                      <p><strong>Title:</strong> Enterprise Pricing & Custom SLAs</p>
                      <p><strong>List Cost:</strong> $90 / rep / month. Standard volume discount applies starting at 100 seats (10% off).</p>
                      <p><strong>Compliance:</strong> Standard 99.9% uptime SLA included. Data processing agreements (DPA) included for EU residents.</p>
                    </>
                  )}
                  {selectedFile?.includes('API') && (
                    <>
                      <p><strong>Title:</strong> Unified Integrations & REST Webhooks API</p>
                      <p><strong>CRM Integration:</strong> Supported on Salesforce Enterprise+, HubSpot Pro+, Odoo V17.</p>
                      <p><strong>Performance:</strong> Writebacks sync bi-directionally every 60 seconds or immediately via Webhook trigger.</p>
                    </>
                  )}
                  {selectedFile?.includes('Battlecard') && (
                    <>
                      <p><strong>Title:</strong> Gong vs. Dialpad Competitor Comparison Matrix</p>
                      <p><strong>Gong:</strong> Post-call summary only. Transcription latency is 15 minutes. No real-time coaching cards.</p>
                      <p><strong>Dialpad:</strong> Basic transcripts, lacks multi-layered semantic reasoning and structured custom object writebacks.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Card 2: Context Answer */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  2. Live Objection Handling Script
                </h4>
                <div className="bg-blue-50/40 border border-blue-100/50 p-3.5 rounded-xl text-xs leading-normal">
                  {selectedFile?.includes('Pricing') && (
                    <>
                      <span className="font-display font-bold text-brand-blue block mb-1">Gemma-Generated Suggestion:</span>
                      <p className="text-slate-600 mb-2">
                        Sarah Jenkins has a team of 150 reps and a $100,000 budget. The list price for 150 seats is $162,000. Under Section 4 of the pricing sheet, a 150-seat deal qualifies for the Tier-2 volume discount (15% off), bringing it to $137,700.
                      </p>
                      <div className="bg-white border border-blue-200/50 rounded-lg p-2.5 font-mono text-[10px] text-slate-700 leading-normal">
                        <strong>Battlecard Script:</strong> "Sarah, standard list is $162,000, but with a 150-seat pilot, you immediately qualify for our Tier-2 volume pricing which brings the total to $137,700. If we do a structured rollout of 100 reps in Phase 1, we can stay exactly under your $100k limit at $91,800."
                      </div>
                    </>
                  )}
                  {selectedFile?.includes('API') && (
                    <>
                      <span className="font-display font-bold text-brand-blue block mb-1">Gemma-Generated Suggestion:</span>
                      <p className="text-slate-600 mb-2">
                        Marcus Chen is concerned about SalesIQ overwriting legacy fields in Salesforce. According to Page 3 of the API Brief, the writeback module uses a dedicated custom namespace `SalesIQ_Activities_c`.
                      </p>
                      <div className="bg-white border border-blue-200/50 rounded-lg p-2.5 font-mono text-[10px] text-slate-700 leading-normal">
                        <strong>Battlecard Script:</strong> "Marcus, we understand CRM data integrity is critical. SalesIQ writes summaries to a custom activity object. It does not touch your default opportunity description fields. This ensures your legacy notes stay intact."
                      </div>
                    </>
                  )}
                  {selectedFile?.includes('Battlecard') && (
                    <>
                      <span className="font-display font-bold text-brand-blue block mb-1">Gemma-Generated Suggestion:</span>
                      <p className="text-slate-600 mb-2">
                        Elena is comparing SalesIQ to Gong. Gong\'s post-call analytics is retroactive. Under Section 1 of the battlecard, highlight that SalesIQ runs on Cerebras hardware.
                      </p>
                      <div className="bg-white border border-blue-200/50 rounded-lg p-2.5 font-mono text-[10px] text-slate-700 leading-normal">
                        <strong>Battlecard Script:</strong> "Elena, Gong is fantastic for post-call reviews, but it cannot influence the call while it happens. SalesIQ\'s sub-1s latency allows reps to see competitive differentiators while talking to the customer, turning a potential loss into a win."
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Card 3: Next Best Action */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  3. Recommended Next Best Action
                </h4>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-3 rounded-xl text-xs font-semibold text-slate-800">
                  <span className="w-5 h-5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckIcon size={12} />
                  </span>
                  {selectedFile?.includes('Pricing') && 'Draft a tiered pilot proposal for 100 seats at $91,800'}
                  {selectedFile?.includes('API') && 'Schedule technical call with RevOps Admin to map Salesforce Custom Objects'}
                  {selectedFile?.includes('Battlecard') && 'Conduct live team demo showing real-time Cerebras vs. Gong speed'}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
