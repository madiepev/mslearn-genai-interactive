# Evaluation Criteria Selection Activity

## 📋 Activity Overview

**Activity Type**: Business-Aligned AI Evaluation Criteria Selection  
**Duration**: 15-20 minutes  
**Difficulty**: Intermediate to Advanced  
**Learning Modality**: Strategic selection with business context analysis

## 🎯 Learning Objectives

By completing this evaluation criteria selection activity, learners will be able to:

1. **Analyze business scenarios** to identify the most relevant AI evaluation metrics
2. **Select appropriate evaluation criteria** from Azure AI Foundry's built-in options
3. **Understand metric relationships** and how different criteria complement each other
4. **Prioritize evaluation dimensions** based on business impact and use case requirements
5. **Design evaluation frameworks** that align with organizational goals

## 📚 Prerequisites

- Understanding of AI evaluation concepts
- Familiarity with business use cases for AI
- Basic knowledge of Azure AI services
- Understanding of quality metrics and measurement

## 🔧 Activity Structure

### Phase 1: Business Scenario Analysis (5 minutes)
- Review business scenario and context
- Understand stakeholder priorities and success metrics
- Identify potential risks and quality requirements

### Phase 2: Criteria Selection (10 minutes)
- Browse available Azure AI Foundry evaluation metrics
- Select up to 3 criteria that best align with business needs
- Consider metric complementarity and coverage

### Phase 3: Validation & Feedback (5 minutes)
- Review selected criteria combination
- Receive expert feedback on alignment with business scenario
- Understand rationale for optimal metric selection

## 📊 Azure AI Foundry Evaluation Metrics

### Content Quality Metrics
- **Coherence**: Logical flow and consistency in responses
- **Fluency**: Natural language quality and readability
- **Relevance**: Appropriateness and topic alignment
- **Groundedness**: Factual accuracy and source-based responses

### Safety & Responsibility Metrics
- **Content Safety**: Detection of harmful or inappropriate content
- **Fairness**: Bias detection and equitable treatment
- **Transparency**: Explainability and reasoning clarity

### Business-Specific Metrics
- **Persuasiveness**: Ability to influence and convince effectively
- **Product Knowledge**: Demonstrates understanding of products/services
- **Lead Qualification**: Identifies and qualifies potential customers
- **Professionalism**: Maintains appropriate business demeanor
- **Objection Handling**: Addresses concerns and overcomes resistance
- **Creating Urgency**: Motivates timely action appropriately

### Interaction Quality Metrics
- **Empathy**: Shows understanding and emotional intelligence
- **Personalization**: Tailors responses to individual users
- **Engagement**: Maintains interest and interactive dialogue
- **Problem Solving**: Effectively resolves issues and provides solutions

## 🎨 Visual Design Requirements

### Scenario Presentation
- Clean business scenario card with context and objectives
- Stakeholder information and success criteria
- Use case details and constraints

### Criteria Selection Interface
- Grid layout of available evaluation metrics
- Visual metric cards with icons, names, and descriptions
- Selection tracking (up to 3 criteria)
- Category grouping for easy browsing

### Selected Criteria Display
- Summary panel showing chosen metrics
- Visual indicators of selection status
- Coverage analysis (what aspects are being measured)

## 📁 Required Assets

### Business Scenarios
- **Sales AI Assistant**: Lead qualification and conversion focus
- **Customer Support AI**: Service quality and problem resolution
- **Educational AI Tutor**: Learning effectiveness and engagement
- **Content Creation AI**: Quality, coherence, and brand alignment
- **Healthcare AI Assistant**: Safety, accuracy, and empathy focus

### Azure AI Foundry Metrics Library
- Complete set of available evaluation criteria
- Detailed descriptions and use case guidance
- Category classifications and relationships

### Expert Recommendations
- Optimal metric combinations for each scenario
- Reasoning for selections
- Common selection mistakes to avoid

## 🔄 Interaction Flow

1. **Present Business Scenario**: Show context, goals, and stakeholder priorities
2. **Display Available Metrics**: Present Azure AI Foundry evaluation criteria library
3. **Guided Selection**: Learner selects up to 3 most relevant criteria
4. **Real-time Feedback**: Show coverage analysis and metric relationships
5. **Expert Comparison**: Compare with expert recommendations and reasoning
6. **Learning Reinforcement**: Explain optimal evaluation framework design

## 📈 Assessment Criteria

### Mastery Indicators
- Appropriate alignment between business needs and selected metrics
- Understanding of metric complementarity and coverage
- Ability to justify selection rationale
- Recognition of scenario-specific evaluation priorities

### Scoring Rubric
- **Excellent (90-100%)**: All selections align with expert recommendations, strong business alignment
- **Good (70-89%)**: Most selections appropriate with minor gaps in strategic thinking
- **Needs Improvement (<70%)**: Significant misalignment between business needs and metric selection

## 🛠️ Technical Implementation

### Required Components
- Business scenario display
- Metric library with search/filter capabilities
- Selection tracking and validation
- Coverage analysis visualization
- Expert comparison and feedback system

### Data Structure
```javascript
{
  scenario: {
    title: "Sales AI Assistant",
    context: "B2B software sales environment",
    objectives: ["Increase lead qualification", "Improve conversion rates"],
    stakeholders: ["Sales team", "Marketing", "Management"],
    successMetrics: ["Qualified leads per week", "Conversion rate improvement"]
  },
  availableMetrics: [
    {
      id: "persuasiveness",
      name: "Persuasiveness",
      category: "Business-Specific",
      description: "Effectively influences without being pushy",
      azureFoundryId: "persuasiveness",
      icon: "🎯"
    }
  ],
  expertSelection: {
    recommended: ["persuasiveness", "product-knowledge", "lead-qualification"],
    reasoning: "Sales scenario requires influence, expertise demonstration, and lead assessment"
  }
}
```

## 📝 Content Templates

See `content-templates/` folder for:
- Business scenario templates
- Metric description formats
- Selection reasoning guides
- Feedback message templates

## 🔗 Integration Guidelines

### HTML Structure
```html
<div class="criteria-selection-activity">
  <div class="scenario-panel"><!-- Business context --></div>
  <div class="metrics-library"><!-- Available criteria --></div>
  <div class="selection-summary"><!-- Chosen metrics --></div>
  <div class="feedback-section"><!-- Expert comparison --></div>
</div>
```

### CSS Classes
- `.metric-card` - Individual evaluation criteria display
- `.metric-selected` - Visual selection state
- `.scenario-context` - Business background information
- `.coverage-analysis` - Selection completeness visualization
- `.expert-feedback` - Comparison and recommendations

### JavaScript Events
- `metricSelected(id, selected)` - Handle criteria selection
- `validateSelection()` - Check selection completeness
- `submitCriteria()` - Process final criteria selection
- `showExpertComparison()` - Display recommendations

## 🎯 Customization Options

### Content Variables
- Business scenarios and contexts
- Available evaluation metrics library
- Expert recommendation mappings
- Feedback messages and explanations

### Difficulty Levels
- **Beginner**: Clear scenario requirements, obvious metric choices
- **Intermediate**: Multiple valid approaches, trade-off considerations
- **Advanced**: Complex scenarios, nuanced metric relationships

### Domain Adaptation
- **Sales & Marketing**: Focus on persuasion, knowledge, lead qualification
- **Customer Support**: Emphasize professionalism, problem-solving, empathy
- **Education**: Prioritize engagement, personalization, knowledge assessment
- **Healthcare**: Stress safety, accuracy, empathy, transparency
- **Content Creation**: Focus on coherence, fluency, brand alignment

## 🔍 Azure AI Foundry Integration

### Supported Evaluation Metrics
Based on Azure AI Foundry's built-in evaluators:

**Content Quality**:
- Coherence
- Fluency
- Relevance
- Groundedness

**Safety & Responsibility**:
- Content Safety
- Fairness
- Transparency

**Business & Sales**:
- Persuasiveness
- Product Knowledge
- Lead Qualification
- Professionalism
- Objection Handling
- Creating Urgency

**Interaction & Service**:
- Empathy
- Personalization
- Engagement
- Problem Solving

### Metric Descriptions
Each metric includes:
- Clear definition and scope
- Business impact explanation
- Use case recommendations
- Complementary metric suggestions

## 📊 Learning Outcomes

### Knowledge Assessment
- Understanding of Azure AI Foundry evaluation capabilities
- Recognition of business-metric alignment principles
- Awareness of evaluation framework design best practices

### Skill Development
- Strategic thinking about AI evaluation
- Business context analysis
- Metric selection and prioritization
- Evaluation framework design

### Application Scenarios
- Real-world AI deployment planning
- Quality assurance framework development
- Stakeholder communication about AI evaluation
- Continuous improvement strategy design