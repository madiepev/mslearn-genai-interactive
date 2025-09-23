// Sample Data for Data Selection Training Activity

// Training objective
const trainingObjective = {
  title: "Fine-tuning Dataset Selection",
  description: "Select 3 chat examples to include in your fine-tuning dataset. Choose conversations that demonstrate the politeness and clarity you want your model to learn.",
  targetBehavior: "Polite and clear customer service responses",
  selectionTarget: 3,
  totalAvailable: 6
};

// Sample conversations based on the screenshot
const conversations = [
  {
    id: "order-delay-inquiry",
    title: "Order Delay Inquiry",
    category: "CUSTOMER SUPPORT",
    userMessage: "Hi, my order is late. Where is it?",
    aiResponse: "I sincerely apologize for the delay with your order. Let me check the tracking information for you right away and provide you with an updated delivery estimate. Could you please share your order number?",
    qualityIndicators: {
      politeness: "HIGH",
      clarity: "HIGH"
    },
    selected: false,
    expertRecommended: true,
    reasoning: "Excellent combination of empathy, clear next steps, and professional tone"
  },
  
  {
    id: "refund-request",
    title: "Refund Request", 
    category: "CUSTOMER SUPPORT",
    userMessage: "I want my money back for this broken item.",
    aiResponse: "I understand your frustration with receiving a damaged item. I'll process your refund request immediately. Please provide your order number and you'll receive a full refund within 3-5 business days.",
    qualityIndicators: {
      politeness: "MEDIUM",
      clarity: "HIGH" 
    },
    selected: true, // Pre-selected in screenshot
    expertRecommended: true,
    reasoning: "Shows empathy and provides clear process, good model for refund handling"
  },
  
  {
    id: "account-access-issue",
    title: "Account Access Issue",
    category: "TECHNICAL SUPPORT", 
    userMessage: "Can't log into my account. This is ridiculous!",
    aiResponse: "Reset your password using the forgot password link. If that doesn't work, clear your browser cache.",
    qualityIndicators: {
      politeness: "LOW",
      clarity: "MEDIUM"
    },
    selected: false,
    expertRecommended: false,
    reasoning: "Lacks empathy for frustrated customer, too brief and impersonal"
  },
  
  {
    id: "product-information",
    title: "Product Information",
    category: "SALES SUPPORT",
    userMessage: "Can you tell me more about the premium subscription?", 
    aiResponse: "I'd be happy to explain our premium subscription! It includes advanced features like priority support, unlimited storage, and exclusive content. Would you like me to walk you through the specific benefits that might interest you most?",
    qualityIndicators: {
      politeness: "HIGH",
      clarity: "HIGH"
    },
    selected: false,
    expertRecommended: true,
    reasoning: "Enthusiastic, helpful tone with clear follow-up question"
  },
  
  {
    id: "billing-question",
    title: "Billing Question",
    category: "CUSTOMER SUPPORT",
    userMessage: "Why was I charged twice this month?",
    aiResponse: "There might be various reasons for this. Sometimes it happens. I can look into it. What's your account info?",
    qualityIndicators: {
      politeness: "MEDIUM", 
      clarity: "LOW"
    },
    selected: false,
    expertRecommended: false,
    reasoning: "Vague response lacks confidence and clear explanation"
  },
  
  {
    id: "service-complaint", 
    title: "Service Complaint",
    category: "CUSTOMER SUPPORT",
    userMessage: "Your service has been terrible lately. I'm considering canceling.",
    aiResponse: "I'm truly sorry to hear about your disappointing experience with our service. Your feedback is invaluable, and I want to make this right. Could you help me understand the specific issues you've encountered so I can address them personally and improve your experience?",
    qualityIndicators: {
      politeness: "HIGH",
      clarity: "HIGH"
    },
    selected: false,
    expertRecommended: true,
    reasoning: "Excellent handling of negative feedback with empathy and action orientation"
  }
];

// Expert selection and reasoning
const expertSelection = {
  selectedConversations: ["order-delay-inquiry", "refund-request", "service-complaint"],
  reasoning: {
    overall: "Selected conversations demonstrate consistently high politeness and clarity while covering diverse customer service scenarios.",
    specific: {
      "order-delay-inquiry": "Perfect example of empathetic, professional response to customer frustration",
      "refund-request": "Shows appropriate response to damaged goods with clear process",
      "service-complaint": "Excellent model for handling complaints with empathy and solution focus"
    },
    avoided: {
      "account-access-issue": "Too brief and lacks empathy for frustrated customer",
      "billing-question": "Vague and unprofessional response style",
      "product-information": "Good quality but not diverse enough - need support scenarios over sales"
    }
  },
  datasetQuality: {
    politenessDistribution: "100% high politeness responses",
    clarityDistribution: "100% high clarity responses", 
    scenarioCoverage: "Diverse: order inquiry, refund, complaint handling",
    overallRating: "Excellent dataset for training polite, clear customer service"
  }
};

// Quality rubric definitions
const qualityRubric = {
  politeness: {
    high: {
      description: "Consistently respectful, empathetic, and professional tone",
      examples: ["I sincerely apologize", "I understand your frustration", "I'm truly sorry"]
    },
    medium: {
      description: "Generally polite but may lack warmth or empathy",
      examples: ["I can help with that", "Let me check", "Please provide"]
    },
    low: {
      description: "Neutral or potentially dismissive tone",
      examples: ["Reset your password", "Sometimes it happens", "Direct commands without courtesy"]
    }
  },
  clarity: {
    high: {
      description: "Clear, specific instructions with obvious next steps",
      examples: ["Please provide your order number", "You'll receive a full refund within 3-5 business days"]
    },
    medium: {
      description: "Generally understandable but may lack specificity",
      examples: ["Clear your browser cache", "I can look into it"]
    },
    low: {
      description: "Vague, confusing, or incomplete information",
      examples: ["Sometimes it happens", "Various reasons", "What's your account info?"]
    }
  }
};

// Activity state management
const activityState = {
  selectedConversations: [],
  maxSelections: 3,
  currentStep: 'selection', // 'selection', 'review', 'feedback'
  startTime: null,
  endTime: null
};

// Utility functions
const dataSelectionUtils = {
  // Check if conversation meets quality threshold
  meetsQualityThreshold: function(conversation, requiredQuality = ['HIGH']) {
    const scores = Object.values(conversation.qualityIndicators);
    return requiredQuality.every(req => scores.includes(req));
  },
  
  // Calculate dataset quality score
  calculateDatasetQuality: function(selectedIds) {
    const selected = conversations.filter(conv => selectedIds.includes(conv.id));
    const totalQuality = selected.reduce((sum, conv) => {
      const politenessScore = this.getQualityScore(conv.qualityIndicators.politeness);
      const clarityScore = this.getQualityScore(conv.qualityIndicators.clarity);
      return sum + politenessScore + clarityScore;
    }, 0);
    return Math.round((totalQuality / (selected.length * 6)) * 100); // Max score is 6 (3+3 per conversation)
  },
  
  // Convert quality level to numeric score
  getQualityScore: function(level) {
    const scores = { 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
    return scores[level] || 0;
  },
  
  // Check scenario diversity
  checkScenarioDiversity: function(selectedIds) {
    const selected = conversations.filter(conv => selectedIds.includes(conv.id));
    const categories = [...new Set(selected.map(conv => conv.category))];
    return {
      uniqueCategories: categories.length,
      totalSelected: selected.length,
      diversityScore: categories.length / selected.length
    };
  },
  
  // Compare with expert selection
  compareWithExpert: function(userSelection) {
    const expertIds = expertSelection.selectedConversations;
    const matches = userSelection.filter(id => expertIds.includes(id));
    const accuracy = (matches.length / expertIds.length) * 100;
    
    return {
      matches: matches.length,
      total: expertIds.length,
      accuracy: Math.round(accuracy),
      perfectMatch: matches.length === expertIds.length && userSelection.length === expertIds.length
    };
  },
  
  // Generate feedback based on selection
  generateFeedback: function(userSelection) {
    const qualityScore = this.calculateDatasetQuality(userSelection);
    const expertComparison = this.compareWithExpert(userSelection);
    const diversity = this.checkScenarioDiversity(userSelection);
    
    let feedback = {
      overall: "",
      strengths: [],
      improvements: [],
      score: Math.round((qualityScore + expertComparison.accuracy) / 2)
    };
    
    // Overall assessment
    if (feedback.score >= 90) {
      feedback.overall = "Excellent dataset selection! Your choices demonstrate strong understanding of quality criteria.";
    } else if (feedback.score >= 70) {
      feedback.overall = "Good dataset selection with room for improvement in some areas.";
    } else {
      feedback.overall = "Dataset selection needs improvement. Review the quality criteria and try again.";
    }
    
    // Specific feedback
    if (expertComparison.accuracy >= 80) {
      feedback.strengths.push("Strong alignment with expert recommendations");
    }
    if (qualityScore >= 85) {
      feedback.strengths.push("Selected high-quality conversations for training");
    }
    if (diversity.diversityScore >= 0.6) {
      feedback.strengths.push("Good scenario diversity in dataset");
    }
    
    if (expertComparison.accuracy < 70) {
      feedback.improvements.push("Review expert selections to understand quality criteria better");
    }
    if (qualityScore < 80) {
      feedback.improvements.push("Focus on selecting conversations with consistently high quality scores");
    }
    
    return feedback;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    trainingObjective,
    conversations,
    expertSelection,
    qualityRubric,
    activityState,
    dataSelectionUtils
  };
}