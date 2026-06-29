'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/BrandKit/Logo';
import { leads, transcripts, searchIntelligence, SearchResult, TranscriptLine } from '@/data/demoDataset';
import { CheckIcon, ArrowRightIcon, DialerIcon, CoachingIcon, SearchIcon, DatabaseIcon } from '@/components/BrandKit/Icons';

export default function DemoDashboard() {
  const [selectedLeadId, setSelectedLeadId] = useState('l1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [crmSynced, setCrmSynced] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const transcriptEndRef = useRef<HTMLDivElement>(null);
  
  const lead = leads.find(l => l.id === selectedLeadId) || leads[0];
  const transcriptLines = transcripts[selectedLeadId] || [];

  // Reset playback when lead changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    setCrmSynced(false);
    setSyncing(false);
  }, [selectedLeadId]);

  // Handle auto-scrolling transcript
  useEffect(() => {
    if (transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentLineIndex]);

  // Simulation timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentLineIndex((prev) => {
          if (prev >= transcriptLines.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3500); // 3.5s per line
    }
    return () => clearInterval(interval);
  }, [isPlaying, transcriptLines.length]);

  // Sync to CRM simulation
  const handleCrmSync = () => {
    if (crmSynced) return;
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setCrmSynced(true);
    }, 1500);
  };

  // Run Preset Searches
  const handlePresetSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchIntelligence(query);
    setSearchResults(results);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchIntelligence(searchQuery);
    setSearchResults(results);
  };

  // Active AI triggers calculated from currently spoken lines
  const activeLines = transcriptLines.slice(0, currentLineIndex + 1);
  const activeBuyingSignals = activeLines.filter(line => line.type === 'buying_signal');
  const activeObjections = activeLines.filter(line => line.type === 'objection' || line.type === 'pricing' || line.type === 'integration');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans bg-dot-pattern" id="dashboard-demo-page">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo showText={true} />
          <span className="h-4 w-px bg-slate-200" />
          <span className="text-xs font-semibold text-brand-blue bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/50">
            Agent Dashboard
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xs text-slate-500 hover:text-brand-blue font-medium transition-colors">
            Back to Landing Page
          </Link>
          <Link href="/multimodal" className="text-xs text-slate-500 hover:text-brand-blue font-medium transition-colors">
            Multimodal Workbench
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
              Cerebras Live (100 RPM)
            </span>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Lead Cards & Dialing Controller */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Active Lead Selector Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Select Active Pipeline Lead
            </h3>
            <div className="space-y-3">
              {leads.map((l) => (
                <div
                  key={l.id}
                  onClick={() => setSelectedLeadId(l.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedLeadId === l.id
                      ? 'border-brand-blue/30 bg-blue-50/50 shadow-sm'
                      : 'border-slate-100 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-sm font-semibold text-slate-800">{l.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{l.title} @ {l.companyName}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      Score: {l.leadScore}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Stage: <strong>{l.stage}</strong></span>
                    <span className="font-semibold text-slate-700">${l.dealValue.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Context Details */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Lead Insights Summary
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {lead.summary}
            </p>
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Email:</span>
                <span className="text-slate-700 font-medium">{lead.email}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Phone:</span>
                <span className="text-slate-700 font-medium">{lead.phone}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Next Action:</span>
                <span className="text-slate-700 font-medium text-right max-w-[150px] truncate" title={lead.nextAction}>
                  {lead.nextAction}
                </span>
              </div>
            </div>
          </div>

          {/* CRM Writeback Controller */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Salesforce Writeback Sync
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal mb-4">
              Sync transcript highlights, objections logs, and next steps directly to the CRM opportunity record.
            </p>
            <button
              onClick={handleCrmSync}
              disabled={syncing || crmSynced}
              className={`w-full font-display font-medium text-xs py-2.5 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                crmSynced
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100 cursor-default'
                  : syncing
                  ? 'bg-slate-50 text-slate-400 border-slate-100 cursor-wait'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-transparent shadow-sm'
              }`}
            >
              <DatabaseIcon size={14} />
              {syncing ? 'Syncing Activity...' : crmSynced ? 'Synced to Salesforce!' : 'Sync Activity to Salesforce'}
            </button>
          </div>
        </div>

        {/* Middle Column: Live Call Waveform & Transcription Feed */}
        <div className="lg:col-span-1 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col overflow-hidden h-[600px]">
          {/* Call Status Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <div>
                <h3 className="font-display text-sm font-semibold text-slate-800">
                  {isPlaying ? 'Call in Progress...' : 'Call Ready'}
                </h3>
                <p className="text-[10px] text-slate-400">
                  Dialer connected to Zoom Phone
                </p>
              </div>
            </div>
            
            {/* Control buttons */}
            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                } else {
                  // restart if ended
                  if (currentLineIndex >= transcriptLines.length - 1) {
                    setCurrentLineIndex(-1);
                  }
                  setIsPlaying(true);
                }
              }}
              className={`font-display text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                isPlaying 
                  ? 'bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100'
                  : 'bg-brand-blue text-white hover:bg-blue-700 shadow-sm'
              }`}
            >
              {isPlaying ? 'Pause Call' : 'Start Simulated Call'}
            </button>
          </div>

          {/* Sound Waveform Visualizer */}
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/20 flex items-center gap-1.5 h-16 justify-center">
            {Array.from({ length: 30 }).map((_, idx) => (
              <span
                key={idx}
                className="w-1 bg-brand-blue rounded-full transition-all duration-300 wave-bar"
                style={{
                  height: `${Math.max(10, Math.random() * 40)}px`,
                  animationDelay: `${idx * 0.05}s`,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                  opacity: isPlaying ? 0.8 : 0.2
                }}
              />
            ))}
          </div>

          {/* Transcript Message Feed */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 custom-scrollbar">
            {currentLineIndex === -1 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60 px-4">
                <DialerIcon className="text-slate-300 mb-2 animate-bounce" size={32} />
                <p className="text-xs text-slate-500">
                  Click <strong>"Start Simulated Call"</strong> to stream the conversation from {lead.name} through the Cerebras ASR engine.
                </p>
              </div>
            ) : (
              activeLines.map((line, idx) => {
                const isAgent = line.speaker === 'agent';
                return (
                  <div
                    key={line.id}
                    className={`flex flex-col max-w-[85%] ${
                      isAgent ? 'ml-auto items-end' : 'mr-auto items-start'
                    } animate-[fade-in_0.3s_ease-out]`}
                  >
                    <span className="text-[10px] text-slate-400 font-mono mb-1">
                      {isAgent ? 'Sales Rep' : lead.name} • {line.timestamp}
                    </span>
                    <div
                      className={`p-3 rounded-2xl text-xs leading-normal ${
                        isAgent
                          ? 'bg-brand-blue text-white rounded-tr-none'
                          : 'bg-slate-100 text-slate-700 rounded-tl-none'
                      }`}
                    >
                      {line.text}
                    </div>
                    {/* Live entity extraction label */}
                    {line.annotation && (
                      <span className="text-[9px] text-brand-blue bg-blue-50/80 border border-blue-100/50 px-2 py-0.5 rounded-full mt-1 font-semibold">
                        Annotation: {line.annotation}
                      </span>
                    )}
                  </div>
                );
              })
            )}
            <div ref={transcriptEndRef} />
          </div>
        </div>

        {/* Right Column: Live AI Coaching Battlecards */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* AI Metrics Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Live Call Diagnostics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] text-slate-400 block">Cerebras Latency</span>
                <span className="text-lg font-bold text-brand-blue font-mono">
                  {isPlaying ? '0.12s' : '--'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] text-slate-400 block">Model Load</span>
                <span className="text-lg font-bold text-brand-blue font-mono">Gemma 4</span>
              </div>
            </div>
          </div>

          {/* AI Coaching Battlecard Feed */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm min-h-[420px] flex flex-col">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
              Live AI Battlecards
              <span className="text-[9px] bg-brand-blue text-white px-2 py-0.5 rounded-full animate-pulse">
                Real-Time
              </span>
            </h3>

            <div className="flex-1 space-y-4">
              {activeObjections.length === 0 && activeBuyingSignals.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 py-12">
                  <CoachingIcon className="text-slate-300 mb-2" size={28} />
                  <p className="text-xs text-slate-400">
                    Awaiting trigger events... Battlecards will display immediately when objections or buying signals are spoken.
                  </p>
                </div>
              )}

              {/* Displaying Objections */}
              {activeObjections.map((obj) => (
                <div
                  key={obj.id}
                  className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 animate-[slide-in_0.3s_ease-out]"
                >
                  <div className="flex items-center gap-2 text-amber-800 font-display text-xs font-bold mb-1">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    Objection Detected: {obj.type?.toUpperCase()}
                  </div>
                  <p className="text-[11px] text-slate-500 mb-3 italic">
                    "{obj.text}"
                  </p>
                  
                  {/* Recommended Response */}
                  <div className="bg-white border border-amber-200/50 rounded-lg p-2.5">
                    <span className="text-[9px] font-bold text-amber-800 uppercase block mb-1">Recommended Response:</span>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      {obj.type === 'pricing' 
                        ? 'Validate pilot program value. Pivot to the ROI of saving 4 hours per rep/week in manual logging. Emphasize standard contract protections.'
                        : obj.type === 'integration'
                        ? 'Highlight SalesIQ\'s bi-directional Salesforce API. Clarify it uses custom objects/activities, so existing admin configurations are preserved.'
                        : 'Explain standard API integration is built-in. Reps see battlecards live in their dialing dashboard.'}
                    </p>
                  </div>
                </div>
              ))}

              {/* Displaying Buying Signals */}
              {activeBuyingSignals.map((signal) => (
                <div
                  key={signal.id}
                  className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 animate-[slide-in_0.3s_ease-out]"
                >
                  <div className="flex items-center gap-2 text-emerald-800 font-display text-xs font-bold mb-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    Buying Signal Identified
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2 italic">
                    "{signal.text}"
                  </p>
                  <div className="text-[9.5px] text-slate-500 bg-white/70 rounded border border-emerald-100 px-2 py-1 flex items-center gap-1.5">
                    <span className="font-semibold text-emerald-700">Action:</span>
                    Mark as pipeline high-intent & send proposal draft.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Enterprise Search Demo */}
      <section className="bg-white border-t border-slate-100 py-12 px-6" id="search-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
              Enterprise Search
            </span>
            <h2 className="font-display text-2xl font-bold mt-2 text-slate-800">
              Query the Conversational Memory Database
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Search transcripts instantly for integration risks, pricing objections, or customer remarks.
            </p>
          </div>

          {/* Search Inputs */}
          <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-2xl mx-auto mb-6">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3.5 top-2.5 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search queries... e.g. Salesforce, pricing objections, deals at risk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-slate-50/50 focus:bg-white transition-all shadow-inner"
                id="search-input-box"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-blue-700 shadow-md transition-all flex items-center gap-1.5"
            >
              Search
            </button>
          </form>

          {/* Presets Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-8">
            <span className="text-[10px] text-slate-400 uppercase font-bold mr-2">Presets:</span>
            {[
              { label: 'Integration objections', query: 'objections integrations' },
              { label: 'Which customers asked about pricing?', query: 'pricing budget' },
              { label: 'Find Salesforce mentions', query: 'Salesforce' },
              { label: 'Deals at risk', query: 'objection risk' }
            ].map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePresetSearch(preset.query)}
                className="text-[11px] text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-all border border-slate-200/50"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Search Results Display */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 min-h-[160px] max-w-2xl mx-auto">
            {searchResults.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 py-8">
                <SearchIcon className="text-slate-300 mb-1" size={24} />
                <p className="text-xs text-slate-400">
                  Search results will display here. Select a preset query or type in the search bar.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Found {searchResults.length} Match(es)
                </h4>
                <div className="space-y-3">
                  {searchResults.map((res, i) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:border-brand-blue/30 transition-all flex justify-between items-start gap-4 animate-[slide-in_0.2s_ease-out]"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-xs font-bold text-slate-800">{res.leadName}</span>
                          <span className="text-[10px] text-slate-400">• {res.companyName}</span>
                          <span className="text-[9px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-semibold uppercase">
                            {res.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          "{res.matchedText}"
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{res.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Local Page CSS Animations */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
