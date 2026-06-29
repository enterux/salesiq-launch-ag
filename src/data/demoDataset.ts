export interface TranscriptLine {
  id: string;
  speaker: 'agent' | 'customer' | 'ai';
  text: string;
  timestamp: string; // MM:SS
  type?: 'neutral' | 'buying_signal' | 'objection' | 'competitor' | 'integration' | 'pricing';
  annotation?: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  crmSystem: string;
  telephony: string;
  status: 'active_lead' | 'closed_won' | 'closed_lost' | 'at_risk';
  techStack: string[];
}

export interface Lead {
  id: string;
  name: string;
  title: string;
  companyId: string;
  companyName: string;
  email: string;
  phone: string;
  dealValue: number;
  leadScore: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Contracting' | 'Closed Won';
  nextAction: string;
  summary: string;
  objections: string[];
  buyingSignals: string[];
}

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'CloudScale Inc.',
    industry: 'Enterprise Software',
    size: '850 employees',
    crmSystem: 'Salesforce Enterprise',
    telephony: 'Zoom Phone',
    status: 'active_lead',
    techStack: ['Salesforce', 'Outreach', 'Zoom Phone', 'Slack']
  },
  {
    id: 'c2',
    name: 'DevFlow Systems',
    industry: 'Developer Tools',
    size: '320 employees',
    crmSystem: 'HubSpot Professional',
    telephony: 'Dialpad',
    status: 'at_risk',
    techStack: ['HubSpot', 'Gong', 'Dialpad', 'Google Workspace']
  },
  {
    id: 'c3',
    name: 'ApexData Analytics',
    industry: 'Data & Analytics',
    size: '1,200 employees',
    crmSystem: 'Salesforce Unlimited',
    telephony: 'MS Teams',
    status: 'active_lead',
    techStack: ['Salesforce', 'Salesloft', 'Microsoft Teams', 'PowerBI']
  },
  {
    id: 'c4',
    name: 'FinTech Group LLC',
    industry: 'Financial Services',
    size: '4,500 employees',
    crmSystem: 'Custom Proprietary CRM',
    telephony: 'Cisco Webex',
    status: 'closed_won',
    techStack: ['Custom CRM', 'Cisco Webex', 'Jira', 'Confluence']
  }
];

export const leads: Lead[] = [
  {
    id: 'l1',
    name: 'Sarah Jenkins',
    title: 'VP of Global Inside Sales',
    companyId: 'c1',
    companyName: 'CloudScale Inc.',
    email: 'sarah.jenkins@cloudscale.com',
    phone: '+1 (555) 234-5678',
    dealValue: 120000,
    leadScore: 94,
    stage: 'Proposal',
    nextAction: 'Send updated security whitepaper & custom API integration brief',
    summary: 'Prospect is highly motivated to replace outreach manual logging. Key pain point is that Zoom Phone call records expire after 30 days and reps do not log summaries. Interested in Gemma 4 real-time suggestion speed.',
    objections: [
      'Concerned about transcription accuracy for deep technical architecture discussions.',
      'Pricing model is slightly over budget for Year 1.'
    ],
    buyingSignals: [
      'Requested pricing for a pilot of 150 seats.',
      'Asked if SalesIQ can push structured action items directly into Salesforce task objects.'
    ]
  },
  {
    id: 'l2',
    name: 'Marcus Chen',
    title: 'Director of Revenue Operations',
    companyId: 'c2',
    companyName: 'DevFlow Systems',
    email: 'marcus.chen@devflow.io',
    phone: '+1 (555) 876-5432',
    dealValue: 85000,
    leadScore: 88,
    stage: 'Negotiation',
    nextAction: 'Schedule technical sync with their Salesforce Admin to explain writebacks',
    summary: 'Deal is at risk due to Salesforce integration concern. The customer wants to ensure HubSpot custom fields map immediately and that SalesIQ does not overwrite legacy notes. They use Gong but feel summaries are too late.',
    objections: [
      'Gong already provides post-call summaries, does SalesIQ duplicate this?',
      'Requires real-time latency under 1 second for live tips.'
    ],
    buyingSignals: [
      'Praised Cerebras-powered low latency: "This is 10x faster than our current sync."',
      'Confirmed budget is approved if Salesforce writebacks are bi-directional.'
    ]
  },
  {
    id: 'l3',
    name: 'Elena Rostova',
    title: 'Head of Sales Enablement',
    companyId: 'c3',
    companyName: 'ApexData Analytics',
    email: 'elena.rostova@apexdata.com',
    phone: '+44 20 7946 0958',
    dealValue: 150000,
    leadScore: 76,
    stage: 'Discovery',
    nextAction: 'Prepare high-level demo deck tailored to Sales Enablement metrics',
    summary: 'Elena is focusing on onboarding times. Reps take 6 months to hit quota. She wants the "AI Coaching" overlay to trigger on live competitor mentions (specifically ZoomInfo and Salesforce Inbox) to give reps real-time battlecards.',
    objections: [
      'Worried about reps finding real-time suggestions distracting during live calls.',
      'Data residency rules require EU-based hosting or secure cloud isolation.'
    ],
    buyingSignals: [
      'Expressed strong interest in the objection battlecard trigger mechanism.',
      'Wants to upload their own internal training deck to customize the AI coaching prompts.'
    ]
  }
];

export const transcripts: Record<string, TranscriptLine[]> = {
  l1: [
    { id: '1', speaker: 'agent', timestamp: '00:02', text: 'Hi Sarah, thanks for hopping on. How has your week been?' },
    { id: '2', speaker: 'customer', timestamp: '00:08', text: 'Hey there. It\'s been busy. We are in the middle of Q3 planning, so call volume is through the roof.' },
    { id: '3', speaker: 'agent', timestamp: '00:15', text: 'Perfect timing then. I know we wanted to look at SalesIQ. To recap, you mentioned your sales reps are spending too much time typing call notes into Salesforce, and valuable insights from Zoom Phone calls are slipping through the cracks.' },
    { id: '4', speaker: 'customer', timestamp: '00:30', text: 'Exactly. It\'s a black box. The CRM remembers who the customer is, but it has no idea what was actually said. We lose objections, competitive intelligence, and next steps.' },
    { id: '5', speaker: 'agent', timestamp: '00:45', text: 'That\'s exactly why we built SalesIQ. Since we run Gemma 4 31B on Cerebras hardware, we process transcription and semantic reasoning in real time. We call it the Enterprise Memory Layer.' },
    { id: '6', speaker: 'customer', timestamp: '00:59', text: 'Wait, did you say real-time? How fast is the latency? If our reps are on a call, can they see hints before the customer hangs up? With Gong, we have to wait 15 minutes after the call.', type: 'buying_signal', annotation: 'Speed comparison vs. Gong' },
    { id: '7', speaker: 'agent', timestamp: '01:14', text: 'Yes, it is literally under a second. The moment the customer mentions a competitor or raises a pricing objection, the Cerebras API returns coaching battlecards on the fly.' },
    { id: '8', speaker: 'customer', timestamp: '01:25', text: 'That\'s incredible. But how does it sync? If it doesn\'t write back to Salesforce automatically, our managers won\'t use it. We need it to sync with our Salesforce Enterprise cloud.', type: 'integration', annotation: 'Salesforce sync dependency' },
    { id: '9', speaker: 'agent', timestamp: '01:40', text: 'It syncs instantly. It matches the call to the Salesforce Lead or Opportunity, writes the structured summary, extracts action items, and populates custom fields.' },
    { id: '10', speaker: 'customer', timestamp: '01:52', text: 'Okay. And what about pricing? We have a team of 150 reps. What is the licensing structure? We want to stay within our $100k budget for this pilot.', type: 'pricing', annotation: '150 seats budget' }
  ],
  l2: [
    { id: '1', speaker: 'agent', timestamp: '00:03', text: 'Hello Marcus, good to see you again. I wanted to follow up on the Salesforce writeback concerns you had.' },
    { id: '2', speaker: 'customer', timestamp: '00:12', text: 'Hey. Yes, that\'s our main blocker. We use HubSpot for some marketing pipelines and Salesforce as our core CRM. We\'ve had tools in the past that overwrite custom fields and mess up lead scoring.' },
    { id: '3', speaker: 'agent', timestamp: '00:26', text: 'I understand. SalesIQ is non-destructive. We read schema layouts and append call metadata to a separate SalesIQ activities block rather than overwriting native fields.' },
    { id: '4', speaker: 'customer', timestamp: '00:40', text: 'Okay, that is helpful. Now, what about objections regarding competitor integration? Our sales team keeps losing deals to Dialpad because their built-in AI has basic summaries. Does SalesIQ integrate with Dialpad?', type: 'competitor', annotation: 'Competitor: Dialpad' },
    { id: '5', speaker: 'agent', timestamp: '00:54', text: 'Yes, we integrate natively with Dialpad, Zoom Phone, and Teams. The core differentiator is that standard dialing platforms offer basic transcripts, while SalesIQ maps custom brand-specific objection workflows.' },
    { id: '6', speaker: 'customer', timestamp: '01:08', text: 'Our reps struggle with pricing objections. When prospects say "HubSpot is free for CRM, why pay extra for SalesIQ memory?", they freeze up. Can we feed our custom pricing sheets into SalesIQ so it coaches them on that?', type: 'objection', annotation: 'Objection: Pricing ROI vs HubSpot' },
    { id: '7', speaker: 'agent', timestamp: '01:25', text: 'Absolutely. You can upload pricing PDFs, brochures, and product spec sheets. Gemma 4 combines those documents with the live transcript to synthesize recommended responses.' }
  ],
  l3: [
    { id: '1', speaker: 'agent', timestamp: '00:04', text: 'Hi Elena, thanks for joining. Let\'s look at how SalesIQ can speed up rep ramp times.' },
    { id: '2', speaker: 'customer', timestamp: '00:12', text: 'Great. Currently it takes us 6 months to get a rep fully ramped. They struggle to handle deep technical questions about our APIs, and they get tripped up when competitors like ZoomInfo are brought up.' },
    { id: '3', speaker: 'agent', timestamp: '00:25', text: 'Right. SalesIQ solves this with live cue cards. The moment ZoomInfo or Salesforce Inbox is mentioned, the rep gets a pop-up with direct feature comparisons.' },
    { id: '4', speaker: 'customer', timestamp: '00:38', text: 'Will this distract them? If they are reading cards, they might not listen to the customer.', type: 'objection', annotation: 'Rep distraction concern' },
    { id: '5', speaker: 'agent', timestamp: '00:48', text: 'The cards are designed to be extremely concise—bullet points that take 2 seconds to read. They only appear when a high-impact trigger is identified.' },
    { id: '6', speaker: 'customer', timestamp: '01:02', text: 'We have strict data residency policies. We require all transcripts to be stored in the EU. Is that possible with your Cerebras cloud infrastructure?', type: 'objection', annotation: 'GDPR / EU Data residency compliance' },
    { id: '7', speaker: 'agent', timestamp: '01:15', text: 'Yes. We support virtual private clouds and EU-hosted Cerebras processing pipelines so your data never leaves your compliance zone.' }
  ]
};

// Help search over the transcripts, leads, and companies to simulate semantic search queries
export interface SearchResult {
  leadId: string;
  leadName: string;
  companyName: string;
  matchedText: string;
  timestamp: string;
  type: string;
}

export function searchIntelligence(query: string): SearchResult[] {
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  // Match pricing queries
  if (q.includes('pricing') || q.includes('budget') || q.includes('cost')) {
    results.push({
      leadId: 'l1',
      leadName: 'Sarah Jenkins',
      companyName: 'CloudScale Inc.',
      matchedText: 'We want to stay within our $100k budget for this pilot. What is the licensing structure?',
      timestamp: '01:52',
      type: 'pricing'
    });
    results.push({
      leadId: 'l2',
      leadName: 'Marcus Chen',
      companyName: 'DevFlow Systems',
      matchedText: 'When prospects say "HubSpot is free for CRM, why pay extra for SalesIQ?", reps freeze.',
      timestamp: '01:08',
      type: 'pricing'
    });
  }

  // Match integration queries
  if (q.includes('integration') || q.includes('salesforce') || q.includes('crm') || q.includes('hubspot')) {
    results.push({
      leadId: 'l1',
      leadName: 'Sarah Jenkins',
      companyName: 'CloudScale Inc.',
      matchedText: 'But how does it sync? If it doesn\'t write back to Salesforce automatically, our managers won\'t use it.',
      timestamp: '01:25',
      type: 'integration'
    });
    results.push({
      leadId: 'l2',
      leadName: 'Marcus Chen',
      companyName: 'DevFlow Systems',
      matchedText: 'We use HubSpot for some marketing pipelines and Salesforce as our core CRM. We\'ve had tools overwrite custom fields.',
      timestamp: '00:12',
      type: 'integration'
    });
    results.push({
      leadId: 'l3',
      leadName: 'Elena Rostova',
      companyName: 'ApexData Analytics',
      matchedText: 'They get tripped up when competitors like ZoomInfo or Salesforce Inbox are brought up.',
      timestamp: '00:12',
      type: 'integration'
    });
  }

  // Match objections
  if (q.includes('objection') || q.includes('risk') || q.includes('blocker')) {
    results.push({
      leadId: 'l2',
      leadName: 'Marcus Chen',
      companyName: 'DevFlow Systems',
      matchedText: 'Gong already provides post-call summaries, does SalesIQ duplicate this?',
      timestamp: '00:40',
      type: 'objection'
    });
    results.push({
      leadId: 'l3',
      leadName: 'Elena Rostova',
      companyName: 'ApexData Analytics',
      matchedText: 'We have strict data residency policies. We require all transcripts to be stored in the EU.',
      timestamp: '01:02',
      type: 'objection'
    });
    results.push({
      leadId: 'l3',
      leadName: 'Elena Rostova',
      companyName: 'ApexData Analytics',
      matchedText: 'Will this distract them? If they are reading cards, they might not listen to the customer.',
      timestamp: '00:38',
      type: 'objection'
    });
  }

  // Match Salesforce specifically
  if (q.includes('salesforce')) {
    results.push({
      leadId: 'l1',
      leadName: 'Sarah Jenkins',
      companyName: 'CloudScale Inc.',
      matchedText: 'The CRM remembers who the customer is, but it has no idea what was actually said. We lose data in Salesforce.',
      timestamp: '00:30',
      type: 'integration'
    });
    results.push({
      leadId: 'l2',
      leadName: 'Marcus Chen',
      companyName: 'DevFlow Systems',
      matchedText: 'We use HubSpot for some marketing pipelines and Salesforce as our core CRM.',
      timestamp: '00:12',
      type: 'integration'
    });
  }

  // Generic fallback: match anywhere in text
  if (results.length === 0) {
    Object.entries(transcripts).forEach(([leadId, lines]) => {
      const lead = leads.find(l => l.id === leadId);
      if (!lead) return;
      lines.forEach(line => {
        if (line.text.toLowerCase().includes(q)) {
          results.push({
            leadId,
            leadName: lead.name,
            companyName: lead.companyName,
            matchedText: line.text,
            timestamp: line.timestamp,
            type: line.type || 'neutral'
          });
        }
      });
    });
  }

  return results.slice(0, 5);
}
