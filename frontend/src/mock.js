// Mock data for Smart Captions App

export const mockCaptionData = {
  videoTitle: "Introduction to Machine Learning - Lecture 1",
  duration: 1800, // 30 minutes in seconds
  captions: {
    easy: [
      {
        start: 0,
        end: 5,
        speaker: "Professor",
        speakerId: 1,
        text: "Hello everyone! 👋 Welcome to our first machine learning class.",
        originalText: "Good morning, class. Welcome to Introduction to Machine Learning, CS 4780.",
        emotions: ["welcoming"],
        keyTerms: ["machine learning"]
      },
      {
        start: 5,
        end: 12,
        speaker: "Professor",
        speakerId: 1,
        text: "Today we'll learn what AI and <span class='glossary-word' data-term='machine learning'>machine learning</span> mean. 🤖",
        originalText: "Today's agenda covers fundamental concepts in artificial intelligence and machine learning paradigms.",
        emotions: ["instructional"],
        keyTerms: ["AI", "machine learning"]
      },
      {
        start: 12,
        end: 18,
        speaker: "Student",
        speakerId: 2,
        text: "Professor, can you explain what makes AI different from regular computer programs? 🤔",
        originalText: "Excuse me, professor. Could you elaborate on the distinction between artificial intelligence and conventional programming methodologies?",
        emotions: ["curious"],
        keyTerms: ["AI", "computer programs"]
      },
      {
        start: 18,
        end: 28,
        speaker: "Professor",
        speakerId: 1,
        text: "Great question! 💡 Regular programs follow exact rules. AI programs can <span class='glossary-word' data-term='learn'>learn</span> and make decisions on their own.",
        originalText: "Excellent inquiry. Traditional algorithms execute predetermined instructions, whereas AI systems demonstrate adaptive learning capabilities and autonomous decision-making processes.",
        emotions: ["explaining", "positive"],
        keyTerms: ["AI", "learn", "decisions"]
      },
      {
        start: 28,
        end: 35,
        speaker: "Professor",
        speakerId: 1,
        text: "Think of it like teaching a child vs. programming a calculator. 🧮👶",
        originalText: "Consider the analogy between pedagogical instruction of a human child versus algorithmic programming of a computational device.",
        emotions: ["analogy"],
        keyTerms: ["teaching", "programming"]
      }
    ],
    medium: [
      {
        start: 0,
        end: 5,
        speaker: "Professor",
        speakerId: 1,
        text: "Good morning, everyone. Welcome to Introduction to Machine Learning. 👋",
        originalText: "Good morning, class. Welcome to Introduction to Machine Learning, CS 4780.",
        emotions: ["welcoming"],
        keyTerms: ["machine learning"]
      },
      {
        start: 5,
        end: 12,
        speaker: "Professor",
        speakerId: 1,
        text: "Today we'll cover basic concepts in AI and <span class='glossary-word' data-term='machine learning'>machine learning</span> systems. 🤖",
        originalText: "Today's agenda covers fundamental concepts in artificial intelligence and machine learning paradigms.",
        emotions: ["instructional"],
        keyTerms: ["AI", "machine learning"]
      },
      {
        start: 12,
        end: 18,
        speaker: "Student",
        speakerId: 2,
        text: "Professor, could you explain how AI differs from regular programming? 🤔",
        originalText: "Excuse me, professor. Could you elaborate on the distinction between artificial intelligence and conventional programming methodologies?",
        emotions: ["curious"],
        keyTerms: ["AI", "programming"]
      },
      {
        start: 18,
        end: 28,
        speaker: "Professor",
        speakerId: 1,
        text: "Good question! Traditional programs follow set rules, while AI systems can <span class='glossary-word' data-term='learn'>learn</span> and adapt. 💡",
        originalText: "Excellent inquiry. Traditional algorithms execute predetermined instructions, whereas AI systems demonstrate adaptive learning capabilities and autonomous decision-making processes.",
        emotions: ["explaining", "positive"],
        keyTerms: ["AI", "learn", "adapt"]
      },
      {
        start: 28,
        end: 35,
        speaker: "Professor",
        speakerId: 1,
        text: "It's like teaching a child to recognize patterns vs. programming exact steps. 🧮",
        originalText: "Consider the analogy between pedagogical instruction of a human child versus algorithmic programming of a computational device.",
        emotions: ["analogy"],
        keyTerms: ["patterns", "programming"]
      }
    ],
    verbatim: [
      {
        start: 0,
        end: 5,
        speaker: "Professor",
        speakerId: 1,
        text: "Good morning, class. Welcome to Introduction to Machine Learning, CS 4780.",
        originalText: "Good morning, class. Welcome to Introduction to Machine Learning, CS 4780.",
        emotions: ["welcoming"],
        keyTerms: ["machine learning"]
      },
      {
        start: 5,
        end: 12,
        speaker: "Professor",
        speakerId: 1,
        text: "Today's agenda covers fundamental concepts in artificial intelligence and <span class='glossary-word' data-term='machine learning'>machine learning</span> paradigms.",
        originalText: "Today's agenda covers fundamental concepts in artificial intelligence and machine learning paradigms.",
        emotions: ["instructional"],
        keyTerms: ["artificial intelligence", "machine learning", "paradigms"]
      },
      {
        start: 12,
        end: 18,
        speaker: "Student",
        speakerId: 2,
        text: "Excuse me, professor. Could you elaborate on the distinction between artificial intelligence and conventional programming methodologies?",
        originalText: "Excuse me, professor. Could you elaborate on the distinction between artificial intelligence and conventional programming methodologies?",
        emotions: ["curious"],
        keyTerms: ["artificial intelligence", "programming methodologies"]
      },
      {
        start: 18,
        end: 28,
        speaker: "Professor",
        speakerId: 1,
        text: "Excellent inquiry. Traditional <span class='glossary-word' data-term='algorithms'>algorithms</span> execute predetermined instructions, whereas AI systems demonstrate adaptive <span class='glossary-word' data-term='learn'>learning</span> capabilities.",
        originalText: "Excellent inquiry. Traditional algorithms execute predetermined instructions, whereas AI systems demonstrate adaptive learning capabilities and autonomous decision-making processes.",
        emotions: ["explaining", "positive"],
        keyTerms: ["algorithms", "AI systems", "learning capabilities"]
      },
      {
        start: 28,
        end: 35,
        speaker: "Professor",
        speakerId: 1,
        text: "Consider the analogy between pedagogical instruction of a human child versus algorithmic programming of a computational device.",
        originalText: "Consider the analogy between pedagogical instruction of a human child versus algorithmic programming of a computational device.",
        emotions: ["analogy"],
        keyTerms: ["pedagogical instruction", "algorithmic programming"]
      }
    ]
  },
  glossaryTerms: {
    "machine learning": {
      definition: "A type of AI that allows computers to learn and improve from data without being explicitly programmed for every task.",
      simpleDef: "Teaching computers to learn from examples, like how humans learn.",
      islVideo: "/placeholder-isl-ml.mp4",
      relatedTerms: ["AI", "algorithm", "data"]
    },
    "algorithms": {
      definition: "Step-by-step instructions that tell a computer how to solve a problem or complete a task.",
      simpleDef: "A recipe that computers follow to solve problems.",
      islVideo: "/placeholder-isl-algorithm.mp4",
      relatedTerms: ["programming", "instructions"]
    },
    "learn": {
      definition: "In AI context, the ability of a system to improve its performance on a task through experience.",
      simpleDef: "Getting better at something by practicing, like humans do.",
      islVideo: "/placeholder-isl-learn.mp4",
      relatedTerms: ["experience", "improvement"]
    }
  },
  quizQuestions: [
    {
      id: 1,
      timestamp: 28,
      question: "What's the main difference between AI and traditional programming?",
      options: [
        "AI is faster than traditional programming",
        "AI can learn and adapt, while traditional programming follows set rules",
        "AI uses more memory than traditional programming",
        "There is no difference"
      ],
      correctAnswer: 1,
      explanation: "AI systems can learn from data and adapt their behavior, while traditional programs follow predetermined instructions."
    }
  ],
  bookmarks: [],
  userPreferences: {
    captionMode: "easy",
    showEmojis: true,
    highlightKeyTerms: true,
    showSpeakerColors: true
  }
};

export const mockFeatures = [
  {
    id: 1,
    title: "Adaptive Caption Modes",
    description: "Switch between Easy, Medium, and Verbatim modes to match your comprehension level and learning needs.",
    icon: "Settings",
    color: "var(--caption-easy)",
    demo: "Try different complexity levels in our demo player"
  },
  {
    id: 2,
    title: "Smart Glossary & ISL",
    description: "Tap any highlighted term for instant definitions and Indian Sign Language video clips to enhance understanding.",
    icon: "Book",
    color: "var(--accent-primary)",
    demo: "Click highlighted words in captions"
  },
  {
    id: 3,
    title: "Speaker Identification",
    description: "Color-coded captions help you track different speakers in conversations, lectures, and meetings.",
    icon: "Users",
    color: "var(--speaker-1)",
    demo: "Notice different colored names in our demo"
  },
  {
    id: 4,
    title: "Emotional Context",
    description: "Emoji and icon augmentation provides tone, emotion, and sound event context for richer understanding.",
    icon: "Heart",
    color: "var(--caption-medium)",
    demo: "See emojis showing speaker emotions"
  },
  {
    id: 5,
    title: "Interactive Learning",
    description: "Mini-quizzes and comprehension checks help reinforce key concepts and important moments.",
    icon: "Brain",
    color: "var(--caption-verbatim)",
    demo: "Answer quiz questions during playback"
  },
  {
    id: 6,
    title: "Smart Bookmarking",
    description: "Automatically detect and bookmark important moments like deadlines, key points, and action items.",
    icon: "Bookmark",
    color: "var(--accent-strong)",
    demo: "Save important moments for later review"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "University Student",
    content: "Smart Captions transformed my lecture experience. The adaptive modes help me follow complex topics, and the glossary is amazing for technical terms.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Professor",
    content: "I recommend Smart Captions to all my students. The speaker identification and emoji context make my lectures more accessible to everyone.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Working Professional",
    content: "The ISL integration is fantastic! Finally, a captioning solution that truly understands accessibility needs in the Indian context.",
    rating: 5
  }
];

export const mockStats = {
  totalUsers: "50,000+",
  accuracyRate: "98.5%",
  languagesSupported: "12",
  hoursTranscribed: "1M+"
};