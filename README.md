# SalesIQ — Enterprise Memory Layer for Sales

> **Hackathon Track**: Track 3: Enterprise Impact (Best Enterprise Use Case)  
> **Model Stack**: Gemma 4 31B (`gemma-4-31b`) running on Cerebras Inference Cloud

SalesIQ is an AI intelligence platform that transforms every sales conversation into structured, searchable organizational intelligence. 

Standard CRMs are great for remembering *who* your customers are, but they are completely blind to *what* was actually said. Important objections, competitive details, and next steps slip away, while sales reps spend hours manually logging brief, incomplete summaries.

**SalesIQ serves as the System of Understanding, while the CRM stays the System of Record.**

---

## Core Features

1. **Interactive Dialer Dashboard (`/demo`)**:
   * **Simulated Live Call**: Streams speech line-by-line via the Cerebras ASR pipeline.
   * **Active Waveform**: Responsive CSS audio visualizer.
   * **Real-time AI Coaching**: Trigger-based cue cards for objection handling and competitor battlecards appear in under 1 second.
   * **Salesforce Activity Sync**: Simulates a non-destructive writeback of call summaries.

2. **Enterprise Search Engine (`/demo#search-section`)**:
   * Unified semantic search box with pre-indexed presets ("Salesforce integrations", "Pricing inquiries").
   * Returns matching conversational clips and context results immediately.

3. **Multimodal Sandbox (`/multimodal`)**:
   * Upload custom product brochures, pricing sheets, or SLA guides.
   * Gemma 4 combines the uploaded document context with the live call transcript to synthesize custom script suggestions and deal budget alignments.

4. **Apple-Style Slide Presentation (`/presentation`)**:
   * A full-screen, keyboard-controlled slideshow detailing the project story, the Cerebras latency advantage, and the development roadmap.
   * Built-in print styles optimized for PDF export (`Ctrl + P`).

---

## Ingestion Architecture

```
[ Customer Audio ] -> [ SIP Stream Ingest ] -> [ Cerebras Cloud (CS-3) ]
                                                            |
                                                            v
[ Salesforce CRM ] <--- [ SalesIQ Graph ] <--- [ Gemma 4 31B Reasoning ]
```

1. **SIP Stream Ingest**: Captures raw audio packets from Teams, Zoom Phone, or custom SIP dialers.
2. **Cerebras Inference**: Transcribes speech and applies LLM reasoning in sub-seconds (utilizing Gemma 4's 32K context window).
3. **SalesIQ Graph**: Links entities, objections, and triggers in a semantic database.
4. **CRM Sync**: Appends structured call activity logs directly back to Salesforce.

---

## Design System

We adhere to a clean, premium, minimal enterprise design system:
* **Backgrounds**: Pure white (`#FFFFFF`) and slate gray accents.
* **Palette**: Primary Blue (`#2563EB`) and Secondary Azure (`#3B82F6`) gradients.
* **Typography**: Outfits (headings) and Inter (sans body text).
* **Effects**: Soft shadow overlays and glassmorphism.

---

## Project Structure

```
salesiq-launch/
├── public/                 # Static SVG icons and generated logos
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── page.tsx        # Deliverable 1: Landing Page
│   │   ├── demo/           # Deliverable 4 & 5: Live Agent & Search Dashboard
│   │   ├── multimodal/     # Deliverable 6: Multimodal Doc Sandbox
│   │   └── presentation/   # Deliverable 2: Apple-style Slide Deck
│   ├── components/         # Reusable styling components
│   │   ├── BrandKit/       # SVG Logo & Icons
│   │   ├── Landing/        # Workflow & Architecture Diagram
│   │   └── ui/             # Global interface elements
│   ├── data/               # Deliverable 10: Mock Dataset & Search helpers
│   └── styles/
│       └── globals.css     # Global theme configuration (Tailwind v4)
├── video/                  # Deliverable 3: 60-Second Video script & Storyboard
├── social/                 # Deliverable 9: Launch Copy & Post Templates
└── README.md               # GitHub project documentation
```

---

## Quick Start

### Prerequisites
* Node.js v18.0 or higher
* npm v9.0 or higher

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd salesiq-launch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.
