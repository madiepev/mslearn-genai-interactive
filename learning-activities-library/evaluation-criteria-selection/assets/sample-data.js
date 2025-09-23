// Azure AI Foundry Evaluation Criteria Selection Data

// Azure AI Foundry Built-in Evaluation Metrics
const azureAIFoundryMetrics = {
  contentQuality: [
    {
      id: "coherence",
      name: "Coherence",
      azureFoundryId: "coherence",
      category: "Content Quality",
      icon: "🔗",
      description: "Logical flow and consistency in responses",
      detailedDescription: "Measures how well the AI maintains logical structure, consistent reasoning, and coherent narrative flow throughout responses.",
      businessImpact: "Ensures professional, trustworthy communication that builds credibility",
      bestFor: ["Long-form content", "Complex explanations", "Multi-step processes"],
      complementaryMetrics: ["fluency", "relevance"]
    },
    {
      id: "fluency",
      name: "Fluency",
      azureFoundryId: "fluency",
      category: "Content Quality",
      icon: "💬",
      description: "Natural language quality and readability",
      detailedDescription: "Evaluates grammar, syntax, naturalness, and overall language quality in AI-generated responses.",
      businessImpact: "Creates positive user experience through clear, professional communication",
      bestFor: ["Customer-facing content", "Written communications", "Documentation"],
      complementaryMetrics: ["coherence", "professionalism"]
    },
    {
      id: "relevance",
      name: "Relevance",
      azureFoundryId: "relevance",
      category: "Content Quality",
      icon: "🎯",
      description: "Appropriateness and topic alignment",
      detailedDescription: "Measures how well responses address the specific question or need, staying on-topic and providing appropriate information.",
      businessImpact: "Improves user satisfaction by providing exactly what users need",
      bestFor: ["Search and retrieval", "Q&A systems", "Information lookup"],
      complementaryMetrics: ["groundedness", "product-knowledge"]
    },
    {
      id: "groundedness",
      name: "Groundedness",
      azureFoundryId: "groundedness",
      category: "Content Quality",
      icon: "📚",
      description: "Factual accuracy and source-based responses",
      detailedDescription: "Evaluates whether responses are based on provided context and sources rather than generating potentially inaccurate information.",
      businessImpact: "Reduces misinformation risk and builds trust through accurate information",
      bestFor: ["Knowledge bases", "Research assistance", "Fact-checking"],
      complementaryMetrics: ["relevance", "transparency"]
    }
  ],

  safetyAndResponsibility: [
    {
      id: "content-safety",
      name: "Content Safety",
      azureFoundryId: "content_safety",
      category: "Safety & Responsibility",
      icon: "🛡️",
      description: "Detection of harmful or inappropriate content",
      detailedDescription: "Identifies and prevents generation of harmful, offensive, or inappropriate content across multiple categories.",
      businessImpact: "Protects brand reputation and ensures safe user experiences",
      bestFor: ["Public-facing AI", "User-generated content", "Moderation systems"],
      complementaryMetrics: ["fairness", "transparency"]
    },
    {
      id: "fairness",
      name: "Fairness",
      azureFoundryId: "fairness",
      category: "Safety & Responsibility", 
      icon: "⚖️",
      description: "Bias detection and equitable treatment",
      detailedDescription: "Evaluates responses for potential bias and ensures equitable treatment across different demographic groups.",
      businessImpact: "Promotes inclusive practices and reduces discrimination risk",
      bestFor: ["HR applications", "Financial services", "Healthcare AI"],
      complementaryMetrics: ["content-safety", "empathy"]
    },
    {
      id: "transparency",
      name: "Transparency",
      azureFoundryId: "transparency",
      category: "Safety & Responsibility",
      icon: "🔍",
      description: "Explainability and reasoning clarity",
      detailedDescription: "Measures how clearly the AI explains its reasoning and decision-making process to users.",
      businessImpact: "Builds trust through understanding and enables informed decision-making",
      bestFor: ["Complex decisions", "Regulatory compliance", "High-stakes scenarios"],
      complementaryMetrics: ["groundedness", "professionalism"]
    }
  ],

  businessSpecific: [
    {
      id: "persuasiveness",
      name: "Persuasiveness",
      azureFoundryId: "persuasiveness",
      category: "Business-Specific",
      icon: "🎯",
      description: "Effectively influences without being pushy",
      detailedDescription: "Evaluates the AI's ability to present compelling arguments and influence decisions while maintaining appropriate tone and ethics.",
      businessImpact: "Drives conversions and business outcomes through effective communication",
      bestFor: ["Sales AI", "Marketing content", "Recommendation systems"],
      complementaryMetrics: ["product-knowledge", "professionalism"]
    },
    {
      id: "product-knowledge",
      name: "Product Knowledge",
      azureFoundryId: "product_knowledge",
      category: "Business-Specific",
      icon: "📦",
      description: "Demonstrates deep understanding of products/services",
      detailedDescription: "Measures how accurately and comprehensively the AI can discuss products, services, features, and benefits.",
      businessImpact: "Builds customer confidence and enables effective sales and support",
      bestFor: ["Sales assistance", "Product support", "Technical documentation"],
      complementaryMetrics: ["relevance", "lead-qualification"]
    },
    {
      id: "lead-qualification",
      name: "Lead Qualification",
      azureFoundryId: "lead_qualification",
      category: "Business-Specific",
      icon: "🔍",
      description: "Identifies and qualifies potential customers",
      detailedDescription: "Evaluates the AI's ability to identify high-quality prospects and gather relevant qualification information.",
      businessImpact: "Improves sales efficiency by focusing efforts on qualified leads",
      bestFor: ["Sales chatbots", "Lead generation", "Customer screening"],
      complementaryMetrics: ["persuasiveness", "product-knowledge"]
    },
    {
      id: "professionalism",
      name: "Professionalism",
      azureFoundryId: "professionalism",
      category: "Business-Specific",
      icon: "👔",
      description: "Maintains professional demeanor and language",
      detailedDescription: "Measures appropriate business tone, etiquette, and professional communication standards.",
      businessImpact: "Represents brand professionally and maintains business relationships",
      bestFor: ["Business communications", "Customer service", "B2B interactions"],
      complementaryMetrics: ["fluency", "empathy"]
    },
    {
      id: "objection-handling",
      name: "Objection Handling",
      azureFoundryId: "objection_handling",
      category: "Business-Specific",
      icon: "🤝",
      description: "Addresses concerns and overcomes resistance",
      detailedDescription: "Evaluates how effectively the AI acknowledges, addresses, and resolves customer objections or concerns.",
      businessImpact: "Converts hesitant prospects and resolves customer concerns effectively",
      bestFor: ["Sales conversations", "Negotiation support", "Customer retention"],
      complementaryMetrics: ["persuasiveness", "empathy"]
    },
    {
      id: "creating-urgency",
      name: "Creating Urgency",
      azureFoundryId: "creating_urgency",
      category: "Business-Specific",
      icon: "⏰",
      description: "Motivates action without high-pressure tactics",
      detailedDescription: "Measures the AI's ability to create appropriate sense of urgency while maintaining ethical and professional standards.",
      businessImpact: "Drives timely decision-making and reduces sales cycle length",
      bestFor: ["Sales closing", "Limited-time offers", "Decision acceleration"],
      complementaryMetrics: ["persuasiveness", "professionalism"]
    }
  ],

  interactionQuality: [
    {
      id: "empathy",
      name: "Empathy",
      azureFoundryId: "empathy",
      category: "Interaction Quality",
      icon: "❤️",
      description: "Shows understanding and emotional intelligence",
      detailedDescription: "Evaluates the AI's ability to recognize, understand, and appropriately respond to user emotions and concerns.",
      businessImpact: "Improves customer satisfaction and builds stronger relationships",
      bestFor: ["Customer support", "Healthcare AI", "Crisis management"],
      complementaryMetrics: ["professionalism", "problem-solving"]
    },
    {
      id: "personalization",
      name: "Personalization",
      azureFoundryId: "personalization",
      category: "Interaction Quality",
      icon: "👤",
      description: "Tailors responses to individual users",
      detailedDescription: "Measures how well the AI adapts responses based on user context, preferences, and individual needs.",
      businessImpact: "Increases engagement and conversion through relevant, targeted communication",
      bestFor: ["Recommendation engines", "Personalized marketing", "Adaptive learning"],
      complementaryMetrics: ["relevance", "engagement"]
    },
    {
      id: "engagement",
      name: "Engagement",
      azureFoundryId: "engagement",
      category: "Interaction Quality",
      icon: "💫",
      description: "Maintains interest and interactive dialogue",
      detailedDescription: "Evaluates how well the AI keeps users engaged through interesting, interactive, and compelling conversation.",
      businessImpact: "Increases user retention and interaction duration",
      bestFor: ["Chatbots", "Educational AI", "Entertainment applications"],
      complementaryMetrics: ["personalization", "empathy"]
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      azureFoundryId: "problem_solving",
      category: "Interaction Quality",
      icon: "🔧",
      description: "Effectively resolves issues and provides solutions",
      detailedDescription: "Measures the AI's ability to understand problems, provide effective solutions, and guide users to resolution.",
      businessImpact: "Reduces support costs and improves customer satisfaction",
      bestFor: ["Technical support", "Troubleshooting", "Help desk systems"],
      complementaryMetrics: ["empathy", "product-knowledge"]
    }
  ]
};

// Business scenarios for evaluation criteria selection
const businessScenarios = [
  {
    id: "sales-ai-assistant",
    title: "B2B Sales AI Assistant",
    context: "Enterprise software sales environment with complex products and long sales cycles",
    industry: "Technology/SaaS",
    objectives: [
      "Increase lead qualification efficiency",
      "Improve conversion rates from initial contact to demo",
      "Reduce time to close deals",
      "Maintain high-touch, consultative sales approach"
    ],
    stakeholders: [
      "Sales Development Representatives",
      "Account Executives", 
      "Sales Management",
      "Marketing Team"
    ],
    successMetrics: [
      "Qualified leads per week",
      "Demo conversion rate",
      "Average deal size",
      "Sales cycle length"
    ],
    challenges: [
      "Complex product portfolio",
      "Technical buyer personas",
      "Competitive market",
      "High-value deals require trust"
    ],
    expertSelection: {
      recommended: ["persuasiveness", "product-knowledge", "lead-qualification"],
      reasoning: "B2B sales requires convincing communication (persuasiveness), deep product expertise (product-knowledge), and efficient prospect identification (lead-qualification). These three metrics ensure the AI can effectively support the consultative sales process while qualifying prospects efficiently.",
      avoided: {
        "creating-urgency": "Less relevant for consultative B2B sales with long cycles",
        "engagement": "Sales effectiveness matters more than entertainment value",
        "personalization": "Good to have but not critical for B2B qualification focus"
      }
    }
  },

  {
    id: "customer-support-ai",
    title: "Customer Support AI Agent",
    context: "24/7 customer service for e-commerce platform with diverse customer base",
    industry: "E-commerce/Retail",
    objectives: [
      "Resolve customer issues efficiently",
      "Maintain high customer satisfaction scores",
      "Reduce escalation to human agents",
      "Provide consistent service quality"
    ],
    stakeholders: [
      "Customer Service Team",
      "Customer Experience Manager",
      "Operations Manager",
      "Customers"
    ],
    successMetrics: [
      "First-contact resolution rate",
      "Customer satisfaction (CSAT) scores",
      "Average resolution time",
      "Escalation rate"
    ],
    challenges: [
      "Diverse customer emotions and situations",
      "Complex product catalog",
      "Multiple languages and cultures",
      "Varied technical skill levels"
    ],
    expertSelection: {
      recommended: ["empathy", "problem-solving", "professionalism"],
      reasoning: "Customer support requires emotional intelligence (empathy) to handle frustrated customers, effective issue resolution (problem-solving), and consistent professional standards (professionalism) to represent the brand well.",
      avoided: {
        "persuasiveness": "Support focuses on helping, not selling",
        "creating-urgency": "Can increase customer stress inappropriately",
        "lead-qualification": "Not relevant to support scenarios"
      }
    }
  },

  {
    id: "educational-ai-tutor",
    title: "Educational AI Tutor",
    context: "Personalized learning platform for high school mathematics and science",
    industry: "Education/EdTech",
    objectives: [
      "Improve student learning outcomes",
      "Increase student engagement and motivation",
      "Provide personalized learning experiences",
      "Support diverse learning styles"
    ],
    stakeholders: [
      "Students",
      "Teachers",
      "Parents",
      "School Administrators"
    ],
    successMetrics: [
      "Student achievement scores",
      "Engagement time per session",
      "Completion rates",
      "Student satisfaction ratings"
    ],
    challenges: [
      "Varying student skill levels",
      "Motivation and engagement issues",
      "Different learning preferences",
      "Need for encouragement and support"
    ],
    expertSelection: {
      recommended: ["engagement", "personalization", "empathy"],
      reasoning: "Educational success requires keeping students interested (engagement), adapting to individual needs (personalization), and providing emotional support (empathy) to build confidence and motivation.",
      avoided: {
        "persuasiveness": "Education should inform, not persuade",
        "lead-qualification": "Not applicable to learning scenarios",
        "creating-urgency": "Can create stress that impedes learning"
      }
    }
  },

  {
    id: "content-creation-ai",
    title: "Marketing Content AI Generator",
    context: "Brand content creation for multi-channel marketing campaigns",
    industry: "Marketing/Advertising",
    objectives: [
      "Generate high-quality brand content",
      "Maintain consistent brand voice",
      "Create engaging marketing materials",
      "Ensure content accuracy and compliance"
    ],
    stakeholders: [
      "Marketing Team",
      "Content Creators",
      "Brand Managers",
      "Legal/Compliance"
    ],
    successMetrics: [
      "Content quality ratings",
      "Brand consistency scores",
      "Content engagement metrics",
      "Approval/revision rates"
    ],
    challenges: [
      "Brand voice consistency",
      "Multiple content formats",
      "Regulatory compliance",
      "Creative vs. accuracy balance"
    ],
    expertSelection: {
      recommended: ["coherence", "fluency", "groundedness"],
      reasoning: "Marketing content requires logical structure (coherence), natural language quality (fluency), and factual accuracy (groundedness) to create professional, trustworthy brand communications.",
      avoided: {
        "lead-qualification": "Content creation doesn't involve prospect assessment",
        "objection-handling": "Not relevant to content generation",
        "problem-solving": "Content creation vs. problem resolution focus"
      }
    }
  },

  {
    id: "healthcare-ai-assistant",
    title: "Healthcare Information AI",
    context: "Patient information and appointment assistance for medical practice",
    industry: "Healthcare",
    objectives: [
      "Provide accurate health information",
      "Assist with appointment scheduling",
      "Ensure patient safety and compliance",
      "Maintain empathetic patient interactions"
    ],
    stakeholders: [
      "Patients",
      "Healthcare Providers",
      "Administrative Staff",
      "Compliance Officers"
    ],
    successMetrics: [
      "Information accuracy rates",
      "Patient satisfaction scores",
      "Compliance audit results",
      "Safety incident reports"
    ],
    challenges: [
      "Critical accuracy requirements",
      "Emotional patient situations",
      "Regulatory compliance",
      "Privacy and confidentiality"
    ],
    expertSelection: {
      recommended: ["groundedness", "empathy", "transparency"],
      reasoning: "Healthcare requires factual accuracy (groundedness), emotional sensitivity (empathy), and clear explanation of limitations (transparency) to ensure patient safety and trust.",
      avoided: {
        "persuasiveness": "Healthcare should inform, not influence decisions",
        "creating-urgency": "Can cause unnecessary patient anxiety",
        "lead-qualification": "Not applicable to healthcare information"
      }
    }
  }
];

// Activity state management
const criteriaSelectionState = {
  selectedMetrics: [],
  maxSelections: 3,
  currentScenario: null,
  currentStep: 'scenario-review', // 'scenario-review', 'criteria-selection', 'feedback'
  startTime: null,
  endTime: null
};

// Utility functions for criteria selection
const criteriaSelectionUtils = {
  // Get all available metrics as flat array
  getAllMetrics: function() {
    const allMetrics = [];
    Object.values(azureAIFoundryMetrics).forEach(category => {
      allMetrics.push(...category);
    });
    return allMetrics;
  },

  // Get metrics by category
  getMetricsByCategory: function(category) {
    return azureAIFoundryMetrics[category] || [];
  },

  // Find metric by ID
  getMetricById: function(id) {
    const allMetrics = this.getAllMetrics();
    return allMetrics.find(metric => metric.id === id);
  },

  // Check if metrics provide good coverage
  analyzeCoverage: function(selectedIds) {
    const selected = selectedIds.map(id => this.getMetricById(id));
    const categories = [...new Set(selected.map(metric => metric.category))];
    
    return {
      totalSelected: selected.length,
      categoriesRepresented: categories.length,
      categories: categories,
      diversityScore: categories.length / selected.length,
      hasSafety: selected.some(m => m.category === 'Safety & Responsibility'),
      hasQuality: selected.some(m => m.category === 'Content Quality'),
      hasBusiness: selected.some(m => m.category === 'Business-Specific'),
      hasInteraction: selected.some(m => m.category === 'Interaction Quality')
    };
  },

  // Compare with expert selection
  compareWithExpert: function(userSelection, scenarioId) {
    const scenario = businessScenarios.find(s => s.id === scenarioId);
    if (!scenario) return null;

    const expertIds = scenario.expertSelection.recommended;
    const matches = userSelection.filter(id => expertIds.includes(id));
    const accuracy = (matches.length / expertIds.length) * 100;

    return {
      matches: matches.length,
      total: expertIds.length,
      accuracy: Math.round(accuracy),
      perfectMatch: matches.length === expertIds.length && userSelection.length === expertIds.length,
      expertRecommended: expertIds,
      userSelected: userSelection,
      reasoning: scenario.expertSelection.reasoning,
      avoided: scenario.expertSelection.avoided
    };
  },

  // Generate feedback based on selection
  generateFeedback: function(userSelection, scenarioId) {
    const expertComparison = this.compareWithExpert(userSelection, scenarioId);
    const coverage = this.analyzeCoverage(userSelection);
    
    let feedback = {
      overall: "",
      strengths: [],
      improvements: [],
      score: expertComparison ? expertComparison.accuracy : 0
    };

    // Overall assessment
    if (feedback.score >= 90) {
      feedback.overall = "Excellent criteria selection! You demonstrated strong understanding of business-metric alignment.";
    } else if (feedback.score >= 70) {
      feedback.overall = "Good criteria selection with some opportunities for better business alignment.";
    } else {
      feedback.overall = "Criteria selection needs improvement. Consider how metrics directly support business objectives.";
    }

    // Analyze strengths
    if (expertComparison && expertComparison.accuracy >= 80) {
      feedback.strengths.push("Strong alignment with expert recommendations");
    }
    if (coverage.diversityScore >= 0.6) {
      feedback.strengths.push("Good diversity across evaluation categories");
    }
    if (coverage.hasSafety && (scenarioId === 'healthcare-ai-assistant' || scenarioId === 'customer-support-ai')) {
      feedback.strengths.push("Appropriate consideration of safety metrics");
    }

    // Identify improvements
    if (expertComparison && expertComparison.accuracy < 70) {
      feedback.improvements.push("Review business objectives to better align metric selection");
    }
    if (!coverage.hasBusiness && (scenarioId === 'sales-ai-assistant')) {
      feedback.improvements.push("Consider business-specific metrics for sales scenarios");
    }
    if (coverage.totalSelected < 3) {
      feedback.improvements.push("Select the full 3 criteria to maximize evaluation coverage");
    }

    return feedback;
  },

  // Get scenario by ID
  getScenarioById: function(id) {
    return businessScenarios.find(scenario => scenario.id === id);
  },

  // Get random scenario
  getRandomScenario: function() {
    return businessScenarios[Math.floor(Math.random() * businessScenarios.length)];
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    azureAIFoundryMetrics,
    businessScenarios,
    criteriaSelectionState,
    criteriaSelectionUtils
  };
}