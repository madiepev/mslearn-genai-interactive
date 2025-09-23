# Integration Guide: Data Selection for Training Activity

## 🔗 Quick Integration

To use this data selection activity in your hands-on exercise:

1. **Copy Assets**: Copy the `/assets/` folder to your project
2. **Reference Examples**: Use conversation examples for your specific domain
3. **Customize Data**: Modify `sample-data.js` with your training scenarios
4. **Follow Implementation**: Use the code structure below

## 📁 File Structure

```
your-exercise/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── sample-data.js              # Copy from library
    ├── conversation-examples.md    # Reference conversations
    └── selection-rubrics.md        # Quality assessment guides
```

## 🔧 HTML Implementation

### Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Selection for Training</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Activity Header -->
        <header class="activity-header">
            <h1>Fine-tuning Dataset Selection</h1>
            <p class="subtitle">Select conversations that demonstrate polite and clear customer service</p>
        </header>

        <!-- Training Objective -->
        <section class="training-objective">
            <div class="objective-card">
                <h2>Training Goal</h2>
                <p id="training-description"><!-- Dynamic content --></p>
                <div class="selection-progress">
                    <span id="selection-counter">0 / 3 selected</span>
                </div>
            </div>
        </section>

        <!-- Instructions -->
        <section class="instructions">
            <div class="instruction-banner">
                <span class="icon">ℹ️</span>
                <p>Select conversations that show good examples of polite and clear customer service responses</p>
            </div>
        </section>

        <!-- Conversations Grid -->
        <section class="conversations-section">
            <div class="conversations-grid" id="conversations-grid">
                <!-- Conversation cards populated by JavaScript -->
            </div>
        </section>

        <!-- Dataset Summary -->
        <section class="dataset-summary hidden" id="dataset-summary">
            <h2>Your Selected Dataset</h2>
            <div class="summary-content" id="summary-content">
                <!-- Summary populated by JavaScript -->
            </div>
            <button class="btn-primary" id="submit-dataset">Submit Dataset</button>
        </section>

        <!-- Feedback Section -->
        <section class="feedback-section hidden" id="feedback-section">
            <h2>Dataset Evaluation</h2>
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
/* Layout */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    min-height: 100vh;
}

/* Training Objective */
.training-objective {
    margin-bottom: 30px;
}

.objective-card {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    padding: 25px;
    border-radius: 10px;
    text-align: center;
}

.selection-progress {
    background-color: rgba(255,255,255,0.2);
    padding: 10px 20px;
    border-radius: 20px;
    margin-top: 15px;
    display: inline-block;
}

/* Instructions */
.instructions {
    margin-bottom: 30px;
}

.instruction-banner {
    background-color: #e7f3ff;
    border: 1px solid #b3d9ff;
    border-radius: 8px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.instruction-banner .icon {
    font-size: 1.2rem;
}

/* Conversations Grid */
.conversations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

/* Conversation Cards */
.conversation-card {
    background-color: white;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.conversation-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.conversation-card.selected {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.2);
}

.card-header {
    background-color: #f8f9fa;
    padding: 15px 20px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-title {
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
}

.card-category {
    background-color: #6c757d;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
}

.card-content {
    padding: 20px;
}

/* Chat Messages */
.chat-messages {
    margin-bottom: 15px;
}

.message {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.message.user {
    flex-direction: row-reverse;
}

.message-bubble {
    max-width: 80%;
    padding: 10px 14px;
    border-radius: 18px;
    word-wrap: break-word;
}

.message.user .message-bubble {
    background-color: #007bff;
    color: white;
    margin-left: auto;
}

.message.ai .message-bubble {
    background-color: #28a745;
    color: white;
}

.message-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.8rem;
    color: white;
    flex-shrink: 0;
}

.message.user .message-avatar {
    background-color: #007bff;
}

.message.ai .message-avatar {
    background-color: #28a745;
}

/* Quality Indicators */
.quality-indicators {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.quality-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.quality-badge.high {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.quality-badge.medium {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
}

.quality-badge.low {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

/* Selection Indicator */
.selection-indicator {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    border: 2px solid #007bff;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #007bff;
    transition: all 0.2s ease;
}

.conversation-card.selected .selection-indicator {
    background-color: #007bff;
    color: white;
}

.selection-indicator::after {
    content: "✓";
    opacity: 0;
    transition: opacity 0.2s ease;
}

.conversation-card.selected .selection-indicator::after {
    opacity: 1;
}

/* Dataset Summary */
.dataset-summary {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #e9ecef;
    margin-bottom: 30px;
}

.summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.summary-card {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e9ecef;
}

.summary-title {
    font-weight: 600;
    margin-bottom: 8px;
    color: #495057;
}

.summary-value {
    font-size: 1.2rem;
    font-weight: bold;
    color: #007bff;
}

/* Feedback Styles */
.feedback-content {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #e9ecef;
}

.feedback-score {
    text-align: center;
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 8px;
}

.feedback-score.excellent {
    background-color: #d4edda;
    color: #155724;
    border: 2px solid #c3e6cb;
}

.feedback-score.good {
    background-color: #cce7ff;
    color: #004085;
    border: 2px solid #99d6ff;
}

.feedback-score.needs-improvement {
    background-color: #f8d7da;
    color: #721c24;
    border: 2px solid #f5c6cb;
}

.feedback-details {
    display: grid;
    gap: 20px;
}

.feedback-section-item {
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #007bff;
}

.feedback-section-item h4 {
    margin-bottom: 10px;
    color: #2c3e50;
}

.feedback-section-item ul {
    margin: 0;
    padding-left: 20px;
}

.expert-comparison {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 15px;
}

.comparison-column h5 {
    margin-bottom: 10px;
    color: #495057;
}

.comparison-list {
    list-style: none;
    padding: 0;
}

.comparison-list li {
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;
}

.comparison-list li:last-child {
    border-bottom: none;
}

/* Buttons */
.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
    background-color: #0056b3;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
}

/* Utility Classes */
.hidden {
    display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .conversations-grid {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .container {
        padding: 10px;
    }
}
```

## ⚙️ JavaScript Implementation

### Core Functions
```javascript
class DataSelectionActivity {
    constructor() {
        this.selectedConversations = [];
        this.maxSelections = 3;
        this.conversations = conversations; // From sample-data.js
        this.init();
    }

    init() {
        this.renderTrainingObjective();
        this.renderConversations();
        this.setupEventListeners();
        this.updateSelectionProgress();
    }

    renderTrainingObjective() {
        document.getElementById('training-description').textContent = trainingObjective.description;
    }

    renderConversations() {
        const grid = document.getElementById('conversations-grid');
        grid.innerHTML = '';

        this.conversations.forEach(conversation => {
            const card = this.createConversationCard(conversation);
            grid.appendChild(card);
        });
    }

    createConversationCard(conversation) {
        const card = document.createElement('div');
        card.className = 'conversation-card';
        card.dataset.conversationId = conversation.id;

        card.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${conversation.title}</h3>
                <span class="card-category">${conversation.category}</span>
            </div>
            <div class="card-content">
                <div class="chat-messages">
                    <div class="message user">
                        <div class="message-avatar">U</div>
                        <div class="message-bubble">${conversation.userMessage}</div>
                    </div>
                    <div class="message ai">
                        <div class="message-avatar">AI</div>
                        <div class="message-bubble">${conversation.aiResponse}</div>
                    </div>
                </div>
                <div class="quality-indicators">
                    <span class="quality-badge ${conversation.qualityIndicators.politeness.toLowerCase()}">
                        ${conversation.qualityIndicators.politeness} Politeness
                    </span>
                    <span class="quality-badge ${conversation.qualityIndicators.clarity.toLowerCase()}">
                        ${conversation.qualityIndicators.clarity} Clarity
                    </span>
                </div>
            </div>
            <div class="selection-indicator"></div>
        `;

        return card;
    }

    setupEventListeners() {
        // Conversation selection
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.conversation-card');
            if (card) {
                this.toggleConversationSelection(card);
            }
        });

        // Submit dataset
        document.getElementById('submit-dataset').addEventListener('click', () => {
            this.submitDataset();
        });
    }

    toggleConversationSelection(card) {
        const conversationId = card.dataset.conversationId;
        const isSelected = card.classList.contains('selected');

        if (isSelected) {
            // Deselect
            card.classList.remove('selected');
            this.selectedConversations = this.selectedConversations.filter(id => id !== conversationId);
        } else {
            // Select (if under limit)
            if (this.selectedConversations.length < this.maxSelections) {
                card.classList.add('selected');
                this.selectedConversations.push(conversationId);
            } else {
                alert(`You can only select ${this.maxSelections} conversations.`);
                return;
            }
        }

        this.updateSelectionProgress();
        this.updateDatasetSummary();
    }

    updateSelectionProgress() {
        const counter = document.getElementById('selection-counter');
        counter.textContent = `${this.selectedConversations.length} / ${this.maxSelections} selected`;

        // Show/hide dataset summary
        const summarySection = document.getElementById('dataset-summary');
        if (this.selectedConversations.length > 0) {
            summarySection.classList.remove('hidden');
        } else {
            summarySection.classList.add('hidden');
        }

        // Enable/disable submit button
        const submitBtn = document.getElementById('submit-dataset');
        submitBtn.disabled = this.selectedConversations.length !== this.maxSelections;
    }

    updateDatasetSummary() {
        const summaryContent = document.getElementById('summary-content');
        const selected = this.conversations.filter(conv => 
            this.selectedConversations.includes(conv.id)
        );

        const qualityScore = dataSelectionUtils.calculateDatasetQuality(this.selectedConversations);
        const diversity = dataSelectionUtils.checkScenarioDiversity(this.selectedConversations);

        summaryContent.innerHTML = `
            <div class="summary-grid">
                <div class="summary-card">
                    <div class="summary-title">Conversations Selected</div>
                    <div class="summary-value">${selected.length}</div>
                </div>
                <div class="summary-card">
                    <div class="summary-title">Quality Score</div>
                    <div class="summary-value">${qualityScore}%</div>
                </div>
                <div class="summary-card">
                    <div class="summary-title">Scenario Types</div>
                    <div class="summary-value">${diversity.uniqueCategories}</div>
                </div>
            </div>
            <h4>Selected Conversations:</h4>
            <ul>
                ${selected.map(conv => `<li>${conv.title} - ${conv.category}</li>`).join('')}
            </ul>
        `;
    }

    submitDataset() {
        const feedback = dataSelectionUtils.generateFeedback(this.selectedConversations);
        const expertComparison = dataSelectionUtils.compareWithExpert(this.selectedConversations);
        
        this.showFeedback(feedback, expertComparison);
    }

    showFeedback(feedback, expertComparison) {
        const feedbackSection = document.getElementById('feedback-section');
        const feedbackContent = document.getElementById('feedback-content');

        const scoreClass = feedback.score >= 90 ? 'excellent' : 
                          feedback.score >= 70 ? 'good' : 'needs-improvement';

        feedbackContent.innerHTML = `
            <div class="feedback-score ${scoreClass}">
                <h3>Dataset Quality Score: ${feedback.score}%</h3>
                <p>${feedback.overall}</p>
            </div>
            
            <div class="feedback-details">
                ${feedback.strengths.length > 0 ? `
                    <div class="feedback-section-item">
                        <h4>✅ Strengths</h4>
                        <ul>
                            ${feedback.strengths.map(strength => `<li>${strength}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${feedback.improvements.length > 0 ? `
                    <div class="feedback-section-item">
                        <h4>📈 Areas for Improvement</h4>
                        <ul>
                            ${feedback.improvements.map(improvement => `<li>${improvement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
            
            <div class="expert-comparison">
                <h4>Expert Comparison</h4>
                <p>Your selection accuracy: ${expertComparison.accuracy}% (${expertComparison.matches}/${expertComparison.total} matches)</p>
                
                <div class="comparison-grid">
                    <div class="comparison-column">
                        <h5>Your Selections</h5>
                        <ul class="comparison-list">
                            ${this.selectedConversations.map(id => {
                                const conv = this.conversations.find(c => c.id === id);
                                return `<li>${conv.title}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                    <div class="comparison-column">
                        <h5>Expert Selections</h5>
                        <ul class="comparison-list">
                            ${expertSelection.selectedConversations.map(id => {
                                const conv = this.conversations.find(c => c.id === id);
                                return `<li>${conv.title}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        feedbackSection.classList.remove('hidden');
        feedbackSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize the activity when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DataSelectionActivity();
});
```

## 📝 Content Customization

### Quick Customization Variables
```javascript
// At the top of your script.js file
const ACTIVITY_CONFIG = {
    title: "Fine-tuning Dataset Selection",
    description: "Select conversations that demonstrate the behavior you want your AI to learn",
    maxSelections: 3,
    
    // Quality criteria
    qualityCriteria: [
        "High politeness and empathy",
        "Clear and specific responses", 
        "Appropriate for customer service context"
    ],
    
    // Domain adaptation
    domain: "customer-service", // Options: customer-service, technical-support, educational, healthcare
    
    // Feedback thresholds
    scoreThresholds: {
        excellent: 90,
        good: 70,
        needsImprovement: 50
    }
};
```

## 🚀 Deployment Checklist

- [ ] Copy assets folder from library
- [ ] Customize conversations in `sample-data.js`
- [ ] Update training objectives and criteria
- [ ] Test conversation selection logic
- [ ] Verify feedback calculations
- [ ] Check responsive design
- [ ] Test accessibility features
- [ ] Deploy to GitHub Pages

## 🔍 Troubleshooting

### Common Issues

**Selections not registering**: Check event listeners are attached to conversation cards

**Feedback not calculating**: Verify expert selections are defined in data

**Layout issues on mobile**: Test grid responsiveness and card sizing

**Quality indicators not showing**: Check CSS classes match quality levels in data

### Debug Tips

```javascript
// Add to console to debug
console.log('Selected conversations:', this.selectedConversations);
console.log('Quality score:', dataSelectionUtils.calculateDatasetQuality(this.selectedConversations));
console.log('Expert comparison:', dataSelectionUtils.compareWithExpert(this.selectedConversations));
```