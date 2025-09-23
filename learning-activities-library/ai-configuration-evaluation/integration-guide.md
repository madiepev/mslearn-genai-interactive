# Integration Guide: AI Configuration Evaluation Activity

## 🔗 Quick Integration

To use this activity in your hands-on exercise:

1. **Copy Assets**: Copy the `/assets/` folder to your project
2. **Reference Templates**: Use content templates for your specific scenario
3. **Customize Data**: Modify `sample-data.js` with your content
4. **Follow Implementation**: Use the code structure below

## 📁 File Structure

```
your-exercise/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── sample-data.js          # Copy from library
    ├── evaluation-rubrics.md   # Reference for scoring
    └── sample-configurations.md # Example configurations
```

## 🔧 HTML Implementation

### Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Configuration Evaluation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Activity Header -->
        <header class="activity-header">
            <h1>AI Configuration Evaluation</h1>
            <p class="subtitle">Assess AI model configurations and response quality</p>
        </header>

        <!-- Configuration Panel -->
        <section class="configuration-section">
            <h2>Backend Configuration</h2>
            <div class="config-panel">
                <div class="model-params">
                    <h3>Model Parameters</h3>
                    <div class="param-grid" id="param-grid">
                        <!-- Dynamically populated -->
                    </div>
                </div>
                <div class="system-prompt">
                    <h3>System Prompt</h3>
                    <pre id="system-prompt-text"><!-- System prompt --></pre>
                </div>
            </div>
        </section>

        <!-- Chat Interface -->
        <section class="chat-section">
            <h2>Customer Support Chat</h2>
            <div class="chat-interface">
                <div class="chat-messages" id="chat-messages">
                    <!-- Messages populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- Evaluation Form -->
        <section class="evaluation-section">
            <h2>Rate this Configuration</h2>
            <form class="evaluation-form" id="evaluation-form">
                <div class="metrics-grid" id="metrics-grid">
                    <!-- Evaluation metrics populated by JavaScript -->
                </div>
                <button type="submit" class="btn-primary">Submit Evaluation</button>
            </form>
        </section>

        <!-- Feedback Section -->
        <section class="feedback-section hidden" id="feedback-section">
            <h2>Evaluation Feedback</h2>
            <div class="feedback-content" id="feedback-content">
                <!-- Feedback populated by JavaScript -->
            </div>
        </section>
    </div>

    <script src="assets/sample-data.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

## 🎨 CSS Implementation

### Key Style Classes
```css
/* Configuration Panel Styling */
.config-panel {
    background-color: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 10px;
    font-family: 'Courier New', monospace;
}

.param-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.param-item {
    background-color: #4a5568;
    padding: 10px;
    border-radius: 5px;
}

.param-label {
    color: #48bb78;
    font-weight: bold;
    margin-bottom: 5px;
}

.param-value {
    color: #ffffff;
    font-size: 1.2rem;
}

/* Chat Interface Styling */
.chat-interface {
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
}

.message {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.message.user {
    flex-direction: row-reverse;
}

.message-content {
    background-color: #ffffff;
    padding: 12px 16px;
    border-radius: 18px;
    max-width: 70%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.message.user .message-content {
    background-color: #3182ce;
    color: white;
}

.message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
}

.message.user .message-avatar {
    background-color: #3182ce;
}

.message.ai .message-avatar {
    background-color: #48bb78;
}

/* Rating Interface Styling */
.metrics-grid {
    display: grid;
    gap: 20px;
}

.metric-item {
    background-color: #f7fafc;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
}

.metric-question {
    font-weight: 600;
    margin-bottom: 15px;
    color: #2d3748;
}

.rating-options {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.rating-option {
    flex: 1;
    text-align: center;
    padding: 15px 10px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: white;
}

.rating-option:hover {
    border-color: #3182ce;
    background-color: #ebf8ff;
}

.rating-option.selected {
    border-color: #3182ce;
    background-color: #3182ce;
    color: white;
}

.rating-option.poor {
    border-color: #e53e3e;
}

.rating-option.good {
    border-color: #3182ce;
}

.rating-option.excellent {
    border-color: #38a169;
}

/* Feedback Styling */
.feedback-content {
    background-color: #f0fff4;
    border: 1px solid #9ae6b4;
    border-radius: 10px;
    padding: 20px;
}

.feedback-score {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #2f855a;
}

.feedback-details {
    display: grid;
    gap: 15px;
}

.feedback-metric {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    border-left: 4px solid #38a169;
}

.feedback-explanation {
    margin-top: 20px;
    padding: 15px;
    background-color: #edf2f7;
    border-radius: 8px;
    border-left: 4px solid #3182ce;
}
```

## ⚙️ JavaScript Implementation

### Core Functions
```javascript
class AIEvaluationActivity {
    constructor() {
        this.currentScenario = null;
        this.userRatings = {};
        this.init();
    }

    init() {
        this.loadScenario();
        this.setupEventListeners();
    }

    loadScenario() {
        // Load a random scenario or specific one
        this.currentScenario = evaluationData.getRandomScenario();
        this.renderConfiguration();
        this.renderConversation();
        this.renderEvaluationForm();
    }

    renderConfiguration() {
        const paramGrid = document.getElementById('param-grid');
        const config = this.currentScenario.configuration;
        
        paramGrid.innerHTML = '';
        
        // Render model parameters
        Object.entries(config).forEach(([key, value]) => {
            if (key !== 'systemPrompt') {
                const paramItem = document.createElement('div');
                paramItem.className = 'param-item';
                paramItem.innerHTML = `
                    <div class="param-label">${this.formatParamName(key)}</div>
                    <div class="param-value">${value}</div>
                `;
                paramGrid.appendChild(paramItem);
            }
        });

        // Render system prompt
        document.getElementById('system-prompt-text').textContent = config.systemPrompt;
    }

    renderConversation() {
        const chatMessages = document.getElementById('chat-messages');
        const conversation = this.currentScenario.conversation;
        
        chatMessages.innerHTML = `
            <div class="message user">
                <div class="message-avatar">U</div>
                <div class="message-content">
                    ${conversation.userMessage}
                    <div class="message-time">${conversation.timestamp}</div>
                </div>
            </div>
            <div class="message ai">
                <div class="message-avatar">AI</div>
                <div class="message-content">
                    ${conversation.aiResponse}
                    <div class="message-time">${conversation.timestamp}</div>
                </div>
            </div>
        `;
    }

    renderEvaluationForm() {
        const metricsGrid = document.getElementById('metrics-grid');
        
        metricsGrid.innerHTML = '';
        
        evaluationData.evaluationMetrics.forEach(metric => {
            const metricDiv = document.createElement('div');
            metricDiv.className = 'metric-item';
            
            metricDiv.innerHTML = `
                <div class="metric-question">${metric.label}</div>
                <div class="rating-options">
                    ${metric.scale.map(option => `
                        <div class="rating-option ${option.label.toLowerCase()}" 
                             data-metric="${metric.name}" 
                             data-value="${option.value}">
                            <div class="rating-label">${option.label}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            metricsGrid.appendChild(metricDiv);
        });
    }

    setupEventListeners() {
        // Rating selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.rating-option')) {
                const option = e.target.closest('.rating-option');
                const metric = option.dataset.metric;
                const value = parseInt(option.dataset.value);
                
                // Clear previous selections for this metric
                const siblings = option.parentNode.querySelectorAll('.rating-option');
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                
                // Select current option
                option.classList.add('selected');
                
                // Store rating
                this.userRatings[metric] = value;
            }
        });

        // Form submission
        document.getElementById('evaluation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitEvaluation();
        });
    }

    submitEvaluation() {
        if (Object.keys(this.userRatings).length < evaluationData.evaluationMetrics.length) {
            alert('Please rate all criteria before submitting.');
            return;
        }

        this.showFeedback();
    }

    showFeedback() {
        const expertRatings = this.currentScenario.expertEvaluation.ratings;
        const score = evaluationData.calculateScore(this.userRatings, expertRatings);
        
        const feedbackSection = document.getElementById('feedback-section');
        const feedbackContent = document.getElementById('feedback-content');
        
        feedbackContent.innerHTML = `
            <div class="feedback-score">
                Your Accuracy: ${score}%
            </div>
            <div class="feedback-details">
                ${this.generateFeedbackDetails(expertRatings)}
            </div>
            <div class="feedback-explanation">
                <strong>Expert Feedback:</strong>
                ${this.currentScenario.expertEvaluation.feedback}
            </div>
        `;
        
        feedbackSection.classList.remove('hidden');
        feedbackSection.scrollIntoView({ behavior: 'smooth' });
    }

    generateFeedbackDetails(expertRatings) {
        return evaluationData.evaluationMetrics.map(metric => {
            const userRating = this.userRatings[metric.name];
            const expertRating = expertRatings[metric.name];
            const match = userRating === expertRating;
            
            return `
                <div class="feedback-metric ${match ? 'correct' : 'incorrect'}">
                    <span>${metric.label}</span>
                    <span>You: ${userRating} | Expert: ${expertRating} ${match ? '✓' : '✗'}</span>
                </div>
            `;
        }).join('');
    }

    formatParamName(key) {
        return key.replace(/([A-Z])/g, ' $1')
                 .replace(/^./, str => str.toUpperCase());
    }
}

// Initialize the activity when page loads
document.addEventListener('DOMContentLoaded', () => {
    new AIEvaluationActivity();
});
```

## 📝 Content Customization

### Quick Customization Variables
```javascript
// At the top of your script.js file
const ACTIVITY_CONFIG = {
    title: "AI Configuration Evaluation",
    subtitle: "Assess AI model configurations and response quality",
    
    // Choose which scenarios to include
    includedScenarios: ['customer-service-order', 'educational-science'],
    
    // Customize evaluation criteria
    customMetrics: [
        {
            name: "helpfulness",
            label: "How helpful is this response?",
            scale: [
                {value: 1, label: "Not Helpful", color: "#dc3545"},
                {value: 2, label: "Somewhat Helpful", color: "#ffc107"},
                {value: 3, label: "Very Helpful", color: "#28a745"}
            ]
        }
    ],
    
    // Feedback messages
    feedbackMessages: {
        excellent: "🎉 Excellent evaluation skills!",
        good: "✅ Good work with room for improvement!",
        needsWork: "📚 Learning opportunity - review the feedback!"
    }
};
```

## 🚀 Deployment Checklist

- [ ] Copy assets folder from library
- [ ] Customize content in `sample-data.js`
- [ ] Update activity title and instructions
- [ ] Test all evaluation scenarios
- [ ] Verify feedback calculations
- [ ] Check responsive design on mobile
- [ ] Test accessibility features
- [ ] Deploy to GitHub Pages

## 🔍 Troubleshooting

### Common Issues

**Ratings not saving**: Check that event listeners are properly attached to rating options

**Feedback not showing**: Verify that all metrics are rated before submission

**Styling issues**: Ensure CSS classes match the HTML structure

**Data not loading**: Check that `sample-data.js` is properly included

### Debug Tips

```javascript
// Add to console to debug
console.log('Current ratings:', this.userRatings);
console.log('Expert ratings:', this.currentScenario.expertEvaluation.ratings);
console.log('Calculated score:', evaluationData.calculateScore(this.userRatings, expertRatings));
```