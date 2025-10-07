// Mock data for About, Pricing, Contact, and FAQ sections

// Team Members Data
export const mockTeam = [
  {
    id: 1,
    name: "Dr. Ananya Kapoor",
    role: "CEO & Co-Founder",
    bio: "Former accessibility researcher at IIT Delhi with 15+ years of experience in assistive technology. Passionate about making digital content accessible to everyone.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/ananya-kapoor",
      twitter: "https://twitter.com/ananyakapoor",
      github: "https://github.com/ananyakapoor"
    }
  },
  {
    id: 2,
    name: "Rajesh Menon",
    role: "CTO & Co-Founder",
    bio: "AI/ML expert with background in speech recognition and NLP. Previously led engineering teams at major tech companies building real-time transcription systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/rajesh-menon",
      twitter: "https://twitter.com/rajeshmenon",
      github: "https://github.com/rajeshmenon"
    }
  },
  {
    id: 3,
    name: "Priya Deshmukh",
    role: "Lead AI Engineer",
    bio: "Specializes in adaptive learning algorithms and natural language processing. PhD in Computer Science from Stanford with focus on accessibility AI.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/priya-deshmukh",
      twitter: "https://twitter.com/priyadeshmukh",
      github: "https://github.com/priyadeshmukh"
    }
  },
  {
    id: 4,
    name: "Arjun Patel",
    role: "UX Design Lead",
    bio: "Award-winning designer focused on inclusive design principles. Creates intuitive interfaces that work for users of all abilities and backgrounds.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/arjun-patel",
      twitter: "https://twitter.com/arjunpatel",
      github: "https://github.com/arjunpatel"
    }
  },
  {
    id: 5,
    name: "Meera Krishnan",
    role: "Accessibility Specialist",
    bio: "Deaf advocate and ISL expert ensuring our platform meets the highest accessibility standards. Works closely with the deaf and hard-of-hearing community.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/meera-krishnan",
      twitter: "https://twitter.com/meerakrishnan",
      github: "https://github.com/meerakrishnan"
    }
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Community Manager",
    bio: "Builds bridges between our team and users worldwide. Passionate about creating inclusive communities and gathering feedback to improve our platform.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/vikram-singh",
      twitter: "https://twitter.com/vikramsingh",
      github: "https://github.com/vikramsingh"
    }
  },
  {
    id: 7,
    name: "Sneha Reddy",
    role: "Product Manager",
    bio: "Drives product strategy and roadmap. Former educator who understands the real-world challenges students and professionals face with traditional captions.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/sneha-reddy",
      twitter: "https://twitter.com/snehareddy",
      github: "https://github.com/snehareddy"
    }
  },
  {
    id: 8,
    name: "Karthik Iyer",
    role: "Senior Backend Engineer",
    bio: "Builds scalable infrastructure powering real-time caption processing. Expert in distributed systems and high-performance computing.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/karthik-iyer",
      twitter: "https://twitter.com/karthikiyer",
      github: "https://github.com/karthikiyer"
    }
  }
];

// Company Values Data
export const mockValues = [
  {
    id: 1,
    title: "Accessibility First",
    description: "We believe digital content should be accessible to everyone, regardless of ability, language, or background. Accessibility isn't a feature—it's our foundation.",
    icon: "Heart"
  },
  {
    id: 2,
    title: "Innovation Through Empathy",
    description: "We innovate by listening to our users and understanding their real challenges. Every feature is designed with empathy and tested with diverse communities.",
    icon: "Lightbulb"
  },
  {
    id: 3,
    title: "User-Centric Design",
    description: "Our users guide every decision we make. We prioritize intuitive interfaces, customizable experiences, and features that solve real problems.",
    icon: "Users"
  },
  {
    id: 4,
    title: "Open Collaboration",
    description: "We embrace open-source principles and collaborate with researchers, educators, and accessibility advocates to push the boundaries of what's possible.",
    icon: "GitBranch"
  },
  {
    id: 5,
    title: "Inclusive by Design",
    description: "Diversity and inclusion are woven into our DNA. We build for global audiences with respect for cultural differences and local needs.",
    icon: "Globe"
  },
  {
    id: 6,
    title: "Continuous Learning",
    description: "We're committed to constant improvement through research, user feedback, and emerging technologies. Our AI learns, and so do we.",
    icon: "TrendingUp"
  }
];

// Pricing Tiers Data
export const mockPricingTiers = [
  {
    id: 1,
    name: "Free",
    price: 0,
    billingPeriod: "forever",
    description: "Perfect for individuals getting started with smart captions",
    popular: false,
    ctaText: "Get Started Free",
    features: [
      { name: "Basic caption modes (Easy, Medium)", included: true },
      { name: "Up to 5 hours/month", included: true },
      { name: "3 languages supported", included: true },
      { name: "Basic ISL support", included: true },
      { name: "Community support", included: true },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Team collaboration", included: false }
    ]
  },
  {
    id: 2,
    name: "Pro",
    price: 29,
    billingPeriod: "month",
    description: "For professionals and students who need advanced features",
    popular: true,
    ctaText: "Start Pro Trial",
    features: [
      { name: "All caption modes (Easy, Medium, Verbatim)", included: true },
      { name: "Unlimited hours", included: true },
      { name: "12 languages supported", included: true },
      { name: "Full ISL integration", included: true },
      { name: "Priority email support", included: true },
      { name: "API access (10K requests/month)", included: true },
      { name: "Custom glossary terms", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "Export transcripts", included: true },
      { name: "Team collaboration (up to 5 users)", included: true }
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    price: null,
    billingPeriod: "custom",
    description: "For organizations requiring custom solutions and dedicated support",
    popular: false,
    ctaText: "Contact Sales",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Custom language models", included: true },
      { name: "White-label solution", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Unlimited API access", included: true },
      { name: "Custom integrations & webhooks", included: true },
      { name: "24/7 priority support", included: true },
      { name: "SLA guarantee (99.9% uptime)", included: true },
      { name: "On-premise deployment option", included: true }
    ]
  }
];

// FAQ Data
export const mockFAQs = [
  {
    id: 1,
    category: "General",
    question: "What is Smart Captions and how does it work?",
    answer: "Smart Captions is an AI-powered captioning platform that provides adaptive, context-aware captions for video and audio content. Our system uses advanced natural language processing to generate captions in three complexity levels (Easy, Medium, Verbatim) and enhances them with speaker identification, emotional context, glossary terms, and Indian Sign Language (ISL) integration. Simply upload your content or integrate our API, and our AI handles the rest."
  },
  {
    id: 2,
    category: "General",
    question: "Who can benefit from Smart Captions?",
    answer: "Smart Captions is designed for everyone! Students can better understand complex lectures, professionals can follow meetings more effectively, content creators can make their videos more accessible, educators can enhance their teaching materials, and individuals who are deaf or hard-of-hearing can access content with ISL support. Our adaptive modes ensure that users of all comprehension levels can benefit."
  },
  {
    id: 3,
    category: "Features",
    question: "What are the different caption modes?",
    answer: "We offer three caption modes: <strong>Easy Mode</strong> simplifies complex language into everyday terms with emojis and visual cues, perfect for quick understanding or language learners. <strong>Medium Mode</strong> balances clarity with detail, ideal for most users. <strong>Verbatim Mode</strong> provides word-for-word transcription for academic or professional use where exact wording matters. You can switch between modes anytime during playback."
  },
  {
    id: 4,
    category: "Features",
    question: "How does the ISL (Indian Sign Language) integration work?",
    answer: "When you tap on highlighted key terms in captions, you'll see a popup with the definition and an ISL video clip demonstrating the sign. Our ISL library covers thousands of common terms and is continuously expanding. This feature is particularly valuable for the deaf and hard-of-hearing community in India, making educational and professional content more accessible."
  },
  {
    id: 5,
    category: "Features",
    question: "What is speaker identification and why is it useful?",
    answer: "Speaker identification automatically detects different speakers in your content and assigns each a unique color and label. This makes it easy to follow conversations, debates, or multi-speaker lectures. You can see at a glance who's speaking, which is especially helpful for deaf users who can't rely on voice recognition, and for anyone reviewing recorded meetings or interviews."
  },
  {
    id: 6,
    category: "Features",
    question: "Can I customize the glossary terms?",
    answer: "Yes! Pro and Enterprise users can add custom glossary terms specific to their field or organization. Simply define the term, add a simple explanation, and optionally upload an ISL video. Custom terms will be automatically highlighted in your captions and available in the glossary popup. This is perfect for technical fields, specialized industries, or educational institutions."
  },
  {
    id: 7,
    category: "Pricing",
    question: "Is there a free trial for the Pro plan?",
    answer: "Yes! We offer a 14-day free trial of the Pro plan with no credit card required. You'll get full access to all Pro features including unlimited hours, all caption modes, 12 languages, and API access. After the trial, you can choose to subscribe or continue with our generous Free plan."
  },
  {
    id: 8,
    category: "Pricing",
    question: "What happens if I exceed my monthly hours on the Free plan?",
    answer: "If you reach your 5-hour monthly limit on the Free plan, you'll receive a notification. You can either upgrade to Pro for unlimited hours, or wait until the next month when your quota resets. We'll never delete your existing captions or content—they remain accessible even if you're over quota."
  },
  {
    id: 9,
    category: "Pricing",
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your Pro subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period, then automatically switch to the Free plan. No cancellation fees, no questions asked. We also offer a 30-day money-back guarantee if you're not satisfied."
  },
  {
    id: 10,
    category: "Pricing",
    question: "What's included in Enterprise pricing?",
    answer: "Enterprise pricing is customized based on your organization's needs. It includes everything in Pro plus unlimited team members, custom language models, white-label options, dedicated support, SLA guarantees, and on-premise deployment. Contact our sales team for a personalized quote and demo tailored to your requirements."
  },
  {
    id: 11,
    category: "Technical",
    question: "What video formats and platforms do you support?",
    answer: "Smart Captions supports all major video formats (MP4, MOV, AVI, WebM, etc.) and audio formats (MP3, WAV, AAC, etc.). We integrate with popular platforms including YouTube, Vimeo, Zoom, Microsoft Teams, Google Meet, and custom video players via our JavaScript SDK. Our API also supports real-time streaming for live captions."
  },
  {
    id: 12,
    category: "Technical",
    question: "How accurate are the captions?",
    answer: "Our AI achieves 98.5% accuracy on clear audio with minimal background noise. Accuracy depends on audio quality, accents, technical terminology, and background noise. We continuously improve our models through machine learning and user feedback. Pro users can also correct captions, which helps train our AI to be even more accurate for their specific use case."
  },
  {
    id: 13,
    category: "Technical",
    question: "What languages do you support?",
    answer: "We currently support 12 languages: English, Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Spanish, and French. Free users get access to 3 languages, while Pro and Enterprise users get all 12. We're actively working on adding more languages based on user demand. ISL support is available for all Indian language content."
  },
  {
    id: 14,
    category: "Technical",
    question: "How do I integrate Smart Captions into my application?",
    answer: "We offer multiple integration options: <strong>JavaScript SDK</strong> for web applications, <strong>REST API</strong> for backend integration, <strong>Webhooks</strong> for event notifications, and <strong>Embeddable Player</strong> for quick implementation. Our documentation includes code examples, tutorials, and SDKs for popular frameworks. Pro users get 10K API requests/month, and Enterprise users get unlimited access."
  },
  {
    id: 15,
    category: "Technical",
    question: "Is my data secure and private?",
    answer: "Yes! We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're GDPR compliant and follow SOC 2 Type II standards. Your content is never used to train our public models without explicit permission. Enterprise customers can opt for on-premise deployment for complete data control. Read our <a href='#privacy' class='text-green-600 hover:underline'>Privacy Policy</a> for details."
  },
  {
    id: 16,
    category: "Accessibility",
    question: "How does Smart Captions improve accessibility?",
    answer: "Smart Captions goes beyond basic transcription to provide true accessibility. We offer adaptive complexity levels for cognitive accessibility, ISL integration for the deaf community, speaker identification for context, emotional cues through emojis, and keyboard navigation for motor accessibility. Our platform is WCAG 2.1 Level AA compliant and designed with input from accessibility advocates."
  },
  {
    id: 17,
    category: "Accessibility",
    question: "Can I use Smart Captions with screen readers?",
    answer: "Yes! Our interface is fully compatible with popular screen readers including JAWS, NVDA, and VoiceOver. All interactive elements have proper ARIA labels, keyboard shortcuts are available for all functions, and captions can be navigated sequentially. We regularly test with assistive technology users to ensure the best experience."
  },
  {
    id: 18,
    category: "Accessibility",
    question: "Do you support other sign languages besides ISL?",
    answer: "Currently, we focus on Indian Sign Language (ISL) as it serves our primary user base in India. However, we're exploring support for ASL (American Sign Language), BSL (British Sign Language), and other sign languages. Enterprise customers with specific needs can work with us to integrate custom sign language content."
  },
  {
    id: 19,
    category: "General",
    question: "How can I provide feedback or request features?",
    answer: "We love hearing from our users! You can submit feedback through the in-app feedback form, email us at <a href='mailto:feedback@smartcaptions.ai' class='text-green-600 hover:underline'>feedback@smartcaptions.ai</a>, join our <a href='#community' class='text-green-600 hover:underline'>Community Forum</a>, or participate in our user research program. Pro and Enterprise users can also request features directly through their account manager."
  },
  {
    id: 20,
    category: "Technical",
    question: "What are the system requirements?",
    answer: "Smart Captions works on any modern web browser (Chrome, Firefox, Safari, Edge) on desktop, tablet, or mobile devices. For the best experience, we recommend: a stable internet connection (5+ Mbps for streaming), a device with at least 4GB RAM, and a screen resolution of 1280x720 or higher. Our mobile apps are available for iOS 13+ and Android 8+."
  }
];

// Contact Info Data
export const mockContactInfo = {
  email: "hello@smartcaptions.ai",
  supportEmail: "support@smartcaptions.ai",
  salesEmail: "sales@smartcaptions.ai",
  phone: "+91 80 4567 8900",
  address: {
    street: "123 Innovation Hub, 4th Floor",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560001",
    country: "India"
  },
  supportHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    weekends: "Saturday: 10:00 AM - 4:00 PM IST",
    closed: "Sunday: Closed"
  },
  social: {
    twitter: "https://twitter.com/smartcaptions",
    linkedin: "https://linkedin.com/company/smartcaptions",
    github: "https://github.com/smartcaptions",
    youtube: "https://youtube.com/@smartcaptions",
    facebook: "https://facebook.com/smartcaptions",
    instagram: "https://instagram.com/smartcaptions"
  },
  offices: [
    {
      id: 1,
      name: "Bangalore HQ",
      address: "123 Innovation Hub, 4th Floor, Bangalore, Karnataka 560001",
      phone: "+91 80 4567 8900",
      email: "bangalore@smartcaptions.ai"
    },
    {
      id: 2,
      name: "Delhi Office",
      address: "456 Tech Park, 2nd Floor, New Delhi, Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@smartcaptions.ai"
    },
    {
      id: 3,
      name: "Mumbai Office",
      address: "789 Business Center, 5th Floor, Mumbai, Maharashtra 400001",
      phone: "+91 22 3456 7890",
      email: "mumbai@smartcaptions.ai"
    }
  ],
  quickLinks: {
    liveChat: "https://smartcaptions.ai/chat",
    scheduleCall: "https://calendly.com/smartcaptions",
    helpCenter: "https://help.smartcaptions.ai",
    communityForum: "https://community.smartcaptions.ai",
    documentation: "https://docs.smartcaptions.ai",
    statusPage: "https://status.smartcaptions.ai"
  }
};