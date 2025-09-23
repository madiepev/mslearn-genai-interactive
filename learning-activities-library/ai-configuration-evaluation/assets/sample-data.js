// Sample Data for AI Configuration Evaluation Activity

// Scenario 1: Customer Service - Order Inquiry
const scenario1 = {
  id: "customer-service-order",
  title: "Customer Service - Order Inquiry",
  configuration: {
    modelType: "Customer Support Assistant",
    temperature: 0.3,
    maxTokens: 150,
    topP: 0.8,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    systemPrompt: "You are a helpful customer support assistant. Be polite, professional, and helpful."
  },
  conversation: {
    userMessage: "Hi, I'm having trouble with my recent order. It was supposed to arrive yesterday but I haven't received it yet.",
    aiResponse: "I apologize for the delay with your order. I'd be happy to help you track it down. Could you please provide me with your order number so I can look into this for you?",
    timestamp: "2:30 PM"
  },
  expertEvaluation: {
    ratings: {
      politeness: 3,
      clarity: 3,
      accuracy: 3,
      appropriateness: 3
    },
    totalScore: 12,
    percentage: 100,
    feedback: "Excellent response demonstrating empathy, clear next steps, and appropriate tone for customer service."
  }
};

// Scenario 2: Educational Support - Science Question
const scenario2 = {
  id: "educational-science",
  title: "Educational Support - Science Question",
  configuration: {
    modelType: "Educational Tutor",
    temperature: 0.7,
    maxTokens: 200,
    topP: 0.9,
    frequencyPenalty: 0.1,
    presencePenalty: 0.1,
    systemPrompt: "You are an encouraging educational tutor. Break down complex concepts and use examples."
  },
  conversation: {
    userMessage: "I don't understand how photosynthesis works. Can you help me?",
    aiResponse: "Of course! Think of photosynthesis like a plant's kitchen. Plants use sunlight, water, and carbon dioxide (like ingredients) to make their own food (glucose) and release oxygen. It's like they have a solar-powered cooking system! What part would you like me to explain more?",
    timestamp: "3:15 PM"
  },
  expertEvaluation: {
    ratings: {
      politeness: 3,
      clarity: 3,
      accuracy: 3,
      appropriateness: 3
    },
    totalScore: 12,
    percentage: 100,
    feedback: "Excellent use of analogy, encouraging tone, and follow-up question to continue learning."
  }
};

// Scenario 3: Technical Support - Poor Response Example
const scenario3 = {
  id: "technical-poor-response",
  title: "Technical Support - Poor Response Example",
  configuration: {
    modelType: "General Assistant",
    temperature: 0.1,
    maxTokens: 50,
    topP: 0.5,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    systemPrompt: "Answer user questions concisely."
  },
  conversation: {
    userMessage: "My computer keeps crashing when I try to run the new software. This is the third time today and I need to finish my work. What should I do?",
    aiResponse: "Try restarting your computer.",
    timestamp: "4:45 PM"
  },
  expertEvaluation: {
    ratings: {
      politeness: 1,
      clarity: 2,
      accuracy: 2,
      appropriateness: 1
    },
    totalScore: 6,
    percentage: 50,
    feedback: "Response lacks empathy, is too brief for the user's frustration level, and doesn't provide comprehensive troubleshooting steps."
  }
};

// Scenario 4: Information Request - Mixed Quality
const scenario4 = {
  id: "information-mixed-quality",
  title: "Information Request - Mixed Quality",
  configuration: {
    modelType: "Information Assistant",
    temperature: 0.4,
    maxTokens: 180,
    topP: 0.8,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    systemPrompt: "Provide helpful information to user questions."
  },
  conversation: {
    userMessage: "What's the weather like in Paris right now? I'm planning to visit next week.",
    aiResponse: "I don't have access to real-time weather data, but I can tell you that Paris in this season typically has mild temperatures around 15-20°C with occasional rain. For your trip next week, I'd recommend checking a current weather app or website for the most accurate forecast. Would you like some general packing suggestions for Paris weather?",
    timestamp: "1:20 PM"
  },
  expertEvaluation: {
    ratings: {
      politeness: 3,
      clarity: 3,
      accuracy: 3,
      appropriateness: 2
    },
    totalScore: 11,
    percentage: 92,
    feedback: "Good response that acknowledges limitations and provides helpful alternatives. Could be slightly more personalized for travel planning."
  }
};

// Main evaluation data structure
const evaluationData = {
  scenarios: [scenario1, scenario2, scenario3, scenario4],
  
  evaluationMetrics: [
    {
      name: "politeness",
      label: "Is the AI's response polite and respectful?",
      scale: [
        {value: 1, label: "Poor", color: "#dc3545"},
        {value: 2, label: "Good", color: "#007bff"}, 
        {value: 3, label: "Excellent", color: "#28a745"}
      ]
    },
    {
      name: "clarity",
      label: "Is the AI's response clear and easy to understand?",
      scale: [
        {value: 1, label: "Poor", color: "#dc3545"},
        {value: 2, label: "Good", color: "#007bff"}, 
        {value: 3, label: "Excellent", color: "#28a745"}
      ]
    },
    {
      name: "accuracy",
      label: "Is the AI's response accurate and helpful?",
      scale: [
        {value: 1, label: "Poor", color: "#dc3545"},
        {value: 2, label: "Good", color: "#007bff"}, 
        {value: 3, label: "Excellent", color: "#28a745"}
      ]
    },
    {
      name: "appropriateness",
      label: "Is the AI's response appropriate for the context?",
      scale: [
        {value: 1, label: "Poor", color: "#dc3545"},
        {value: 2, label: "Good", color: "#007bff"}, 
        {value: 3, label: "Excellent", color: "#28a745"}
      ]
    }
  ],
  
  // Function to get a random scenario
  getRandomScenario: function() {
    return this.scenarios[Math.floor(Math.random() * this.scenarios.length)];
  },
  
  // Function to calculate score percentage
  calculateScore: function(userRatings, expertRatings) {
    let totalDifference = 0;
    let maxPossibleDifference = 0;
    
    for (let metric of this.evaluationMetrics) {
      const userRating = userRatings[metric.name] || 0;
      const expertRating = expertRatings[metric.name] || 0;
      const difference = Math.abs(userRating - expertRating);
      
      totalDifference += difference;
      maxPossibleDifference += 2; // Max difference is 2 (1 vs 3 or 3 vs 1)
    }
    
    const accuracy = 1 - (totalDifference / maxPossibleDifference);
    return Math.round(accuracy * 100);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = evaluationData;
}