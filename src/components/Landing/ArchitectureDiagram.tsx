'use client';

import React, { useState } from 'react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: 'ingest', title: 'Data Ingestion', desc: 'Captures live SIP audio from Zoom, Teams, & Cloud PBXs.' },
    { id: 'cerebras', title: 'Cerebras Cloud', desc: 'Processes audio feeds via ultra-fast, dedicated wafer-scale engines.' },
    { id: 'gemma', title: 'Gemma 4 31B', desc: 'Extracts entities, objections, and buying signals in under 1 second.' },
    { id: 'memory', title: 'SalesIQ Graph', desc: 'Stores conversational vectors & contextual links.' },
    { id: 'crm', title: 'CRM Sync', desc: 'Writes summaries & next-actions back to Salesforce & HubSpot.' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto glass-card rounded-2xl p-8 relative overflow-hidden" id="architecture-diagram-section">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
          Real-time Engine
        </span>
        <h3 className="font-display text-2xl font-bold mt-2 text-slate-800">
          Hardware-Accelerated Memory Flow
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Hover over nodes to explore the Cerebras & Gemma 4 ingestion architecture.
        </p>
      </div>

      <div className="relative flex justify-center items-center select-none min-h-[300px]">
        {/* Animated SVG Diagram */}
        <svg viewBox="0 0 800 240" fill="none" className="w-full h-auto max-w-3xl">
          {/* Background grid lines inside SVG */}
          <defs>
            <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#60A5FA" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3B82F6" floodOpacity="0.3" />
            </filter>
            {/* Arrow marker */}
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
            </marker>
          </defs>

          {/* Connection Lines (Paths) */}
          {/* Path 1: Ingest to Cerebras */}
          <path
            d="M 120 120 L 250 120"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 120 120 L 250 120"
            stroke="url(#flow-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 12"
            className="animate-[dash_10s_linear_infinite]"
            style={{ strokeDashoffset: -50 }}
          />

          {/* Path 2: Cerebras to Gemma */}
          <path
            d="M 330 120 L 450 120"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 330 120 L 450 120"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 8"
            className="animate-[dash_8s_linear_infinite]"
          />

          {/* Path 3: Gemma to Memory */}
          <path
            d="M 530 120 L 650 120"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 530 120 L 650 120"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 6"
            className="animate-[dash_6s_linear_infinite]"
          />

          {/* Vertical/Diagonal Paths */}
          {/* Ingest from Customer Call */}
          <path d="M 80 40 L 80 80" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          {/* CRM Writeback */}
          <path d="M 690 160 L 690 200" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

          {/* Nodes (Circles/Boxes) */}
          
          {/* Node 1: Ingest */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode('ingest')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="80"
              cy="120"
              r="40"
              fill="white"
              stroke={activeNode === 'ingest' ? '#2563EB' : '#E2E8F0'}
              strokeWidth={activeNode === 'ingest' ? '3' : '2'}
              className="transition-all duration-300"
              filter={activeNode === 'ingest' ? 'url(#glow)' : ''}
            />
            {/* Icon representation */}
            <path d="M 72 112 H 88 V 128 H 72 Z" fill="#94A3B8" className="group-hover:fill-brand-blue" />
            <path d="M 75 118 L 80 113 L 85 118" stroke="white" strokeWidth="1.5" />
            <text x="80" y="145" textAnchor="middle" className="font-display font-semibold text-xs fill-slate-700">
              Ingestion
            </text>
          </g>

          {/* Node 2: Cerebras CS-3 */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode('cerebras')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <rect
              x="250"
              y="80"
              width="80"
              height="80"
              rx="12"
              fill="white"
              stroke={activeNode === 'cerebras' ? '#2563EB' : '#E2E8F0'}
              strokeWidth={activeNode === 'cerebras' ? '3' : '2'}
              className="transition-all duration-300"
              filter={activeNode === 'cerebras' ? 'url(#glow)' : ''}
            />
            <text x="290" y="115" textAnchor="middle" className="font-display font-bold text-xs fill-brand-blue">
              CEREBRAS
            </text>
            <text x="290" y="132" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
              100k TPM
            </text>
            <text x="290" y="152" textAnchor="middle" className="font-display font-semibold text-[10px] fill-slate-700">
              Hardware
            </text>
          </g>

          {/* Node 3: Gemma 4 31B */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode('gemma')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <rect
              x="450"
              y="80"
              width="80"
              height="80"
              rx="12"
              fill="white"
              stroke={activeNode === 'gemma' ? '#2563EB' : '#E2E8F0'}
              strokeWidth={activeNode === 'gemma' ? '3' : '2'}
              className="transition-all duration-300"
              filter={activeNode === 'gemma' ? 'url(#glow)' : ''}
            />
            <text x="490" y="115" textAnchor="middle" className="font-display font-bold text-xs fill-slate-800">
              GEMMA 4
            </text>
            <text x="490" y="132" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
              31B LLM
            </text>
            <text x="490" y="152" textAnchor="middle" className="font-display font-semibold text-[10px] fill-slate-700">
              Reasoning
            </text>
          </g>

          {/* Node 4: SalesIQ Graph & Memory */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode('memory')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="690"
              cy="120"
              r="40"
              fill="white"
              stroke={activeNode === 'memory' ? '#2563EB' : '#E2E8F0'}
              strokeWidth={activeNode === 'memory' ? '3' : '2'}
              className="transition-all duration-300"
              filter={activeNode === 'memory' ? 'url(#glow)' : ''}
            />
            {/* Database Icon */}
            <path d="M 680 110 H 700 V 126 H 680 Z" fill="#94A3B8" className="group-hover:fill-brand-blue" />
            <text x="690" y="145" textAnchor="middle" className="font-display font-semibold text-xs fill-slate-700">
              Memory Graph
            </text>
          </g>
        </svg>

        {/* CSS styles inside SVG for animated flows */}
        <style jsx global>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -40;
            }
          }
        `}</style>
      </div>

      {/* Description Panel */}
      <div className="mt-6 bg-slate-50 border border-slate-100 rounded-xl p-4 min-h-[72px] transition-all duration-300">
        {activeNode ? (
          <div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              {nodes.find(n => n.id === activeNode)?.title}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {nodes.find(n => n.id === activeNode)?.desc}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xs text-slate-400 italic text-center">
              Hover over nodes to inspect the real-time Cerebras + Gemma 4 processing stack details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
