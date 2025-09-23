# AI Configuration Evaluation Activity

## 📋 Activity Overview

**Activity Type**: AI Model Assessment and Configuration Review  
**Duration**: 15-20 minutes  
**Difficulty**: Intermediate  
**Learning Modality**: Interactive evaluation with immediate feedback

## 🎯 Learning Objectives

By completing this activity, learners will be able to:

1. **Analyze AI model configurations** and understand the impact of different parameters
2. **Evaluate AI responses** using systematic quality metrics
3. **Make informed judgments** about AI system performance
4. **Apply evaluation frameworks** to assess conversational AI effectiveness

## 📚 Prerequisites

- Basic understanding of AI/LLM concepts
- Familiarity with conversational AI systems
- Understanding of quality evaluation principles

## 🔧 Activity Structure

### Phase 1: Configuration Analysis (5 minutes)
- Review backend AI model configuration panel
- Examine model parameters (temperature, max tokens, penalties)
- Understand system prompt and constraints

### Phase 2: Response Evaluation (10 minutes)
- Analyze sample conversation between user and AI
- Apply predefined evaluation metrics
- Rate responses using provided criteria

### Phase 3: Assessment & Feedback (5 minutes)
- Submit evaluations
- Receive immediate feedback with explanations
- Review best practices for AI evaluation

## 📊 Evaluation Metrics

### Primary Metrics (Required)
1. **Politeness & Respect** - Professional tone and courtesy
2. **Clarity & Understanding** - Clear, comprehensible responses
3. **Accuracy & Helpfulness** - Correct and useful information
4. **Appropriateness** - Suitable for context and user needs

### Secondary Metrics (Optional)
- Response length appropriateness
- Proactive assistance
- Empathy and emotional intelligence
- Problem-solving effectiveness

## 🎨 Visual Design Requirements

### Configuration Panel
- Dark theme with green accent colors
- Clear parameter labels and values
- Professional developer-style interface
- System prompt displayed in code format

### Chat Interface
- Clean, modern messaging layout
- User messages (blue, right-aligned)
- AI responses (gray, left-aligned)
- Timestamps for context
- Avatar/initial indicators

### Rating Interface
- Visual rating scale (Poor/Good/Excellent)
- Color-coded feedback (red/blue/green)
- Multiple evaluation dimensions
- Clear rating criteria

## 📁 Required Assets

### Sample Configurations
- Customer support AI configuration
- Educational AI tutor configuration
- General assistant configuration

### Sample Conversations
- Customer service scenarios
- Technical support interactions
- Information requests
- Problem-solving dialogues

### Evaluation Rubrics
- Detailed scoring criteria
- Example ratings with explanations
- Common pitfalls and best practices

## 🔄 Interaction Flow

1. **Present Configuration**: Show AI model setup and parameters
2. **Display Conversation**: Present user-AI interaction example
3. **Guided Evaluation**: Learner rates response on multiple dimensions
4. **Immediate Feedback**: Show correct ratings with explanations
5. **Reflection Questions**: Brief follow-up to reinforce learning

## 📈 Assessment Criteria

### Mastery Indicators
- Accurate identification of response quality issues
- Consistent application of evaluation metrics
- Understanding of configuration impact on outputs
- Ability to justify rating decisions

### Scoring Rubric
- **Excellent (90-100%)**: All ratings within 1 point of expert evaluation
- **Good (70-89%)**: Most ratings accurate with minor discrepancies
- **Needs Improvement (<70%)**: Significant gaps in evaluation accuracy

## 🛠️ Technical Implementation

### Required Components
- Configuration display panel
- Chat message interface
- Multi-dimensional rating system
- Real-time feedback mechanism
- Progress tracking

### Data Structure
```javascript
{
  configuration: {
    model: "gpt-4",
    temperature: 0.3,
    maxTokens: 150,
    systemPrompt: "...",
    parameters: {...}
  },
  conversation: [
    {user: "...", ai: "...", timestamp: "..."}
  ],
  evaluationCriteria: [
    {metric: "politeness", scale: [1,2,3], descriptions: [...]}
  ]
}
```

## 📝 Content Templates

See `content-templates/` folder for:
- Configuration examples
- Conversation scripts
- Evaluation rubrics
- Feedback messages

## 🔗 Integration Guidelines

### HTML Structure
```html
<div class="ai-evaluation-activity">
  <div class="configuration-panel"><!-- Config display --></div>
  <div class="chat-interface"><!-- Conversation --></div>
  <div class="evaluation-form"><!-- Rating interface --></div>
  <div class="feedback-section"><!-- Results --></div>
</div>
```

### CSS Classes
- `.configuration-panel` - Dark theme config display
- `.chat-interface` - Messaging layout
- `.rating-scale` - Visual rating controls
- `.feedback-positive/negative` - Color-coded feedback

### JavaScript Events
- `ratingSelected(metric, value)` - Handle rating input
- `submitEvaluation()` - Process complete evaluation
- `showFeedback(results)` - Display assessment results

## 🎯 Customization Options

### Content Variables
- AI model type and parameters
- Conversation scenarios and length
- Evaluation metrics and scales
- Feedback messages and explanations

### Visual Themes
- Color schemes (professional, educational, playful)
- Layout variations (side-by-side, stacked)
- Rating interface styles (stars, buttons, sliders)

### Difficulty Levels
- **Beginner**: Clear quality differences, obvious metrics
- **Intermediate**: Subtle quality variations, multiple dimensions
- **Advanced**: Complex scenarios, nuanced evaluation trade-offs