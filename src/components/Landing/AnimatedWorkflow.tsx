'use client';

import React, { useState, useEffect } from 'react';
import { CRMIcon, DialerIcon, CoachingIcon, CheckIcon, ArrowRightIcon } from '../BrandKit/Icons';

export const AnimatedWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Lead from CRM',
      desc: 'SalesIQ reads context from Salesforce, Odoo, or HubSpot.',
      icon: CRMIcon,
    },
    {
      title: 'AI-Assisted Call',
      desc: 'Dialer handles the call with live contextual tracking.',
      icon: DialerIcon,
    },
    {
      title: 'Transcribe & Understand',
      desc: 'Cerebras logs audio and transcribes in < 1 second.',
      icon: CoachingIcon,
    },
    {
      title: 'Coach & Recommend',
      desc: 'Gemma 4 provides real-time coaching cards to the rep.',
      icon: CoachingIcon,
    },
    {
      title: 'Sync back to CRM',
      desc: 'Action items & notes are updated automatically in CRM.',
      icon: CheckIcon,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full py-12 px-4 relative overflow-hidden" id="workflow-section">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
          Workflow
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight mt-3 text-slate-900 md:text-4xl">
          End-to-End Sales Intelligence
        </h2>
        <p className="text-slate-500 text-base max-w-xl mx-auto mt-2">
          Watch how SalesIQ works in real time, from dialer to CRM synchronization.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                isActive
                  ? 'glass-card border-brand-blue/30 scale-105 shadow-lg bg-white'
                  : 'bg-transparent border-transparent scale-100 opacity-60 hover:opacity-90'
              }`}
              onClick={() => setActiveStep(idx)}
            >
              {/* Step indicator circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className={`font-display text-sm font-semibold transition-colors duration-500 ${isActive ? 'text-brand-blue' : 'text-slate-700'}`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-[170px]">
                {step.desc}
              </p>

              {/* Progress bar inside active step */}
              {isActive && (
                <div className="w-full h-1 bg-slate-100 mt-4 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue animate-[progress_4s_linear_infinite]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
